---
title: Code 验证码倒计时
description: 无 UI 的倒计时逻辑组件，配合按钮实现"重新获取验证码"。
generated: true
---

# Code 验证码倒计时

无 UI 的倒计时逻辑组件，配合按钮实现"重新获取验证码"。

<PlatformBadges component="code" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/code_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/CodeDemo.tsx`</small>

</template>

<template #taro>

#### 重置（reset）

通过 ref.reset() 立即结束倒计时并回到 endText

```tsx
import { UPCode } from '@ultra-ui'

<UPCode ref={resetRef} seconds={20} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/code/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过ref获取组件对象，再执行后面的操作，见下方示例。

1. 通过`seconds`设置需要倒计的秒数(默认`60`)
2. 通过ref调用组件内部的`start`方法，开始倒计时
3. 通过监听`change`事件(从开始到结束之间，每秒触发一次)获得提示的文字，可能值如"获取验证码|12秒后重新获取|重新获取"，可以自定义

注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的`canGetCode`变量，在倒计时
过程中，该值为`false`，如果为`false`应该给予提示并不要再次向后端请求验证码，如果为`true`，则为获取验证码
之前，或者倒计结束之后，可以再次向后端请求验证码。

以下为完整示例，见如下：

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

一般情况下，在H5刷新浏览器，或者各端返回再进入时，倒计时会消失，导致用户可以再次尝试获取验证码，虽然后端还会对此进行进一步的判断。  
对于这种情况，uview-plus给出了一个`keep-running`参数(默认为`false`)，为`true`的时候，即使刷新浏览器，或者返回上一个页面，
倒计时依然会继续(如果还在倒计时间内的话)。

**注意：** 如果您的一个页面或者多个页面同时使用了多个此组件，为了防止多个组件之间，保存在本地的多个继续倒计时的变量之间互相干扰，可以配置
各个组件的`unique-key`为一个不重复的字符串，以作区分：

```vue
/* A.vue */
<up-verification-code unique-key="page-a"></up-verification-code>

/* B.vue */
<up-verification-code unique-key="page-b"></up-verification-code>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/code.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过ref获取组件对象，再执行后面的操作，见下方示例。

1. 通过`seconds`设置需要倒计的秒数(默认`60`)
2. 通过ref调用组件内部的`start`方法，开始倒计时
3. 通过监听`change`事件(从开始到结束之间，每秒触发一次)获得提示的文字，可能值如"获取验证码|12秒后重新获取|重新获取"，可以自定义

注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的`canGetCode`变量，在倒计时
过程中，该值为`false`，如果为`false`应该给予提示并不要再次向后端请求验证码，如果为`true`，则为获取验证码
之前，或者倒计结束之后，可以再次向后端请求验证码。

以下为完整示例，见如下：

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

一般情况下，在H5刷新浏览器，或者各端返回再进入时，倒计时会消失，导致用户可以再次尝试获取验证码，虽然后端还会对此进行进一步的判断。  
对于这种情况，uview-ultra给出了一个`keep-running`参数(默认为`false`)，为`true`的时候，即使刷新浏览器，或者返回上一个页面，
倒计时依然会继续(如果还在倒计时间内的话)。

**注意：** 如果您的一个页面或者多个页面同时使用了多个此组件，为了防止多个组件之间，保存在本地的多个继续倒计时的变量之间互相干扰，可以配置
各个组件的`unique-key`为一个不重复的字符串，以作区分：

```vue
/* A.vue */
<up-verification-code unique-key="page-a"></up-verification-code>

/* B.vue */
<up-verification-code unique-key="page-b"></up-verification-code>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/code.md`</small>

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

