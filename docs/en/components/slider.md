---
title: Slider
description: Pick a value from a continuous or stepped range by dragging.
generated: true
---

# Slider

Pick a value from a continuous or stepped range by dragging.

<PlatformBadges component="slider" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Basic example

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSlider(
  value: _value1,
  onUpdateValue: (value) {
    setState(() => _value1 = (value as num).toDouble());
  },
)
```

#### Custom range (10–50)

```dart
UPSlider(
  value: _value2,
  showValue: true,
  min: 10,
  max: 50,
  onUpdateValue: (value) {
    setState(() => _value2 = (value as num).toDouble());
  },
)
```

#### Explicit step (5)

```dart
UPSlider(
  value: _value4,
  step: 5,
  onUpdateValue: (value) {
    setState(() => _value4 = (value as num).toDouble());
  },
)
```

#### Fractional step (0.1)

```dart
UPSlider(
  value: _value3,
  step: 0.1,
  min: 0,
  max: 1,
  showValue: true,
  onUpdateValue: (value) {
    setState(() => _value3 = (value as num).toDouble());
  },
)
```

#### Custom styling

```dart
UPSlider(
  value: _value5,
  activeColor: '#deab8a',
  blockColor: '#f47920',
  height: '20px',
  onUpdateValue: (value) {
    setState(() => _value5 = (value as num).toDouble());
  },
)
```

#### Custom styling with an image

```dart
UPSlider(
  value: _value5,
  activeColor: '#deab8a',
  blockColor: '#f47920',
  height: '4px',
  onUpdateValue: (value) {
    setState(() => _value5 = (value as num).toDouble());
  },
)
```

#### Range selection (two handles)

```dart
UPSlider(
  isRange: true,
  showValue: true,
  step: 2,
  rangeValue: _value6,
  height: '2px',
  onUpdateValue: (value) {
    setState(() => _value6 = _asRange(value));
  },
)
```

#### Vertical direction

```dart
UPSlider(
  value: _value7,
  vertical: true,
  size: '2px',
  length: '200px',
  onUpdateValue: (value) {
    setState(() => _value7 = (value as num).toDouble());
  },
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/slider_page.dart`</small>

</template>

<template #reactnative>

#### Basic example

```tsx
import { UPSlider } from 'ultra-ui-rn';

<UPSlider onChange={setValue1} useNative={false} value={value1} />
```

#### Custom range (10–50)

```tsx
<UPSlider max="50" min="10" onChange={setValue2} showValue useNative={false} value={value2} />
```

#### Explicit step (5)

```tsx
<UPSlider onChange={setValue4} step={5} useNative={false} value={value4} />
```

#### Fractional step (0.1)

```tsx
<UPSlider max={1} min={0} onChange={setValue3} showValue step={0.1} value={value3} />
```

#### Custom styling

```tsx
<UPSlider
  activeColor="#deab8a"
  blockColor="#f47920"
  height="20px"
  onChange={setValue5}
  value={value5}
/>
```

#### Vertical direction

```tsx
<UPSlider length="200px" onChange={setValue7} size="2px" value={value7} vertical />
```

#### Vertical range selection

```tsx
<UPSlider isRange length="200px" rangeValue={value8} size="2px" vertical />
```

#### Inside a modal

```tsx
<UPSlider max="4" min="1" onChange={setSliderValue} showValue value={sliderValue} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SliderDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPSlider } from '@ultra-ui'

<UPSlider value={basic} onChange={setBasic} />
```

#### Custom range and step

```tsx
<UPSlider
  value={stepped}
  min={20}
  max={80}
  step={5}
  onChange={setStepped}
/>
```

#### Showing the value

```tsx
<UPSlider value={withValue} showValue onChange={setWithValue} />
```

#### Disabled

```tsx
<UPSlider value={45} disabled />
```

#### Vertical

```tsx
<UPSlider
  value={vertical}
  vertical
  length={300}
  onChange={setVertical}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/slider/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<up-slider v-model="value"></up-slider>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const value = ref(30);  
</script>
```

#### Setting the minimum and maximum

```vue
<up-slider v-model="value" min="30" max="80"></up-slider>
```

#### Setting the step

```vue
<up-slider v-model="value" step="20" min="20" max="100"></up-slider>
```

```vue
<up-slider v-model="value" :step="0.1" :min="0" :max="1" showValue></up-slider>
```

#### Inside a container that starts hidden

```vue
<up-popup v-model:show="popupShow">
	<view class="slot-content" style="width: 100%">
		<up-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
	</view>
</up-popup>

<script setup> 
import { ref } from "vue";
const popupShow = ref(false);
const sliderValue = ref(4);
</script>
```

#### Disabled state

```vue
<up-slider v-model="value" disabled></up-slider>
```

#### Vertical orientation

```vue
<up-slider v-model="value" vertical length="200px"></up-slider>
```

#### Two-handle mode

```vue
<up-slider :rangeValue="range" isRange></up-slider>
```

#### Custom button content and styling

```vue
<template>
	<up-slider v-model="value" activeColor="#3c9cff" inactiveColor="#c0c4cc">
	</up-slider>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const value = ref(30);  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/slider.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<up-slider v-model="value"></up-slider>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const value = ref(30);  
</script>
```

#### Setting the minimum and maximum

```vue
<up-slider v-model="value" min="30" max="80"></up-slider>
```

#### Setting the step

```vue
<up-slider v-model="value" step="20" min="30" max="100"></up-slider>
```

#### Inside a container that starts hidden

```vue
<up-popup v-model:show="popupShow">
	<view class="slot-content" style="width: 100%">
		<up-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
	</view>
</up-popup>

<script setup> 
import { ref } from "vue";
const popupShow = ref(false);
const sliderValue = ref(4);
</script>
```

#### Disabled state

```vue
<up-slider v-model="value" disabled></up-slider>
```

#### Custom button content and styling

```vue
<template>
	<up-slider v-model="value" activeColor="#3c9cff" inactiveColor="#c0c4cc">
	</up-slider>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const value = ref(30);  
</script>
```

#### Restyling the whole picker

```vue
<up-slider v-model="value" block-width="40" block-color="red"></up-slider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/slider.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `min` | 最小可选值 | `Number / String` | `0` |
| `max` | 最大可选值 | `Number / String` | `100` |
| `step` | 步长，取值必须大于 0，并且可被(max - min)整除 | `Number / String` | `1` |
| `modelValue` | 当前取值 | `String / Number` | `—` |
| `value` | 当前取值 | `String / Number` | `0` |
| `isRange` | 是否区间模式 | `Boolean` | `—` |
| `rangeValue` | 双滑块时值 | `Array` | `—` |
| `activeColor` | 滑块右侧已选择部分的背景色 | `String` | `'#2979ff'` |
| `inactiveColor` | 滑块左侧未选择部分的背景色 | `String` | `'#c0c4cc'` |
| `blockSize` | 滑块的大小，取值范围为 12 - 28 | `Number / String` | `18` |
| `blockColor` | 滑块的颜色 | `String` | `'#ffffff'` |
| `blockStyle` | 用户对滑块的自定义颜色 | `Object` | `{}` |
| `disabled` | 禁用状态 | `Boolean` | `false` |
| `showValue` | 是否显示当前的选择值 | `Boolean` | `false` |
| `useNative` | 是否渲染uni-app框架内置组件 | `Boolean` | `false` |
| `height` | 滑块高度 | `String` | `'2px'` |
| `innerStyle` | — | `Object` | `{}` |

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
| uni-app · Vue 3 | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |
| uni-app-x · UTS / UVUE | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |

