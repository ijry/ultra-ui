---
title: Loading icon
description: A loading indicator drawn natively, in circle, flower or semicircle form.
generated: true
---

# Loading icon

A loading indicator drawn natively, in circle, flower or semicircle form.

<PlatformBadges component="loading-icon" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPLoadingIcon(color: "primary", text: "spinner")
```

```swift
UPLoadingIcon(color: "success", mode: "circle", text: "circle")
```

```swift
UPLoadingIcon(color: "warning", vertical: true, text: "vertical")
```

<small>Snippet from `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLoadingIcon

UPLoadingIcon(props = demoCase.props)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LoadingIconDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadingIcon, UPLoadingIconProps } from '@lingyun/ultra-ui-hos';

UPLoadingIcon({ props: new UPLoadingIconProps({ mode: 'spinner', color: 'primary', text: 'spinner 模式' }) })
```

```typescript
UPLoadingIcon({ props: new UPLoadingIconProps({ mode: 'semicircle', color: 'warning', text: 'semicircle 模式' }) })
```

```typescript
UPLoadingIcon({ props: new UPLoadingIconProps({ mode: 'circle', color: 'success', text: 'circle 模式', vertical: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadingIconDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_LoadingBlock('基本案例', UPLoadingIcon()
```

```dart
_LoadingBlock('半圆loading', UPLoadingIcon(mode: 'semicircle')
```

```dart
_LoadingBlock('圆形loading', UPLoadingIcon(mode: 'circle')
```

```dart
UPLoadingIcon(mode: 'circle', timingFunction: 'linear')
```

```dart
_LoadingBlock('自定义颜色', UPLoadingIcon(color: '#19be6b')
```

```dart
_LoadingBlock('自定义大小', UPLoadingIcon(size: 36, color: '#2979ff')
```

```dart
_LoadingBlock('自定义文字', UPLoadingIcon(vertical: true, text: '加载中')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/loading_icon_page.dart`</small>

</template>

<template #reactnative>

#### 自定义图片加载插槽

```tsx
import { UPLoadingIcon } from 'ultra-ui-rn';

loading={<UPLoadingIcon color="red" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/ImageDemo.tsx`</small>

</template>

<template #taro>

#### 模式

mode：spinner（默认）/ circle / semicircle

```tsx
import { UPLoadingIcon } from '@ultra-ui'

<UPLoadingIcon mode='spinner' />
```

#### 颜色

color 控制活动区域颜色

```tsx
<UPLoadingIcon mode='circle' color='#3c9cff' />
```

#### 暗边颜色

inactiveColor，仅 mode=circle 生效

```tsx
<UPLoadingIcon mode='circle' color='#3c9cff' />
```

#### 尺寸

size，单位默认 px

```tsx
<UPLoadingIcon mode='circle' size={18} color='#3c9cff' />
```

#### 文字

text / textSize / textColor

```tsx
<UPLoadingIcon text='加载中' />
```

#### 垂直排列

vertical=true，文字排在图标下方

```tsx
<UPLoadingIcon vertical text='加载中' />
```

#### 动画速度

duration，单位 ms，值越小转得越快

```tsx
<UPLoadingIcon mode='circle' color='#3c9cff' duration={400} />
```

#### 动画曲线

timingFunction，仅 circle / semicircle 生效

```tsx
<UPLoadingIcon mode='semicircle' color='#3c9cff' timingFunction='ease-in-out' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/loading-icon/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view>
		<up-loading-icon></up-loading-icon>
	</view>
</template>
```

#### 动画文字

```vue
<up-loading-icon text="加载中" textSize="18"></up-loading-icon>
```

#### 模式类型

```vue
<up-loading-icon text="花朵形"></up-loading-icon>
<up-loading-icon mode="semicircle" text="半圆"></up-loading-icon>
<up-loading-icon mode="circle" text="圆型"></up-loading-icon>
```

#### 排列类型

```vue
<up-loading-icon :vertical="true"></up-loading-icon>
```

#### 动画模式

```vue
<up-loading-icon timing-function="linear"></up-loading-icon>
```

#### 动画运行时间

```vue
<up-loading-icon duration="2000"></up-loading-icon>
```

#### 图标颜色

```vue
<up-loading-icon color="red"></up-loading-icon>

<up-loading-icon mode="circle" inactive-color="red"></up-loading-icon>
```

#### 图标尺寸

```vue
<up-loading-icon size="36"></up-loading-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/loadingIcon.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view>
		<up-loading-icon></up-loading-icon>
	</view>
</template>
```

#### 动画文字

```vue
<up-loading-icon text="加载中" textSize="18"></up-loading-icon>
```

#### 模式类型

```vue
<up-loading-icon text="花朵形"></up-loading-icon>
<up-loading-icon mode="semicircle" text="半圆"></up-loading-icon>
<up-loading-icon mode="circle" text="圆型"></up-loading-icon>
```

#### 排列类型

```vue
<up-loading-icon :vertical="true"></up-loading-icon>
```

#### 动画模式

```vue
<up-loading-icon timing-function="linear"></up-loading-icon>
```

#### 动画运行时间

```vue
<up-loading-icon duration="2000"></up-loading-icon>
```

#### 图标颜色

```vue
<up-loading-icon color="red"></up-loading-icon>

<up-loading-icon mode="circle" inactive-color="red"></up-loading-icon>
```

#### 图标尺寸

```vue
<up-loading-icon size="36"></up-loading-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/loadingIcon.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否显示组件 | `Boolean` | `true` |
| `color` | 颜色 | `String` | `color['up-tips-color']` |
| `textColor` | 提示文字颜色 | `String` | `color['up-tips-color']` |
| `vertical` | 文字和图标是否垂直排列 | `Boolean` | `false` |
| `mode` | 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形 | `String` | `'spinner'` |
| `size` | 图标大小，单位默认px | `String / Number` | `24` |
| `textSize` | 文字大小 | `String / Number` | `15` |
| `text` | 文字内容 | `String / Number` | `''` |
| `timingFunction` | 动画模式 | `String` | `'ease-in-out'` |
| `duration` | 动画执行周期时间 | `String / Number` | `1200` |
| `inactiveColor` | mode=circle时的暗边颜色 | `String` | `''` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadingIcon` | `UltraUI/Sources/UltraUI/Components/UPLoadingIcon.swift` |
| Android · Jetpack Compose | `UPLoadingIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadingIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadingIcon` | `ultra-ui/src/main/ets/components/UPLoadingIcon.ets` |
| Flutter · Dart | `UPLoadingIcon` | `packages/ultra_ui/lib/src/widgets/up_loading_icon.dart` |
| React Native · TypeScript | `UPLoadingIcon` | `src/components/loading-icon` |
| Taro · React + TypeScript | `UPLoadingIcon` | `src/ultra-ui/components/up-loading-icon` |
| uni-app · Vue 3 | `up-loading-icon` | `uni_modules/uview-ultra/components/up-loading-icon` |
| uni-app-x · UTS / UVUE | `up-loading-icon` | `uni_modules/uview-ultra/components/up-loading-icon` |

