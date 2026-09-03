---
title: Box 盒子
description: 带内边距、圆角与阴影的基础容器，替代手写 view 样式。
generated: true
---

# Box 盒子

带内边距、圆角与阴影的基础容器，替代手写 view 样式。

<PlatformBadges component="box" show-missing />

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

const UPBox(
  key: ValueKey('box-page-basic'),
  height: '160px',
  gap: '12px',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/box_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBox } from 'ultra-ui-rn';

<UPBox
  gap="12px"
  height="180px"
  left={<UPIcon name="arrow-left" size={19} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/BoxDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPBox } from '@ultra-ui'

<UPBox
  bgColors={['#f3f4f6', '#e5e7eb', '#d1d5db']}
  height={160}
  borderRadius={16}
  gap={20}
  leftIcon='photo'
  leftTitle='相册'
  rightTopIcon='star'
  rightTopTitle='收藏'
  rightBottomIcon='setting'
  rightBottomTitle='设置'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/box/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-box height="160px" gap="12px">
    <template #left>
        左
    </template>
    <template #rightTop>
        右上
    </template>
    <template #rightBottom>
        右下
    </template>
</up-box>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/box/box.nvue`</small>

</template>

<template #uniappx>

```vue
<up-box height="160px" gap="12px">
    <template #left>
        左
    </template>
    <template #rightTop>
        右上
    </template>
    <template #rightBottom>
        右下
    </template>
</up-box>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/box/box.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bgColors` | 背景色 | `Array` | `['#EEFCFF', '#FCF8FF', '#FDF8F2']` |
| `height` | 高度 | `String` | `'160px'` |
| `borderRadius` | 圆角 | `String` | `'6px'` |
| `gap` | 间隔 | `String` | `'15px'` |
| `leftIcon` | 左侧图标 | `String` | `''` |
| `leftTitle` | 左侧文案 | `String` | `'左'` |
| `rightTopIcon` | 右上图标 | `String` | `''` |
| `rightTopTitle` | 右上文案 | `String` | `'右上'` |
| `rightBottomIcon` | 右下图标 | `String` | `''` |
| `rightBottomTitle` | 右下文案 | `String` | `'右下'` |

### 插槽

| 插槽名 |
| --- |
| `left` |
| `rightBottom` |
| `rightTop` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPBox` | `UltraUI/Sources/UltraUI/Components/UPBox.swift` |
| Flutter · Dart | `UPBox` | `packages/ultra_ui/lib/src/widgets/up_box.dart` |
| React Native · TypeScript | `UPBox` | `src/components/box` |
| Taro · React + TypeScript | `UPBox` | `src/ultra-ui/components/up-box` |
| uni-app · Vue 3 | `up-box` | `src/uni_modules/uview-plus/components/u-box` |
| uni-app-x · UTS / UVUE | `up-box` | `uni_modules/uview-ultra/components/up-box` |

