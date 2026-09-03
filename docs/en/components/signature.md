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

#### 基础签名示例

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

#### 自定义颜色和工具栏示例

```dart
UPSignature(
  key: const ValueKey('signature-page-custom'),
  controller: _signature2,
  width: 700,
  height: 200,
  color: '#ff0000',
  thickness: 6,
  bgColor: bgColor,
  onConfirm: (payload) => _capture(2),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/signature_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSignature } from 'ultra-ui-rn';

<UPSignature
  bgColor="#f5f5f5"
  height={200}
  onConfirm={onConfirm1}
  onError={onError1}
  ref={signature1}
  showToolbar={false}
  width={700}
/>
```

```tsx
<UPSignature
  bgColor="#f5f5f5"
  color="#ff0000"
  height={200}
  onConfirm={onConfirm2}
  onError={onError2}
  ref={signature2}
  thickness={6}
  width={700}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/SignatureDemo.tsx`</small>

</template>

<template #taro>

#### 自定义笔画

color 与 thickness 设置初始笔形

```tsx
import { UPSignature } from '@ultra-ui'

<UPSignature
  width={320}
  height={180}
  color='#2979ff'
  thickness={6}
/>
```

#### 自定义背景

bgColor 改变画布底色

```tsx
<UPSignature
  width={320}
  height={180}
  bgColor='#fffbe6'
  color='#ad6800'
/>
```

#### 隐藏工具栏

showToolbar 为 false，改由外部通过 ref 控制

```tsx
<UPSignature
  ref={manualRef}
  width={320}
  height={180}
  showToolbar={false}
/>
```

#### 尺寸

width / height 控制画布大小

```tsx
<UPSignature width={240} height={140} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/signature/index.tsx`</small>

</template>

<template #uniapp>

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

```vue
<up-signature 
    ref="signature2" 
    :width="700" 
    :height="200" 
    color="#ff0000"
    thickness="6"
    bg-color="#f5f5f5"
    @confirm="onConfirm2"
    @error="onError2"
></up-signature>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/signature/signature.uvue`</small>

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

```vue
<up-signature 
    ref="signature2" 
    :width="700" 
    :height="200" 
    color="#ff0000"
    thickness="6"
    bg-color="#f5f5f5"
    @confirm="onConfirm2"
    @error="onError2"
></up-signature>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/signature/signature.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `confirm` |
| `error` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPSignature` | `packages/ultra_ui/lib/src/widgets/up_signature.dart` |
| React Native · TypeScript | `UPSignature` | `src/components/signature` |
| Taro · React + TypeScript | `UPSignature` | `src/ultra-ui/components/up-signature` |
| uni-app · Vue 3 | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |
| uni-app-x · UTS / UVUE | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |

