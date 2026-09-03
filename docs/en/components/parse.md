---
title: Rich text
description: Parses an HTML string into native nodes on every platform.
generated: true
---

# Rich text

Parses an HTML string into native nodes on every platform.

<PlatformBadges component="parse" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPParse(
  content: parseSourceContent,
  domain: _domain,
  lazyLoad: true,
  scrollTable: true,
  selectable: true,
  useAnchor: true,
  imageSourceResolver: _offlineImageSource,
  onLinkTap: (href) => _handleSourceLink(context, href),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/parse_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPParse } from 'ultra-ui-rn';

<UPParse content={HTML_CONTENT} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/ParseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPParse } from '@ultra-ui'

<UPParse content={basicHtml} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/parse/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-parse container-style="padding: 20px" :content="content" domain="https://6874-html-foe72-1259071903.tcb.qcloud.la/demo" lazy-load scroll-table selectable use-anchor :tag-style="tagStyle" @load="load" @ready="ready" @imgTap="imgTap" @linkTap="linkTap" />
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/parse/parse.nvue`</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `containerStyle` | — | `String` | `—` |
| `copyLink` | — | `Boolean` | `true` |
| `errorImg` | — | `String` | `''` |
| `lazyLoad` | — | `Boolean` | `false` |
| `loadingImg` | — | `String` | `''` |
| `pauseVideo` | — | `Boolean` | `true` |
| `previewImg` | — | `Boolean` | `true` |
| `setTitle` | — | `Boolean` | `true` |
| `showImgMenu` | — | `Boolean` | `true` |
| `tagStyle` | — | `Object` | `—` |
| `useAnchor` | — | `Boolean` | `—` |

### Events

| Event |
| --- |
| `click` |
| `error` |
| `imgtap` |
| `linktap` |
| `load` |
| `play` |
| `ready` |
| `tap` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPParse` | `packages/ultra_ui/lib/src/widgets/up_parse.dart` |
| React Native · TypeScript | `UPParse` | `src/components/parse` |
| Taro · React + TypeScript | `UPParse` | `src/ultra-ui/components/up-parse` |
| uni-app · Vue 3 | `up-parse` | `src/uni_modules/uview-plus/components/u-parse` |
| uni-app-x · UTS / UVUE | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |

