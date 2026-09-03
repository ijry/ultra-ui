---
title: Skeleton 骨架屏
description: 加载中的占位骨架，支持段落、头像与图片形状。
generated: true
---

# Skeleton 骨架屏

加载中的占位骨架，支持段落、头像与图片形状。

<PlatformBadges component="skeleton" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSkeleton
import net.lingyun.ultraui.android.components.UPSkeletonProps

DemoSection("骨架屏") { UPSkeleton(UPSkeletonProps(rows = 3, avatar = true))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSkeleton, UPSkeletonProps } from '@lingyun/ultra-ui-hos';

UPSkeleton({ props: new UPSkeletonProps({ rows: 3, title: true }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SkeletonDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSkeleton(rows: 3, title: true, loading: true)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/skeleton_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSkeleton } from 'ultra-ui-rn';

<UPSkeleton loading rows="3" title />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/SkeletonDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/skeleton/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-skeleton
    rows="3"
    title
    loading
></up-skeleton>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/skeleton/skeleton.nvue`</small>

</template>

<template #uniappx>

```vue
<up-skeleton
    rows="3"
    title
    loading
></up-skeleton>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/skeleton/skeleton.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPSkeleton` | `UltraUI/Sources/UltraUI/Components/UPSkeleton.swift` |
| Android · Jetpack Compose | `UPSkeleton` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSkeleton` | `ultra-ui/src/main/ets/components/UPSkeleton.ets` |
| Flutter · Dart | `UPSkeleton` | `packages/ultra_ui/lib/src/widgets/up_skeleton.dart` |
| React Native · TypeScript | `UPSkeleton` | `src/components/skeleton` |
| Taro · React + TypeScript | `UPSkeleton` | `src/ultra-ui/components/up-skeleton` |
| uni-app · Vue 3 | `up-skeleton` | `src/uni_modules/uview-plus/components/u-skeleton` |
| uni-app-x · UTS / UVUE | `up-skeleton` | `uni_modules/uview-ultra/components/up-skeleton` |

