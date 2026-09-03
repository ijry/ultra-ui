---
title: Keyboard
description: Custom keyboards： numeric, ID-card and licence-plate layouts.
generated: true
---

# Keyboard

Custom keyboards: numeric, ID-card and licence-plate layouts.

<PlatformBadges component="keyboard" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPKeyboard(
  mode: _mode,
  dotDisabled: _dotDisabled,
  random: _random,
  show: true,
  onClose: _closeKeyboard,
  onCancel: _closeKeyboard,
  onConfirm: _closeKeyboard,
  onUpdateShow: (show) {
    if (!show) _closeKeyboard();
  },
  onChange: _appendInput,
  onBackspace: _backspace,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/keyboard_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPKeyboard } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### 打乱顺序

random 打乱字母排列

```tsx
import { UPKeyboard } from '@ultra-ui'

<UPKeyboard mode='letter' random onChange={append} onBackspace={backspace} />
```

#### 安全区

safe 显示底部安全区占位

```tsx
<UPKeyboard mode='letter' safe onChange={append} onBackspace={backspace} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/keyboard/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-keyboard
    :mode="keyData.mode"
    :dotDisabled="keyData.dotDisabled"
    :random="keyData.random"
    :show="show"
    @close="close"
    @cancel="cancel"
    @confirm="confirm"
    @change="change"
    @backspace="backspace"
></up-keyboard>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/keyboard/keyboard.uvue`</small>

</template>

<template #uniappx>

```vue
<up-keyboard
    :mode="keyData.mode"
    :dotDisabled="keyData.dotDisabled"
    :random="keyData.random"
    :show="show"
    @close="close"
    @cancel="cancel"
    @confirm="confirm"
    @change="change"
    @backspace="backspace"
></up-keyboard>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/keyboard/keyboard.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-keyboard>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `mode` | 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘 | `String` | `'number'` |
| `dotDisabled` | 是否显示键盘的"."符号 | `Boolean` | `false` |
| `tooltip` | 是否显示顶部工具条 | `Boolean` | `true` |
| `showTips` | 是否显示工具条中间的提示 | `Boolean` | `true` |
| `tips` | 工具条中间的提示文字 | `String` | `''` |
| `showCancel` | 是否显示工具条左边的"取消"按钮 | `Boolean` | `true` |
| `showConfirm` | 是否显示工具条右边的"完成"按钮 | `Boolean` | `true` |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |
| `safeAreaInsetBottom` | 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距 | `Boolean` | `true` |
| `closeOnClickOverlay` | 是否允许通过点击遮罩关闭键盘 | `Boolean` | `true` |
| `show` | 控制键盘的弹出与收起 | `Boolean` | `false` |
| `overlay` | 是否显示遮罩，某些时候数字键盘时，用户希望看到自己的数值，所以可能不想要遮罩 | `Boolean` | `true` |
| `zIndex` | z-index值 | `String / Number` | `10075` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确定'` |
| `autoChange` | 输入一个中文后，是否自动切换到英文 | `Boolean` | `false` |

#### Events

| Event |
| --- |
| `backspace` |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-car-keyboard>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |
| `autoChange` | 输入一个中文后，是否自动切换到英文 | `Boolean` | `—` |

#### Events

| Event |
| --- |
| `backspace` |
| `change` |

### `<up-number-keyboard>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `mode` | 键盘的类型，number-数字键盘，card-身份证键盘 | `String` | `'number'` |
| `dotDisabled` | 是否显示键盘的"."符号 | `Boolean` | `false` |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |

#### Events

| Event |
| --- |
| `backspace` |
| `change` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPKeyboard` | `packages/ultra_ui/lib/src/widgets/up_keyboard.dart` |
| React Native · TypeScript | `UPKeyboard` | `src/components/keyboard` |
| Taro · React + TypeScript | `UPKeyboard` | `src/ultra-ui/components/up-keyboard` |
| uni-app · Vue 3 | `up-keyboard` | `uni_modules/uview-ultra/components/up-keyboard` |
| uni-app-x · UTS / UVUE | `up-keyboard` | `uni_modules/uview-ultra/components/up-keyboard` |

