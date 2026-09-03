---
title: Message input
description: An SMS-code field similar to code-input, with autofocus and auto-submit.
generated: true
---

# Message input

An SMS-code field similar to code-input, with autofocus and auto-submit.

<PlatformBadges component="message-input" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### 加粗 + 自定义颜色

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

#### 禁用状态

disabled 同时禁用输入框与按钮

```tsx
import { UPMessageInput } from '@ultra-ui'

<UPMessageInput disabled value='123456' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/message-input/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-message-input
    v-model="boxValue"
    :maxlength="4"
    mode="box"
    @change="onChange"
    @finish="onFinish"
></up-message-input>
```

```vue
<up-message-input
    v-model="lineValue"
    :maxlength="6"
    mode="bottomLine"
    :dot-fill="true"
    @finish="onFinish"
></up-message-input>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

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

```vue
<up-message-input
    v-model="lineValue"
    :maxlength="6"
    mode="bottomLine"
    :dot-fill="true"
    @finish="onFinish"
></up-message-input>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

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
| uni-app · Vue 3 | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |
| uni-app-x · UTS / UVUE | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |

