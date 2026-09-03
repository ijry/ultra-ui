---
title: Code input 验证码输入
description: 格子式验证码输入框，支持下划线、方框与横线三种样式。
generated: true
---

# Code input 验证码输入

格子式验证码输入框，支持下划线、方框与横线三种样式。

<PlatformBadges component="code-input" show-missing />

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
import net.lingyun.ultraui.android.components.UPCodeInput
import net.lingyun.ultraui.android.components.UPCodeInputProps

UPCodeInput(
    props = UPCodeInputProps(modelValue = codeValue, maxlength = 4, mode = "box"),
    onInput = {
        codeValue = it
        eventText = "验证码输入：$it"
    },
    onFinish = { eventText = "验证码输入：完成 $it" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCodeInput, UPCodeInputProps } from '@lingyun/ultra-ui-hos';

UPCodeInput({ props: new UPCodeInputProps({
  modelValue: this.value,
  maxlength: 4,
  mode: 'box',
  color: 'primary',
  onInput: (event: UPCodeInputChangeEvent): void => { this.changed(event); },
  onChange: (event: UPCodeInputChangeEvent): void => { this.message = '变更：' + event.value; },
  onFinish: (event: UPCodeInputChangeEvent): void => { this.message = '输入完成：' + event.value; }
}) })
```

```typescript
UPCodeInput({ props: new UPCodeInputProps({
  value: '9527',
  maxlength: 4,
  mode: 'line',
  dot: true,
  bold: true,
  disabledKeyboard: true,
  space: 12
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CodeInputDemo.ets`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCodeInput(
  key: const ValueKey('code-input-page-basic'),
  maxlength: 4,
  onChange: _onBasicChange,
  onFinish: _onFinish,
)
```

#### 横线模式

```dart
UPCodeInput(
  mode: 'line',
  maxlength: 4,
  bold: true,
)
```

#### 设置长度

```dart
UPCodeInput(maxlength: 6)
```

#### 设置间距

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
)
```

#### 细边框

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
  hairline: true,
)
```

#### 调整颜色

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
  hairline: true,
  color: '#f56c6c',
  borderColor: '#f56c6c',
)
```

#### 点模式

```dart
UPCodeInput(
  mode: 'box',
  dot: true,
  space: 0,
  maxlength: 4,
  hairline: true,
)
```

#### 预置内容

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
  hairline: true,
  value: '123',
  fontSize: 17,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/code_input_page.dart`</small>

</template>

<template #reactnative>

#### 横线模式

```tsx
import { UPCodeInput } from 'ultra-ui-rn';

<UPCodeInput bold maxlength={4} mode="line" onChange={setValue2} value={value2} />
```

#### 设置长度

```tsx
<UPCodeInput maxlength={6} onChange={setValue3} value={value3} />
```

#### 设置间距

```tsx
<UPCodeInput maxlength={4} mode="box" onChange={setValue4} space={0} value={value4} />
```

#### 细边框

```tsx
<UPCodeInput
  hairline
  maxlength={4}
  mode="box"
  onChange={setValue5}
  space={0}
  value={value5}
/>
```

#### 调整颜色

```tsx
<UPCodeInput
  borderColor="#f56c6c"
  color="#f56c6c"
  hairline
  maxlength={4}
  mode="box"
  onChange={setValue7}
  space={0}
  value={value7}
/>
```

#### 点模式

```tsx
<UPCodeInput
  dot
  hairline
  maxlength={4}
  mode="box"
  onChange={setValue8}
  space={0}
  value={value8}
/>
```

#### 预置内容

```tsx
<UPCodeInput
  fontSize="17"
  hairline
  maxlength={4}
  mode="box"
  onChange={setValue9}
  space={0}
  value={value9}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/CodeInputDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCodeInput } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

- 通过`mode`参数模式，可取如下值：
- `box`(默认)-输入位置位一个方框
- `bottomLine`-底部显示一条横线
- `middleLine`-中部显示一条横线

```vue
<up-code-input v-model="value"></up-code-input>
```

#### 横线模式

- 通过`mode="line"`可设置显示为横线模式

```vue
<up-code-input v-model="value2" mode="line"></up-code-input>
```

#### 设置长度

- 通过`maxlength`参数配置可输入的方框个数，如6位验证码，该值设置为6即可

```vue
<up-code-input v-model="value3" :maxlength="6"></up-code-input>
```

#### 横线间距

- 通过`space`可设置显示为横线模式

```vue
<up-code-input v-model="value4" :space="0" ></up-code-input>
```

#### 细边框

- 通过`hairline`可设置细边框

```vue
<up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline></up-code-input>
```

#### 调整颜色

- 通过`color`和`borderColor`可设置颜色

```vue
<up-code-input v-model="value6" hairline color="#f56c6c" borderColor="#f56c6c"></up-code-input>
```

#### 用"●"替代输入内容

`dot`参数配置后，输入内容将不可见，用点替代，事件回调中会返回真实值

```vue
<up-code-input v-model="value5" mode="box" dot></up-code-input>
```

#### 是否自动获取焦点

如果需要一打开页面，就自动弹出键盘获取焦点，请配置`focus`值为true，否则需要用户手动点击输入区域才能唤起键盘

```vue
<up-code-input v-model="value4" :focus="true"></up-code-input>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/codeInput.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`mode`参数模式，可取如下值：
- `box`(默认)-输入位置位一个方框
- `bottomLine`-底部显示一条横线
- `middleLine`-中部显示一条横线

```vue
<up-code-input v-model="value"></up-code-input>
```

#### 横线模式

- 通过`mode="line"`可设置显示为横线模式

```vue
<up-code-input v-model="value2" mode="line"></up-code-input>
```

#### 设置长度

- 通过`maxlength`参数配置可输入的方框个数，如6位验证码，该值设置为6即可

```vue
<up-code-input v-model="value3" :maxlength="6"></up-code-input>
```

#### 横线间距

- 通过`space`可设置显示为横线模式

```vue
<up-code-input v-model="value4" :space="0" ></up-code-input>
```

#### 细边框

- 通过`hairline`可设置细边框

```vue
<up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline></up-code-input>
```

#### 调整颜色

- 通过`color`和`borderColor`可设置颜色

```vue
<up-code-input v-model="value6" hairline color="#f56c6c" borderColor="#f56c6c"></up-code-input>
```

#### 用"●"替代输入内容

`dot`参数配置后，输入内容将不可见，用点替代，事件回调中会返回真实值

```vue
<up-code-input v-model="value5" mode="box" dot></up-code-input>
```

#### 是否自动获取焦点

如果需要一打开页面，就自动弹出键盘获取焦点，请配置`focus`值为true，否则需要用户手动点击输入区域才能唤起键盘

```vue
<up-code-input v-model="value4" :focus="true"></up-code-input>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/codeInput.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `adjustPosition` | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| `maxlength` | 最大输入长度 | `String / Number` | `6` |
| `dot` | 是否用圆点填充 | `Boolean` | `false` |
| `mode` | 显示模式，box-盒子模式，line-底部横线模式 | `String` | `'box'` |
| `hairline` | 是否细边框 | `Boolean` | `false` |
| `space` | 字符间的距离 | `String / Number` | `10` |
| `modelValue` | 预置值 | `String / Number` | `—` |
| `value` | 预置值 | `String / Number` | `''` |
| `focus` | 是否自动获取焦点 | `Boolean` | `false` |
| `bold` | 字体是否加粗 | `Boolean` | `false` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `fontSize` | 字体大小 | `String / Number` | `18` |
| `size` | 输入框的大小，宽等于高 | `String / Number` | `35` |
| `disabledKeyboard` | 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true | `Boolean` | `false` |
| `borderColor` | 边框和线条颜色 | `String` | `'#c9cacc'` |
| `disabledDot` | 是否禁止输入"."符号 | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `change` |
| `finish` |
| `input` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCodeInput` | `UltraUI/Sources/UltraUI/Components/UPCodeInput.swift` |
| Android · Jetpack Compose | `UPCodeInput` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCodeInput.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCodeInput` | `ultra-ui/src/main/ets/components/UPCodeInput.ets` |
| Flutter · Dart | `UPCodeInput` | `packages/ultra_ui/lib/src/widgets/up_code_input.dart` |
| React Native · TypeScript | `UPCodeInput` | `src/components/code-input` |
| Taro · React + TypeScript | `UPCodeInput` | `src/ultra-ui/components/up-code-input` |
| uni-app · Vue 3 | `up-code-input` | `uni_modules/uview-ultra/components/up-code-input` |
| uni-app-x · UTS / UVUE | `up-code-input` | `uni_modules/uview-ultra/components/up-code-input` |

