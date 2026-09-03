---
title: Loading icon 加载动画
description: 纯 CSS/原生绘制的加载指示器，提供圆环、花朵、半圆三种形态。
generated: true
---

# Loading icon 加载动画

纯 CSS/原生绘制的加载指示器，提供圆环、花朵、半圆三种形态。

<PlatformBadges component="loading-icon" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLoadingIcon

UPLoadingIcon(props = demoCase.props)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LoadingIconDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadingIconDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/loading_icon_page.dart`</small>

</template>

<template #reactnative>

#### 自定义图片加载插槽

```tsx
import { UPLoadingIcon } from 'ultra-ui-rn';

loading={<UPLoadingIcon color="red" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/ImageDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/loading-icon/index.tsx`</small>

</template>

<template #uniapp>

#### 基本案列

```vue
<up-loading-icon></up-loading-icon>
```

#### 半圆loading

```vue
<up-loading-icon mode="semicircle"></up-loading-icon>
```

#### 圆形loading

```vue
<up-loading-icon mode="circle"></up-loading-icon>
```

#### 自定义动画

```vue
<up-loading-icon mode="circle" timingFunction="linear"></up-loading-icon>
```

#### 自定义颜色

```vue
<up-loading-icon color="#19be6b"></up-loading-icon>
```

#### 自定义文字

```vue
<up-loading-icon
    :vertical="true"
    text="加载中"
></up-loading-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/loading-icon/loading-icon.uvue`</small>

</template>

<template #uniappx>

#### 基本案列

```vue
<up-loading-icon></up-loading-icon>
```

#### 半圆loading

```vue
<up-loading-icon mode="semicircle"></up-loading-icon>
```

#### 圆形loading

```vue
<up-loading-icon mode="circle"></up-loading-icon>
```

#### 自定义动画

```vue
<up-loading-icon mode="circle" timingFunction="linear"></up-loading-icon>
```

#### 自定义颜色

```vue
<up-loading-icon color="#19be6b"></up-loading-icon>
```

#### 自定义文字

```vue
<up-loading-icon
    :vertical="true"
    text="加载中"
></up-loading-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/loading-icon/loading-icon.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadingIcon` | `UltraUI/Sources/UltraUI/Components/UPLoadingIcon.swift` |
| Android · Jetpack Compose | `UPLoadingIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadingIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadingIcon` | `ultra-ui/src/main/ets/components/UPLoadingIcon.ets` |
| Flutter · Dart | `UPLoadingIcon` | `packages/ultra_ui/lib/src/widgets/up_loading_icon.dart` |
| React Native · TypeScript | `UPLoadingIcon` | `src/components/loading-icon` |
| Taro · React + TypeScript | `UPLoadingIcon` | `src/ultra-ui/components/up-loading-icon` |
| uni-app · Vue 3 | `up-loading-icon` | `uni_modules/uview-ultra/components/up-loading-icon` |
| uni-app-x · UTS / UVUE | `up-loading-icon` | `uni_modules/uview-ultra/components/up-loading-icon` |

