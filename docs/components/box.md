---
title: Box 盒子
description: 带内边距、圆角与阴影的基础容器，替代手写 view 样式。
generated: true
---

# Box 盒子

带内边距、圆角与阴影的基础容器，替代手写 view 样式。

<PlatformBadges component="box" show-missing />

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

const UPBox(
  key: ValueKey('box-page-basic'),
  height: '160px',
  gap: '12px',
)
```

#### 自定义插槽

```dart
const UPBox(
  key: ValueKey('box-page-custom'),
  height: '180px',
  gap: '12px',
  left: UPIcon(name: 'arrow-left', size: 19),
  rightTop: UPIcon(name: 'arrow-left', size: 19),
  rightBottom: UPIcon(name: 'arrow-left', size: 19),
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

#### 基础用法

带内边距/背景/圆角的 2x2 布局容器

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

#### 纯标题（无图标）

只传 title，图标留空

```tsx
<UPBox
  bgColors={['#ecf5ff', '#f0f9eb', '#fef0f0']}
  height={140}
  borderRadius={12}
  gap={16}
  leftTitle='消息'
  rightTopTitle='任务'
  rightBottomTitle='我的'
/>
```

#### 渐变背景

bgColors 支持任意 CSS 颜色（含渐变）

```tsx
<UPBox
  bgColors={[
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
  ]}
  height={160}
  borderRadius={16}
  gap={20}
  leftTitle='渐变 A'
  rightTopTitle='渐变 B'
  rightBottomTitle='渐变 C'
/>
```

#### 尺寸与间距

通过 height / gap / borderRadius 调整

```tsx
<UPBox
  bgColors={['#f3f4f6', '#e5e7eb', '#d1d5db']}
  height={120}
  borderRadius={8}
  gap={10}
  leftTitle='左'
  rightTopTitle='右上'
  rightBottomTitle='右下'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/box/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`bgColors`(设置3个盒子的背景色)，`height`(盒子总高度)，`gap`(盒子间隔)
- 通过`borderRadius`设置盒子圆角大小

```vue
<template>
	<view class="p-4 bg-white">
        <up-box height="160px" gap="12px" :bgColors="['#EEFCFF', '#FCF8FF', '#FDF8F2']">
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
    </view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/box.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`bgColors`(设置3个盒子的背景色)，`height`(盒子总高度)，`gap`(盒子间隔)
- 通过`borderRadius`设置盒子圆角大小

```vue
<template>
	<view class="p-4 bg-white">
        <up-box height="160px" gap="12px" :bgColors="['#EEFCFF', '#FCF8FF', '#FDF8F2']">
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
    </view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/box.md`</small>

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
| uni-app · Vue 3 | `up-box` | `uni_modules/uview-ultra/components/up-box` |
| uni-app-x · UTS / UVUE | `up-box` | `uni_modules/uview-ultra/components/up-box` |

