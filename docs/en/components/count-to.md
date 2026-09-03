---
title: Count to
description: Animates a number from a start value to a target value.
generated: true
---

# Count to

Animates a number from a start value to a target value.

<PlatformBadges component="count-to" show-missing />

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
import net.lingyun.ultraui.android.components.UPCountTo
import net.lingyun.ultraui.android.components.UPCountToProps

DemoSection("数字滚动") { UPCountTo(UPCountToProps(startVal = 0, endVal = 128, autoplay = false))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCountTo(endVal: 3000, onEnd: _end)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/count_to_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCountTo } from 'ultra-ui-rn';

<UPCountTo endVal={3000} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CountToDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCountTo } from '@ultra-ui'

<UPCountTo startVal={0} endVal={2000} duration={2000} autoplay separator=',' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/count-to/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-count-to
    :endVal="value"
    @end="end"
></up-count-to>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/countTo/countTo.nvue`</small>

</template>

<template #uniappx>

```vue
<up-count-to
    :endVal="value"
    @end="end"
></up-count-to>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/countTo/countTo.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `startVal` | 开始的数值，默认从0增长到某一个数 | `String / Number` | `0` |
| `endVal` | 要滚动的目标数值，必须 | `String / Number` | `0` |
| `duration` | 滚动到目标数值的动画持续时间，单位为毫秒（ms） | `String / Number` | `2000` |
| `autoplay` | 设置数值后是否自动开始滚动 | `Boolean` | `true` |
| `decimals` | 要显示的小数位数 | `String / Number` | `0` |
| `useEasing` | 是否在即将到达目标数值的时候，使用缓慢滚动的效果 | `Boolean` | `true` |
| `decimal` | 十进制分割 | `String / Number` | `'.'` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `fontSize` | 字体大小 | `String / Number` | `22` |
| `bold` | 是否加粗字体 | `Boolean` | `false` |
| `separator` | 千位分隔符，类似金额的分割(￥23,321.05中的",") | `String` | `''` |

### Events

| Event |
| --- |
| `end` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCountTo` | `UltraUI/Sources/UltraUI/Components/UPCountTo.swift` |
| Android · Jetpack Compose | `UPCountTo` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPCountTo` | `packages/ultra_ui/lib/src/widgets/up_count_to.dart` |
| React Native · TypeScript | `UPCountTo` | `src/components/count-to` |
| Taro · React + TypeScript | `UPCountTo` | `src/ultra-ui/components/up-count-to` |
| uni-app · Vue 3 | `up-count-to` | `src/uni_modules/uview-plus/components/u-count-to` |
| uni-app-x · UTS / UVUE | `up-count-to` | `uni_modules/uview-ultra/components/up-count-to` |

