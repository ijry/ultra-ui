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

<UPBarcode
  fontSize={16}
  format="CODE128"
  height={70}
  value="1234567890"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/BarcodeDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

默认 CODE128，可用扫码软件验证

```tsx
import { UPBarcode } from '@ultra-ui'

<UPBarcode value='ULTRA-UI-2026' />
```

### 自定义内容

输入后条码实时重绘

```tsx
<UPBarcode value={value} onError={setLastError} />
```

### 商品码 EAN / UPC

EAN13 / EAN8 / UPC 有固定位数与校验位要求

```tsx
<UPBarcode value='5901234123457' format='EAN13' width={220} />
```

### CODE39 与 CODE93

字母数字混合场景

```tsx
<UPBarcode value='CODE39' format='CODE39' width={200} />
```

### 物流码 ITF14

交叉二五码，常用于外箱标识

```tsx
<UPBarcode value='12345678901231' format='ITF14' width={240} />
```

### 其他码制

MSI / pharmacode / codabar

```tsx
<UPBarcode value='1234' format='MSI' width={140} />
```

### 隐藏文字

displayValue 为 false 时只画条纹

```tsx
<UPBarcode value='NO-TEXT' displayValue={false} />
```

### 文字位置与对齐

textPosition / textAlign

```tsx
<UPBarcode value='TOP-TEXT' textPosition='top' />
```

### 自定义配色

lineColor 条纹色，background 底色

```tsx
<UPBarcode value='BLUE-BAR' lineColor='#2979ff' />
```

### 尺寸与留白

width / height / margin

```tsx
<UPBarcode value='SHORT' height={50} />
```

### 字号与字体

fontSize / font

```tsx
<UPBarcode value='FONT-18' fontSize={18} />
```

### 非法输入

位数不符时不绘制错误条码，而是显示原因

```tsx
<UPBarcode value='123' format='EAN13' width={200} />
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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/barcode/barcode.uvue`</small>

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
| uni-app · Vue 3 | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |
| uni-app-x · UTS / UVUE | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |

