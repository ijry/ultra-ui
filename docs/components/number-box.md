---
title: Number box 步进器
description: 数字加减控件，支持步长、上下限与长按连加。
generated: true
---

# Number box 步进器

数字加减控件，支持步长、上下限与长按连加。

<PlatformBadges component="number-box" show-missing />

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

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNumberBox
import net.lingyun.ultraui.android.components.UPNumberBoxProps

UPNumberBox(
    props = UPNumberBoxProps(modelValue = numberValue, value = numberValue, min = 0, max = 9),
    onInput = {
        numberValue = it
        eventText = "步进器：$it"
    },
    onOverlimit = { eventText = "步进器：超出范围" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNumberBox, UPNumberBoxProps } from '@lingyun/ultra-ui-hos';

UPNumberBox({ props: new UPNumberBoxProps({ modelValue: this.value, min: 1, max: 5, onChange: (event: UPNumberBoxChangeEvent): void => { this.change(event); } }) })
```

```typescript
UPNumberBox({ props: new UPNumberBoxProps({ value: 1.5, step: 0.5, min: 0, max: 3, decimalLength: 1, inputWidth: 48 }) })
```

```typescript
UPNumberBox({ props: new UPNumberBoxProps({ value: 3, disabled: true }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/NumberBoxDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

numberBox: UPNumberBox(
  value: _value1,
  step: 1,
  onChange: (value, {name}) =>
      setState(() => _value1 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value2,
  step: 2,
  onChange: (value, {name}) =>
      setState(() => _value2 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value3,
  step: 1,
  min: 5,
  max: 8,
  onChange: (value, {name}) =>
      setState(() => _value3 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value4,
  step: 1,
  integer: true,
  onChange: (value, {name}) =>
      setState(() => _value4 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value5,
  step: 1,
  disabled: true,
  onChange: (value, {name}) =>
      setState(() => _value5 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value6,
  step: 1,
  disabledInput: true,
  onChange: (value, {name}) =>
      setState(() => _value6 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value7,
  step: 1,
  longPress: false,
  onChange: (value, {name}) =>
      setState(() => _value7 = value),
)
```

```dart
numberBox: UPNumberBox(
  value: _value8,
  step: 0.2,
  decimalLength: 1,
  onChange: (value, {name}) =>
      setState(() => _value8 = value),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/number_box_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNumberBox } from 'ultra-ui-rn';

rightIconNode={<UPNumberBox disabled onChange={change} step="1" value={value5} />
```

```tsx
<UPNumberBox
  asyncChange={asyncChange}
  onChange={myAsyncChange}
  step="1"
  value={value9}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/NumberBoxDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

value + onChange 受控绑定，默认最小值为 1

```tsx
import { UPNumberBox } from '@ultra-ui'

<UPNumberBox value={basic} onChange={setBasic} />
```

#### 步长

step 控制每次加减的幅度

```tsx
<UPNumberBox step={2} value={step} onChange={setStep} />
```

#### 取值范围

min=3 / max=8，到边界时按钮自动置灰

```tsx
<UPNumberBox min={3} max={8} value={range} onChange={setRange} />
```

#### 小数与整数

decimalLength 保留小数位；integer 只允许整数

```tsx
<UPNumberBox
  min={0}
  step={0.5}
  decimalLength={1}
  value={decimal}
  onChange={setDecimal}
/>
```

#### 禁用

disabled 整体禁用；disabledInput 只锁输入框

```tsx
<UPNumberBox
  disabledInput
  value={disabledInput}
  onChange={setDisabledInput}
/>
```

#### 单独禁用按钮

disableMinus / disablePlus

```tsx
<UPNumberBox
  disableMinus
  value={disableMinus}
  onChange={setDisableMinus}
/>
```

#### 颜色

color 图标色 / bgColor 按钮背景 / inputBgColor 输入框背景

```tsx
<UPNumberBox
  color='#ffffff'
  bgColor='#2979ff'
  inputBgColor='#eaf2ff'
  value={colored}
  onChange={setColored}
/>
```

#### 尺寸

buttonWidth / buttonSize / inputWidth，单位 px

```tsx
<UPNumberBox
  buttonWidth={40}
  buttonSize={40}
  inputWidth={50}
  value={sized}
  onChange={setSized}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/number-box/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`v-model`绑定`modelValue`初始值，此值是双向绑定的，**无需**在回调中将返回的数值重新赋值给`modelValue`。

```vue
<template>
	<up-number-box v-model="value" @change="valChange"></up-number-box>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const value = ref(0);  
  
// 定义方法  
function valChange(e) {  
  console.log('当前值为: ' + e.target.value);  
}  
</script>
```

#### 步长设置

- 通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为1，下面示例每次都会加2或者减2

```vue
<up-number-box :step="2"></up-number-box>
```

#### 限制输入范围

通过`min`和`max`参数限制输的入值最小值和最大值

```vue
<up-number-box :min="1" :max="100"></up-number-box>
```

#### 限制只能输入整数

通过`integer`限制输入类型

```vue
<up-number-box integer></up-number-box>
```

#### 禁用

```vue
<!-- 通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值 -->
<up-number-box :disabled="true"></up-number-box>

<!-- 禁用输入框 -->
<up-number-box :disabledInput="true"></up-number-box>

<!-- 禁用增加按钮 -->
<up-number-box :disablePlus="true"></up-number-box>

<!-- 禁用减少按钮 -->
<up-number-box :disableMinus="true"></up-number-box>

<!-- 禁用长按 -->
<up-number-box :longPress="false"></up-number-box>
```

#### 固定小数位数

通过`step`设置步进长度，`decimal-length`设置显示小数位数

```vue
<up-number-box step="0.25" decimal-length="1" ></up-number-box>
```

#### 异步变更

通过`asyncChange`设置异步变更，开启后需要手动控制输入值 （默认 false ）

```vue
<template>
    <up-number-box v-model="value" :asyncChange="true" @change="onChange"></up-number-box>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const value = ref(1);  
  
// 定义方法  
function onChange(e) {  
  setTimeout(() => {  
    value.value += 1; // 使用 value.value 来访问和修改响应式数据  
  }, 3000);  
}
</script>
```

#### 自定义颜色和大小

- 通过`button-size`参数设置按钮大小
- 通过`icon-style`参数设置加减按钮图标的样式

```vue
<up-number-box 
    button-size="36"
    color="#ffffff"
    bgColor="#2979ff"
    iconStyle="color: #fff"
></up-number-box>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/numberBox.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`v-model`绑定`modelValue`初始值，此值是双向绑定的，**无需**在回调中将返回的数值重新赋值给`modelValue`。

```vue
<template>
	<up-number-box v-model="value" @change="valChange"></up-number-box>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const value = ref(0);  
  
// 定义方法  
function valChange(e) {  
  console.log('当前值为: ' + e.target.value);  
}  
</script>
```

#### 步长设置

- 通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为1，下面示例每次都会加2或者减2

```vue
<up-number-box :step="2"></up-number-box>
```

#### 限制输入范围

通过`min`和`max`参数限制输的入值最小值和最大值

```vue
<up-number-box :min="1" :max="100"></up-number-box>
```

#### 限制只能输入整数

通过`integer`限制输入类型

```vue
<up-number-box integer></up-number-box>
```

#### 禁用

```vue
<!-- 通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值 -->
<up-number-box :disabled="true"></up-number-box>

<!-- 禁用输入框 -->
<up-number-box :disabledInput="true"></up-number-box>

<!-- 禁用增加按钮 -->
<up-number-box :disablePlus="true"></up-number-box>

<!-- 禁用减少按钮 -->
<up-number-box :disableMinus="true"></up-number-box>

<!-- 禁用长按 -->
<up-number-box :longPress="false"></up-number-box>
```

#### 固定小数位数

通过`step`设置步进长度，`decimal-length`设置显示小数位数

```vue
<up-number-box step="0.25" decimal-length="1" ></up-number-box>
```

#### 异步变更

通过`asyncChange`设置异步变更，开启后需要手动控制输入值 （默认 false ）

```vue
<template>
    <up-number-box v-model="value" :asyncChange="true" @change="onChange"></up-number-box>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const value = ref(1);  
  
// 定义方法  
function onChange(e) {  
  setTimeout(() => {  
    value.value += 1; // 使用 value.value 来访问和修改响应式数据  
  }, 3000);  
}
</script>
```

#### 自定义颜色和大小

- 通过`button-size`参数设置按钮大小
- 通过`icon-style`参数设置加减按钮图标的样式

```vue
<up-number-box 
    button-size="36"
    color="#ffffff"
    bgColor="#2979ff"
    iconStyle="color: #fff"
></up-number-box>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/numberBox.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 步进器标识符，在change回调返回 | `String / Number` | `''` |
| `value` | 用于双向绑定的值，初始化时设置设为默认min值(最小值) | `String / Number` | `0` |
| `modelValue` | 用于双向绑定的值，初始化时设置设为默认min值(最小值) | `String / Number` | `—` |
| `min` | 最小值 | `String / Number` | `1` |
| `max` | 最大值 | `String / Number` | `Number.MAX_SAFE_INTEGER` |
| `step` | 加减的步长，可为小数 | `String / Number` | `1` |
| `integer` | 是否只允许输入整数 | `Boolean` | `false` |
| `disabled` | 是否禁用，包括输入框，加减按钮 | `Boolean` | `false` |
| `disabledInput` | 是否禁用输入框 | `Boolean` | `false` |
| `asyncChange` | 是否开启异步变更，开启后需要手动控制输入值 | `Boolean` | `false` |
| `inputWidth` | 输入框宽度，单位为px | `String / Number` | `35` |
| `showMinus` | 是否显示减少按钮 | `Boolean` | `true` |
| `showPlus` | 是否显示增加按钮 | `Boolean` | `true` |
| `decimalLength` | 显示的小数位数 | `String / Number` | `null` |
| `longPress` | 是否开启长按加减手势 | `Boolean` | `true` |
| `color` | 输入框文字和加减按钮图标的颜色 | `String` | `'#323233'` |
| `buttonWidth` | 按钮宽度 | `String / Number` | `30` |
| `buttonSize` | 按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致 | `String / Number` | `30` |
| `buttonRadius` | 按钮圆角 | `String` | `'0px'` |
| `bgColor` | 输入框和按钮的背景颜色 | `String` | `'#EBECEE'` |
| `disabledBgColor` | 按钮禁用背景色 | `String` | `'#f7f8fa'` |
| `inputBgColor` | 输入框背景颜色 | `String` | `'#EBECEE'` |
| `cursorSpacing` | 指定光标于键盘的距离，避免键盘遮挡输入框，单位px | `String / Number` | `100` |
| `disablePlus` | 是否禁用增加按钮 | `Boolean` | `false` |
| `disableMinus` | 是否禁用减少按钮 | `Boolean` | `false` |
| `iconStyle` | 加减按钮图标的样式 | `Object / String` | `''` |
| `miniMode` | 迷你模式 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `// #endif 	'focus` |
| `// #ifdef VUE3 	'update:modelValue` |
| `blur` |
| `change` |
| `focus` |
| `input` |
| `minus` |
| `overlimit` |
| `plus` |

### 插槽

| 插槽名 |
| --- |
| `input` |
| `minus` |
| `plus` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPNumberBox` | `UltraUI/Sources/UltraUI/Components/UPNumberBox.swift` |
| Android · Jetpack Compose | `UPNumberBox` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNumberBox.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNumberBox` | `ultra-ui/src/main/ets/components/UPNumberBox.ets` |
| Flutter · Dart | `UPNumberBox` | `packages/ultra_ui/lib/src/widgets/up_number_box.dart` |
| React Native · TypeScript | `UPNumberBox` | `src/components/number-box` |
| Taro · React + TypeScript | `UPNumberBox` | `src/ultra-ui/components/up-number-box` |
| uni-app · Vue 3 | `up-number-box` | `uni_modules/uview-ultra/components/up-number-box` |
| uni-app-x · UTS / UVUE | `up-number-box` | `uni_modules/uview-ultra/components/up-number-box` |

