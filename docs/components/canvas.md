---
title: Canvas 画布
description: 统一各端差异的画布封装，是二维码、海报等组件的底层。
generated: true
---

# Canvas 画布

统一各端差异的画布封装，是二维码、海报等组件的底层。

<PlatformBadges component="canvas" show-missing />

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
import { UPCanvas } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCanvas } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `touchend` |
| `touchmove` |
| `touchstart` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCanvas` | `packages/ultra_ui/lib/src/widgets/up_canvas.dart` |
| React Native · TypeScript | `UPCanvas` | `src/components/canvas` |
| Taro · React + TypeScript | `UPCanvas` | `src/ultra-ui/components/up-canvas` |
| uni-app · Vue 3 | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |
| uni-app-x · UTS / UVUE | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |

