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

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPQrcode(
  key: ValueKey('qrcode-page-basic'),
  cid: 'up1',
  size: 150,
  val: _sourceValue,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/qrcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPQrcode } from 'ultra-ui-rn';

<UPQrcode val="https://ultra-ui-rn.example.com" size={160} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/QrcodeDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPQrcode } from '@ultra-ui'

<UPQrcode val={text} size={200} showLoading={false} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/qrcode/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-qrcode :cid="'up1'" :size="150" val="https://click.meituan.com/t?t=1&c=2&p=WhaD2b5zGU-h"></up-qrcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/qrcode/qrcode.nvue`</small>

</template>

<template #uniappx>

```vue
<up-qrcode cid="up-qrcode-basic" :size="200" :val="qrValue"></up-qrcode>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/qrcode/qrcode.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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
| uni-app · Vue 3 | `up-qrcode` | `src/uni_modules/uview-plus/components/u-qrcode` |
| uni-app-x · UTS / UVUE | `up-qrcode` | `uni_modules/uview-ultra/components/up-qrcode` |

