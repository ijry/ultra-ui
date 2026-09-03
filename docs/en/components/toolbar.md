---
title: Toolbar
description: The cancel/confirm bar at the top of a popup; shared by picker components.
generated: true
---

# Toolbar

The cancel/confirm bar at the top of a popup; shared by picker components.

<PlatformBadges component="toolbar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

#### 隐藏状态

```tsx
import { UPToolbar } from 'ultra-ui-rn';

<UPToolbar show={false} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/ToolbarDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

三个等宽子项，每个 flex:1；默认主色强调

```tsx
import { UPToolbar } from '@ultra-ui'

<UPToolbar borderTop>
  <ToolItem icon='home' label='首页' />
  <ToolItem icon='grid' label='分类' />
  <ToolItem icon='account' label='我的' />
</UPToolbar>
```

#### 更多子项

子项数量自适应均分，超出自动压缩

```tsx
<UPToolbar borderTop>
  <ToolItem icon='home' label='首页' />
  <ToolItem icon='grid' label='分类' />
  <ToolItem icon='photo' label='发现' />
  <ToolItem icon='account' label='我的' />
  <ToolItem icon='more-dot-fill' label='更多' />
</UPToolbar>
```

#### 自定义强调色

activeColor 控制子项文字 / 图标颜色

```tsx
<UPToolbar borderTop activeColor='#3c9cff'>
  <ToolItem icon='home' label='首页' />
  <ToolItem icon='grid' label='分类' />
  <ToolItem icon='account' label='我的' />
</UPToolbar>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/toolbar/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否展示工具条 | `Boolean` | `true` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确认'` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `title` | 标题文字 | `String` | `''` |
| `rightSlot` | 开启右侧插槽 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `cancel` |
| `confirm` |

### Slots

| Slot |
| --- |
| `right` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPToolbar` | `packages/ultra_ui/lib/src/widgets/up_toolbar.dart` |
| React Native · TypeScript | `UPToolbar` | `src/components/toolbar` |
| Taro · React + TypeScript | `UPToolbar` | `src/ultra-ui/components/up-toolbar` |
| uni-app · Vue 3 | `up-toolbar` | `uni_modules/uview-ultra/components/up-toolbar` |
| uni-app-x · UTS / UVUE | `up-toolbar` | `uni_modules/uview-ultra/components/up-toolbar` |

