---
title: Circle progress 圆形进度条
description: 环形进度指示器，适合展示完成度与得分。
generated: true
---

# Circle progress 圆形进度条

环形进度指示器，适合展示完成度与得分。

<PlatformBadges component="circle-progress" show-missing />

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
import net.lingyun.ultraui.android.components.UPCircleProgress

UPCircleProgress(percentage = percentage)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCircleProgress, UPCircleProgressProps } from '@lingyun/ultra-ui-hos';

UPCircleProgress({ props: new UPCircleProgressProps({ percentage: 30 }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CircleProgressDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPCircleProgress } from 'ultra-ui-rn';

<UPCircleProgress percentage={50}>
<Text style={{ fontSize: 16, fontWeight: '600' }}>50%</Text>
</UPCircleProgress>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CircleProgressDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCircleProgress } from '@ultra-ui'

<UPCircleProgress percentage={25} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/circle-progress/index.tsx`</small>

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `percentage` | — | `String / Number` | `30` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCircleProgress` | `UltraUI/Sources/UltraUI/Components/UPCircleProgress.swift` |
| Android · Jetpack Compose | `UPCircleProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCircleProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCircleProgress` | `ultra-ui/src/main/ets/components/UPCircleProgress.ets` |
| Flutter · Dart | `UPCircleProgress` | `packages/ultra_ui/lib/src/widgets/up_circle_progress.dart` |
| React Native · TypeScript | `UPCircleProgress` | `src/components/circle-progress` |
| Taro · React + TypeScript | `UPCircleProgress` | `src/ultra-ui/components/up-circle-progress` |
| uni-app · Vue 3 | `up-circle-progress` | `src/uni_modules/uview-plus/components/u-circle-progress` |
| uni-app-x · UTS / UVUE | `up-circle-progress` | `uni_modules/uview-ultra/components/up-circle-progress` |

