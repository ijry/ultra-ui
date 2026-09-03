---
title: All components
description: An index of every ultra-ui component and how well each platform covers it.
---

# All components

ultra-ui currently documents **108 components**, covering 141 upstream component folders — sub-components are folded into their parent page, so `u-cell-group` lives inside the Cell page.

The list below is searchable, and can be narrowed to a single platform.

<ComponentIndex />

## Support matrix

A green dot means that platform ships an implementation; hover it to see the type or tag name used there.

Uneven counts are expected. uni-app, uni-app-x, Flutter, React Native and Taro have completed the full port, while the three native platforms — iOS, Android and HarmonyOS — are still working through the catalogue by category. Heavyweight components such as the cropper, poster, PDF reader and short-video player usually land last.

<SupportMatrix />

## How to read a component page

Every component page has the same shape:

- **Platform badges** at the top. A greyed-out badge means that platform has no implementation yet; clicking a badge switches the current platform.
- **Usage by platform** — tabbed snippets, each lifted verbatim from that platform's own demo app, with the source file noted underneath.
- **API** — props, events and slots, extracted from the uview-plus source. The ports keep the same property names, so the table applies to all eight platforms.
- **Source on each platform** — where the component lives in each repository.

The platform you pick is shared across the whole site: switch it once and every other page follows, remembered in your browser's local storage.
