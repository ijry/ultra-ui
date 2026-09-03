---
title: Message input 验证码输入框
description: 与 code-input 类似的短信验证码输入，可自动聚焦与自动提交。
generated: true
---

# Message input 验证码输入框

与 code-input 类似的短信验证码输入，可自动聚焦与自动提交。

<PlatformBadges component="message-input" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/MessageInputDemo.tsx`</small>

</template>

<template #taro>

#### 禁用状态

disabled 同时禁用输入框与按钮

```tsx
import { UPMessageInput } from '@ultra-ui'

<UPMessageInput disabled value='123456' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/message-input/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `change` |
| `finish` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPMessageInput` | `packages/ultra_ui/lib/src/widgets/up_message_input.dart` |
| React Native · TypeScript | `UPMessageInput` | `src/components/message-input` |
| Taro · React + TypeScript | `UPMessageInput` | `src/ultra-ui/components/up-message-input` |
| uni-app · Vue 3 | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |
| uni-app-x · UTS / UVUE | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |

