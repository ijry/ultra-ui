---
title: QR code 二维码
description: 在本地生成二维码，无需服务端参与。
generated: true
---

# QR code 二维码

在本地生成二维码，无需服务端参与。

<PlatformBadges component="qrcode" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPQrcode(
  key: ValueKey('qrcode-page-basic'),
  cid: 'up1',
  size: 150,
  val: _sourceValue,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/qrcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPQrcode } from 'ultra-ui-rn';

<UPQrcode val="https://ultra-ui-rn.example.com" size={160} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/QrcodeDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPQrcode } from '@ultra-ui'

<UPQrcode val={text} size={200} showLoading={false} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/qrcode/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-qrcode :cid="'up1'" :size="150" val="https://click.meituan.com/t?t=1&c=2&p=WhaD2b5zGU-h"></up-qrcode>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/qrcode/qrcode.nvue`</small>

</template>

<template #uniappx>

```vue
<up-qrcode cid="up-qrcode-basic" :size="200" :val="qrValue"></up-qrcode>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/qrcode/qrcode.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `cid` | — | `String` | `—` |
| `size` | — | `Number` | `—` |
| `unit` | — | `String` | `—` |
| `show` | — | `Boolean` | `—` |
| `val` | — | `String` | `—` |
| `background` | — | `String` | `—` |
| `foreground` | — | `String` | `—` |
| `pdground` | — | `String` | `—` |
| `icon` | — | `String` | `—` |
| `iconSize` | — | `Number` | `—` |
| `lv` | — | `Number` | `—` |
| `quietZone` | — | `Number` | `—` |
| `onval` | — | `Boolean` | `—` |
| `loadMake` | — | `Boolean` | `—` |
| `usingComponents` | — | `Boolean` | `—` |
| `showLoading` | — | `Boolean` | `—` |
| `loadingText` | — | `String` | `—` |
| `allowPreview` | — | `Boolean` | `—` |
| `useRootHeightAndWidth` | 是否使用根节点宽高 | `Boolean` | `—` |

### 事件

| 事件名 |
| --- |
| `longpressCallback` |
| `preview` |
| `result` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPQrcode` | `packages/ultra_ui/lib/src/widgets/up_qrcode.dart` |
| React Native · TypeScript | `UPQrcode` | `src/components/qrcode` |
| Taro · React + TypeScript | `UPQrcode` | `src/ultra-ui/components/up-qrcode` |
| uni-app · Vue 3 | `up-qrcode` | `src/uni_modules/uview-plus/components/u-qrcode` |
| uni-app-x · UTS / UVUE | `up-qrcode` | `uni_modules/uview-ultra/components/up-qrcode` |

