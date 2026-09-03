---
title: Code
description: A headless countdown that drives a "resend verification code" button.
generated: true
---

# Code

A headless countdown that drives a "resend verification code" button.

<PlatformBadges component="code" show-missing />

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

<template #flutter>

#### 基础功能

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

#### 文本样式

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

#### 文本样式

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

#### 重置（reset）

通过 ref.reset() 立即结束倒计时并回到 endText

```tsx
import { UPCode } from '@ultra-ui'

<UPCode ref={resetRef} seconds={20} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/code/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view class="wrap">
		<up-toast ref="uToastRef"></up-toast>
		<up-code :seconds="seconds" @end="end" @start="start" ref="uCodeRef" 
		@change="codeChange"></up-code>
		<up-button @tap="getCode">{{tips}}</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const tips = ref('');
const seconds = ref(10);
const uCodeRef = ref(null);

const codeChange = (text) => {
  tips.value = text;
};

const getCode = () => {
  if (uCodeRef.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    });
    setTimeout(() => {
      uni.hideLoading();
      // 这里此提示会被start()方法中的提示覆盖
      uni.$u.toast('验证码已发送');
      // 通知验证码组件内部开始倒计时
      uCodeRef.start();
    }, 2000);
  } else {
    uni.$u.toast('倒计时结束后再发送');
  }
};

const end = () => {
  uni.$u.toast('倒计时结束');
};

const start = () => {
  uni.$u.toast('倒计时开始');
};
</script>

<style lang="scss">
	.wrap {
		padding: 24rpx;
	}
</style>
```

#### 保持倒计时

```vue
/* A.vue */
<up-verification-code unique-key="page-a"></up-verification-code>

/* B.vue */
<up-verification-code unique-key="page-b"></up-verification-code>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/code.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view class="wrap">
		<up-toast ref="uToastRef"></up-toast>
		<up-code :seconds="seconds" @end="end" @start="start" ref="uCodeRef" 
		@change="codeChange"></up-code>
		<up-button @tap="getCode">{{tips}}</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const tips = ref('');
const seconds = ref(10);
const uCodeRef = ref(null);

const codeChange = (text) => {
  tips.value = text;
};

const getCode = () => {
  if (uCodeRef.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    });
    setTimeout(() => {
      uni.hideLoading();
      // 这里此提示会被start()方法中的提示覆盖
      uni.$u.toast('验证码已发送');
      // 通知验证码组件内部开始倒计时
      uCodeRef.start();
    }, 2000);
  } else {
    uni.$u.toast('倒计时结束后再发送');
  }
};

const end = () => {
  uni.$u.toast('倒计时结束');
};

const start = () => {
  uni.$u.toast('倒计时开始');
};
</script>

<style lang="scss">
	.wrap {
		padding: 24rpx;
	}
</style>
```

#### 保持倒计时

```vue
/* A.vue */
<up-verification-code unique-key="page-a"></up-verification-code>

/* B.vue */
<up-verification-code unique-key="page-b"></up-verification-code>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/code.md`</small>

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

