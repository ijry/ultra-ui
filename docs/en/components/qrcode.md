---
title: QR code
description: Generates a QR code locally, with no server round trip.
generated: true
---

# QR code

Generates a QR code locally, with no server round trip.

<PlatformBadges component="qrcode" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

#### 不带logo

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPQrcode(
  key: ValueKey('qrcode-page-basic'),
  cid: 'up1',
  size: 150,
  val: _sourceValue,
)
```

#### 带logo

```dart
UPQrcode(cid: 'up2', size: 150, val: _sourceValue)
```

#### 二维码颜色

```dart
const UPQrcode(
  key: ValueKey('qrcode-page-colors'),
  cid: 'up3',
  size: 150,
  val: _sourceValue,
  background: 'red',
  foreground: 'blue',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/qrcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPQrcode } from 'ultra-ui-rn';

<UPQrcode cid="up1" size={150} val={VAL} />
```

```tsx
<UPQrcode
  cid="up2"
  icon="https://uview-plus.jiangruyi.com/h5/static/uview/common/logo.png"
  size={150}
  val={VAL}
/>
```

```tsx
<UPQrcode background="red" cid="up3" foreground="blue" size={150} val={VAL} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/QrcodeDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

val 为二维码内容，可用手机扫码验证

```tsx
import { UPQrcode } from '@ultra-ui'

<UPQrcode val={text} size={200} showLoading={false} />
```

#### 自定义内容

输入后二维码实时重绘

```tsx
<UPQrcode val={dynamic} size={180} showLoading={false} />
```

#### 尺寸

size 控制边长

```tsx
<UPQrcode val='size 120' size={120} showLoading={false} />
```

#### 自定义配色

foreground 码点色，background 底色，pdground 三个定位角单独配色

```tsx
<UPQrcode
  val='foreground'
  size={150}
  foreground='#2979ff'
  showLoading={false}
/>
```

#### 纠错等级

lv 0-3，等级越高容错越强、码点越密

```tsx
<UPQrcode val='level 0' size={130} lv={0} showLoading={false} />
```

#### 静默区

quietZone 控制四周留白圈数

```tsx
<UPQrcode
  val='quietZone 0'
  size={150}
  quietZone={0}
  showLoading={false}
/>
```

#### 中心图标

icon 在码中心叠加图标，底部自动垫背景避免遮挡码点

```tsx
<UPQrcode
  val='https://uview-plus.jiangruyi.com'
  size={200}
  icon='https://cdn.uviewui.com/uview/common/logo.png'
  iconSize={44}
  showLoading={false}
/>
```

#### 点击预览

allowPreview 开启后点击可全屏查看

```tsx
<UPQrcode
  val='allowPreview'
  size={160}
  allowPreview
  showLoading={false}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/qrcode/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-qrcode cid="up-qrcode-basic" :size="200" :val="qrValue"></up-qrcode>
```

```vue
<up-qrcode cid="up-qrcode-logo" :size="200" :val="qrValue" :icon="logo"></up-qrcode>
```

```vue
<up-qrcode cid="up-qrcode-color" :size="200" :val="qrValue" background="red" foreground="blue"></up-qrcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/qrcode/qrcode.uvue`</small>

</template>

<template #uniappx>

```vue
<up-qrcode cid="up-qrcode-basic" :size="200" :val="qrValue"></up-qrcode>
```

```vue
<up-qrcode cid="up-qrcode-logo" :size="200" :val="qrValue" :icon="logo"></up-qrcode>
```

```vue
<up-qrcode cid="up-qrcode-color" :size="200" :val="qrValue" background="red" foreground="blue"></up-qrcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/qrcode/qrcode.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `longpressCallback` |
| `preview` |
| `result` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPQrcode` | `packages/ultra_ui/lib/src/widgets/up_qrcode.dart` |
| React Native · TypeScript | `UPQrcode` | `src/components/qrcode` |
| Taro · React + TypeScript | `UPQrcode` | `src/ultra-ui/components/up-qrcode` |
| uni-app · Vue 3 | `up-qrcode` | `uni_modules/uview-ultra/components/up-qrcode` |
| uni-app-x · UTS / UVUE | `up-qrcode` | `uni_modules/uview-ultra/components/up-qrcode` |

