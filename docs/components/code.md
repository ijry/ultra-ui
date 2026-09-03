---
title: Code 验证码倒计时
description: 无 UI 的倒计时逻辑组件，配合按钮实现"重新获取验证码"。
generated: true
---

# Code 验证码倒计时

无 UI 的倒计时逻辑组件，配合按钮实现"重新获取验证码"。

<PlatformBadges component="code" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/code_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/CodeDemo.tsx`</small>

</template>

<template #taro>

### 重置（reset）

通过 ref.reset() 立即结束倒计时并回到 endText

```tsx
import { UPCode } from '@ultra-ui'

<UPCode ref={resetRef} seconds={20} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/code/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/code/code.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/code/code.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `seconds` | 倒计时总秒数 | `String / Number` | `60` |
| `startText` | 尚未开始时提示 | `String` | `'获取验证码'` |
| `changeText` | 正在倒计时中的提示 | `String` | `'X秒重新获取'` |
| `endText` | 倒计时结束时的提示 | `String` | `'重新获取'` |
| `keepRunning` | 是否在H5刷新或各端返回再进入时继续倒计时 | `Boolean` | `false` |
| `uniqueKey` | 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了 | `String` | `''` |

### 事件

| 事件名 |
| --- |
| `change` |
| `end` |
| `start` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCode` | `UltraUI/Sources/UltraUI/Components/UPCode.swift` |
| Flutter · Dart | `UPCode` | `packages/ultra_ui/lib/src/widgets/up_code.dart` |
| React Native · TypeScript | `UPCode` | `src/components/code` |
| Taro · React + TypeScript | `UPCode` | `src/ultra-ui/components/up-code` |
| uni-app · Vue 3 | `up-code` | `uni_modules/uview-ultra/components/up-code` |
| uni-app-x · UTS / UVUE | `up-code` | `uni_modules/uview-ultra/components/up-code` |

