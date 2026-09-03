---
title: Transition 过渡动画
description: 为元素的进入与离开提供淡入、缩放、滑动等预设动画。
generated: true
---

# Transition 过渡动画

为元素的进入与离开提供淡入、缩放、滑动等预设动画。

<PlatformBadges component="transition" show-missing />

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

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTransition(
  show: _show,
  mode: _mode,
  child: Container(
    key: const ValueKey('transition-preview'),
    width: 120,
    height: 120,
    color: const Color(0xFF1989FA),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/transition_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTransition } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPTransition } from '@ultra-ui'

<UPTransition show={baseShow}>
  <View className='transition-demo__box'>Hello</View>
</UPTransition>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/transition/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-transition
    :mode="mode"
    :show="show"
    :custom-style="style"
    @click="click"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave"
>
    <view class="transition"></view>
</up-transition>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/transition/transition.nvue`</small>

</template>

<template #uniappx>

```vue
<up-transition
    :mode="mode"
    :show="show"
    :custom-style="style"
    @click="click"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave"
>
    <view class="transition"></view>
</up-transition>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/transition/transition.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否展示组件 | `Boolean` | `—` |
| `mode` | 使用的动画模式 | `String` | `—` |
| `duration` | 动画的执行时间，单位ms | `String / Number` | `—` |
| `timingFunction` | 使用的动画过渡函数 | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `afterEnter` |
| `afterLeave` |
| `beforeEnter` |
| `beforeLeave` |
| `click` |
| `enter` |
| `leave` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPTransition` | `UltraUI/Sources/UltraUI/Components/UPTransition.swift` |
| Flutter · Dart | `UPTransition` | `packages/ultra_ui/lib/src/widgets/up_transition.dart` |
| React Native · TypeScript | `UPTransition` | `src/components/transition` |
| Taro · React + TypeScript | `UPTransition` | `src/ultra-ui/components/up-transition` |
| uni-app · Vue 3 | `up-transition` | `src/uni_modules/uview-plus/components/u-transition` |
| uni-app-x · UTS / UVUE | `up-transition` | `uni_modules/uview-ultra/components/up-transition` |

