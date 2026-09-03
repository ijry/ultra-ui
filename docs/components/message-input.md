---
title: Message input 验证码输入框
description: 与 code-input 类似的短信验证码输入，可自动聚焦与自动提交。
generated: true
---

# Message input 验证码输入框

与 code-input 类似的短信验证码输入，可自动聚焦与自动提交。

<PlatformBadges component="message-input" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

```tsx
import { UPMessageInput } from '@ultra-ui'

<UPMessageInput disabled value='123456' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/message-input/index.tsx`</small>

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/messageInput/messageInput.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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
| uni-app · Vue 3 | `up-message-input` | `src/uni_modules/uview-plus/components/u-message-input` |
| uni-app-x · UTS / UVUE | `up-message-input` | `uni_modules/uview-ultra/components/up-message-input` |

