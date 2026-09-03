---
title: Box
description: A basic container with padding, radius and shadow, so you write less CSS.
generated: true
---

# Box

A basic container with padding, radius and shadow, so you write less CSS.

<PlatformBadges component="box" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/box_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBox } from 'ultra-ui-rn';

<UPBox
  gap="12px"
  height="180px"
  left={<UPIcon name="arrow-left" size={19} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/BoxDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/box/index.tsx`</small>

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

```vue
<up-box
    height="180px" gap="12px"
>
    <template #left>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
    <template #rightTop>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
    <template #rightBottom>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
</up-box>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/box/box.uvue`</small>

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

```vue
<up-box
    height="180px" gap="12px"
>
    <template #left>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
    <template #rightTop>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
    <template #rightBottom>
        <up-icon
            name="arrow-left"
            size="19"
        ></up-icon>
    </template>
</up-box>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/box/box.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Slots

| Slot |
| --- |
| `left` |
| `rightBottom` |
| `rightTop` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPBox` | `UltraUI/Sources/UltraUI/Components/UPBox.swift` |
| Flutter · Dart | `UPBox` | `packages/ultra_ui/lib/src/widgets/up_box.dart` |
| React Native · TypeScript | `UPBox` | `src/components/box` |
| Taro · React + TypeScript | `UPBox` | `src/ultra-ui/components/up-box` |
| uni-app · Vue 3 | `up-box` | `uni_modules/uview-ultra/components/up-box` |
| uni-app-x · UTS / UVUE | `up-box` | `uni_modules/uview-ultra/components/up-box` |

