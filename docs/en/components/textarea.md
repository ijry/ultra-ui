---
title: Textarea
description: A multi-line input that grows with content and can enforce a length limit.
generated: true
---

# Textarea

A multi-line input that grows with content and can enforce a length limit.

<PlatformBadges component="textarea" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPTextarea(
    prop: "bio",
    placeholder: "介绍一下自己",
    maxlength: 200,
    count: true,
    height: 100,
    autoHeight: true
)
```

```swift
UPTextarea(text: $readonlyBio, readonly: true, height: 100)
```

<small>Snippet from `ultra-ui-ios/Demo/FormDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTextarea
import net.lingyun.ultraui.android.components.UPTextareaProps

UPTextarea(
    props = UPTextareaProps(modelValue = textareaValue, placeholder = "请输入多行文本", count = true, maxlength = 80),
    onInput = {
        textareaValue = it
        eventText = "文本域：${it.length} 字"
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTextarea, UPTextareaProps } from '@lingyun/ultra-ui-hos';

UPTextarea({ props: new UPTextareaProps({
  modelValue: this.value,
  placeholder: '请输入说明',
  count: true,
  maxlength: 40,
  height: 96,
  onInput: (event: UPTextareaChangeEvent): void => { this.change(event); },
  onConfirm: (event: UPTextareaConfirmEvent): void => { this.message = '提交：' + event.value; }
}) })
```

```typescript
UPTextarea({ props: new UPTextareaProps({ value: '禁用态文本域', disabled: true, height: 70 }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TextareaDemo.ets`</small>

</template>

<template #flutter>

#### 字数统计

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTextarea(
  value: _value2,
  placeholder: '请输入内容',
  count: true,
  onUpdateValue: (value) => setState(() => _value2 = value),
)
```

#### 自动增高

```dart
UPTextarea(
  value: _value3,
  placeholder: '请输入内容',
  autoHeight: true,
  onUpdateValue: (value) => setState(() => _value3 = value),
)
```

#### 禁用状态

```dart
UPTextarea(
  value: _value4,
  placeholder: '文本域已被禁用',
  disabled: true,
  count: true,
  onUpdateValue: (value) => setState(() => _value4 = value),
)
```

#### 下划线模式

```dart
UPTextarea(
  value: _value5,
  placeholder: '请输入内容',
  border: 'bottom',
  onUpdateValue: (value) => setState(() => _value5 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/textarea_page.dart`</small>

</template>

<template #reactnative>

#### 基础使用

```tsx
import { UPTextarea } from 'ultra-ui-rn';

<UPTextarea onChange={setValue1} placeholder="请输入内容" value={value1} />
```

#### 字数统计

```tsx
<UPTextarea count onChange={setValue2} placeholder="请输入内容" value={value2} />
```

#### 自动增高

```tsx
<UPTextarea autoHeight onChange={setValue3} placeholder="请输入内容" value={value3} />
```

#### 禁用状态

```tsx
<UPTextarea count disabled onChange={setValue4} placeholder="文本域已被禁用" value={value4} />
```

#### 下划线模式

```tsx
<UPTextarea border="bottom" onChange={setValue5} placeholder="请输入内容" value={value5} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/TextareaDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

value + onChange 受控绑定

```tsx
import { UPTextarea } from '@ultra-ui'

<UPTextarea
  value={basic}
  placeholder='请输入内容'
  onChange={setBasic}
/>
```

#### 字数统计

count 显示右下角计数，配合 maxlength

```tsx
<UPTextarea
  value={counted}
  count
  maxlength={50}
  placeholder='最多输入 50 个字'
  onChange={setCounted}
/>
```

#### 自定义高度

height 指定固定高度，单位 px

```tsx
<UPTextarea height={140} value={tall} onChange={setTall} />
```

#### 自动增高

autoHeight：内容变多时高度自动撑开，height 变为最小高度

```tsx
<UPTextarea
  autoHeight
  height={50}
  value={autoHeight}
  placeholder='多敲几行回车试试'
  onChange={setAutoHeight}
/>
```

#### 边框

border：surround（默认） / bottom / none

```tsx
<UPTextarea border='bottom' value={bottom} onChange={setBottom} />
```

#### 禁用

disabled 不可编辑且背景置灰

```tsx
<UPTextarea disabled value={disabled} onChange={setDisabled} />
```

#### 占位符样式

placeholderStyle 支持对象或字符串

```tsx
<UPTextarea
  value={placeholder}
  placeholder='占位符是紫色的'
  placeholderStyle={{ color: '#7232dd', fontSize: '15px' }}
  onChange={setPlaceholder}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/textarea/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

```vue
<up-textarea
    v-model="value1"
    placeholder="请输入内容"
></up-textarea>
```

#### 字数统计

```vue
<up-textarea
    v-model="value2"
    placeholder="请输入内容"
    count
></up-textarea>
```

#### 自动增高

```vue
<up-textarea
    v-model="value3"
    placeholder="请输入内容"
    autoHeight
></up-textarea>
```

#### 禁用状态

```vue
<up-textarea
    v-model="value4"
    placeholder="文本域已被禁用"
    disabled
    count
></up-textarea>
```

#### 下划线模式

```vue
<up-textarea
    v-model="value5"
    placeholder="请输入内容"
    border="bottom"
></up-textarea>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/textarea/textarea.uvue`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<up-textarea
    v-model="value1"
    placeholder="请输入内容"
></up-textarea>
```

#### 字数统计

```vue
<up-textarea
    v-model="value2"
    placeholder="请输入内容"
    count
></up-textarea>
```

#### 自动增高

```vue
<up-textarea
    v-model="value3"
    placeholder="请输入内容"
    autoHeight
></up-textarea>
```

#### 禁用状态

```vue
<up-textarea
    v-model="value4"
    placeholder="文本域已被禁用"
    disabled
    count
></up-textarea>
```

#### 下划线模式

```vue
<up-textarea
    v-model="value5"
    placeholder="请输入内容"
    border="bottom"
></up-textarea>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/textarea/textarea.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | 输入框的内容 | `String / Number` | `''` |
| `modelValue` | 输入框的内容 | `String / Number` | `—` |
| `placeholder` | 输入框为空时占位符 | `String / Number` | `''` |
| `placeholderClass` | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | `String` | `'textarea-placeholder'` |
| `placeholderStyle` | 指定placeholder的样式 | `String / Object` | `'color: #c0c4cc'` |
| `height` | 输入框高度 | `String / Number` | `70` |
| `confirmType` | 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效 | `String` | `'done'` |
| `disabled` | 是否禁用 | `Boolean` | `false` |
| `count` | 是否显示统计字数 | `Boolean` | `false` |
| `focus` | 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现 | `Boolean` | `false` |
| `autoHeight` | 是否自动增加高度 | `Boolean` | `false` |
| `fixed` | 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true | `Boolean` | `false` |
| `cursorSpacing` | 指定光标与键盘的距离 | `Number` | `0` |
| `cursor` | 指定focus时的光标位置 | `String / Number` | `''` |
| `showConfirmBar` | 是否显示键盘上方带有”完成“按钮那一栏， | `Boolean` | `true` |
| `selectionStart` | 光标起始位置，自动聚焦时有效，需与selection-end搭配使用 | `Number` | `-1` |
| `selectionEnd` | 光标结束位置，自动聚焦时有效，需与selection-start搭配使用 | `Number` | `-1` |
| `adjustPosition` | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| `disableDefaultPadding` | 是否去掉 iOS 下的默认内边距，只微信小程序有效 | `Boolean` | `false` |
| `holdKeyboard` | focus时，点击页面的时候不收起键盘，只微信小程序有效 | `Boolean` | `false` |
| `maxlength` | 最大输入长度，设置为 -1 的时候不限制最大长度 | `String / Number` | `140` |
| `border` | 边框类型，surround-四周边框，bottom-底部边框 | `String` | `'surround'` |
| `formatter` | 用于处理或者过滤输入框内容的方法 | `Function / null` | `null` |
| `ignoreCompositionEvent` | 是否忽略组件内对文本合成系统事件的处理 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `blur` |
| `change` |
| `confirm` |
| `focus` |
| `input` |
| `keyboardheightchange` |
| `linechange` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPTextarea` | `UltraUI/Sources/UltraUI/Components/UPTextarea.swift` |
| Android · Jetpack Compose | `UPTextarea` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTextarea.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTextarea` | `ultra-ui/src/main/ets/components/UPTextarea.ets` |
| Flutter · Dart | `UPTextarea` | `packages/ultra_ui/lib/src/widgets/up_textarea.dart` |
| React Native · TypeScript | `UPTextarea` | `src/components/textarea` |
| Taro · React + TypeScript | `UPTextarea` | `src/ultra-ui/components/up-textarea` |
| uni-app · Vue 3 | `up-textarea` | `uni_modules/uview-ultra/components/up-textarea` |
| uni-app-x · UTS / UVUE | `up-textarea` | `uni_modules/uview-ultra/components/up-textarea` |

