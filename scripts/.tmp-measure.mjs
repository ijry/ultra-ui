import fs from 'node:fs'
import path from 'node:path'
import { meta } from './lib/meta.mjs'

const SKIP = /^(API|Props?|Events?|Slots?|Methods?|平台差异说明|右侧演示页面源代码地址|演示页面源代码地址)/i
const camel = id => id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

function sections(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const secs = []
  let cur = null, inFence = false
  for (const line of lines) {
    if (/^```/.test(line)) inFence = !inFence
    if (!inFence && /^###\s+/.test(line)) {
      const title = line.replace(/^###\s+/, '').replace(/<Badge[^>]*\/?>/g, '').replace(/<to-api\s*\/>/g, '').trim()
      cur = { title, body: [], fences: 0 }
      secs.push(cur); continue
    }
    if (cur) { cur.body.push(line); if (/^```\w+/.test(line)) cur.fences++ }
  }
  return secs.filter(s => !SKIP.test(s.title) && s.fences > 0)
}

for (const dir of ['uview-plus-doc', 'uview-plus-doc4']) {
  const base = path.join(dir, 'docs/components')
  const avail = fs.readdirSync(base)
  let bytes = 0, count = 0, biggest = [], noHit = []
  for (const c of meta) {
    const cands = [c.id, camel(c.id), ...c.detect, ...c.detect.map(camel)].map(x => x + '.md')
    const f = cands.find(x => avail.includes(x))
    if (!f) { noHit.push(c.id); continue }
    const secs = sections(path.join(base, f))
    const b = secs.reduce((n, s) => n + s.body.join('\n').length + s.title.length, 0)
    bytes += b; count += secs.length
    biggest.push([c.id, secs.length, Math.round(b / 1024 * 10) / 10])
  }
  biggest.sort((a, b) => b[2] - a[2])
  console.log(`${dir}: sections=${count} total=${Math.round(bytes/1024)}KB avg/component=${Math.round(bytes/108/1024*10)/10}KB`)
  console.log('  biggest:', biggest.slice(0, 10).map(x => `${x[0]}(${x[1]}sec,${x[2]}KB)`).join(' '))
  console.log('  zero-section components:', biggest.filter(x=>x[1]===0).map(x=>x[0]).join(', '))
}
