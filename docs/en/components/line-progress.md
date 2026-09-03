---
title: Line progress
description: A horizontal progress bar that can show its percentage inline.
generated: true
---

# Line progress

A horizontal progress bar that can show its percentage inline.

<PlatformBadges component="line-progress" show-missing />

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

<template #android>

### 线性进度

```kotlin
import net.lingyun.ultraui.android.components.UPLineProgress

UPLineProgress(percentage = percentage, showText = true, height = 18)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLineProgress, UPLineProgressProps } from '@lingyun/ultra-ui-hos';

UPLineProgress({ props: new UPLineProgressProps({ percentage: 20 }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LineProgressDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPLineProgress } from 'ultra-ui-rn';

<UPLineProgress />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/LineProgressDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

percentage 控制进度，默认显示在右侧外部

```tsx
import { UPLineProgress } from '@ultra-ui'

<UPLineProgress percentage={30} customClass='line-progress-demo__item' />
```

### 文字内显

textInside，百分比文字显示在进度条内部

```tsx
<UPLineProgress percentage={45} textInside customClass='line-progress-demo__item' />
```

### 圆角与斑马纹

round 胶囊形，striped 动态条纹

```tsx
<UPLineProgress percentage={70} round striped customClass='line-progress-demo__item' />
```

### 自定义高度

height

```tsx
<UPLineProgress percentage={40} height={24} customClass='line-progress-demo__item' />
```

### 受控动画

定时器驱动 percentage 自动增长

```tsx
<UPLineProgress
  percentage={percent}
  round
  showText={false}
  customClass='line-progress-demo__item'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/line-progress/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-line-progress :percentage="percentage1">
</up-line-progress>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/progress/progress.uvue`</small>

</template>

<template #uniappx>

```vue
<up-line-progress :percentage="percentage1">
</up-line-progress>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/progress/progress.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `activeColor` | 激活部分的颜色 | `String` | `'#19be6b'` |
| `inactiveColor` | — | `String` | `'#ececec'` |
| `percentage` | 进度百分比，数值 | `String / Number` | `0` |
| `showText` | 是否在进度条内部显示百分比的值 | `Boolean` | `true` |
| `height` | 进度条的高度，单位px | `String / Number` | `12` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLineProgress` | `UltraUI/Sources/UltraUI/Components/UPLineProgress.swift` |
| Android · Jetpack Compose | `UPLineProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLineProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLineProgress` | `ultra-ui/src/main/ets/components/UPLineProgress.ets` |
| Flutter · Dart | `UPLineProgress` | `packages/ultra_ui/lib/src/widgets/up_line_progress.dart` |
| React Native · TypeScript | `UPLineProgress` | `src/components/line-progress` |
| Taro · React + TypeScript | `UPLineProgress` | `src/ultra-ui/components/up-line-progress` |
| uni-app · Vue 3 | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |
| uni-app-x · UTS / UVUE | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |

