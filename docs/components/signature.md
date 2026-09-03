---
title: Signature 签名
description: 手写签名画板，可导出为图片。
generated: true
---

# Signature 签名

手写签名画板，可导出为图片。

<PlatformBadges component="signature" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSignature(
  key: const ValueKey('signature-page-basic'),
  controller: _signature1,
  // Source passes 700x200 in rpx-derived px units.
  width: 700,
  height: 200,
  bgColor: bgColor,
  showToolbar: false,
  onConfirm: (payload) => _capture(1),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/signature_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSignature } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPSignature } from '@ultra-ui'

<UPSignature
  width={320}
  height={180}
  color='#2979ff'
  thickness={6}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/signature/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-signature
    ref="signature1"
    :width="700"
    :height="200"
    :bg-color="upThemeIsDark ? '#1c1c1e' : '#f5f5f5'"
    :show-toolbar="false"
    @confirm="onConfirm1"
    @error="onError1"
></up-signature>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/signature/signature.nvue`</small>

</template>

<template #uniappx>

```vue
<up-signature 
    ref="signature1" 
    :width="700" 
    :height="200" 
    bg-color="#f5f5f5"
    :show-toolbar="false"
    @confirm="onConfirm1"
    @error="onError1"
></up-signature>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/signature/signature.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 画布宽度 | `String / Number` | `—` |
| `height` | 画布高度 | `String / Number` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `color` | 默认笔画颜色 | `String` | `—` |
| `thickness` | 默认笔画粗细 | `String / Number` | `—` |
| `showToolbar` | 是否显示工具栏 | `Boolean` | `—` |

### 事件

| 事件名 |
| --- |
| `clear` |
| `confirm` |
| `error` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPSignature` | `packages/ultra_ui/lib/src/widgets/up_signature.dart` |
| React Native · TypeScript | `UPSignature` | `src/components/signature` |
| Taro · React + TypeScript | `UPSignature` | `src/ultra-ui/components/up-signature` |
| uni-app · Vue 3 | `up-signature` | `src/uni_modules/uview-plus/components/u-signature` |
| uni-app-x · UTS / UVUE | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |

