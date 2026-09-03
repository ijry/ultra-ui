---
title: Line
description: A single line with configurable direction, length, colour and dash style.
generated: true
---

# Line

A single line with configurable direction, length, colour and dash style.

<PlatformBadges component="line" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPLine()
```

```swift
UPLine(color: "primary", dashed: true)
```

```swift
UPLine(color: "error", direction: "col")
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

#### Basic line

```typescript
import { UPLine, UPLineProps } from '@lingyun/ultra-ui-hos';

UPLine({ props: new UPLineProps() })
```

#### Vertical and dashed together

```typescript
UPLine({ props: new UPLineProps({ direction: 'col', length: 48, color: 'success' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LineDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_LineBlock('基本案例', UPLine()
```

```dart
_LineBlock('自定义颜色', UPLine(color: '#2979ff')
```

```dart
_LineBlock('自定义长度', UPLine(length: 200)
```

```dart
UPLine(
    length: 30, color: '#2979ff', direction: 'col')
```

```dart
_LineBlock('是否显示1px粗线条', UPLine(hairline: false)
```

```dart
_LineBlock('线条与上下左右元素的间距', UPLine(margin: 20)
```

```dart
_LineBlock('是否虚线', UPLine(color: '#2979ff', dashed: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/line_page.dart`</small>

</template>

<template #reactnative>

#### Basic example

```tsx
import { UPLine } from 'ultra-ui-rn';

<UPLine />
```

#### Custom colour

```tsx
<UPLine color="#2979ff" />
```

#### Custom length

```tsx
<UPLine length="200" />
```

#### Custom direction

```tsx
<UPLine color="#2979ff" direction="col" length="30" />
```

#### Showing a 1px line

```tsx
<UPLine hairline={false} />
```

#### Spacing around the line

```tsx
<UPLine margin="20" />
```

#### Dashed or solid

```tsx
<UPLine color="#2979ff" dashed />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/LineDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPLine } from '@ultra-ui'

<UPLine />
```

#### Length

```tsx
<UPLine length='100%' />
```

#### Colours

```tsx
<UPLine />
```

#### Dashed

```tsx
<UPLine />
```

#### Line thickness

```tsx
<UPLine hairline />
```

#### Spacing

```tsx
<UPLine />
```

#### Vertical line

```tsx
<UPLine direction='col' length='24px' />
```

#### When to use it

```tsx
<UPLine />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/line/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	/* 基础使用 */
	<up-line></up-line>
	
	/* 自定义颜色 */
	<up-line color="#2979ff"></up-line>
	
	/* 自定义线条方向 */
	<up-line direction="col"></up-line>
	
	/* 自定义线条长度 */
	<up-line length="50%"></up-line>
</template>
```

#### Dashed or solid

```vue
<template>
	<up-line dashed></up-line>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/line.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	/* 基础使用 */
	<up-line></up-line>
	
	/* 自定义颜色 */
	<up-line color="#2979ff"></up-line>
	
	/* 自定义线条方向 */
	<up-line direction="col"></up-line>
	
	/* 自定义线条长度 */
	<up-line length="50%"></up-line>
</template>
```

#### Dashed or solid

```vue
<template>
	<up-line dashed></up-line>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/line.md`</small>

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
| uni-app · Vue 3 | `up-line` | `uni_modules/uview-ultra/components/up-line` |
| uni-app-x · UTS / UVUE | `up-line` | `uni_modules/uview-ultra/components/up-line` |

