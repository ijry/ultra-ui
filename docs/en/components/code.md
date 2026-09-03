---
title: Code
description: A headless countdown that drives a "resend verification code" button.
generated: true
---

# Code

A headless countdown that drives a "resend verification code" button.

<PlatformBadges component="code" show-missing />

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

<template #flutter>

### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCode(
  controller: _basicController,
  seconds: 20,
  changeText: 'XS获取',
  onChange: (text) => _setStateSafely(() => _tips = text),
  onStart: () => _setStateSafely(() => _disabled1 = true),
  onEnd: () => _setStateSafely(() => _disabled1 = false),
)
```

### 保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)

```dart
UPCode(
  controller: _keepController,
  keepRunning: true,
  uniqueKey: 'code-page-keep',
  changeText: '倒计时XS',
  onChange: (text) => _setStateSafely(() => _tips1 = text),
  onStart: () => _setStateSafely(() => _disabled2 = true),
  onEnd: () => _setStateSafely(() => _disabled2 = false),
)
```

### 文本样式

```dart
UPCode(
  controller: _textController,
  keepRunning: true,
  uniqueKey: 'code-page-text',
  startText: '点我获取验证码',
  onChange: (text) => _setStateSafely(() => _tips2 = text),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/code_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCode } from 'ultra-ui-rn';

<UPCode
  keepRunning
  onChange={setTips2}
  ref={code2}
  startText="点我获取验证码"
  uniqueKey="code-demo-text-style"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/CodeDemo.tsx`</small>

</template>

<template #taro>

### 重置（reset）

通过 ref.reset() 立即结束倒计时并回到 endText

```tsx
import { UPCode } from '@ultra-ui'

<UPCode ref={resetRef} seconds={20} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/code/index.tsx`</small>

</template>

<template #uniapp>

### 基础功能

```vue
<up-code
    ref="uCode"
    @change="codeChange"
    seconds="20"
    change-text="XS获取"
    @start="disabled1 = true"
    @end="disabled1 = false"
></up-code>
```

### 保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)

```vue
<up-code
    ref="uCode1"
    @change="codeChange1"
    keep-running
    change-text="倒计时XS"
    @start="disabled2 = true"
    @end="disabled2 = false"
></up-code>
```

### 文本样式

```vue
<up-code
    ref="uCode2"
    @change="codeChange2"
    keep-running
    start-text="点我获取验证码"
></up-code>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/code/code.uvue`</small>

</template>

<template #uniappx>

### 基础功能

```vue
<up-code
    ref="uCode"
    @change="codeChange"
    seconds="20"
    change-text="XS获取"
    @start="disabled1 = true"
    @end="disabled1 = false"
></up-code>
```

### 保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)

```vue
<up-code
    ref="uCode1"
    @change="codeChange1"
    keep-running
    change-text="倒计时XS"
    @start="disabled2 = true"
    @end="disabled2 = false"
></up-code>
```

### 文本样式

```vue
<up-code
    ref="uCode2"
    @change="codeChange2"
    keep-running
    start-text="点我获取验证码"
></up-code>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/code/code.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `seconds` | 倒计时总秒数 | `String / Number` | `60` |
| `startText` | 尚未开始时提示 | `String` | `'获取验证码'` |
| `changeText` | 正在倒计时中的提示 | `String` | `'X秒重新获取'` |
| `endText` | 倒计时结束时的提示 | `String` | `'重新获取'` |
| `keepRunning` | 是否在H5刷新或各端返回再进入时继续倒计时 | `Boolean` | `false` |
| `uniqueKey` | 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了 | `String` | `''` |

### Events

| Event |
| --- |
| `change` |
| `end` |
| `start` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCode` | `UltraUI/Sources/UltraUI/Components/UPCode.swift` |
| Flutter · Dart | `UPCode` | `packages/ultra_ui/lib/src/widgets/up_code.dart` |
| React Native · TypeScript | `UPCode` | `src/components/code` |
| Taro · React + TypeScript | `UPCode` | `src/ultra-ui/components/up-code` |
| uni-app · Vue 3 | `up-code` | `uni_modules/uview-ultra/components/up-code` |
| uni-app-x · UTS / UVUE | `up-code` | `uni_modules/uview-ultra/components/up-code` |

