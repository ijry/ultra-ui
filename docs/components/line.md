---
title: Line 线条
description: 可控制方向、长度、颜色与虚实的一根线。
generated: true
---

# Line 线条

可控制方向、长度、颜色与虚实的一根线。

<PlatformBadges component="line" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLine
import net.lingyun.ultraui.android.components.UPLineProps

UPLine(props = UPLineProps(color = "#2979ff", length = "100%", margin = "8px"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

#### 基础线条

```typescript
import { UPLine, UPLineProps } from '@lingyun/ultra-ui-hos';

UPLine({ props: new UPLineProps() })
```

#### 竖向线条与虚线兼容

```typescript
UPLine({ props: new UPLineProps({ direction: 'col', length: 48, color: 'success' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LineDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/line_page.dart`</small>

</template>

<template #reactnative>

#### 基本案例

```tsx
import { UPLine } from 'ultra-ui-rn';

<UPLine />
```

#### 自定义颜色

```tsx
<UPLine color="#2979ff" />
```

#### 自定义长度

```tsx
<UPLine length="200" />
```

#### 自定义方向

```tsx
<UPLine color="#2979ff" direction="col" length="30" />
```

#### 是否显示1px粗线条

```tsx
<UPLine hairline={false} />
```

#### 线条与上下左右元素的间距

```tsx
<UPLine margin="20" />
```

#### 是否虚线

```tsx
<UPLine color="#2979ff" dashed />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/LineDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

默认横向、100% 长度、0.5px 细线

```tsx
import { UPLine } from '@ultra-ui'

<UPLine />
```

#### 长度

length 支持百分比与带单位的值

```tsx
<UPLine length='100%' />
```

#### 颜色

color 支持主题 token 与任意 CSS 颜色

```tsx
<UPLine />
```

#### 虚线

dashed 属性

```tsx
<UPLine />
```

#### 线条粗细

hairline=true 为 0.5px 细线，false 为 1px

```tsx
<UPLine hairline />
```

#### 间距

margin 支持 CSS margin 简写

```tsx
<UPLine />
```

#### 竖向线条

direction=col，length 表现为高度

```tsx
<UPLine direction='col' length='24px' />
```

#### 应用场景

作为列表项之间的分割线

```tsx
<UPLine />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/line/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

组件内部有预置的参数，直接使用即可，有如下几个参数需要了解：

- `color`为线条的颜色
- `direction`为线条的方向，默认为横向
- `length`参数需要特别留意，它需要带上单位，比如设置为"50%"，"500rpx"等，在线条为横向时，表现为线条的长度；在线条为竖向时，表现为线条的高度。

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

#### 是否虚线

- `dashed`控制线条是否虚线：

```vue
<template>
	<up-line dashed></up-line>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/line.md`</small>

</template>

<template #uniappx>

#### 基本使用

组件内部有预置的参数，直接使用即可，有如下几个参数需要了解：

- `color`为线条的颜色
- `direction`为线条的方向，默认为横向
- `length`参数需要特别留意，它需要带上单位，比如设置为"50%"，"500rpx"等，在线条为横向时，表现为线条的长度；在线条为竖向时，表现为线条的高度。

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

#### 是否虚线

- `dashed`控制线条是否虚线：

```vue
<template>
	<up-line dashed></up-line>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/line.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | — | `String` | `'#d6d7d9'` |
| `length` | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等 | `String / Number` | `'100%'` |
| `direction` | 线条方向，col-竖向，row-横向 | `String` | `'row'` |
| `hairline` | 是否显示细边框 | `Boolean` | `true` |
| `margin` | 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px" | `String / Number` | `0` |
| `dashed` | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLine` | `UltraUI/Sources/UltraUI/Components/UPLine.swift` |
| Android · Jetpack Compose | `UPLine` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLine.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLine` | `ultra-ui/src/main/ets/components/UPLine.ets` |
| Flutter · Dart | `UPLine` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPLine` | `src/components/line` |
| Taro · React + TypeScript | `UPLine` | `src/ultra-ui/components/up-line` |
| uni-app · Vue 3 | `up-line` | `uni_modules/uview-ultra/components/up-line` |
| uni-app-x · UTS / UVUE | `up-line` | `uni_modules/uview-ultra/components/up-line` |

