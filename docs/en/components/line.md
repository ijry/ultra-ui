---
title: Line
description: A single line with configurable direction, length, colour and dash style.
generated: true
---

# Line

A single line with configurable direction, length, colour and dash style.

<PlatformBadges component="line" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPLine()
```

<small>Snippet from `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLine
import net.lingyun.ultraui.android.components.UPLineProps

UPLine(props = UPLineProps(color = "#2979ff", length = "100%", margin = "8px"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLine, UPLineProps } from '@lingyun/ultra-ui-hos';

UPLine({ props: new UPLineProps() })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LineDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_LineBlock('基本案例', UPLine()
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/line_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLine } from 'ultra-ui-rn';

<UPLine />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/LineDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPLine } from '@ultra-ui'

<UPLine />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/line/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-line></up-line>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/line/line.nvue`</small>

</template>

<template #uniappx>

```vue
<up-line></up-line>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/line/line.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `color` | — | `String` | `'#d6d7d9'` |
| `length` | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等 | `String / Number` | `'100%'` |
| `direction` | 线条方向，col-竖向，row-横向 | `String` | `'row'` |
| `hairline` | 是否显示细边框 | `Boolean` | `true` |
| `margin` | 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px" | `String / Number` | `0` |
| `dashed` | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLine` | `UltraUI/Sources/UltraUI/Components/UPLine.swift` |
| Android · Jetpack Compose | `UPLine` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLine.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLine` | `ultra-ui/src/main/ets/components/UPLine.ets` |
| Flutter · Dart | `UPLine` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPLine` | `src/components/line` |
| Taro · React + TypeScript | `UPLine` | `src/ultra-ui/components/up-line` |
| uni-app · Vue 3 | `up-line` | `src/uni_modules/uview-plus/components/u-line` |
| uni-app-x · UTS / UVUE | `up-line` | `uni_modules/uview-ultra/components/up-line` |

