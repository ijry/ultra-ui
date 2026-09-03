---
title: Slider 滑动选择器
description: 通过拖动滑块在连续或离散区间内取值。
generated: true
---

# Slider 滑动选择器

通过拖动滑块在连续或离散区间内取值。

<PlatformBadges component="slider" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 基本案例

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSlider(
  value: _value1,
  onUpdateValue: (value) {
    setState(() => _value1 = (value as num).toDouble());
  },
)
```

#### 自定义范围(10—50)

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

#### 指定步长(每次步进5)

```dart
UPSlider(
  value: _value4,
  step: 5,
  onUpdateValue: (value) {
    setState(() => _value4 = (value as num).toDouble());
  },
)
```

#### 小数步长(每次步进0.1)

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

#### 自定义样式

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

#### 自定义样式(图片)

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

#### 区间选择(双滑块)

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

#### 垂直方向

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/slider_page.dart`</small>

</template>

<template #reactnative>

#### 基本案例

```tsx
import { UPSlider } from 'ultra-ui-rn';

<UPSlider onChange={setValue1} useNative={false} value={value1} />
```

#### 自定义范围(10—50)

```tsx
<UPSlider max="50" min="10" onChange={setValue2} showValue useNative={false} value={value2} />
```

#### 指定步长(每次步进5)

```tsx
<UPSlider onChange={setValue4} step={5} useNative={false} value={value4} />
```

#### 小数步长(每次步进0.1)

```tsx
<UPSlider max={1} min={0} onChange={setValue3} showValue step={0.1} value={value3} />
```

#### 自定义样式

```tsx
<UPSlider
  activeColor="#deab8a"
  blockColor="#f47920"
  height="20px"
  onChange={setValue5}
  value={value5}
/>
```

#### 垂直方向

```tsx
<UPSlider length="200px" onChange={setValue7} size="2px" value={value7} vertical />
```

#### 垂直方向区间选择

```tsx
<UPSlider isRange length="200px" rangeValue={value8} size="2px" vertical />
```

#### 在Modal弹窗中使用

```tsx
<UPSlider max="4" min="1" onChange={setSliderValue} showValue value={sliderValue} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/SliderDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

受控 value + onChange

```tsx
import { UPSlider } from '@ultra-ui'

<UPSlider value={basic} onChange={setBasic} />
```

#### 自定义范围与步长

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

#### 显示数值

showValue 显示气泡

```tsx
<UPSlider value={withValue} showValue onChange={setWithValue} />
```

#### 禁用

disabled 阻止交互

```tsx
<UPSlider value={45} disabled />
```

#### 竖向

vertical + length

```tsx
<UPSlider
  value={vertical}
  vertical
  length={300}
  onChange={setVertical}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/slider/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

需要通过`v-model`绑定一个值，来初始化滑块的选择值(0到100之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。

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

#### 设置最大和最小值

通过`min`和`max`，可以设置滑块所能选择的最大和最小值

```vue
<up-slider v-model="value" min="30" max="80"></up-slider>
```

#### 设置步进值

通过`step`参数设置步进值，这个步进值为每次跳变的值，具体表现请见示例。  

:::tip 提示
需要注意的是，建议让`(max - min)`能被`step`整除，否则可能出现无法滑动到最大值的情况。默认自定义模式支持`0.1`、`0.5`等小数步长；`useNative=true`时会透传给uni-app原生slider，具体小数表现取决于目标平台。
:::

```vue
<up-slider v-model="value" step="20" min="20" max="100"></up-slider>
```

小数步长也可以使用数字或字符串数字：

```vue
<up-slider v-model="value" :step="0.1" :min="0" :max="1" showValue></up-slider>
```

#### 在弹窗等初始化不显示的容器中使用

:::tip 提示
需要注意的是，在此场景中使用要注意给slider同时一个v-if让它随着弹窗的显示再渲染，这样才能计算出滑块的正确尺寸。
:::

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

#### 禁用状态

```vue
<up-slider v-model="value" disabled></up-slider>
```

#### 垂直方向使用

通过设置`vertical`属性为`true`，可以使滑块变为垂直方向。可以通过`length`属性设置垂直滑块的高度。

```vue
<up-slider v-model="value" vertical length="200px"></up-slider>
```

#### 双滑块模式

通过设置`isRange`属性为`true`，可以开启双滑块模式。通过`rangeValue`绑定一个数组来获取两个滑块的值。

```vue
<up-slider :rangeValue="range" isRange></up-slider>
```

#### 自定义按钮的内容和样式

- ```activeColor```，设置进度条的激活部分颜色
- ```inactiveColor```，进度条的激活部分颜色
- ```inactiveColor```，进度条的背景颜色
- ```blockColor```，滑块的背景颜色
- ```blockStyle```，用户对滑块的自定义样式(颜色)

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/slider.md`</small>

</template>

<template #uniappx>

#### 基本使用

需要通过`v-model`绑定一个值，来初始化滑块的选择值(0到100之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。

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

#### 设置最大和最小值

通过`min`和`max`，可以设置滑块所能选择的最大和最小值

```vue
<up-slider v-model="value" min="30" max="80"></up-slider>
```

#### 设置步进值

通过`step`参数设置步进值，这个步进值为每次跳变的值，具体表现请见示例。  

:::tip 提示
需要注意的是，这个`step`必须要被`max`值整除，否则会出现无法无法滑动到最大值的情况
:::

```vue
<up-slider v-model="value" step="20" min="30" max="100"></up-slider>
```

#### 在弹窗等初始化不显示的容器中使用

:::tip 提示
需要注意的是，在此场景中使用要注意给slider同时一个v-if让它随着弹窗的显示再渲染，这样才能计算出滑块的正确尺寸。
:::

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

#### 禁用状态

```vue
<up-slider v-model="value" disabled></up-slider>
```

#### 自定义按钮的内容和样式

- ```activeColor```，设置进度条的激活部分颜色
- ```inactiveColor```，进度条的激活部分颜色
- ```inactiveColor```，进度条的背景颜色
- ```blockColor```，滑块的背景颜色
- ```blockStyle```，用户对滑块的自定义样式(颜色)

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

#### 自定义滑动选择器整体的样式

- 通过`inactive-color`配置底部滑动条背景颜色
- 通过`active-color`配置底部选择部分的背景颜色
- 通过`block-width`配置滑块宽度(高等于宽)
- 通过`block-color`配置滑动按钮按钮的颜色
- 通过`height`配置滑块条高度，单位rpx

其他更多参数详见底部API

```vue
<up-slider v-model="value" block-width="40" block-color="red"></up-slider>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/slider.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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
| uni-app · Vue 3 | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |
| uni-app-x · UTS / UVUE | `up-slider` | `uni_modules/uview-ultra/components/up-slider` |

