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

### 基本案例

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSlider(
  value: _value1,
  onUpdateValue: (value) {
    setState(() => _value1 = (value as num).toDouble());
  },
)
```

### 自定义范围(10—50)

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

### 指定步长(每次步进5)

```dart
UPSlider(
  value: _value4,
  step: 5,
  onUpdateValue: (value) {
    setState(() => _value4 = (value as num).toDouble());
  },
)
```

### 小数步长(每次步进0.1)

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

### 自定义样式

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

### 自定义样式(图片)

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

### 区间选择(双滑块)

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

### 垂直方向

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

### 垂直方向区间选择

```dart
UPSlider(
  rangeValue: _value8,
  isRange: true,
  vertical: true,
  size: '2px',
  length: '200px',
  onUpdateValue: (value) {
    setState(() => _value8 = _asRange(value));
  },
)
```

### 在popup弹窗中使用

```dart
UPSlider(
  value: _sliderValue,
  min: 1,
  max: 4,
  showValue: true,
  onUpdateValue: (value) {
    setState(() => _sliderValue = (value as num).toDouble());
  },
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/slider_page.dart`</small>

</template>

<template #reactnative>

### 基本案例

```tsx
import { UPSlider } from 'ultra-ui-rn';

<UPSlider onChange={setValue1} useNative={false} value={value1} />
```

### 自定义范围(10—50)

```tsx
<UPSlider max="50" min="10" onChange={setValue2} showValue useNative={false} value={value2} />
```

### 指定步长(每次步进5)

```tsx
<UPSlider onChange={setValue4} step={5} useNative={false} value={value4} />
```

### 小数步长(每次步进0.1)

```tsx
<UPSlider max={1} min={0} onChange={setValue3} showValue step={0.1} value={value3} />
```

### 自定义样式

```tsx
<UPSlider
  activeColor="#deab8a"
  blockColor="#f47920"
  height="20px"
  onChange={setValue5}
  value={value5}
/>
```

### 垂直方向

```tsx
<UPSlider length="200px" onChange={setValue7} size="2px" value={value7} vertical />
```

### 垂直方向区间选择

```tsx
<UPSlider isRange length="200px" rangeValue={value8} size="2px" vertical />
```

### 在Modal弹窗中使用

```tsx
<UPSlider max="4" min="1" onChange={setSliderValue} showValue value={sliderValue} />
```

### 在popup弹窗中使用

```tsx
<UPSlider max="4" min="1" onChange={setSliderValue} showValue value={sliderValue} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SliderDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

受控 value + onChange

```tsx
import { UPSlider } from '@ultra-ui'

<UPSlider value={basic} onChange={setBasic} />
```

### 自定义范围与步长

min=20 / max=80 / step=5

```tsx
<UPSlider
  value={stepped}
  min={20}
  max={80}
  step={5}
  onChange={setStepped}
/>
```

### 显示数值

showValue 显示气泡

```tsx
<UPSlider value={withValue} showValue onChange={setWithValue} />
```

### 禁用

disabled 阻止交互

```tsx
<UPSlider value={45} disabled />
```

### 竖向

vertical + length

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

### 基本案例

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

### 自定义范围(10—50)

```vue
<up-slider
    :useNative="useNative"
    v-model="value2"
    showValue
    min="10"
    max="50"
></up-slider>
```

### 指定步长(每次步进5)

```vue
<up-slider
    :useNative="useNative"
    v-model="value4"
    :step="5"
></up-slider>
```

### 小数步长(每次步进0.1)

```vue
<up-slider
    v-model="value3"
    :step="0.1"
    :min="0"
    :max="1"
    showValue
></up-slider>
```

### 自定义样式

```vue
<up-slider
    v-model="value5"
    activeColor="#deab8a"
    blockColor="#f47920"
    height="20px"
></up-slider>
```

### 自定义样式(图片)

```vue
<up-slider
    v-model="value5"
    activeColor="#deab8a"
    blockColor="#f47920"
    height="4px"
>
    <template #default>
        <view>
            <svg t="1722094047017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11063" width="32" height="32"><path d="M965.12 469.333333c-81.493333-90.88-230.186667-149.333333-378.453333-149.333333h-6.826667a193.28 193.28 0 0 0-289.493333-109.226667 188.373333 188.373333 0 0 0-51.2 47.36 42.666667 42.666667 0 0 0-2.773334 45.653334 42.666667 42.666667 0 0 0 42.666667 21.333333A149.333333 149.333333 0 0 1 384 355.626667l-16.426667 6.4A42.666667 42.666667 0 0 0 341.333333 401.28v221.44A42.666667 42.666667 0 0 0 367.36 661.333333l16.64 7.466667a150.4 150.4 0 0 1-106.666667 30.506667 42.666667 42.666667 0 0 0-42.666666 21.333333 42.666667 42.666667 0 0 0 2.773333 45.866667 187.946667 187.946667 0 0 0 51.2 47.36 194.56 194.56 0 0 0 103.893333 29.653333A192 192 0 0 0 580.053333 704h6.613334c149.333333 0 296.96-58.666667 378.453333-149.333333a64 64 0 0 0 0-85.333334z m-535.68-130.773333a192 192 0 0 0-155.946667-55.04 146.133333 146.133333 0 0 1 39.68-36.693333 152.533333 152.533333 0 0 1 176.213334 10.24 149.333333 149.333333 0 0 1 46.293333 65.28 615.04 615.04 0 0 0-104.746667 18.346666 20.053333 20.053333 0 0 0-1.493333-2.133333zM489.173333 768a152.32 152.32 0 0 1-176.213333 10.24 135.893333 135.893333 0 0 1-38.826667-36.266667 192 192 0 0 0 155.093334-55.466666 21.333333 21.333333 0 0 0 2.133333-3.84 615.466667 615.466667 0 0 0 104.533333 18.346666A149.333333 149.333333 0 0 1 489.173333 768z m444.16-242.133333C859.52 608.213333 723.413333 661.333333 586.666667 661.333333a546.773333 546.773333 0 0 1-202.666667-38.613333V401.28A549.76 549.76 0 0 1 586.666667 362.666667c136.746667 0 272.853333 53.12 346.666666 135.466666a21.333333 21.333333 0 0 1 0 27.733334z" fill="#CE4141" p-id="11064"></path><path d="M682.666667 426.666667a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z m0 128a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667zM128 448h149.333333a21.333333 21.333333 0 0 0 0-42.666667H128a21.333333 21.333333 0 0 0 0 42.666667zM298.666667 597.333333a21.333333 21.333333 0 0 0-21.333334-21.333333H192a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 21.333334-21.333334zM298.666667 512a21.333333 21.333333 0 0 0-21.333334-21.333333H64a21.333333 21.333333 0 0 0 0 42.666666h213.333333a21.333333 21.333333 0 0 0 21.333334-21.333333z" fill="#CE4141" p-id="11065"></path><path d="M448 426.666667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11066"></path><path d="M448 512m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11067"></path><path d="M448 597.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11068"></path></svg>
        </view>
    </template>
</up-slider>
```

### 区间选择(双滑块)

```vue
<up-slider
    isRange
    showValue
    step="2"
    v-model:rangeValue="value6"
    height="2px"
></up-slider>
```

### 在Modal弹窗中使用

```vue
<up-slider v-if="modelShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
```

### 在popup弹窗中使用

```vue
<up-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/slider/slider.uvue`</small>

</template>

<template #uniappx>

### 基本案例

```vue
<up-slider
    :useNative="useNative"
    v-model="value1"
></up-slider>
```

### 自定义范围(10—50)

```vue
<up-slider
    :useNative="useNative"
    v-model="value2"
    showValue
    min="10"
    max="50"
></up-slider>
```

### 指定步长(每次步进5)

```vue
<up-slider
    :useNative="useNative"
    v-model="value4"
    :step="5"
></up-slider>
```

### 小数步长(每次步进0.1)

```vue
<up-slider
    v-model="value3"
    :step="0.1"
    :min="0"
    :max="1"
    showValue
></up-slider>
```

### 自定义样式

```vue
<up-slider
    v-model="value5"
    activeColor="#deab8a"
    blockColor="#f47920"
    height="20px"
></up-slider>
```

### 自定义样式(图片)

```vue
<up-slider
    v-model="value5"
    activeColor="#deab8a"
    blockColor="#f47920"
    height="4px"
>
    <template #default>
        <view>
            <svg t="1722094047017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11063" width="32" height="32"><path d="M965.12 469.333333c-81.493333-90.88-230.186667-149.333333-378.453333-149.333333h-6.826667a193.28 193.28 0 0 0-289.493333-109.226667 188.373333 188.373333 0 0 0-51.2 47.36 42.666667 42.666667 0 0 0-2.773334 45.653334 42.666667 42.666667 0 0 0 42.666667 21.333333A149.333333 149.333333 0 0 1 384 355.626667l-16.426667 6.4A42.666667 42.666667 0 0 0 341.333333 401.28v221.44A42.666667 42.666667 0 0 0 367.36 661.333333l16.64 7.466667a150.4 150.4 0 0 1-106.666667 30.506667 42.666667 42.666667 0 0 0-42.666666 21.333333 42.666667 42.666667 0 0 0 2.773333 45.866667 187.946667 187.946667 0 0 0 51.2 47.36 194.56 194.56 0 0 0 103.893333 29.653333A192 192 0 0 0 580.053333 704h6.613334c149.333333 0 296.96-58.666667 378.453333-149.333333a64 64 0 0 0 0-85.333334z m-535.68-130.773333a192 192 0 0 0-155.946667-55.04 146.133333 146.133333 0 0 1 39.68-36.693333 152.533333 152.533333 0 0 1 176.213334 10.24 149.333333 149.333333 0 0 1 46.293333 65.28 615.04 615.04 0 0 0-104.746667 18.346666 20.053333 20.053333 0 0 0-1.493333-2.133333zM489.173333 768a152.32 152.32 0 0 1-176.213333 10.24 135.893333 135.893333 0 0 1-38.826667-36.266667 192 192 0 0 0 155.093334-55.466666 21.333333 21.333333 0 0 0 2.133333-3.84 615.466667 615.466667 0 0 0 104.533333 18.346666A149.333333 149.333333 0 0 1 489.173333 768z m444.16-242.133333C859.52 608.213333 723.413333 661.333333 586.666667 661.333333a546.773333 546.773333 0 0 1-202.666667-38.613333V401.28A549.76 549.76 0 0 1 586.666667 362.666667c136.746667 0 272.853333 53.12 346.666666 135.466666a21.333333 21.333333 0 0 1 0 27.733334z" fill="#CE4141" p-id="11064"></path><path d="M682.666667 426.666667a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z m0 128a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667zM128 448h149.333333a21.333333 21.333333 0 0 0 0-42.666667H128a21.333333 21.333333 0 0 0 0 42.666667zM298.666667 597.333333a21.333333 21.333333 0 0 0-21.333334-21.333333H192a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 21.333334-21.333334zM298.666667 512a21.333333 21.333333 0 0 0-21.333334-21.333333H64a21.333333 21.333333 0 0 0 0 42.666666h213.333333a21.333333 21.333333 0 0 0 21.333334-21.333333z" fill="#CE4141" p-id="11065"></path><path d="M448 426.666667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11066"></path><path d="M448 512m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11067"></path><path d="M448 597.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11068"></path></svg>
        </view>
    </template>
</up-slider>
```

### 区间选择(双滑块)

```vue
<up-slider
    isRange
    showValue
    step="2"
    v-model:rangeValue="value6"
    height="2px"
></up-slider>
```

### 在Modal弹窗中使用

```vue
<up-slider v-if="modelShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
```

### 在popup弹窗中使用

```vue
<up-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></up-slider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/slider/slider.uvue`</small>

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

