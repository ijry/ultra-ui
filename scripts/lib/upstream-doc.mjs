/**
 * Reads the worked examples that the upstream uview-plus documentation
 * publishes for one component: the heading, the prose introducing it, and the
 * code itself.
 *
 * Two upstream conventions matter. Every script sample is written twice, once
 * inside `<div class="composition-api">` and once inside
 * `<div class="options-api">` — the site toggles between them, so only the
 * Composition API copy is kept here. And the reference tables at the foot of
 * each page duplicate what the generator already extracts straight from
 * `props.js`, so those sections are dropped.
 */

import fs from 'node:fs'
import path from 'node:path'

/** How many examples one component page may carry per locale. */
const MAX_EXAMPLES = 8

/** Sections that are reference material, not worked examples. */
const NOT_AN_EXAMPLE =
  /^(API|Props?|Events?|Slots?|Methods?|平台差异说明|右侧演示页面源代码地址|演示页面源代码地址|各家小程序开放能力的对接)/i

/** Upstream file names that do not follow from the component id. */
const ALIAS = {
  loadmore: 'loadMore',
  'safe-bottom': 'safeAreaInset'
}

/** Tags that may stay as HTML in prose; anything else is shown as text. */
const HTML_OK = new Set([
  'a', 'b', 'badge', 'br', 'code', 'details', 'div', 'em', 'h3', 'h4', 'h5',
  'i', 'img', 'li', 'ol', 'p', 'small', 'span', 'strong', 'summary', 'table',
  'tbody', 'td', 'th', 'thead', 'tr', 'ul'
])

const camel = (id) => id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

/** The upstream page for this component, or null when it has none. */
function docFile(dir, component) {
  const names = [component.id, ...component.detect]
  const candidates = [
    ALIAS[component.id],
    ...names,
    ...names.map(camel)
  ].filter(Boolean)

  for (const name of candidates) {
    const file = path.join(dir, `${name}.md`)
    if (fs.existsSync(file)) return file
  }
  return null
}

/**
 * Drop HTML comments that sit outside code fences.
 *
 * Upstream comments out whole sections — `table.md` hides one behind a comment
 * that opens before a `###` heading and closes on a fence line, so the markers
 * have to go before anything else looks at the text. Comments *inside* a fence
 * are left alone: `<!-- #ifdef APP -->` is real uni-app conditional compilation.
 */
function stripComments(text) {
  const out = []
  let fence = null
  let inComment = false

  for (const line of text.split(/\r?\n/)) {
    if (inComment) {
      const close = line.indexOf('-->')
      if (close === -1) continue
      inComment = false
      const rest = line.slice(close + 3)
      if (rest.trim()) out.push(rest)
      continue
    }

    if (fence !== null) {
      out.push(line)
      if (new RegExp(`^\\s*${fence}\\s*$`).test(line)) fence = null
      continue
    }

    const balanced = line.replace(/<!--[\s\S]*?-->/g, '')
    const open = balanced.indexOf('<!--')
    if (open !== -1) {
      inComment = true
      const head = balanced.slice(0, open)
      if (head.trim()) out.push(head)
      continue
    }

    const fenceOpen = balanced.match(/^\s*(`{3,})/)
    if (fenceOpen) fence = fenceOpen[1]
    out.push(balanced)
  }

  return out.join('\n')
}

/**
 * Prose lifted from upstream lands inside a Vue template, so a bare `<view>` or
 * `{{ item }}` would be compiled instead of shown. Inline code spans are left
 * alone — markdown-it escapes those itself, and touching them would leak the
 * entities into the rendered `<code>`.
 */
function safeProse(line) {
  return line
    .split(/(`[^`\n]*`)/g)
    .map((part, i) =>
      i % 2 === 1
        ? part
        : part
            .replace(/\{\{/g, '&#123;&#123;')
            .replace(/<!--/g, '&lt;!--')
            .replace(/-->/g, '--&gt;')
            // `/guide/root`, `#props` and friends are pages on the upstream doc
            // site, not here. Keep the label, drop the target — a dead link
            // fails the build, and guessing the upstream URL would rot silently.
            .replace(/!?\[([^\]]*)\]\((?!https?:)[^)]*\)/g, '$1')
            .replace(/<(\/?)([A-Za-z][\w-]*)/g, (whole, slash, name) =>
              HTML_OK.has(name.toLowerCase()) ? whole : `&lt;${slash}${name}`
            )
    )
    .join('')
}

/** Shiki language for one fence, preferring what the code actually is. */
function fenceLang(info, code) {
  if (/^\s*<(?:template|script|style)\b/m.test(code)) return 'vue'
  const lang = String(info || '').trim().toLowerCase()
  return (
    { html: 'vue', up: 'vue', style: 'css', javascript: 'js', text: 'txt' }[lang] ??
    (lang || 'vue')
  )
}

/**
 * Split a page into `###`/`####` sections. Fences are tracked properly — a few
 * upstream pages carry a stray closing fence, and a naive toggle would treat
 * every heading after it as code.
 */
function sections(text) {
  const out = []
  let current = null
  let fence = null

  for (const line of text.split(/\r?\n/)) {
    const open = line.match(/^\s*(`{3,})(.*)$/)
    if (fence === null && open) {
      fence = open[1]
      current?.lines.push(line)
      continue
    }
    if (fence !== null) {
      current?.lines.push(line)
      if (new RegExp(`^\\s*${fence}\\s*$`).test(line)) fence = null
      continue
    }

    const heading = line.match(/^(#{3,4})\s+(.+?)\s*$/)
    if (heading) {
      const title = heading[2]
        .replace(/<Badge[^>]*\/?>/g, '')
        .replace(/<to-api\s*\/?>/g, '')
        .trim()
      current = { title, lines: [] }
      out.push(current)
      continue
    }
    current?.lines.push(line)
  }

  return out
}

/**
 * Turn one section's raw lines into ordered chunks — prose then code, in the
 * order upstream wrote them. The Options API copy of every script is skipped.
 */
function chunksOf(lines) {
  const chunks = []
  let fence = null
  let code = null
  let prose = []
  let skipDepth = 0

  const flushProse = () => {
    const body = prose.join('\n').trim()
    if (body) chunks.push({ type: 'prose', body: body.split('\n').map(safeProse).join('\n') })
    prose = []
  }

  for (const line of lines) {
    const open = line.match(/^\s*(`{3,})(.*)$/)

    if (fence === null && open) {
      flushProse()
      fence = open[1]
      code = { info: open[2], lines: [] }
      continue
    }
    if (fence !== null) {
      if (new RegExp(`^\\s*${fence}\\s*$`).test(line)) {
        fence = null
        const body = code.lines.join('\n').trimEnd()
        if (body.trim() && skipDepth === 0) {
          chunks.push({ type: 'code', lang: fenceLang(code.info, body), body })
        }
        code = null
      } else {
        code.lines.push(line)
      }
      continue
    }

    // the Options API twin of the block above it — drop the whole div
    if (/^\s*<div\s+class="options-api"/.test(line)) {
      flushProse()
      skipDepth = 1
      continue
    }
    if (skipDepth > 0) {
      if (/^\s*<div\b/.test(line)) skipDepth++
      else if (/^\s*<\/div>/.test(line)) skipDepth--
      continue
    }

    // wrappers and site-only widgets that mean nothing here
    if (/^\s*<div\s+class="composition-api"/.test(line)) continue
    if (/^\s*<\/div>\s*$/.test(line)) continue
    if (/^\s*<(?:demo-model|to-api|script|style)\b/.test(line)) continue

    prose.push(line)
  }

  flushProse()
  return chunks
}

/**
 * The examples upstream publishes for one component.
 *
 * Returns `null` when that project documents no such component, which is the
 * signal for the caller to fall back to the platform's own demo app.
 */
export function readUpstreamExamples(root, docDir, component) {
  const dir = path.join(root, docDir, 'docs', 'components')
  const file = docFile(dir, component)
  if (!file) return null

  const examples = []
  for (const section of sections(stripComments(fs.readFileSync(file, 'utf8')))) {
    if (!section.title || NOT_AN_EXAMPLE.test(section.title)) continue
    const chunks = chunksOf(section.lines)
    if (!chunks.some((c) => c.type === 'code')) continue
    examples.push({ title: section.title, chunks })
    if (examples.length >= MAX_EXAMPLES) break
  }

  if (examples.length === 0) return null
  return { file: path.relative(path.join(root, docDir), file).replace(/\\/g, '/'), examples }
}
