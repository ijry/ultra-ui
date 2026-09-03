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

#### CODE128 条形码

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

#### EAN-13 条形码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean13'),
  value: '5901234123457',
  format: 'EAN13',
  height: 70,
  fontSize: 16,
)
```

#### EAN-8 条形码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean8'),
  value: '96385074',
  format: 'EAN8',
  height: 70,
  fontSize: 11,
)
```

#### UPC-A 条形码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-upca'),
  value: '123456789012',
  format: 'UPCA',
  height: 70,
  fontSize: 16,
)
```

#### CODE39 条形码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-code39'),
  value: 'CODE39',
  format: 'CODE39',
  height: 70,
  fontSize: 16,
)
```

#### EAN-5 补充码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean5'),
  value: '12345',
  format: 'EAN5',
  width: 100,
  height: 60,
  fontSize: 14,
)
```

#### EAN-2 补充码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean2'),
  value: '12',
  format: 'EAN2',
  width: 100,
  height: 60,
  fontSize: 14,
)
```

#### 自定义样式条形码

```dart
const UPBarcode(
  key: ValueKey('barcode-page-custom'),
  value: 'CUSTOM123',
  format: 'CODE128',
  width: 200,
  height: 70,
  fontSize: 14,
  lineColor: '#FF0000',
  background: '#F0F0F0',
  textPosition: 'top',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/barcode_page.dart`</small>

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

```tsx
<UPBarcode
  fontSize={16}
  format="EAN13"
  height={70}
  value="5901234123457"
/>
```

```tsx
<UPBarcode
  fontSize={11}
  format="EAN8"
  height={70}
  value="96385074"
/>
```

```tsx
<UPBarcode
  fontSize={16}
  format="UPCA"
  height={70}
  value="123456789012"
/>
```

```tsx
<UPBarcode
  fontSize={16}
  format="CODE39"
  height={70}
  value="CODE39"
/>
```

```tsx
<UPBarcode
  fontSize={14}
  format="EAN5"
  height={60}
  value="12345"
  width={100}
/>
```

```tsx
<UPBarcode
  fontSize={14}
  format="EAN2"
  height={60}
  value="12"
  width={100}
/>
```

```tsx
<UPBarcode
  background="#F0F0F0"
  fontSize={14}
  format="CODE128"
  height={70}
  lineColor="#FF0000"
  textPosition="top"
  value="CUSTOM123"
  width={200}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/BarcodeDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

默认 CODE128，可用扫码软件验证

```tsx
import { UPBarcode } from '@ultra-ui'

<UPBarcode value='ULTRA-UI-2026' />
```

#### 自定义内容

输入后条码实时重绘

```tsx
<UPBarcode value={value} onError={setLastError} />
```

#### 商品码 EAN / UPC

EAN13 / EAN8 / UPC 有固定位数与校验位要求

```tsx
<UPBarcode value='5901234123457' format='EAN13' width={220} />
```

#### CODE39 与 CODE93

字母数字混合场景

```tsx
<UPBarcode value='CODE39' format='CODE39' width={200} />
```

#### 物流码 ITF14

交叉二五码，常用于外箱标识

```tsx
<UPBarcode value='12345678901231' format='ITF14' width={240} />
```

#### 其他码制

MSI / pharmacode / codabar

```tsx
<UPBarcode value='1234' format='MSI' width={140} />
```

#### 隐藏文字

displayValue 为 false 时只画条纹

```tsx
<UPBarcode value='NO-TEXT' displayValue={false} />
```

#### 文字位置与对齐

textPosition / textAlign

```tsx
<UPBarcode value='TOP-TEXT' textPosition='top' />
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

```vue
<up-barcode 
    value="5901234123457" 
    format="EAN13"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="96385074" 
    format="EAN8"
    :height="70"
    :font-size="11">
</up-barcode>
```

```vue
<up-barcode 
    value="123456789012" 
    format="UPCA"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="CODE39" 
    format="CODE39"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="12345" 
    format="EAN5"
    :width="100"
    :height="60"
    :font-size="14">
</up-barcode>
```

```vue
<up-barcode 
    value="12" 
    format="EAN2"
    :width="100"
    :height="60"
    :font-size="14">
</up-barcode>
```

```vue
<up-barcode 
    value="CUSTOM123" 
    format="CODE128"
    :height="70"
    :width="200"
    :font-size="14"
    line-color="#FF0000"
    background="#F0F0F0"
    text-position="top">
</up-barcode>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/barcode/barcode.uvue`</small>

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

```vue
<up-barcode 
    value="5901234123457" 
    format="EAN13"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="96385074" 
    format="EAN8"
    :height="70"
    :font-size="11">
</up-barcode>
```

```vue
<up-barcode 
    value="123456789012" 
    format="UPCA"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="CODE39" 
    format="CODE39"
    :height="70"
    :font-size="16">
</up-barcode>
```

```vue
<up-barcode 
    value="12345" 
    format="EAN5"
    :width="100"
    :height="60"
    :font-size="14">
</up-barcode>
```

```vue
<up-barcode 
    value="12" 
    format="EAN2"
    :width="100"
    :height="60"
    :font-size="14">
</up-barcode>
```

```vue
<up-barcode 
    value="CUSTOM123" 
    format="CODE128"
    :height="70"
    :width="200"
    :font-size="14"
    line-color="#FF0000"
    background="#F0F0F0"
    text-position="top">
</up-barcode>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/barcode/barcode.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

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
| uni-app · Vue 3 | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |
| uni-app-x · UTS / UVUE | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |

