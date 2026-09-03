---
title: Skeleton
description: Loading placeholders in paragraph, avatar and image shapes.
generated: true
---

# Skeleton

Loading placeholders in paragraph, avatar and image shapes.

<PlatformBadges component="skeleton" show-missing />

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

```kotlin
import net.lingyun.ultraui.android.components.UPSkeleton
import net.lingyun.ultraui.android.components.UPSkeletonProps

DemoSection("骨架屏") { UPSkeleton(UPSkeletonProps(rows = 3, avatar = true))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSkeleton, UPSkeletonProps } from '@lingyun/ultra-ui-hos';

UPSkeleton({ props: new UPSkeletonProps({ rows: 3, title: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SkeletonDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSkeleton(rows: 3, title: true, loading: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/skeleton_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSkeleton } from 'ultra-ui-rn';

<UPSkeleton loading rows="3" title />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/SkeletonDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSkeleton } from '@ultra-ui'

<UPSkeleton loading={loading} animate={animate}>
  <View className='skeleton-demo__real'>
    <View className='skeleton-demo__avatar' />
    <View className='skeleton-demo__text'>
      <Text className='skeleton-demo__title'>这是标题文案</Text>
      <Text className='skeleton-demo__line'>
        这是一段真实的文本内容，骨架屏加载完成后会替换为实际数据。
      </Text>
    </View>
  </View>
</UPSkeleton>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/skeleton/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-skeleton
    rows="3"
    title
    loading
></up-skeleton>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/skeleton/skeleton.nvue`</small>

</template>

<template #uniappx>

```vue
<up-skeleton
    rows="3"
    title
    loading
></up-skeleton>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/skeleton/skeleton.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `loading` | 是否展示骨架组件 | `Boolean` | `true` |
| `animate` | 是否开启动画效果 | `Boolean` | `true` |
| `rows` | 段落占位图行数 | `String / Number` | `0` |
| `rowsWidth` | 段落占位图的宽度 | `String / Number / Array` | `'100%'` |
| `rowsHeight` | 段落占位图的高度 | `String / Number / Array` | `18` |
| `title` | 是否展示标题占位图 | `Boolean` | `true` |
| `titleWidth` | 段落标题的宽度 | `String / Number` | `'50%'` |
| `titleHeight` | 段落标题的高度 | `String / Number` | `18` |
| `avatar` | 是否展示头像占位图 | `Boolean` | `false` |
| `avatarSize` | 头像占位图大小 | `String / Number` | `32` |
| `avatarShape` | 头像占位图的形状，circle-圆形，square-方形 | `String` | `'circle'` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPSkeleton` | `UltraUI/Sources/UltraUI/Components/UPSkeleton.swift` |
| Android · Jetpack Compose | `UPSkeleton` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSkeleton` | `ultra-ui/src/main/ets/components/UPSkeleton.ets` |
| Flutter · Dart | `UPSkeleton` | `packages/ultra_ui/lib/src/widgets/up_skeleton.dart` |
| React Native · TypeScript | `UPSkeleton` | `src/components/skeleton` |
| Taro · React + TypeScript | `UPSkeleton` | `src/ultra-ui/components/up-skeleton` |
| uni-app · Vue 3 | `up-skeleton` | `src/uni_modules/uview-plus/components/u-skeleton` |
| uni-app-x · UTS / UVUE | `up-skeleton` | `uni_modules/uview-ultra/components/up-skeleton` |

