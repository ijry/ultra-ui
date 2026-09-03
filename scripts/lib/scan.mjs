import fs from 'node:fs'
import path from 'node:path'
// Node 22 strips the type annotations for us, so the theme and these scripts
// share one platform definition instead of drifting copies.
import { platformMap } from '../../docs/.vitepress/data/platforms.ts'

/** Lowercase alphanumerics only, so `UPDragSort`, `UPDragsort` and
 * `drag-sort` all collapse to the same key. */
export const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '')

export const pascal = (id) =>
  id
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('')

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

/** norm(symbol) -> { symbol, file } for every declaration the regex finds.
 * The `UP` prefix is dropped from the key so `UPActionSheet` lines up with the
 * `action-sheet` folder name upstream. */
function scanSymbols(root, exts, patterns) {
  const found = new Map()
  for (const file of walk(root, exts)) {
    const text = fs.readFileSync(file, 'utf8')
    for (const re of patterns) {
      for (const m of text.matchAll(re)) {
        const symbol = m[1]
        const key = norm(symbol.replace(/^UP/, ''))
        if (key && !found.has(key)) {
          found.set(key, { symbol, file: path.relative(root, file) })
        }
      }
    }
  }
  return found
}

/** norm(dirName minus prefix) -> { symbol, file } for each component folder. */
function scanDirs(root, prefix = '') {
  const found = new Map()
  let entries
  try {
    entries = fs.readdirSync(root, { withFileTypes: true })
  } catch {
    return found
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue
    if (prefix && !e.name.startsWith(prefix)) continue
    const bare = prefix ? e.name.slice(prefix.length) : e.name
    if (!bare) continue
    found.set(norm(bare), { symbol: e.name, file: e.name })
  }
  return found
}

/** norm(fileName minus prefix/ext) -> entry, for one-file-per-component trees. */
function scanFiles(root, prefix, ext) {
  const found = new Map()
  for (const file of walk(root, [ext])) {
    const base = path.basename(file, ext)
    if (prefix && !base.startsWith(prefix)) continue
    const bare = prefix ? base.slice(prefix.length) : base
    if (!bare) continue
    const key = norm(bare)
    if (!found.has(key)) {
      found.set(key, { symbol: base, file: path.relative(root, file) })
    }
  }
  return found
}

const DECL = {
  ios: [/(?:^|\n)\s*(?:public\s+)?(?:struct|final class|class|enum)\s+(UP[A-Za-z0-9]+)/g],
  android: [/(?:^|\n)\s*(?:public\s+)?fun\s+(?:[\w.]+\.)?(UP[A-Za-z0-9]+)\s*\(/g],
  harmony: [/(?:^|\n)\s*(?:export\s+)?struct\s+(UP[A-Za-z0-9]+)/g],
  flutter: [/(?:^|\n)\s*class\s+(UP[A-Za-z0-9]+)/g],
  reactnative: [
    /export\s+(?:function|const|class)\s+(UP[A-Za-z0-9]+)/g,
    /(?:^|\n)\s*(?:function|const)\s+(UP[A-Za-z0-9]+)/g
  ],
  taro: [
    /export\s+(?:function|const|class)\s+(UP[A-Za-z0-9]+)/g,
    /(?:^|\n)\s*(?:function|const)\s+(UP[A-Za-z0-9]+)/g
  ]
}

/**
 * Build a lookup table per platform: norm(id) -> { symbol, file }.
 * Symbol scanning and folder scanning are merged, so a component counts as
 * present when either signal fires.
 */
export function scanAll(rootDir) {
  const dirOf = (id) => path.join(rootDir, platformMap[id].dir, platformMap[id].srcDir)
  const merge = (...maps) => {
    const out = new Map()
    for (const m of maps) for (const [k, v] of m) if (!out.has(k)) out.set(k, v)
    return out
  }

  return {
    ios: merge(
      scanSymbols(dirOf('ios'), ['.swift'], DECL.ios),
      scanFiles(dirOf('ios'), 'UP', '.swift')
    ),
    android: merge(
      scanSymbols(dirOf('android'), ['.kt'], DECL.android),
      scanFiles(dirOf('android'), 'UP', '.kt')
    ),
    harmony: merge(
      scanSymbols(dirOf('harmony'), ['.ets'], DECL.harmony),
      scanFiles(dirOf('harmony'), 'UP', '.ets')
    ),
    flutter: merge(
      scanSymbols(dirOf('flutter'), ['.dart'], DECL.flutter),
      scanFiles(dirOf('flutter'), 'up_', '.dart')
    ),
    reactnative: merge(
      scanDirs(dirOf('reactnative')),
      scanSymbols(dirOf('reactnative'), ['.tsx', '.ts'], DECL.reactnative)
    ),
    taro: merge(
      scanDirs(dirOf('taro'), 'up-'),
      scanSymbols(dirOf('taro'), ['.tsx', '.ts'], DECL.taro)
    ),
    uniapp: scanDirs(dirOf('uniapp'), 'up-'),
    uniappx: scanDirs(dirOf('uniappx'), 'up-')
  }
}
