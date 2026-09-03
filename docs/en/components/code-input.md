---
title: Code input
description: A boxed verification-code field, in box, underline or dash style.
generated: true
---

# Code input

A boxed verification-code field, in box, underline or dash style.

<PlatformBadges component="code-input" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CodeInputDemo.ets`</small>

</template>

<template #flutter>

#### Basic usage

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCodeInput(
  key: const ValueKey('code-input-page-basic'),
  maxlength: 4,
  onChange: _onBasicChange,
  onFinish: _onFinish,
)
```

#### Underline mode

```dart
UPCodeInput(
  mode: 'line',
  maxlength: 4,
  bold: true,
)
```

#### Setting the length

```dart
UPCodeInput(maxlength: 6)
```

#### Setting the spacing

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
)
```

#### Hairline border

```dart
UPCodeInput(
  mode: 'box',
  space: 0,
  maxlength: 4,
  hairline: true,
)
```

#### Adjusting the colour

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

#### Dot mode

```dart
UPCodeInput(
  mode: 'box',
  dot: true,
  space: 0,
  maxlength: 4,
  hairline: true,
)
```

#### Preset content

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/code_input_page.dart`</small>

</template>

<template #reactnative>

#### Underline mode

```tsx
import { UPCodeInput } from 'ultra-ui-rn';

<UPCodeInput bold maxlength={4} mode="line" onChange={setValue2} value={value2} />
```

#### Setting the length

```tsx
<UPCodeInput maxlength={6} onChange={setValue3} value={value3} />
```

#### Setting the spacing

```tsx
<UPCodeInput maxlength={4} mode="box" onChange={setValue4} space={0} value={value4} />
```

#### Hairline border

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

#### Adjusting the colour

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

#### Dot mode

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

#### Preset content

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

<small>Snippet from `ultra-ui-rn/example/pages/components/form/CodeInputDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCodeInput } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Basic usage

```vue
<up-code-input v-model="value"></up-code-input>
```

#### Underline mode

```vue
<up-code-input v-model="value2" mode="line"></up-code-input>
```

#### Setting the length

```vue
<up-code-input v-model="value3" :maxlength="6"></up-code-input>
```

#### Line spacing

```vue
<up-code-input v-model="value4" :space="0" ></up-code-input>
```

#### Hairline border

```vue
<up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline></up-code-input>
```

#### Adjusting the colour

```vue
<up-code-input v-model="value6" hairline color="#f56c6c" borderColor="#f56c6c"></up-code-input>
```

#### Masking input with ●

```vue
<up-code-input v-model="value5" mode="box" dot></up-code-input>
```

#### Autofocus

```vue
<up-code-input v-model="value4" :focus="true"></up-code-input>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/codeInput.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<up-code-input v-model="value"></up-code-input>
```

#### Underline mode

```vue
<up-code-input v-model="value2" mode="line"></up-code-input>
```

#### Setting the length

```vue
<up-code-input v-model="value3" :maxlength="6"></up-code-input>
```

#### Line spacing

```vue
<up-code-input v-model="value4" :space="0" ></up-code-input>
```

#### Hairline border

```vue
<up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline></up-code-input>
```

#### Adjusting the colour

```vue
<up-code-input v-model="value6" hairline color="#f56c6c" borderColor="#f56c6c"></up-code-input>
```

#### Masking input with ●

```vue
<up-code-input v-model="value5" mode="box" dot></up-code-input>
```

#### Autofocus

```vue
<up-code-input v-model="value4" :focus="true"></up-code-input>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/codeInput.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `change` |
| `finish` |
| `input` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCodeInput` | `UltraUI/Sources/UltraUI/Components/UPCodeInput.swift` |
| Android · Jetpack Compose | `UPCodeInput` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCodeInput.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCodeInput` | `ultra-ui/src/main/ets/components/UPCodeInput.ets` |
| Flutter · Dart | `UPCodeInput` | `packages/ultra_ui/lib/src/widgets/up_code_input.dart` |
| React Native · TypeScript | `UPCodeInput` | `src/components/code-input` |
| Taro · React + TypeScript | `UPCodeInput` | `src/ultra-ui/components/up-code-input` |
| uni-app · Vue 3 | `up-code-input` | `uni_modules/uview-ultra/components/up-code-input` |
| uni-app-x · UTS / UVUE | `up-code-input` | `uni_modules/uview-ultra/components/up-code-input` |

