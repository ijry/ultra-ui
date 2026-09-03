---
title: Input 输入框
description: 单行输入框，支持前后插槽、清除按钮、密码显隐与字数统计。
generated: true
---

# Input 输入框

单行输入框，支持前后插槽、清除按钮、密码显隐与字数统计。

<PlatformBadges component="input" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPInput(
    prop: "account.email",
    placeholder: "name@example.com",
    clearable: true
)
```

<small>示例来源 `ultra-ui-ios/Demo/FormDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPInput
import net.lingyun.ultraui.android.components.UPInputProps

UPInput(
    props = UPInputProps(modelValue = inputValue, placeholder = "请输入内容", clearable = true),
    onInput = {
        inputValue = it
        eventText = "输入框：$it"
    },
    onClear = { eventText = "输入框：清空" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPInput, UPInputProps } from '@lingyun/ultra-ui-hos';

UPInput({ props: new UPInputProps({
  modelValue: this.value,
  placeholder: '请输入名称',
  clearable: true,
  showWordLimit: true,
  maxlength: 16,
  prefixIcon: 'edit-pen',
  onInput: (event: UPInputChangeEvent): void => { this.change(event); },
  onConfirm: (event: UPInputConfirmEvent): void => { this.message = '确认：' + event.value; },
  onClear: (): void => { this.message = '已清空'; }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/InputDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPInput(
  key: const ValueKey('input-page-basic'),
  value: _value,
  placeholder: '请输入内容',
  border: 'surround',
  confirmType: 'search',
  onChange: (value) => setState(() => _value = value),
  onConfirm: (value) {
    setState(() => _basicConfirm = '确认：$value');
    UPToast.show(context, message: '@confirm触发');
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/input_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPInput } from 'ultra-ui-rn';

<UPInput
  border="surround"
  color="blue"
  onChange={setValue}
  placeholder="请输入内容"
  value={value}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/InputDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPInput } from '@ultra-ui'

<UPInput value={basic} placeholder='请输入内容' onChange={setBasic} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/input/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-input
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
    confirmType="search"
    @confirm="handleSearch"
></up-input>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/input/input.nvue`</small>

</template>

<template #uniappx>

```vue
<up-input
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
></up-input>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/input/input.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 绑定的值 | `String / Number` | `—` |
| `value` | 绑定的值 | `String / Number` | `''` |
| `type` | number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数 idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序 digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序 text-文本输入键盘 | `String` | `'text'` |
| `fixed` | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true， 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序 | `Boolean` | `false` |
| `disabled` | 是否禁用输入框 | `Boolean` | `false` |
| `disabledColor` | 禁用状态时的背景色 | `String` | `''` |
| `clearable` | 是否显示清除控件 | `Boolean` | `false` |
| `onlyClearableOnFocused` | 是否仅在聚焦时显示清除控件 | `Boolean` | `—` |
| `password` | 是否密码类型 | `Boolean` | `false` |
| `maxlength` | 最大输入长度，设置为 -1 的时候不限制最大长度 | `String / Number` | `140` |
| `placeholder` | 输入框为空时的占位符 | `String` | `null` |
| `placeholderClass` | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | `String` | `'input-placeholder'` |
| `placeholderStyle` | 指定placeholder的样式 | `String / Object` | `''` |
| `showWordLimit` | 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效 | `Boolean` | `false` |
| `confirmType` | 设置右下角按钮的文字，有效值：send&#124;search&#124;next&#124;go&#124;done，兼容性详见uni-app文档 https://uniapp.dcloud.io/component/input https://uniapp.dcloud.io/component/textarea | `String` | `'done'` |
| `confirmHold` | 点击键盘右下角按钮时是否保持键盘不收起，H5无效 | `Boolean` | `false` |
| `holdKeyboard` | focus时，点击页面的时候不收起键盘，微信小程序有效 | `Boolean` | `false` |
| `focus` | 自动获取焦点 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点 | `Boolean` | `false` |
| `autoBlur` | 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效 | `Boolean` | `false` |
| `disableDefaultPadding` | 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效 | `Boolean` | `false` |
| `cursor` | 指定focus时光标的位置 | `String / Number` | `-1` |
| `cursorSpacing` | 输入框聚焦时底部与键盘的距离 | `String / Number` | `30` |
| `selectionStart` | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | `String / Number` | `-1` |
| `selectionEnd` | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | `String / Number` | `-1` |
| `adjustPosition` | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| `inputAlign` | 输入框内容对齐方式，可选值为：left&#124;center&#124;right | `String` | `'left'` |
| `fontSize` | 输入框字体的大小 | `String / Number` | `'15px'` |
| `color` | 输入框字体颜色 | `String` | `''` |
| `prefixIcon` | 输入框前置图标 | `String` | `''` |
| `prefixIconStyle` | 前置图标样式，对象或字符串 | `String / Object` | `''` |
| `suffixIcon` | 输入框后置图标 | `String` | `''` |
| `suffixIconStyle` | 后置图标样式，对象或字符串 | `String / Object` | `''` |
| `border` | 边框类型，surround-四周边框，bottom-底部边框，none-无边框 | `String` | `'surround'` |
| `readonly` | 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会 | `Boolean` | `false` |
| `shape` | 输入框形状，circle-圆形，square-方形 | `String` | `'square'` |
| `formatter` | 用于处理或者过滤输入框内容的方法 | `Function / null` | `null` |
| `ignoreCompositionEvent` | 是否忽略组件内对文本合成系统事件的处理 | `Boolean` | `—` |
| `cursorColor` | 光标颜色 | `String` | `'#53c21d'` |
| `passwordVisibilityToggle` | 密码类型可见性切换 | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `blur` |
| `change` |
| `clear` |
| `confirm` |
| `focus` |
| `input` |
| `keyboardheightchange` |
| `nicknamereview` |

### 插槽

| 插槽名 |
| --- |
| `prefix` |
| `suffix` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPInput` | `UltraUI/Sources/UltraUI/Components/UPInput.swift` |
| Android · Jetpack Compose | `UPInput` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPInput.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPInput` | `ultra-ui/src/main/ets/components/UPInput.ets` |
| Flutter · Dart | `UPInput` | `packages/ultra_ui/lib/src/widgets/up_input.dart` |
| React Native · TypeScript | `UPInput` | `src/components/input` |
| Taro · React + TypeScript | `UPInput` | `src/ultra-ui/components/up-input` |
| uni-app · Vue 3 | `up-input` | `src/uni_modules/uview-plus/components/u-input` |
| uni-app-x · UTS / UVUE | `up-input` | `uni_modules/uview-ultra/components/up-input` |

