---
title: Slider 滑动选择器
description: 通过拖动滑块在连续或离散区间内取值。
generated: true
---

# Slider 滑动选择器

通过拖动滑块在连续或离散区间内取值。

<PlatformBadges component="slider" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSlider
import net.lingyun.ultraui.android.components.UPSliderProps

UPSlider(
    props = UPSliderProps(value = sliderValue, step = 5, showValue = true),
    onUpdateValue = { sliderValue = it },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSlider(
  value: _value1,
  onUpdateValue: (value) {
    setState(() => _value1 = (value as num).toDouble());
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/slider_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSlider } from 'ultra-ui-rn';

<UPSlider onChange={setValue1} useNative={false} value={value1} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/SliderDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSlider } from '@ultra-ui'

<UPSlider value={basic} onChange={setBasic} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/slider/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/slider/slider.nvue`</small>

</template>

<template #uniappx>

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/slider/slider.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `min` | 最小可选值 | `Number / String` | `—` |
| `max` | 最大可选值 | `Number / String` | `—` |
| `step` | 步长，取值必须大于 0，并且可被(max - min)整除 | `Number / String` | `—` |
| `modelValue` | 当前取值 | `String / Number` | `—` |
| `value` | 当前取值 | `String / Number` | `—` |
| `isRange` | 是否区间模式 | `Boolean` | `—` |
| `rangeValue` | 双滑块时值 | `Array` | `—` |
| `activeColor` | 滑块右侧已选择部分的背景色 | `String` | `—` |
| `inactiveColor` | 滑块左侧未选择部分的背景色 | `String` | `—` |
| `blockSize` | 滑块的大小，取值范围为 12 - 28 | `Number / String` | `—` |
| `blockColor` | 滑块的颜色 | `String` | `—` |
| `blockStyle` | 用户对滑块的自定义颜色 | `Object` | `—` |
| `disabled` | 禁用状态 | `Boolean` | `—` |
| `showValue` | 是否显示当前的选择值 | `Boolean` | `—` |
| `useNative` | 是否渲染uni-app框架内置组件 | `Boolean` | `—` |
| `height` | 滑块厚度 | `String` | `—` |
| `innerStyle` | — | `Object` | `—` |
| `vertical` | 是否垂直方向 | `Boolean` | `—` |
| `size` | 滑块粗细，为了支持垂直模式下统一粗细参数，用size代替height。 | `Number / String` | `—` |
| `length` | 滑块长度，水平和垂直模式的长度。 | `Number / String` | `—` |

### 事件

| 事件名 |
| --- |
| `change` |
| `changing` |
| `input` |
| `start` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `max` |
| `min` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSlider` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPSliderComponents.kt` |
| Flutter · Dart | `UPSlider` | `packages/ultra_ui/lib/src/widgets/up_slider.dart` |
| React Native · TypeScript | `UPSlider` | `src/components/slider` |
| Taro · React + TypeScript | `UPSlider` | `src/ultra-ui/components/up-slider` |
| uni-app · Vue 3 | `up-slider` | `src/uni_modules/uview-plus/components/u-slider` |
| uni-app-x · UTS / UVUE | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |

