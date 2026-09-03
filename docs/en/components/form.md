---
title: Form
description: A form container and validator that pairs with form-item for rules and errors.
generated: true
---

# Form

A form container and validator that pairs with form-item for rules and errors.

<PlatformBadges component="form" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/FormDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPForm } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/form/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-form>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `model` | 当前form的需要验证字段的集合 | `Object` | `{}` |
| `rules` | 验证规则 | `Object / Function / Array` | `{}` |
| `errorType` | 有错误时的提示方式，message-提示信息，toast-进行toast提示 border-bottom-下边框呈现红色，none-无提示 | `String` | `'message'` |
| `borderBottom` | 是否显示表单域的下划线边框 | `Boolean` | `true` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `'left'` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `45` |
| `labelAlign` | lable字体的对齐方式 | `String` | `'left'` |
| `labelStyle` | lable的样式，对象形式 | `Object` | `{}` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-form-item>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |
| `error` |
| `label` |
| `right` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPForm` | `UltraUI/Sources/UltraUI/Components/UPForm.swift` |
| HarmonyOS Next · ArkTS / ArkUI | `UPForm` | `ultra-ui/src/main/ets/components/UPForm.ets` |
| Flutter · Dart | `UPForm` | `packages/ultra_ui/lib/src/widgets/up_form.dart` |
| React Native · TypeScript | `UPForm` | `src/components/form` |
| Taro · React + TypeScript | `UPForm` | `src/ultra-ui/components/up-form` |
| uni-app · Vue 3 | `up-form` | `src/uni_modules/uview-plus/components/u-form` |
| uni-app-x · UTS / UVUE | `up-form` | `uni_modules/uview-ultra/components/up-form` |

