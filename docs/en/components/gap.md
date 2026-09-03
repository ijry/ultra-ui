---
title: Gap
description: Whitespace between blocks, with configurable height and background.
generated: true
---

# Gap

Whitespace between blocks, with configurable height and background.

<PlatformBadges component="gap" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPGap(bgColor: "bg", height: 30)
```

<small>Snippet from `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

### 间隔

```kotlin
import net.lingyun.ultraui.android.components.UPGap
import net.lingyun.ultraui.android.components.UPGapProps

UPGap(props = UPGapProps(height = "12px", bgColor = "#f4f4f5"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPGap, UPGapProps } from '@lingyun/ultra-ui-hos';

UPGap({ props: new UPGapProps({ height: 16, bgColor: '#f2f3f5' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/GapDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_GapBlock('基本案例', UPGap(bgColor: '#f3f4f6')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/gap_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPGap } from 'ultra-ui-rn';

<UPGap bgColor="#f3f4f6" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/GapDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

默认高度 20px，背景透明

```tsx
import { UPGap } from '@ultra-ui'

<UPGap />
```

### 自定义高度

height 单位 px

```tsx
<UPGap height={10} bgColor='#ecf5ff' />
```

### 背景颜色

bgColor 支持任意 CSS 颜色

```tsx
<UPGap height={24} bgColor='#3c9cff' />
```

### 上下外边距

marginTop / marginBottom，与背景色区分开

```tsx
<UPGap height={20} marginTop={10} marginBottom={10} bgColor='#fdf6ec' />
```

### 自定义样式

customStyle 透传到根节点

```tsx
<UPGap
  height={30}
  bgColor='#ecf5ff'
  customStyle={{ borderRadius: '6px' }}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/gap/index.tsx`</small>

</template>

<template #uniapp>

### 基本案列

```vue
<up-gap bgColor="#f3f4f6"></up-gap>
```

### 自定义颜色

```vue
<up-gap bgColor="#2979ff"></up-gap>
```

### 自定义高度

```vue
<up-gap bgColor="#f3f4f6" height="40"></up-gap>
```

### 自定义上下边距

```vue
<up-gap
    bgColor="#f3f4f6"
    marginTop="20"
    marginBottom="20"
></up-gap>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/gap/gap.uvue`</small>

</template>

<template #uniappx>

### 基本案列

```vue
<up-gap bgColor="#f3f4f6"></up-gap>
```

### 自定义颜色

```vue
<up-gap bgColor="#2979ff"></up-gap>
```

### 自定义高度

```vue
<up-gap bgColor="#f3f4f6" height="40"></up-gap>
```

### 自定义上下边距

```vue
<up-gap
    bgColor="#f3f4f6"
    marginTop="20"
    marginBottom="20"
></up-gap>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/gap/gap.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `bgColor` | 背景颜色（默认transparent） | `String` | `'var(--up-gap-bg-color, #f3f4f6)'` |
| `height` | 分割槽高度，单位px（默认30） | `String / Number` | `20` |
| `marginTop` | 与上一个组件的距离 | `String / Number` | `0` |
| `marginBottom` | 与下一个组件的距离 | `String / Number` | `0` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPGap` | `UltraUI/Sources/UltraUI/Components/UPGap.swift` |
| Android · Jetpack Compose | `UPGap` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPGap.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPGap` | `ultra-ui/src/main/ets/components/UPGap.ets` |
| Flutter · Dart | `UPGap` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPGap` | `src/components/gap` |
| Taro · React + TypeScript | `UPGap` | `src/ultra-ui/components/up-gap` |
| uni-app · Vue 3 | `up-gap` | `uni_modules/uview-ultra/components/up-gap` |
| uni-app-x · UTS / UVUE | `up-gap` | `uni_modules/uview-ultra/components/up-gap` |

