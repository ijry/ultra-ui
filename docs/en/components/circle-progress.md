---
title: Circle progress
description: A ring progress indicator for completion rates and scores.
generated: true
---

# Circle progress

A ring progress indicator for completion rates and scores.

<PlatformBadges component="circle-progress" show-missing />

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
import net.lingyun.ultraui.android.components.UPCircleProgress

UPCircleProgress(percentage = percentage)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCircleProgress, UPCircleProgressProps } from '@lingyun/ultra-ui-hos';

UPCircleProgress({ props: new UPCircleProgressProps({ percentage: 30 }) })
```

```typescript
UPCircleProgress({ props: new UPCircleProgressProps({ percentage: 0, activeColor: 'primary', width: 112 }) })
```

```typescript
UPCircleProgress({ props: new UPCircleProgressProps({ percentage: 100, activeColor: 'success' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CircleProgressDemo.ets`</small>

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

#### 基础用法

```tsx
import { UPCircleProgress } from 'ultra-ui-rn';

<UPCircleProgress percentage={50}>
<Text style={{ fontSize: 16, fontWeight: '600' }}>50%</Text>
</UPCircleProgress>
```

#### 不同进度

```tsx
<UPCircleProgress percentage={25}>
<Text style={{ fontSize: 14 }}>25%</Text>
</UPCircleProgress>
```

#### 自定义内容

```tsx
<UPCircleProgress percentage={80}>
<View style={{ alignItems: 'center' }}>
<Text style={{ fontSize: 20, fontWeight: '700', color: '#303133' }}>80</Text>
<Text style={{ fontSize: 10, color: '#909399' }}>完成率</Text>
</View>
</UPCircleProgress>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CircleProgressDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

percentage 控制进度，中心默认显示百分比

```tsx
import { UPCircleProgress } from '@ultra-ui'

<UPCircleProgress percentage={25} />
```

#### 自定义颜色

activeColor / inactiveColor

```tsx
<UPCircleProgress percentage={60} activeColor='#19be6b' />
```

#### 尺寸与线宽

width 控制直径，borderWidth 控制线宽

```tsx
<UPCircleProgress percentage={70} width={70} borderWidth={4} />
```

#### 端点样式

round 为 false 时为平头

```tsx
<UPCircleProgress percentage={45} round />
```

#### 起始角度

startAngle，0 为 12 点方向顺时针

```tsx
<UPCircleProgress percentage={30} startAngle={0} />
```

#### 自定义中心内容

children 替换默认百分比文字

```tsx
<UPCircleProgress percentage={80} activeColor='#2979ff'>
  <View className='circle-progress-demo__center'>
    <Text className='circle-progress-demo__value'>80</Text>
    <Text className='circle-progress-demo__label'>已完成</Text>
  </View>
</UPCircleProgress>
```

#### 动态改变

进度变化时从当前值平滑过渡

```tsx
<UPCircleProgress percentage={percentage} activeColor='#19be6b' />
```

#### 关闭动画

duration 为 0 时直接跳变

```tsx
<UPCircleProgress percentage={auto} duration={0} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/circle-progress/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `percentage` | — | `String / Number` | `30` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCircleProgress` | `UltraUI/Sources/UltraUI/Components/UPCircleProgress.swift` |
| Android · Jetpack Compose | `UPCircleProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCircleProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCircleProgress` | `ultra-ui/src/main/ets/components/UPCircleProgress.ets` |
| Flutter · Dart | `UPCircleProgress` | `packages/ultra_ui/lib/src/widgets/up_circle_progress.dart` |
| React Native · TypeScript | `UPCircleProgress` | `src/components/circle-progress` |
| Taro · React + TypeScript | `UPCircleProgress` | `src/ultra-ui/components/up-circle-progress` |
| uni-app · Vue 3 | `up-circle-progress` | `uni_modules/uview-ultra/components/up-circle-progress` |
| uni-app-x · UTS / UVUE | `up-circle-progress` | `uni_modules/uview-ultra/components/up-circle-progress` |

