---
title: Circle progress
description: A ring progress indicator for completion rates and scores.
generated: true
---

# Circle progress

A ring progress indicator for completion rates and scores.

<PlatformBadges component="circle-progress" show-missing />

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

#### Basic usage

```tsx
import { UPCircleProgress } from 'ultra-ui-rn';

<UPCircleProgress percentage={50}>
<Text style={{ fontSize: 16, fontWeight: '600' }}>50%</Text>
</UPCircleProgress>
```

#### Different progress values

```tsx
<UPCircleProgress percentage={25}>
<Text style={{ fontSize: 14 }}>25%</Text>
</UPCircleProgress>
```

#### Custom content

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

#### Basic usage

```tsx
import { UPCircleProgress } from '@ultra-ui'

<UPCircleProgress percentage={25} />
```

#### Custom colour

```tsx
<UPCircleProgress percentage={60} activeColor='#19be6b' />
```

#### Size and stroke width

```tsx
<UPCircleProgress percentage={70} width={70} borderWidth={4} />
```

#### Line cap style

```tsx
<UPCircleProgress percentage={45} round />
```

#### Start angle

```tsx
<UPCircleProgress percentage={30} startAngle={0} />
```

#### Custom centre content

```tsx
<UPCircleProgress percentage={80} activeColor='#2979ff'>
  <View className='circle-progress-demo__center'>
    <Text className='circle-progress-demo__value'>80</Text>
    <Text className='circle-progress-demo__label'>已完成</Text>
  </View>
</UPCircleProgress>
```

#### Changing it at runtime

```tsx
<UPCircleProgress percentage={percentage} activeColor='#19be6b' />
```

#### Animation off

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

