import fs from 'node:fs'
import path from 'node:path'

const MAX_LINES = 26

function walk(dir, exts, out = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue
      walk(full, exts, out)
    } else if (exts.some((x) => e.name.endsWith(x))) {
      out.push(full)
    }
  }
  return out
}

/** Remove the first line's indentation from every line, and expand tabs so
 * mixed-indentation sources still line up in the rendered code block. */
function dedent(block) {
  const lines = block.replace(/\t/g, '    ').split('\n')
  const pad = lines[0].match(/^[ ]*/)[0]
  if (!pad) return lines.join('\n')
  return lines
    .map((l) => (l.startsWith(pad) ? l.slice(pad.length) : l.replace(/^[ ]+/, '')))
    .join('\n')
}

/** `child: UPButton(…)` reads oddly out of context — drop the assignment. */
function unwrap(block) {
  return block.replace(
    /^(?:return\s+|child:\s*|body:\s*|content:\s*|title:\s*|label:\s*)/,
    ''
  )
}

function lineStart(text, index) {
  const nl = text.lastIndexOf('\n', index)
  return nl === -1 ? 0 : nl + 1
}

function tooLong(block) {
  return block.split('\n').length > MAX_LINES
}

/** `UPButton( … )` / `UPToast.show( … )` — balance the parentheses. */
export function extractCall(text, symbol) {
  const re = new RegExp(`\\b${symbol}\\b(?:\\.[A-Za-z_]\\w*)*\\s*\\(`, 'g')

  for (const m of text.matchAll(re)) {
    const open = text.indexOf('(', m.index)
    let depth = 0
    let quote = null

    for (let i = open; i < text.length; i++) {
      const ch = text[i]
      if (quote) {
        if (ch === '\\') i++
        else if (ch === quote) quote = null
        continue
      }
      if (ch === '"' || ch === "'") quote = ch
      else if (ch === '(' || ch === '{' || ch === '[') depth++
      else if (ch === ')' || ch === '}' || ch === ']') {
        depth--
        if (depth === 0) {
          // include a trailing modifier chain / trailing closure line if present
          let end = i + 1
          const rest = text.slice(end, text.indexOf('\n', end) + 1 || undefined)
          if (/^\s*\{/.test(rest)) continue
          const block = dedent(text.slice(lineStart(text, m.index), end))
          if (!tooLong(block)) return block
          break
        }
      }
    }
  }
  return null
}

/** `<up-button …>…</up-button>` or `<UPButton … />`. */
export function extractTag(text, tag) {
  const re = new RegExp(`<${tag}(?=[\\s/>])`, 'g')

  for (const m of text.matchAll(re)) {
    const from = lineStart(text, m.index)

    // self-closing?
    const gt = text.indexOf('>', m.index)
    if (gt === -1) continue
    const openTag = text.slice(m.index, gt + 1)
    if (openTag.trimEnd().endsWith('/>')) {
      const block = dedent(text.slice(from, gt + 1))
      if (!tooLong(block)) return block
      continue
    }

    const close = text.indexOf(`</${tag}>`, gt)
    if (close === -1) continue
    const block = dedent(text.slice(from, close + tag.length + 3))
    if (!tooLong(block)) return block
  }
  return null
}

/**
 * Lift a real usage example out of a platform's own demo app.
 *
 * Files whose name looks like the component are tried first, so `ButtonDemo.ets`
 * wins over a stray `UPButton` mention inside the home page.
 */
export function findSnippet({ root, platform, componentId, detect, symbol, tag }) {
  const demoRoot = path.join(root, platform.dir, platform.demoDir)
  const files = walk(demoRoot, platform.demoExts)
  if (files.length === 0) return null

  const keys = [componentId, ...detect].map((d) => d.replace(/[-_]/g, ''))
  const score = (file) => {
    const base = path.basename(file).toLowerCase().replace(/[-_.]/g, '')
    const dir = path.dirname(file).toLowerCase().replace(/[-_.\\/]/g, '')
    let s = 0
    for (const k of keys) {
      if (base.startsWith(k)) s += 100
      else if (base.includes(k)) s += 40
      if (dir.endsWith(k)) s += 30
    }
    return s
  }

  const ordered = files
    .map((f) => ({ f, s: score(f) }))
    .sort((a, b) => b.s - a.s)
    .map((x) => x.f)

  for (const file of ordered.slice(0, 40)) {
    const text = fs.readFileSync(file, 'utf8')
    const block =
      platform.syntax === 'tag'
        ? extractTag(text, tag) ?? (symbol ? extractTag(text, symbol) : null)
        : extractCall(text, symbol)
    if (block) {
      return {
        code: unwrap(block).trimEnd(),
        file: path.relative(path.join(root, platform.dir), file)
      }
    }
  }
  return null
}
