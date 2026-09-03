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

```tsx
import { UPCircleProgress } from 'ultra-ui-rn';

<UPCircleProgress percentage={50}>
<Text style={{ fontSize: 16, fontWeight: '600' }}>50%</Text>
</UPCircleProgress>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CircleProgressDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCircleProgress } from '@ultra-ui'

<UPCircleProgress percentage={25} />
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
| uni-app · Vue 3 | `up-circle-progress` | `src/uni_modules/uview-plus/components/u-circle-progress` |
| uni-app-x · UTS / UVUE | `up-circle-progress` | `uni_modules/uview-ultra/components/up-circle-progress` |

