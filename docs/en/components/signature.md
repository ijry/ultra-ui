---
title: Signature
description: A handwriting signature pad that exports to an image.
generated: true
---

# Signature

A handwriting signature pad that exports to an image.

<PlatformBadges component="signature" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSignature(
  key: const ValueKey('signature-page-basic'),
  controller: _signature1,
  // Source passes 700x200 in rpx-derived px units.
  width: 700,
  height: 200,
  bgColor: bgColor,
  showToolbar: false,
  onConfirm: (payload) => _capture(1),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/signature_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSignature } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPSignature } from '@ultra-ui'

<UPSignature
  width={320}
  height={180}
  color='#2979ff'
  thickness={6}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/signature/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-signature
    ref="signature1"
    :width="700"
    :height="200"
    :bg-color="upThemeIsDark ? '#1c1c1e' : '#f5f5f5'"
    :show-toolbar="false"
    @confirm="onConfirm1"
    @error="onError1"
></up-signature>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/signature/signature.nvue`</small>

</template>

<template #uniappx>

```vue
<up-signature 
    ref="signature1" 
    :width="700" 
    :height="200" 
    bg-color="#f5f5f5"
    :show-toolbar="false"
    @confirm="onConfirm1"
    @error="onError1"
></up-signature>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/signature/signature.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `width` | 画布宽度 | `String / Number` | `—` |
| `height` | 画布高度 | `String / Number` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `color` | 默认笔画颜色 | `String` | `—` |
| `thickness` | 默认笔画粗细 | `String / Number` | `—` |
| `showToolbar` | 是否显示工具栏 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `clear` |
| `confirm` |
| `error` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPSignature` | `packages/ultra_ui/lib/src/widgets/up_signature.dart` |
| React Native · TypeScript | `UPSignature` | `src/components/signature` |
| Taro · React + TypeScript | `UPSignature` | `src/ultra-ui/components/up-signature` |
| uni-app · Vue 3 | `up-signature` | `src/uni_modules/uview-plus/components/u-signature` |
| uni-app-x · UTS / UVUE | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |

