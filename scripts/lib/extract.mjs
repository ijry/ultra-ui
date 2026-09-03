import fs from 'node:fs'
import path from 'node:path'

/** Files in a component folder that are never the "default prop values" file. */
const NOT_DEFAULTS = /^(props|util|utils|icons|dayjs|index|content-normalizer)/i

/* ------------------------------------------------------------------ *
 * default-values file:  export default { badge: { isDot: false, … } }
 * ------------------------------------------------------------------ */

/** Split an object body on top-level commas, honouring nesting and strings. */
function splitTopLevel(body) {
  const parts = []
  let depth = 0
  let quote = null
  let start = 0

  for (let i = 0; i < body.length; i++) {
    const ch = body[i]
    if (quote) {
      if (ch === '\\') i++
      else if (ch === quote) quote = null
      continue
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch
    else if ('{[('.includes(ch)) depth++
    else if ('}])'.includes(ch)) depth--
    else if (ch === ',' && depth === 0) {
      parts.push(body.slice(start, i))
      start = i + 1
    }
  }
  parts.push(body.slice(start))
  return parts.map((p) => p.trim()).filter(Boolean)
}

/** Body of the first `{ … }` that follows `from`, without the braces. */
function braceBody(text, from) {
  const open = text.indexOf('{', from)
  if (open === -1) return null
  let depth = 0
  let quote = null
  for (let i = open; i < text.length; i++) {
    const ch = text[i]
    if (quote) {
      if (ch === '\\') i++
      else if (ch === quote) quote = null
      continue
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch
    else if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) return text.slice(open + 1, i)
    }
  }
  return null
}

/** Strip comments so they never confuse the value parser. */
function stripComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
}

export function readDefaults(componentDir) {
  let file
  try {
    file = fs
      .readdirSync(componentDir)
      .find((f) => f.endsWith('.js') && !NOT_DEFAULTS.test(f))
  } catch {
    return {}
  }
  if (!file) return {}

  const raw = stripComments(fs.readFileSync(path.join(componentDir, file), 'utf8'))
  const outer = braceBody(raw, raw.indexOf('export default'))
  if (!outer) return {}

  // The outer object has exactly one key — the component name.
  const inner = braceBody(outer, 0)
  if (!inner) return {}

  const out = {}
  for (const part of splitTopLevel(inner)) {
    const colon = part.indexOf(':')
    if (colon === -1) continue
    const key = part.slice(0, colon).trim().replace(/^['"]|['"]$/g, '')
    out[key] = part.slice(colon + 1).trim()
  }
  return out
}

/* ------------------------------------------------------------------ *
 * props.js  ->  [{ name, type, default, desc }]
 * ------------------------------------------------------------------ */

/** `[String, Number]` -> `String / Number`; `String` -> `String`.
 * A slash rather than a pipe: the result is rendered inside a markdown code
 * span, where an escaped `&#124;` would show up literally. */
function normaliseType(raw) {
  const t = raw.trim().replace(/,$/, '')
  if (t.startsWith('[')) {
    return t
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .join(' / ')
  }
  return t
}

/** Turn a raw JS literal into something readable in a table cell. */
function prettyDefault(raw) {
  if (raw === undefined || raw === null) return '—'
  let v = String(raw).trim().replace(/,$/, '')
  if (v === '') return '—'
  if (v === "''" || v === '""' || v === '``') return "''"
  if (/^\[\s*\]$/.test(v)) return '[]'
  if (/^\{\s*\}$/.test(v)) return '{}'
  // collapse multi-line literals onto one line
  v = v.replace(/\s*\n\s*/g, ' ')
  if (v.length > 48) v = v.slice(0, 45) + '…'
  return v
}

export function readProps(componentDir) {
  const file = path.join(componentDir, 'props.js')
  const defaults = readDefaults(componentDir)
  if (!fs.existsSync(file)) return []

  const text = fs.readFileSync(file, 'utf8')
  const at = text.search(/\bprops\s*:\s*\{/)
  if (at === -1) return []
  const body = braceBody(text, at)
  if (!body) return []
  return scanPropBlocks(body.split(/\r?\n/), defaults)
}

/**
 * Shared line scanner. Works on both `props.js` (a defineMixin call) and the
 * `props: { … }` block declared inline inside an SFC, because the shape of an
 * individual prop declaration is identical in both.
 */
function scanPropBlocks(lines, defaults) {
  const props = []
  let comment = []
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()

    // gather the `// …` lines that precede a prop declaration
    const c = trimmed.match(/^\/\/\s?(.*)$/)
    if (c) {
      // uni-app conditional-compilation markers are not documentation
      const text = c[1].replace(/#(?:ifdef|ifndef|endif)\b[^\n]*/g, '').trim()
      if (!current && text) comment.push(text)
      continue
    }

    if (!current) {
      const open = line.match(/^\s*([A-Za-z_$][\w$]*)\s*:\s*\{\s*$/)
      if (open) {
        current = {
          name: open[1],
          type: '',
          desc: comment.join(' ').trim(),
          indent: line.match(/^\s*/)[0].length
        }
        comment = []
      } else if (trimmed && !trimmed.startsWith('*')) {
        comment = []
      }
      continue
    }

    const type = trimmed.match(/^type\s*:\s*(.+?),?\s*$/)
    if (type) {
      current.type = normaliseType(type[1])
      continue
    }

    if (/^\}/.test(trimmed) && line.match(/^\s*/)[0].length <= current.indent) {
      props.push({
        name: current.name,
        type: current.type || '—',
        default: prettyDefault(defaults[current.name]),
        desc: current.desc || ''
      })
      current = null
    }
  }

  return props
}

/* ------------------------------------------------------------------ *
 * SFC:  events, slots, and inline-declared props
 * ------------------------------------------------------------------ */

/** Emitted event names, from `emits: [...]`, `defineEmits([...])` and `$emit()`. */
export function readEvents(sfcFile) {
  if (!sfcFile || !fs.existsSync(sfcFile)) return []
  const text = fs.readFileSync(sfcFile, 'utf8')
  const found = new Set()

  for (const re of [
    /emits\s*:\s*\[([^\]]*)\]/g,
    /defineEmits\s*(?:<[^>]*>)?\s*\(\s*\[([^\]]*)\]/g
  ]) {
    for (const m of text.matchAll(re)) {
      for (const raw of m[1].split(',')) {
        const name = raw.trim().replace(/^['"`]|['"`]$/g, '')
        if (name) found.add(name)
      }
    }
  }

  for (const m of text.matchAll(/\$emit\(\s*['"`]([\w:.-]+)['"`]/g)) {
    found.add(m[1])
  }
  for (const m of text.matchAll(/\bemit\(\s*['"`]([\w:.-]+)['"`]/g)) {
    found.add(m[1])
  }

  // update:modelValue is plumbing, not a documented event
  found.delete('update:modelValue')
  return [...found].sort()
}

/** Slot names; a bare `<slot>` is reported as `default`. */
export function readSlots(sfcFile) {
  if (!sfcFile || !fs.existsSync(sfcFile)) return []
  const text = fs.readFileSync(sfcFile, 'utf8')
  const found = new Set()

  for (const m of text.matchAll(/<slot\b([^>]*)>/g)) {
    const name = m[1].match(/name\s*=\s*["']([\w-]+)["']/)
    found.add(name ? name[1] : 'default')
  }
  return [...found].sort()
}

/** Props declared inline in an SFC, for the components without a props.js. */
export function readInlineProps(sfcFile, componentDir) {
  if (!sfcFile || !fs.existsSync(sfcFile)) return []
  const text = fs.readFileSync(sfcFile, 'utf8')
  const at = text.search(/\bprops\s*:\s*\{/)
  if (at === -1) return []
  const body = braceBody(text, at)
  if (!body) return []
  return scanPropBlocks(body.split(/\r?\n/), readDefaults(componentDir))
}

/**
 * Everything we can learn about one upstream component folder.
 * `dir` is the absolute path of e.g. `…/components/u-button`.
 */
export function readComponentApi(dir, sfcName) {
  const sfc = path.join(dir, `${sfcName}.vue`)
  const sfcFile = fs.existsSync(sfc) ? sfc : null

  let props = readProps(dir)
  if (props.length === 0) props = readInlineProps(sfcFile, dir)

  return {
    props,
    events: readEvents(sfcFile),
    slots: readSlots(sfcFile),
    hasSfc: Boolean(sfcFile)
  }
}
