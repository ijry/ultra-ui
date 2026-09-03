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

```tsx
import { UPCode } from '@ultra-ui'

<UPCode ref={resetRef} seconds={20} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/code/index.tsx`</small>

</template>

<template #uniapp>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/code/code.nvue`</small>

</template>

<template #uniappx>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/code/code.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `seconds` | 倒计时总秒数 | `String / Number` | `60` |
| `startText` | 尚未开始时提示 | `String` | `t("up.code.send")` |
| `changeText` | 正在倒计时中的提示 | `String` | `t("up.code.resendAfter")` |
| `endText` | 倒计时结束时的提示 | `String` | `t("up.code.resend")` |
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
| uni-app · Vue 3 | `up-code` | `src/uni_modules/uview-plus/components/u-code` |
| uni-app-x · UTS / UVUE | `up-code` | `uni_modules/uview-ultra/components/up-code` |

