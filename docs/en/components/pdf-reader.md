---
title: PDF reader
description: An embedded PDF viewer with paging and zoom.
generated: true
---

# PDF reader

An embedded PDF viewer with paging and zoom.

<PlatformBadges component="pdf-reader" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPdfReader(
  key: const ValueKey('pdf-reader-page-viewer'),
  src: _pdfFileUrl,
  baseUrl: '',
  viewerBuilder: (viewerUrl) => UPPdfView(
    target: resolvePdfTarget(viewerUrl),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/pdf_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPdfReader } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPPdfReader } from '@ultra-ui'

<UPPdfReader src={src} height='360px' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/pdf-reader/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-pdf-reader :src="pdfFileUrl" baseUrl=""></up-pdf-reader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/pdfReader/pdfReader.nvue`</small>

</template>

<template #uniappx>

```vue
<up-pdf-reader :src="pdfFileUrl"></up-pdf-reader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/pdfReader/pdfReader.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `src` | PDF文件地址 | `String` | `—` |
| `height` | 组件高度 | `String` | `—` |
| `baseUrl` | pdfjs资源域名 | `String` | `—` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPPdfReader` | `packages/ultra_ui/lib/src/widgets/up_pdf_reader.dart` |
| React Native · TypeScript | `UPPdfReader` | `src/components/pdf-reader` |
| Taro · React + TypeScript | `UPPdfReader` | `src/ultra-ui/components/up-pdf-reader` |
| uni-app · Vue 3 | `up-pdf-reader` | `src/uni_modules/uview-plus/components/u-pdf-reader` |
| uni-app-x · UTS / UVUE | `up-pdf-reader` | `uni_modules/uview-ultra/components/up-pdf-reader` |

