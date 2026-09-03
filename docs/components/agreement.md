---
title: Agreement 协议勾选
description: 用户协议勾选控件，内置未勾选时的抖动提示。
generated: true
---

# Agreement 协议勾选

用户协议勾选控件，内置未勾选时的抖动提示。

<PlatformBadges component="agreement" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPAgreement(
  controller: _agreement1,
  urlProtocol: _urlProtocol,
  urlPrivacy: _urlPrivacy,
  onConfirm: (value) => setState(() => _checked1 = value),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/agreement_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAgreement } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

### 基础用法

受控选中态 + onChange

```tsx
import { UPAgreement } from '@ultra-ui'

<UPAgreement
  text='我已阅读并同意相关服务条款'
  value={agreed}
  onChange={setAgreed}
/>
```

### 禁用状态

disabled 时不可交互

```tsx
<UPAgreement
  text='禁用状态下的协议勾选'
  protocolName='《隐私政策》'
  value={false}
  disabled
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/agreement/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-agreement ref="agreement1" @confirm="change1"
    url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
    url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"></up-agreement>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/agreement/agreement.uvue`</small>

</template>

<template #uniappx>

```vue
<up-agreement ref="agreement1" @confirm="change1"
    url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
    url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"></up-agreement>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/agreement/agreement.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `confirm` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPAgreement` | `packages/ultra_ui/lib/src/widgets/up_agreement.dart` |
| React Native · TypeScript | `UPAgreement` | `src/components/agreement` |
| Taro · React + TypeScript | `UPAgreement` | `src/ultra-ui/components/up-agreement` |
| uni-app · Vue 3 | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |
| uni-app-x · UTS / UVUE | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |

