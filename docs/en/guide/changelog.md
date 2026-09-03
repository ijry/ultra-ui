---
title: Changelog
description: Current version of each platform package, plus the docs site's own history.
---

# Changelog

## Platform versions

Read from each repository at the time these docs were generated.

| Platform | Package | Version |
| --- | --- | --- |
| uni-app | `uview-plus` | 3.8.116 |
| uni-app-x | `uview-ultra` | 4.5.36 |
| Taro | `ultra-ui-taro` | 1.0.0 |
| HarmonyOS Next | `@lingyun/ultra-ui-hos` | 1.0.0 |
| Flutter | `ultra_ui` | 0.1.0 |
| React Native | `ultra-ui-rn` | 0.1.0 |
| iOS | `UltraUI` | 0.1.0 |
| Android | `:ultra-ui` | unpublished |

Detailed per-platform history lives in each repository: see the uview-plus changelog for the uni-app side, and the progress documents in the three native repos.

## Docs site

### 2026-09 · First release

- Bilingual site (Chinese and English) on VitePress 1.6.
- 108 component pages covering 141 upstream component folders.
- Each component page shows usage for all eight platforms as tabs, with snippets extracted from the platforms' own demo apps.
- The selected platform is shared site-wide, persisted in local storage, and deep-linkable via `?platform=flutter`.
- The component index supports search and per-platform filtering, alongside a full support matrix.
- Component docs are produced by `scripts/gen-components.mjs`; API tables are extracted from the uview-plus source.

## Versioning

Platform packages release independently and their version numbers are deliberately not aligned — the same component genuinely lands at different times on different platforms. To find out whether a component is available on your platform, read the badges at the top of its page rather than a version number.
