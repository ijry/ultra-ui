---
title: Skeleton
description: Loading placeholders in paragraph, avatar and image shapes.
generated: true
---

# Skeleton

Loading placeholders in paragraph, avatar and image shapes.

<PlatformBadges component="skeleton" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### 基础骨架

```typescript
import { UPSkeleton, UPSkeletonProps } from '@lingyun/ultra-ui-hos';

UPSkeleton({ props: new UPSkeletonProps({ rows: 3, title: true }) })
```

#### 头像骨架

```typescript
UPSkeleton({ props: new UPSkeletonProps({ avatar: true, rows: 4, titleWidth: '55%', rowWidth: ['100%', '92%', '80%', '64%'] }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SkeletonDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSkeleton(rows: 3, title: true, loading: true)
```

```dart
UPSkeleton(rows: 2, title: true, loading: true)
```

```dart
UPSkeleton(
  rows: 2,
  title: true,
  rowsWidth: <dynamic>['100%', '35%'],
  loading: true,
)
```

```dart
UPSkeleton(
  rows: 3,
  title: true,
  rowsWidth: <dynamic>['100%', '100%', '100%'],
  rowsHeight: <dynamic>['18px', '18px', '80px'],
  loading: true,
)
```

```dart
UPSkeleton(
  animate: _animate,
  rows: 3,
  title: true,
  loading: true,
)
```

```dart
UPSkeleton(
  animate: _animate,
  rows: 3,
  title: true,
  loading: true,
  avatar: true,
)
```

```dart
UPSkeleton(
  rows: 2,
  title: true,
  loading: !_loading,
  avatar: true,
  rowsHeight: 14,
  child: _contentSlot(),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/skeleton_page.dart`</small>

</template>

<template #reactnative>

#### 基础使用

```tsx
import { UPSkeleton } from 'ultra-ui-rn';

<UPSkeleton loading rows="3" title />
```

#### 自定义段落行数

```tsx
<UPSkeleton loading rows="2" title />
```

#### 设置段落宽度

```tsx
<UPSkeleton loading rows="2" rowsWidth={['100%', '35%']} title />
```

#### 设置段落高度

```tsx
<UPSkeleton
  loading
  rows="3"
  rowsHeight={['18px', '18px', '80px']}
  rowsWidth={['100%', '100%', '100%']}
  title
/>
```

#### 是否开启动画

```tsx
<UPSkeleton animate={switch1} loading rows="3" title />
```

#### 展示头像

```tsx
<UPSkeleton animate={switch1} avatar loading rows="3" title />
```

#### 切换状态

```tsx
<UPSkeleton avatar loading={switch2} rows="2" rowsHeight="14" title>
  <View>
    <View style={s.slot}>
      <Image source={{ uri: LOGO }} style={s.slotImage} />
      <View style={s.slotContent}>
        <UPText size="16" text="利剑出鞘,一统江湖" type="main" />
        <UPText
          customStyle={s.slotDesc}
          size="14"
          text="众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"
          type="tips"
        />
      </View>
    </View>
  </View>
</UPSkeleton>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/SkeletonDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

loading=true 显示骨架，false 显示实际内容

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

#### 显示头像

avatar / avatarShape / avatarSize

```tsx
<UPSkeleton loading avatar avatarShape='circle' title rows={3} animate={animate} />
```

#### 显示标题

title / titleWidth / titleHeight

```tsx
<UPSkeleton loading title titleWidth='50%' titleHeight={20} rows={3} animate={animate} />
```

#### 自定义行数

rows / rowsWidth（数组逐行）/ rowsHeight

```tsx
<UPSkeleton loading rows={5} animate={animate} />
```

#### 微光动画

animate 控制扫描高光效果

```tsx
<UPSkeleton loading rows={3} animate={animate} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/skeleton/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<up-skeleton
	    rows="3"
	    title
		loading
	></up-skeleton>
</template>
```

#### 加载中动画

```vue
<up-skeleton :loading="true" :animate="true"></up-skeleton>
```

#### 显示头像

```vue
<up-skeleton :loading="true" avatar rows="1"></up-skeleton>
```

#### 插槽内容

```vue
<template>
	<up-skeleton
	    rows="2"
		:loading="loading"
		avatar
		:title="false"
	>
		<up-text>loading为false时，将会展示此处插槽内容</up-text>
	</up-skeleton>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
import {
	onLoad,
	onShow
} from "@dcloudio/uni-app";

// 响应式数据  
const loading = ref(true);  
  
onLoad(() => {  
  // 延时2秒钟  
  uni.$u.sleep(2000).then(() => {  
    loading.value = false;  
  });  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/skeleton.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<up-skeleton
	    rows="3"
	    title
		loading
	></up-skeleton>
</template>
```

#### 加载中动画

```vue
<up-skeleton :loading="true" :animate="true"></up-skeleton>
```

#### 显示头像

```vue
<up-skeleton :loading="true" avatar rows="1"></up-skeleton>
```

#### 插槽内容

```vue
<template>
	<up-skeleton
	    rows="2"
		:loading="loading"
		avatar
		:title="false"
	>
		<up-text>loading为false时，将会展示此处插槽内容</up-text>
	</up-skeleton>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
import {
	onLoad,
	onShow
} from "@dcloudio/uni-app";

// 响应式数据  
const loading = ref(true);  
  
onLoad(() => {  
  // 延时2秒钟  
  uni.$u.sleep(2000).then(() => {  
    loading.value = false;  
  });  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/skeleton.md`</small>

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
| uni-app · Vue 3 | `up-skeleton` | `uni_modules/uview-ultra/components/up-skeleton` |
| uni-app-x · UTS / UVUE | `up-skeleton` | `uni_modules/uview-ultra/components/up-skeleton` |

