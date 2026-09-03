---
title: Message input
description: An SMS-code field similar to code-input, with autofocus and auto-submit.
generated: true
---

# Message input

An SMS-code field similar to code-input, with autofocus and auto-submit.

<PlatformBadges component="message-input" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

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
import { UPMessageInput } from 'ultra-ui-rn';

<UPMessageInput
maxlength={4}
bold
fontSize={24}
width={50}
activeColor="#ff6600"
breathe={false}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/MessageInputDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPMessageInput } from '@ultra-ui'

<UPMessageInput disabled value='123456' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/message-input/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

<template #uniappx>

```vue
<up-message-input
    v-model="boxValue"
    :maxlength="4"
    mode="box"
    @change="onChange"
    @finish="onFinish"
></up-message-input>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `maxlength` | 最大输入长度 | `Number / String` | `—` |
| `dotFill` | 是否用圆点填充 | `Boolean` | `—` |
| `mode` | 显示模式，box-盒子模式，bottomLine-横线在底部模式，middleLine-横线在中部模式 | `String` | `—` |
| `modelValue` | 预置值 | `String / Number` | `—` |
| `breathe` | 当前激活输入item，是否带有呼吸效果 | `Boolean` | `—` |
| `focus` | 是否自动获取焦点 | `Boolean` | `—` |
| `bold` | 字体是否加粗 | `Boolean` | `—` |
| `fontSize` | 字体大小 | `String / Number` | `—` |
| `activeColor` | 激活样式 | `String` | `—` |
| `inactiveColor` | 未激活的样式 | `String` | `—` |
| `width` | 输入框的大小，单位rpx，宽等于高 | `Number / String` | `—` |
| `disabledKeyboard` | 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true | `Boolean` | `—` |

### Events

| Event |
| --- |
| `change` |
| `finish` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPMessageInput` | `packages/ultra_ui/lib/src/widgets/up_message_input.dart` |
| React Native · TypeScript | `UPMessageInput` | `src/components/message-input` |
| Taro · React + TypeScript | `UPMessageInput` | `src/ultra-ui/components/up-message-input` |
| uni-app · Vue 3 | `up-message-input` | `src/uni_modules/uview-plus/components/u-message-input` |
| uni-app-x · UTS / UVUE | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |

