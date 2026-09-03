---
title: Transition 过渡动画
description: 为元素的进入与离开提供淡入、缩放、滑动等预设动画。
generated: true
---

# Transition 过渡动画

为元素的进入与离开提供淡入、缩放、滑动等预设动画。

<PlatformBadges component="transition" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 基础用法

show 控制显隐，默认 fade 模式

```tsx
import { UPTransition } from '@ultra-ui'

<UPTransition show={baseShow}>
  <View className='transition-demo__box'>Hello</View>
</UPTransition>
```

#### 动画模式

点击按钮播放对应 mode，再次点击同一按钮切换显隐

```tsx
<UPTransition show={modeShow} mode={mode} duration={400}>
  <View className='transition-demo__box'>{mode}</View>
</UPTransition>
```

#### 执行时间

duration 单位 ms，默认 300

```tsx
<UPTransition show={durationShow} mode='fade-zoom' duration={200}>
  <View className='transition-demo__box'>200ms</View>
</UPTransition>
```

#### 过渡函数

timingFunction 对应 CSS transition-timing-function

```tsx
<UPTransition
  show={timingShow}
  mode='slide-left'
  duration={800}
  timingFunction={timing}
>
  <View className='transition-demo__box'>{timing}</View>
</UPTransition>
```

#### 生命周期

6 个钩子按进场 / 离场顺序触发

```tsx
<UPTransition
  show={lifecycleShow}
  mode='zoom'
  duration={500}
  onBeforeEnter={() => pushLog('beforeEnter')}
  onEnter={() => pushLog('enter')}
  onAfterEnter={() => pushLog('afterEnter')}
  onBeforeLeave={() => pushLog('beforeLeave')}
  onLeave={() => pushLog('leave')}
  onAfterLeave={() => pushLog('afterLeave')}
  onClick={() => toast.show({ message: '点击了动画内容' })}
>
  <View className='transition-demo__box'>点我</View>
</UPTransition>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/transition/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过slot传入内容，默认使用的是`fade`效果

```vue
<template>
    <up-transition :show="show">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### 动画模式

通过`mode`传入效果模式，目前支持：
- `fade` 淡入
- `fade-up` 上滑淡入
- `fade-down` 下滑淡入
- `fade-left` 左滑淡入
- `fade-right` 右滑淡入
- `slide-up` 上滑进入
- `slide-down` 下滑进入
- `slide-left` 左滑进入
- `slide-right` 右滑进入
- `zoom-in` 缩放
- `zoom-out` 缩放

```vue
<template>
    <up-transition :show="show" mode="zoom-in">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/transition.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过slot传入内容，默认使用的是`fade`效果

```vue
<template>
    <up-transition :show="show">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### 动画模式

通过`mode`传入效果模式，目前支持：
- `fade` 淡入
- `fade-up` 上滑淡入
- `fade-down` 下滑淡入
- `fade-left` 左滑淡入
- `fade-right` 右滑淡入
- `slide-up` 上滑进入
- `slide-down` 下滑进入
- `slide-left` 左滑进入
- `slide-right` 右滑进入
- `zoom-in` 缩放
- `zoom-out` 缩放

```vue
<template>
    <up-transition :show="show" mode="zoom-in">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/transition.md`</small>

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
| uni-app · Vue 3 | `up-transition` | `uni_modules/uview-ultra/components/up-transition` |
| uni-app-x · UTS / UVUE | `up-transition` | `uni_modules/uview-ultra/components/up-transition` |

