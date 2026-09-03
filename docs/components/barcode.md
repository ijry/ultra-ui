---
title: Barcode 条形码
description: 在本地生成一维条形码。
generated: true
---

# Barcode 条形码

在本地生成一维条形码。

<PlatformBadges component="barcode" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/barcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBarcode } from 'ultra-ui-rn';

<UPBarcode value="6901234567892" displayValue />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/BarcodeDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPBarcode } from '@ultra-ui'

<UPBarcode value='ULTRA-UI-2026' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/barcode/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/barcode/barcode.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/barcode/barcode.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `error` |
| `rendered` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPBarcode` | `packages/ultra_ui/lib/src/widgets/up_barcode.dart` |
| React Native · TypeScript | `UPBarcode` | `src/components/barcode` |
| Taro · React + TypeScript | `UPBarcode` | `src/ultra-ui/components/up-barcode` |
| uni-app · Vue 3 | `up-barcode` | `src/uni_modules/uview-plus/components/u-barcode` |
| uni-app-x · UTS / UVUE | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |

