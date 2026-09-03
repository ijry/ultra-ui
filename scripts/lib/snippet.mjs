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
 * 根据平台语法提取多个示例段落。
 * 每个段落包含标题和代码示例。
 */
function extractSections(text, platformId, symbol, tag) {
  const sections = []

  // iOS: sectionTitle("标题")
  if (platformId === 'ios') {
    const titleRe = /sectionTitle\("([^"]+)"\)/g
    const matches = [...text.matchAll(titleRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const title = titleMatch[1]
      const start = titleMatch.index + titleMatch[0].length
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      const block = extractCall(sectionText, symbol)
      if (block && !tooLong(block)) {
        sections.push({ title, code: unwrap(block).trimEnd() })
      }
    }
  }

  // HarmonyOS: Text('标题').fontSize(18) 作为分段标题
  else if (platformId === 'harmony') {
    const titleRe = /Text\s*\(\s*['"]([^'"]+)['"]\s*\)\s*\.fontSize\s*\(\s*18\s*\)/g
    const matches = [...text.matchAll(titleRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const title = titleMatch[1]
      const start = titleMatch.index + titleMatch[0].length
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      const block = extractCall(sectionText, symbol)
      if (block && !tooLong(block)) {
        sections.push({ title, code: unwrap(block).trimEnd() })
      }
    }
  }

  // Flutter: _ButtonBlock(title: "标题")
  else if (platformId === 'flutter') {
    const titleRe = /_\w+Block\s*\(\s*title:\s*["']([^"']+)["']/g
    const matches = [...text.matchAll(titleRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const title = titleMatch[1]
      const start = titleMatch.index
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      const block = extractCall(sectionText, symbol)
      if (block && !tooLong(block)) {
        sections.push({ title, code: unwrap(block).trimEnd() })
      }
    }
  }

  // Taro: <DemoSection title="标题" desc="说明">
  else if (platformId === 'taro') {
    const titleRe = /<DemoSection\s+title=["']([^"']+)["'](?:\s+desc=["']([^"']+)["'])?\s*>/g
    const matches = [...text.matchAll(titleRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const title = titleMatch[1]
      const desc = titleMatch[2] || ''
      const closeTag = text.indexOf('</DemoSection>', titleMatch.index)
      if (closeTag === -1) continue

      const sectionText = text.slice(titleMatch.index, closeTag)
      const block = extractTag(sectionText, tag) ?? (symbol ? extractTag(sectionText, symbol) : null)
      if (block && !tooLong(block)) {
        sections.push({ title, desc, code: unwrap(block).trimEnd() })
      }
    }
  }

  // uni-app / uni-app-x: <view class="u-demo-block__title"><text>标题</text></view>
  else if (platformId === 'uniapp' || platformId === 'uniappx') {
    const titleRe = /<view\s+class=["']u-demo-block__title["']\s*>\s*<text[^>]*>([^<]+)<\/text>\s*<\/view>/g
    const matches = [...text.matchAll(titleRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const title = titleMatch[1].trim()
      const start = titleMatch.index + titleMatch[0].length
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      const block = extractTag(sectionText, tag)
      if (block && !tooLong(block)) {
        sections.push({ title, code: unwrap(block).trimEnd() })
      }
    }
  }

  // Android: DemoSection(title = "标题") { ... }
  // 一个文件包含多个组件，需要找到特定组件的所有出现位置
  else if (platformId === 'android' && symbol) {
    const sectionRe = /DemoSection\s*\(\s*title\s*=\s*["']([^"']+)["']\s*\)\s*\{/g
    const matches = [...text.matchAll(sectionRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const sectionTitle = titleMatch[1]
      const start = titleMatch.index + titleMatch[0].length
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      // 检查这个 section 中是否包含目标组件
      if (sectionText.includes(symbol)) {
        const block = extractCall(sectionText, symbol)
        if (block && !tooLong(block)) {
          sections.push({ title: sectionTitle, code: unwrap(block).trimEnd() })
        }
      }
    }
  }

  // React Native: <Section title="标题">
  else if (platformId === 'reactnative' && tag) {
    const sectionRe = /<Section\s+title=["']([^"']+)["']/g
    const matches = [...text.matchAll(sectionRe)]

    for (let i = 0; i < matches.length; i++) {
      const titleMatch = matches[i]
      const sectionTitle = titleMatch[1].trim()
      const start = titleMatch.index + titleMatch[0].length
      const end = i < matches.length - 1 ? matches[i + 1].index : text.length

      const sectionText = text.slice(start, end)
      const block = extractTag(sectionText, tag)
      if (block && !tooLong(block)) {
        sections.push({ title: sectionTitle, code: unwrap(block).trimEnd() })
      }
    }
  }

  return sections
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

    // 尝试提取多个段落
    const sections = extractSections(text, platform.id, symbol, tag)
    if (sections.length > 0) {
      return {
        sections,
        file: path.relative(path.join(root, platform.dir), file)
      }
    }

    // 回退到单个示例提取
    const block =
      platform.syntax === 'tag'
        ? extractTag(text, tag) ?? (symbol ? extractTag(text, symbol) : null)
        : extractCall(text, symbol)
    if (block) {
      return {
        sections: [{ title: '', code: unwrap(block).trimEnd() }],
        file: path.relative(path.join(root, platform.dir), file)
      }
    }
  }
  return null
}
