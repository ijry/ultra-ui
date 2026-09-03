#!/usr/bin/env node
/**
 * Regenerates the component registry and one markdown page per component per
 * locale, by reading the eight sibling source repos.
 *
 * Everything it writes is derived from real source: the platform support matrix
 * comes from symbol/folder scans, the API tables from uview-plus `props.js` and
 * SFCs, and each usage snippet is lifted verbatim out of that platform's own
 * demo app.
 *
 * Pages carrying `generated: true` in their frontmatter are rewritten; any page
 * without that flag is treated as hand-authored and left alone.
 *
 *   node scripts/gen-components.mjs [--dry-run]
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { platforms } from '../docs/.vitepress/data/platforms.ts'
import { meta } from './lib/meta.mjs'
import { scanAll, norm, pascal } from './lib/scan.mjs'
import { readComponentApi } from './lib/extract.mjs'
import { findSnippet } from './lib/snippet.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS = path.join(ROOT, 'docs')
const DRY = process.argv.includes('--dry-run')

/** Platforms that name a thing differently from the upstream folder. */
const ALIASES = {
  toast: ['toasthost', 'toastcontroller'],
  layout: ['row', 'col'],
  keyboard: ['numberkeyboard', 'carkeyboard'],
  'notice-bar': ['rownotice', 'columnnotice'],
  table: ['table2'],
  'virtual-list': ['refreshvirtuallist']
}

const UPSTREAM = path.join(
  ROOT,
  'uview-plus',
  'src/uni_modules/uview-plus/components'
)

const t = {
  zh: {
    usage: '平台用法',
    usageLede:
      '切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。',
    api: 'API',
    apiLede:
      '接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。',
    props: '属性',
    events: '事件',
    slots: '插槽',
    prop: '属性',
    desc: '说明',
    type: '类型',
    def: '默认值',
    event: '事件名',
    slot: '插槽名',
    sources: '各平台源码',
    platform: '平台',
    symbol: '组件 / 类型',
    file: '源码位置',
    from: '示例来源',
    easycom: '配置 easycom 规则后自动引入，无需手动 import。',
    noApi:
      '该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。',
    noneYet: '暂无自动提取到的示例代码，请参考源码。'
  },
  en: {
    usage: 'Usage by platform',
    usageLede:
      'Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.',
    api: 'API',
    apiLede:
      'The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.',
    props: 'Props',
    events: 'Events',
    slots: 'Slots',
    prop: 'Prop',
    desc: 'Description',
    type: 'Type',
    def: 'Default',
    event: 'Event',
    slot: 'Slot',
    sources: 'Source on each platform',
    platform: 'Platform',
    symbol: 'Component / type',
    file: 'Source file',
    from: 'Snippet from',
    easycom: 'Auto-imported through easycom — no import statement needed.',
    noApi:
      'This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.',
    noneYet: 'No snippet could be extracted automatically — please read the source.'
  }
}

/* ------------------------------------------------------------------ *
 * per-platform surface: what a developer types
 * ------------------------------------------------------------------ */

/** The tag or symbol used in markup / code for this platform. */
function surfaceFor(platform, component, hit) {
  const fallback = `UP${pascal(component.id)}`
  switch (platform.id) {
    case 'uniapp':
    case 'uniappx':
      return { tag: `up-${component.detect[0]}`, symbol: hit?.symbol ?? `u-${component.id}` }
    case 'taro':
    case 'reactnative': {
      const sym = hit?.symbol?.startsWith('UP') ? hit.symbol : fallback
      return { tag: sym, symbol: sym }
    }
    default: {
      const sym = hit?.symbol?.startsWith('UP') ? hit.symbol : fallback
      return { tag: sym, symbol: sym }
    }
  }
}

/** Import lines to show above the snippet, or null when none are needed. */
function importLines(platformId, symbol, code) {
  switch (platformId) {
    case 'ios':
      return ['import SwiftUI', 'import UltraUI']
    case 'android': {
      const base = 'net.lingyun.ultraui.android.components'
      const lines = [`import ${base}.${symbol}`]
      if (code.includes(`${symbol}Props`)) lines.push(`import ${base}.${symbol}Props`)
      return lines
    }
    case 'harmony': {
      const names = [symbol]
      if (code.includes(`${symbol}Props`)) names.push(`${symbol}Props`)
      return [`import { ${names.join(', ')} } from '@lingyun/ultra-ui-hos';`]
    }
    case 'flutter':
      return ["import 'package:ultra_ui/ultra_ui.dart';"]
    case 'reactnative':
      return [`import { ${symbol} } from 'ultra-ui-rn';`]
    case 'taro':
      return [`import { ${symbol} } from '@ultra-ui'`]
    default:
      return null
  }
}

/* ------------------------------------------------------------------ *
 * markdown helpers
 * ------------------------------------------------------------------ */

/** Escape a value so it cannot break out of a markdown table cell. */
function cell(value) {
  const s = String(value ?? '').trim()
  if (!s) return '—'
  return s.replace(/\|/g, '&#124;').replace(/\r?\n/g, ' ')
}

/**
 * Prose lifted from source comments lands in a Vue template, so bare `<form>`
 * would be parsed as an unclosed element and `{{` as an interpolation.
 */
function prose(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{\{/g, '&#123;&#123;')
    .trim()
}

function table(headers, rows) {
  const head = `| ${headers.join(' | ')} |`
  const sep = `| ${headers.map(() => '---').join(' | ')} |`
  const body = rows.map((r) => `| ${r.map(cell).join(' | ')} |`)
  return [head, sep, ...body].join('\n')
}

function fence(lang, code) {
  return ['```' + lang, code, '```'].join('\n')
}

/* ------------------------------------------------------------------ *
 * collect
 * ------------------------------------------------------------------ */

const maps = scanAll(ROOT)

/** Resolve one component on one platform, trying detect ids then aliases. */
function resolve(platformId, component) {
  const map = maps[platformId]
  const keys = [
    ...component.detect.map(norm),
    ...(ALIASES[component.id] ?? []).map(norm)
  ]
  for (const k of keys) {
    const hit = map.get(k)
    if (hit) return hit
  }
  return null
}

const collected = meta.map((component) => {
  const perPlatform = {}

  for (const platform of platforms) {
    const hit = resolve(platform.id, component)
    if (!hit) continue

    const { tag, symbol } = surfaceFor(platform, component, hit)
    const snippet = findSnippet({
      root: ROOT,
      platform,
      componentId: component.id,
      detect: component.detect,
      symbol,
      tag
    })

    perPlatform[platform.id] = { symbol, tag, file: hit.file, snippet }
  }

  // API, one section per upstream folder this page covers
  const api = []
  for (const id of component.detect) {
    const dir = path.join(UPSTREAM, `u-${id}`)
    if (!fs.existsSync(dir)) continue
    const found = readComponentApi(dir, `u-${id}`)
    if (found.props.length || found.events.length || found.slots.length) {
      api.push({ id, tag: `up-${id}`, ...found })
    }
  }

  return { ...component, perPlatform, api }
})

/* ------------------------------------------------------------------ *
 * render one page
 * ------------------------------------------------------------------ */

function renderPage(component, locale) {
  const L = t[locale]
  const title =
    locale === 'zh' ? `${component.en} ${component.zh}` : component.en
  const desc = locale === 'zh' ? component.descZh : component.descEn
  const out = []

  out.push('---')
  out.push(`title: ${title}`)
  out.push(`description: ${desc.replace(/:/g, '：')}`)
  out.push('generated: true')
  out.push('---')
  out.push('')
  out.push(`# ${title}`)
  out.push('')
  out.push(desc)
  out.push('')
  out.push(`<PlatformBadges component="${component.id}" show-missing />`)
  out.push('')

  // ---- usage tabs
  const supported = platforms.filter((p) => component.perPlatform[p.id])
  if (supported.length) {
    out.push(`## ${L.usage}`)
    out.push('')
    out.push(L.usageLede)
    out.push('')
    out.push('<PlatformTabs>')
    out.push('')

    for (const platform of supported) {
      const entry = component.perPlatform[platform.id]
      out.push(`<template #${platform.id}>`)
      out.push('')

      const code = entry.snippet?.code ?? ''
      const imports = importLines(platform.id, entry.symbol, code)

      if (code) {
        out.push(fence(platform.lang, [imports?.join('\n'), code].filter(Boolean).join('\n\n')))
        out.push('')
      } else {
        if (imports) {
          out.push(fence(platform.lang, imports.join('\n')))
          out.push('')
        }
        out.push(`::: tip\n${L.noneYet}\n:::`)
        out.push('')
      }

      const notes = []
      if (!imports) notes.push(L.easycom)
      if (entry.snippet) {
        notes.push(`${L.from} \`${platform.dir}/${entry.snippet.file.replace(/\\/g, '/')}\``)
      }
      if (notes.length) {
        out.push(notes.map((n) => `<small>${n}</small>`).join('<br>'))
        out.push('')
      }

      out.push('</template>')
      out.push('')
    }

    out.push('</PlatformTabs>')
    out.push('')
  }

  // ---- API
  out.push(`## ${L.api}`)
  out.push('')
  out.push(L.apiLede)
  out.push('')

  if (component.api.length === 0) {
    out.push(`::: tip\n${L.noApi}\n:::`)
    out.push('')
  }

  for (const section of component.api) {
    const multi = component.api.length > 1
    if (multi) {
      out.push(`### \`<${section.tag}>\``)
      out.push('')
    }
    const h = multi ? '####' : '###'

    if (section.props.length) {
      out.push(`${h} ${L.props}`)
      out.push('')
      out.push(
        table(
          [L.prop, L.desc, L.type, L.def],
          section.props.map((p) => [`\`${p.name}\``, prose(p.desc), `\`${p.type}\``, `\`${p.default}\``])
        )
      )
      out.push('')
    }
    if (section.events.length) {
      out.push(`${h} ${L.events}`)
      out.push('')
      out.push(
        table([L.event], section.events.map((e) => [`\`${e}\``]))
      )
      out.push('')
    }
    if (section.slots.length) {
      out.push(`${h} ${L.slots}`)
      out.push('')
      out.push(table([L.slot], section.slots.map((s) => [`\`${s}\``])))
      out.push('')
    }
  }

  // ---- source table
  if (supported.length) {
    out.push(`## ${L.sources}`)
    out.push('')
    out.push(
      table(
        [L.platform, L.symbol, L.file],
        supported.map((p) => {
          const e = component.perPlatform[p.id]
          return [
            `${p.name} · ${p.stack}`,
            `\`${e.tag}\``,
            `\`${p.srcDir}/${e.file.replace(/\\/g, '/')}\``
          ]
        })
      )
    )
    out.push('')
  }

  return out.join('\n')
}

/* ------------------------------------------------------------------ *
 * write
 * ------------------------------------------------------------------ */

/** True when the file may be overwritten: absent, or flagged generated. */
function writable(file) {
  if (!fs.existsSync(file)) return true
  const head = fs.readFileSync(file, 'utf8').slice(0, 400)
  return /^generated:\s*true\s*$/m.test(head)
}

let written = 0
let skipped = []

for (const component of collected) {
  for (const [locale, dir] of [
    ['zh', path.join(DOCS, 'components')],
    ['en', path.join(DOCS, 'en', 'components')]
  ]) {
    const file = path.join(dir, `${component.id}.md`)
    if (!writable(file)) {
      skipped.push(path.relative(ROOT, file))
      continue
    }
    if (!DRY) {
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(file, renderPage(component, locale) + '\n', 'utf8')
    }
    written++
  }
}

/* registry.json — kept lean, it ships to the browser */
const registry = {
  generatedAt: new Date().toISOString(),
  components: collected.map((c) => ({
    id: c.id,
    group: c.group,
    name: { zh: `${c.en} ${c.zh}`, en: c.en },
    desc: { zh: c.descZh, en: c.descEn },
    platforms: Object.fromEntries(
      Object.entries(c.perPlatform).map(([id, e]) => [
        id,
        { symbol: e.tag, file: e.file.replace(/\\/g, '/') }
      ])
    )
  }))
}

const registryFile = path.join(DOCS, '.vitepress', 'data', 'registry.json')
if (!DRY) {
  fs.mkdirSync(path.dirname(registryFile), { recursive: true })
  fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2) + '\n', 'utf8')
}

/* ------------------------------------------------------------------ *
 * report
 * ------------------------------------------------------------------ */

const width = Math.max(...platforms.map((p) => p.name.length))
console.log(`\nultra-ui docs generator${DRY ? ' (dry run)' : ''}`)
console.log(`  components documented : ${collected.length}`)
console.log(`  upstream folders      : ${new Set(meta.flatMap((m) => m.detect)).size}`)
console.log(`  markdown pages written: ${written}`)
console.log('')
console.log('  platform coverage')
for (const p of platforms) {
  const n = collected.filter((c) => c.perPlatform[p.id]).length
  const snips = collected.filter((c) => c.perPlatform[p.id]?.snippet).length
  const bar = '█'.repeat(Math.round((n / collected.length) * 24)).padEnd(24, '·')
  console.log(
    `    ${p.name.padEnd(width)}  ${bar} ${String(n).padStart(3)}/${collected.length}` +
      `   snippets ${String(snips).padStart(3)}`
  )
}

const noApi = collected.filter((c) => c.api.length === 0).map((c) => c.id)
if (noApi.length) {
  console.log(`\n  no extractable API (${noApi.length}): ${noApi.join(', ')}`)
}
if (skipped.length) {
  console.log(`\n  left alone — hand-authored (${skipped.length}):`)
  for (const f of skipped) console.log(`    ${f}`)
}
console.log('')
