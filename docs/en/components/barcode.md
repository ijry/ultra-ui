---
title: Barcode
description: Generates a one-dimensional barcode locally.
generated: true
---

# Barcode

Generates a one-dimensional barcode locally.

<PlatformBadges component="barcode" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPBarcode(
  key: ValueKey('barcode-page-code128'),
  value: '1234567890',
  format: 'CODE128',
  height: 70,
  fontSize: 16,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/barcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBarcode } from 'ultra-ui-rn';

<UPBarcode value="6901234567892" displayValue />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/BarcodeDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPBarcode } from '@ultra-ui'

<UPBarcode value='ULTRA-UI-2026' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/barcode/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-barcode
    value="1234567890"
    format="CODE128"
    :height="70"
    :font-size="16">
</up-barcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/barcode/barcode.nvue`</small>

</template>

<template #uniappx>

```vue
<up-barcode 
    value="1234567890" 
    format="CODE128"
    :height="70"
    :font-size="16">
</up-barcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/barcode/barcode.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | 条码值 | `String / Number` | `—` |
| `format` | 条码格式 | `String` | `—` |
| `width` | 宽度 | `Number` | `—` |
| `height` | 高度 | `Number` | `—` |
| `displayValue` | 是否显示文本 | `Boolean` | `—` |
| `text` | 文本内容 | `String` | `—` |
| `fontOptions` | 字体选项 | `String` | `—` |
| `font` | 字体 | `String` | `—` |
| `textAlign` | 文本对齐方式 | `String` | `—` |
| `textPosition` | 文本位置 | `String` | `—` |
| `textMargin` | 文本边距 | `Number` | `—` |
| `fontSize` | 字体大小 | `Number` | `—` |
| `background` | 背景色 | `String` | `—` |
| `lineColor` | 条码颜色 | `String` | `—` |
| `margin` | 边距 | `Number` | `—` |
| `marginTop` | 上边距 | `Number` | `—` |
| `marginBottom` | 下边距 | `Number` | `—` |
| `marginLeft` | 左边距 | `Number` | `—` |
| `marginRight` | 右边距 | `Number` | `—` |
| `useCanvas` | 使用canvas还是生成图片 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `error` |
| `rendered` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPBarcode` | `packages/ultra_ui/lib/src/widgets/up_barcode.dart` |
| React Native · TypeScript | `UPBarcode` | `src/components/barcode` |
| Taro · React + TypeScript | `UPBarcode` | `src/ultra-ui/components/up-barcode` |
| uni-app · Vue 3 | `up-barcode` | `src/uni_modules/uview-plus/components/u-barcode` |
| uni-app-x · UTS / UVUE | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |

