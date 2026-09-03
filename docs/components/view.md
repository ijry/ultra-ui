---
title: View 视图容器
description: 最底层的视图容器，统一各端的盒模型与样式写法。
generated: true
---

# View 视图容器

最底层的视图容器，统一各端的盒模型与样式写法。

<PlatformBadges component="view" show-missing />

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
import { UPView } from 'ultra-ui-rn';

<UPView backgroundColor="#e3f2fd" padding={12}>
<Text>基础 View</Text>
</UPView>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/ViewDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPView } from '@ultra-ui'

<UPView customClass='view-demo__box' backgroundColor='#ecf5ff' padding='16'>
  这是一个基础 View 容器
</UPView>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/view/index.tsx`</small>

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
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPView` | `packages/ultra_ui/lib/src/widgets/up_view.dart` |
| React Native · TypeScript | `UPView` | `src/components/view` |
| Taro · React + TypeScript | `UPView` | `src/ultra-ui/components/up-view` |
| uni-app · Vue 3 | `up-view` | `src/uni_modules/uview-plus/components/u-view` |
| uni-app-x · UTS / UVUE | `up-view` | `uni_modules/uview-ultra/components/up-view` |

