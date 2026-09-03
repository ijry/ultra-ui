import fs from 'node:fs'
import path from 'node:path'
for (const dir of ['uview-plus-doc', 'uview-plus-doc4']) {
  const base = path.join(dir, 'docs/components')
  const odd = []
  for (const f of fs.readdirSync(base).filter(x => x.endsWith('.md'))) {
    const text = fs.readFileSync(path.join(base, f), 'utf8')
    const n = (text.match(/^\s*```/gm) || []).length
    if (n % 2) odd.push(`${f}(${n})`)
  }
  console.log(`${dir} files with ODD fence count:`, odd.length ? odd.join(' ') : 'none')
}
