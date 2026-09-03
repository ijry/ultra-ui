import fs from 'node:fs'
import path from 'node:path'

/** A single extracted block never grows past this many lines. */
const MAX_LINES = 26
/** Retry cap: components like Popup only ever appear wrapping a long body. */
const LOOSE_LINES = 64
/** How many examples one platform tab may show. */
const MAX_EXAMPLES = 8

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

function tooLong(block, limit) {
  return block.split('\n').length > limit
}

/** Every balanced `UPButton( … )` / `UPToast.show( … )` call, in source order. */
export function* eachCall(text, symbol, limit = MAX_LINES) {
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
          // keep scanning when a trailing modifier chain or closure follows, so
          // `UPButton(…) .onTap { … }` comes out in one piece
          const end = i + 1
          const rest = text.slice(end, text.indexOf('\n', end) + 1 || undefined)
          if (/^\s*\{/.test(rest)) continue
          const block = dedent(text.slice(lineStart(text, m.index), end))
          if (!tooLong(block, limit)) yield unwrap(block).trimEnd()
          break
        }
      }
    }
  }
}

/** Every `<up-button …>…</up-button>` / `<UPButton … />`, in source order. */
export function* eachTag(text, tag, limit = MAX_LINES) {
  const re = new RegExp(`<${tag}(?=[\\s/>])`, 'g')

  for (const m of text.matchAll(re)) {
    const from = lineStart(text, m.index)
    const gt = text.indexOf('>', m.index)
    if (gt === -1) continue

    if (text.slice(m.index, gt + 1).trimEnd().endsWith('/>')) {
      const block = dedent(text.slice(from, gt + 1))
      if (!tooLong(block, limit)) yield unwrap(block).trimEnd()
      continue
    }

    const close = text.indexOf(`</${tag}>`, gt)
    if (close === -1) continue
    const block = dedent(text.slice(from, close + tag.length + 3))
    if (!tooLong(block, limit)) yield unwrap(block).trimEnd()
  }
}

export const extractCall = (text, symbol) => eachCall(text, symbol).next().value ?? null
export const extractTag = (text, tag) => eachTag(text, tag).next().value ?? null

/**
 * How each demo app labels a group of examples. Capture group 1 is the label —
 * except for Taro and React Native, where it is the whole attribute list,
 * because those props are written in any order.
 */
const SECTION_RE = {
  // sectionTitle("主题类型")
  ios: /sectionTitle\(\s*["']([^"'\n]{1,30})["']\s*\)/g,
  // Text('基础类型').fontSize(16).fontWeight(FontWeight.Bold)
  harmony:
    /Text\(\s*["']([^"'\n]{1,30})["']\s*\)\s*(?:\.\w+\([^()]*\)\s*)*?\.fontWeight\(\s*FontWeight\.Bold\s*\)/g,
  // ExampleDemoBlock(title: '按钮类型', …) and per-page _ButtonBlock(title: …)
  flutter:
    /(?:ExampleDemoBlock|_[A-Za-z]*Block)\s*\([\s\S]{0,40}?title:\s*["']([^"'\n]{1,30})["']/g,
  // <DemoSection title='主题' desc='type 属性' inline>
  taro: /<DemoSection\b([^>]*)>/g,
  // <Section title="按钮类型" direction="row">
  reactnative: /<Section\b([^>]*)>/g,
  // <view class="u-demo-block__title"><text class="text">按钮类型</text></view>
  uniapp: /class="u-demo-block__title"[\s\S]{0,160}?>\s*([^<>\s][^<>]{0,28})\s*</g,
  uniappx: /class="u-demo-block__title"[\s\S]{0,160}?>\s*([^<>\s][^<>]{0,28})\s*</g
}

/** Platforms whose section marker is a JSX tag, so props need parsing. */
const JSX_SECTIONS = new Set(['taro', 'reactnative'])

/** Read one prop out of a captured attribute list. */
function attr(attrs, name) {
  const m = attrs.match(
    new RegExp(`\\b${name}\\s*=\\s*\\{?\\s*(['"\`])([\\s\\S]*?)\\1`)
  )
  return m ? m[2].replace(/\s+/g, ' ').trim() : ''
}

/** Split a demo file into labelled regions, in source order. */
function labelledRegions(text, platformId) {
  const re = SECTION_RE[platformId]
  if (!re) return []

  const hits = [...text.matchAll(new RegExp(re.source, re.flags))]
  return hits
    .map((m, i) => {
      const jsx = JSX_SECTIONS.has(platformId)
      return {
        title: jsx ? attr(m[1], 'title') : (m[1] ?? '').trim(),
        desc: jsx ? attr(m[1], 'desc') : '',
        from: m.index,
        to: i + 1 < hits.length ? hits[i + 1].index : text.length
      }
    })
    .filter((r) => r.title)
}

/** The component's first appearance inside `slice`, whichever syntax fits. */
function firstUse(slice, platform, symbol, tag, limit) {
  if (platform.syntax === 'tag') {
    return (
      eachTag(slice, tag, limit).next().value ??
      (symbol ? eachTag(slice, symbol, limit).next().value : undefined) ??
      null
    )
  }
  return eachCall(slice, symbol, limit).next().value ?? null
}

/** Every appearance, deduplicated, for demos not organised by usage variant. */
function eachUse(text, platform, symbol, tag, limit) {
  if (platform.syntax !== 'tag') return eachCall(text, symbol, limit)
  const byTag = [...eachTag(text, tag, limit)]
  return byTag.length || !symbol ? byTag : eachTag(text, symbol, limit)
}

/** One example per labelled region that actually uses the component. */
function titledExamples(text, platform, symbol, tag, limit) {
  const out = []
  for (const region of labelledRegions(text, platform.id)) {
    const code = firstUse(text.slice(region.from, region.to), platform, symbol, tag, limit)
    if (code) out.push({ title: region.title, desc: region.desc, code })
    if (out.length >= MAX_EXAMPLES) break
  }
  return out
}

/** Distinct untitled examples — the fallback when a demo has no sections. */
function distinctExamples(text, platform, symbol, tag, limit) {
  const seen = new Set()
  const out = []
  for (const code of eachUse(text, platform, symbol, tag, limit)) {
    const key = code.replace(/\s+/g, ' ')
    if (seen.has(key)) continue
    seen.add(key)
    out.push({ title: '', desc: '', code })
    if (out.length >= MAX_EXAMPLES) break
  }
  return out
}

/**
 * Lift real usage examples out of a platform's own demo app.
 *
 * Files whose name looks like the component are tried first, so `ButtonDemo.ets`
 * wins over a stray `UPButton` mention inside the home page. Demos organised by
 * usage variant ("镂空按钮", "加载中") yield one labelled example per variant;
 * the rest fall back to a handful of distinct, unlabelled usages.
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
    .slice(0, 40)

  const scan = (limit) => {
    for (const file of ordered) {
      const text = fs.readFileSync(file, 'utf8')

      // Labels are worth keeping, but a single labelled hit says less than
      // several distinct usages — that happens on the grouped Android and
      // React Native pages, where the label is just the component's own name.
      let examples = titledExamples(text, platform, symbol, tag, limit)
      if (examples.length < 2) {
        const distinct = distinctExamples(text, platform, symbol, tag, limit)
        if (distinct.length > examples.length) examples = distinct
      }

      if (examples.length) {
        return {
          sections: examples,
          file: path.relative(path.join(root, platform.dir), file)
        }
      }
    }
    return null
  }

  // Popup, Form and friends only ever wrap a long body, so nothing survives the
  // tight line cap — widen it rather than leave the tab empty.
  return scan(MAX_LINES) ?? scan(LOOSE_LINES)
}
