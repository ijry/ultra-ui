---
title: Form 表单
description: 表单容器与校验器，配合 form-item 完成规则校验与错误提示。
generated: true
---

# Form 表单

表单容器与校验器，配合 form-item 完成规则校验与错误提示。

<PlatformBadges component="form" show-missing />

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

<template #harmony>

```typescript
import { UPForm, UPFormProps } from '@lingyun/ultra-ui-hos';

UPForm({ props: new UPFormProps({ model: { name: this.name, sex: this.sex, interests: this.interests }, onValidate: (): void => { this.validateMessage(); } }) }) {
  UPFormItem({ props: new UPFormItemProps({ label: '姓名', required: true, error: this.name.length === 0 ? '请输入姓名' : '' }) }) {
    UPInput({ props: new UPInputProps({ modelValue: this.name, placeholder: '请输入姓名', onInput: (event: UPInputChangeEvent): void => { this.name = event.value; } }) })
  }
  UPFormItem({ props: new UPFormItemProps({ label: '性别' }) }) {
    UPRadioGroup({ props: new UPRadioGroupProps({ modelValue: this.sex, options: [{ name: 'male', label: '男' }, { name: 'female', label: '女' }], onChange: (event: UPRadioGroupChangeEvent): void => { this.sex = String(event.value); } }) })
  }
  UPFormItem({ props: new UPFormItemProps({ label: '兴趣' }) }) {
    UPCheckboxGroup({ props: new UPCheckboxGroupProps({ modelValue: this.interests, placement: 'column', options: [{ name: 'ui', label: '界面设计' }, { name: 'code', label: '原生开发' }], onChange: (event: UPCheckboxGroupChangeEvent): void => { this.interests = event.value.map((item): string => String(item)); } }) })
  }
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/FormDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPForm } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

### label 布局

labelPosition 控制上下排列，labelAlign 控制对齐

```tsx
import { UPForm } from '@ultra-ui'

<UPForm
  ref={alignRef}
  model={{ top: '' }}
  labelPosition='top'
  labelWidth={100}
>
  <UPFormItem label='label 在上方' prop='top'>
    <UPInput value='' border='surround' placeholder='labelPosition=top' />
  </UPFormItem>
</UPForm>
```

### 左侧图标与必填星号

leftIcon / required

```tsx
<UPForm model={{ phone: '' }}>
  <UPFormItem label='手机号' prop='phone' leftIcon='phone' required>
    <UPInput value='' border='none' placeholder='required 仅作展示' />
  </UPFormItem>
</UPForm>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/form/index.tsx`</small>

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-form>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model` | 当前form的需要验证字段的集合 | `Object` | `{}` |
| `rules` | 验证规则 | `Object / Function / Array` | `{}` |
| `errorType` | 有错误时的提示方式，message-提示信息，toast-进行toast提示 border-bottom-下边框呈现红色，none-无提示 | `String` | `'message'` |
| `borderBottom` | 是否显示表单域的下划线边框 | `Boolean` | `true` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `'left'` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `45` |
| `labelAlign` | lable字体的对齐方式 | `String` | `'left'` |
| `labelStyle` | lable的样式，对象形式 | `Object` | `{}` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-form-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | input的label提示语 | `String` | `''` |
| `prop` | 绑定的值 | `String` | `''` |
| `rules` | 绑定的规则 | `Array` | `[]` |
| `borderBottom` | 是否显示表单域的下划线边框 | `String / Boolean` | `''` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `''` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `''` |
| `rightIcon` | 右侧图标 | `String` | `''` |
| `leftIcon` | 左侧图标 | `String` | `''` |
| `required` | 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置 | `Boolean` | `false` |
| `leftIconStyle` | — | `String / Object` | `''` |

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `error` |
| `label` |
| `right` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPForm` | `UltraUI/Sources/UltraUI/Components/UPForm.swift` |
| HarmonyOS Next · ArkTS / ArkUI | `UPForm` | `ultra-ui/src/main/ets/components/UPForm.ets` |
| Flutter · Dart | `UPForm` | `packages/ultra_ui/lib/src/widgets/up_form.dart` |
| React Native · TypeScript | `UPForm` | `src/components/form` |
| Taro · React + TypeScript | `UPForm` | `src/ultra-ui/components/up-form` |
| uni-app · Vue 3 | `up-form` | `uni_modules/uview-ultra/components/up-form` |
| uni-app-x · UTS / UVUE | `up-form` | `uni_modules/uview-ultra/components/up-form` |

