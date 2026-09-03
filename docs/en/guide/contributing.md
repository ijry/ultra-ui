---
title: Contributing
description: Repository layout, how the docs are generated, and how to submit a change.
---

# Contributing

## Repository layout

ultra-ui spans several repositories; the docs site references each platform's source through symlinks:

```
docs-site/                    ← this site
├─ docs/                      documentation content
│  ├─ .vitepress/
│  │  ├─ config.mts           site config (zh + en)
│  │  ├─ data/                platforms, categories, component registry
│  │  └─ theme/               custom theme and components
│  ├─ guide/       en/guide/         guides (handwritten)
│  └─ components/  en/components/    component docs (generated)
├─ scripts/gen-components.mjs  the generator
│
├─ ultra-ui-ios      →  SwiftUI implementation
├─ ultra-ui-android  →  Jetpack Compose implementation
├─ ultra-ui-hos      →  HarmonyOS ArkTS implementation
├─ ultra-ui-flutter  →  Flutter implementation
├─ ultra-ui-rn       →  React Native implementation
├─ ultra-ui-taro     →  Taro implementation
├─ uview-plus        →  uni-app implementation (3.x)
└─ uview-plus4       →  uni-app-x implementation (4.x)
```

## Running the site locally

```bash
npm install
npm run gen      # rescan the source repos, regenerate component docs
npm run dev      # http://localhost:9100
npm run build    # output in dist/
```

## How component docs are generated

`npm run gen` does four things:

1. **Scans platform support** — walks the component directory in each of the eight repos and decides whether a component exists there from two signals: a symbol declaration (`struct UPButton`, `fun UPButton(`, `class UPButton`) and the folder name.
2. **Extracts the API** — parses uview-plus's `props.js` and its companion defaults file for prop names, types, defaults and comments, then pulls `emits` and `<slot>` out of the SFC.
3. **Extracts snippets** — finds the first real usage of the component in each platform's demo app and slices out a complete, brace- or tag-balanced block.
4. **Writes files** — `docs/.vitepress/data/registry.json` plus 108 × 2 markdown pages.

Run `npm run gen -- --dry-run` for the report without touching any files. It prints coverage and extracted-snippet counts per platform.

### Handwritten pages are never overwritten

The generator only rewrites files whose frontmatter contains `generated: true`. To take a component page over by hand, delete that line — the next run will skip it and list it at the end of the report.

### Adding a component

1. Implement it in the platform repo.
2. If it is a new upstream component, add an entry to `scripts/lib/meta.mjs`:

```js
c('my-widget', 'basic', '我的组件', 'My widget',
  '一句话中文描述。',
  'One-sentence English description.'),
```

3. Run `npm run gen`. The sidebar, the component index and the support matrix all update on their own — every one of them is driven by the registry.

The `detect` argument declares which upstream folders a page covers, so sub-components fold into their parent:

```js
c('cell', 'layout', '单元格', 'Cell', '…', '…', ['cell', 'cell-group']),
```

## Translation

Chinese lives in `docs/`, English in `docs/en/`, with matching directory structures.

- **Component pages** are emitted in both languages by the generator, from the `descZh` / `descEn` fields in `meta.mjs`.
- **Guide pages** are handwritten — update the English one when you change the Chinese.
- **UI strings** live in `docs/.vitepress/config/zh.mts` and `en.mts`, plus the `zh ? '…' : '…'` ternaries inside the theme components.

## Commit conventions

- One concern per commit; imperative subject lines (`add UPWaterfall to HarmonyOS`).
- Run that platform's tests in its own repo after changing platform source.
- If you change the generator, include the diff in `npm run gen -- --dry-run` output.
- Never commit `dist/`, `node_modules/` or `.vitepress/cache/`.

## Reporting a bug

Please include:

1. Which platform and version;
2. Which component and which prop;
3. Expected versus actual behaviour;
4. A minimal reproduction.

Cross-platform inconsistencies — the same prop working on A but not on B — are especially welcome. They are the bugs this project most needs to hear about.
