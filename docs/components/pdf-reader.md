---
title: PDF reader PDF 阅读器
description: 内嵌 PDF 浏览器，支持翻页与缩放。
generated: true
---

# PDF reader PDF 阅读器

内嵌 PDF 浏览器，支持翻页与缩放。

<PlatformBadges component="pdf-reader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/pdf_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPdfReader } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPPdfReader } from '@ultra-ui'

<UPPdfReader src={src} height='360px' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/pdf-reader/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-pdf-reader :src="pdfFileUrl" baseUrl=""></up-pdf-reader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/pdfReader/pdfReader.nvue`</small>

</template>

<template #uniappx>

```vue
<up-pdf-reader :src="pdfFileUrl"></up-pdf-reader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/pdfReader/pdfReader.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | PDF文件地址 | `String` | `—` |
| `height` | 组件高度 | `String` | `—` |
| `baseUrl` | pdfjs资源域名 | `String` | `—` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPPdfReader` | `packages/ultra_ui/lib/src/widgets/up_pdf_reader.dart` |
| React Native · TypeScript | `UPPdfReader` | `src/components/pdf-reader` |
| Taro · React + TypeScript | `UPPdfReader` | `src/ultra-ui/components/up-pdf-reader` |
| uni-app · Vue 3 | `up-pdf-reader` | `src/uni_modules/uview-plus/components/u-pdf-reader` |
| uni-app-x · UTS / UVUE | `up-pdf-reader` | `uni_modules/uview-ultra/components/up-pdf-reader` |

