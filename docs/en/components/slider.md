---
title: Slider
description: Pick a value from a continuous or stepped range by dragging.
generated: true
---

# Slider

Pick a value from a continuous or stepped range by dragging.

<PlatformBadges component="slider" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/slider_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSlider } from 'ultra-ui-rn';

<UPSlider onChange={setValue1} useNative={false} value={value1} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SliderDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSlider } from '@ultra-ui'

<UPSlider value={basic} onChange={setBasic} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/slider/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/slider/slider.nvue`</small>

</template>

<template #uniappx>

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/slider/slider.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `change` |
| `changing` |
| `input` |
| `start` |

### Slots

| Slot |
| --- |
| `default` |
| `max` |
| `min` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSlider` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPSliderComponents.kt` |
| Flutter · Dart | `UPSlider` | `packages/ultra_ui/lib/src/widgets/up_slider.dart` |
| React Native · TypeScript | `UPSlider` | `src/components/slider` |
| Taro · React + TypeScript | `UPSlider` | `src/ultra-ui/components/up-slider` |
| uni-app · Vue 3 | `up-slider` | `src/uni_modules/uview-plus/components/u-slider` |
| uni-app-x · UTS / UVUE | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |

