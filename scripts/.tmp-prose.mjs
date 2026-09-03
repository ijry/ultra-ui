import fs from 'node:fs'
import path from 'node:path'

const SKIP = /^(API|Props?|Events?|Slots?|Methods?|平台差异说明|右侧演示页面源代码地址|演示页面源代码地址)/i
const risky = new Map()
const braces = []
const titles = new Set()

for (const dir of ['uview-plus-doc', 'uview-plus-doc4']) {
  const base = path.join(dir, 'docs/components')
  for (const f of fs.readdirSync(base).filter(x => x.endsWith('.md'))) {
    const lines = fs.readFileSync(path.join(base, f), 'utf8').split(/\r?\n/)
    let inFence = false, cur = null
    for (const line of lines) {
      if (/^\s*```/.test(line)) { inFence = !inFence; continue }
      if (inFence) continue
      if (/^###\s+/.test(line)) {
        cur = line.replace(/^###+\s+/, '').replace(/<Badge[^>]*\/?>/g, '').replace(/<to-api\s*\/>/g, '').trim()
        if (!SKIP.test(cur)) titles.add(cur)
        continue
      }
      if (!cur || SKIP.test(cur)) continue
      // strip inline code spans, then look for bare tags
      const bare = line.replace(/`[^`]*`/g, '')
      for (const m of bare.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9-]*)/g)) {
        risky.set(m[1], (risky.get(m[1]) || 0) + 1)
      }
      if (/\{\{/.test(bare)) braces.push(`${dir}/${f}: ${line.trim().slice(0,90)}`)
    }
  }
}
console.log('BARE TAGS in example-section prose (inline code stripped):')
console.log([...risky.entries()].sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}=${v}`).join(' '))
console.log('\n{{ }} in prose:', braces.length)
braces.slice(0,10).forEach(b=>console.log('  '+b))
console.log('\nDISTINCT example section titles (union doc3+doc4):', titles.size)
fs.writeFileSync('scripts/.tmp-titles.txt', [...titles].sort().join('\n'), 'utf8')
