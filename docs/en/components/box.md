---
title: Box
description: A basic container with padding, radius and shadow, so you write less CSS.
generated: true
---

# Box

A basic container with padding, radius and shadow, so you write less CSS.

<PlatformBadges component="box" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPBox(
  key: ValueKey('box-page-basic'),
  height: '160px',
  gap: '12px',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/box_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBox } from 'ultra-ui-rn';

<UPBox
  gap="12px"
  height="180px"
  left={<UPIcon name="arrow-left" size={19} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/BoxDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPBox } from '@ultra-ui'

<UPBox
  bgColors={['#f3f4f6', '#e5e7eb', '#d1d5db']}
  height={160}
  borderRadius={16}
  gap={20}
  leftIcon='photo'
  leftTitle='相册'
  rightTopIcon='star'
  rightTopTitle='收藏'
  rightBottomIcon='setting'
  rightBottomTitle='设置'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/box/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-box height="160px" gap="12px">
    <template #left>
        左
    </template>
    <template #rightTop>
        右上
    </template>
    <template #rightBottom>
        右下
    </template>
</up-box>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/box/box.nvue`</small>

</template>

<template #uniappx>

```vue
<up-box height="160px" gap="12px">
    <template #left>
        左
    </template>
    <template #rightTop>
        右上
    </template>
    <template #rightBottom>
        右下
    </template>
</up-box>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/box/box.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `bgColors` | 背景色 | `Array` | `['#EEFCFF', '#FCF8FF', '#FDF8F2']` |
| `height` | 高度 | `String` | `'160px'` |
| `borderRadius` | 圆角 | `String` | `'6px'` |
| `gap` | 间隔 | `String` | `'15px'` |
| `leftIcon` | 左侧图标 | `String` | `''` |
| `leftTitle` | 左侧文案 | `String` | `'左'` |
| `rightTopIcon` | 右上图标 | `String` | `''` |
| `rightTopTitle` | 右上文案 | `String` | `'右上'` |
| `rightBottomIcon` | 右下图标 | `String` | `''` |
| `rightBottomTitle` | 右下文案 | `String` | `'右下'` |

### Slots

| Slot |
| --- |
| `left` |
| `rightBottom` |
| `rightTop` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPBox` | `UltraUI/Sources/UltraUI/Components/UPBox.swift` |
| Flutter · Dart | `UPBox` | `packages/ultra_ui/lib/src/widgets/up_box.dart` |
| React Native · TypeScript | `UPBox` | `src/components/box` |
| Taro · React + TypeScript | `UPBox` | `src/ultra-ui/components/up-box` |
| uni-app · Vue 3 | `up-box` | `src/uni_modules/uview-plus/components/u-box` |
| uni-app-x · UTS / UVUE | `up-box` | `uni_modules/uview-ultra/components/up-box` |

