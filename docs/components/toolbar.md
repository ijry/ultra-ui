---
title: Toolbar 工具条
description: 弹出层顶部的取消/确认工具条，选择器类组件的公共部件。
generated: true
---

# Toolbar 工具条

弹出层顶部的取消/确认工具条，选择器类组件的公共部件。

<PlatformBadges component="toolbar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 隐藏状态

```tsx
import { UPToolbar } from 'ultra-ui-rn';

<UPToolbar show={false} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/ToolbarDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/toolbar/index.tsx`</small>

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

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否展示工具条 | `Boolean` | `true` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确认'` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `title` | 标题文字 | `String` | `''` |
| `rightSlot` | 开启右侧插槽 | `Boolean` | `—` |

### 事件

| 事件名 |
| --- |
| `cancel` |
| `confirm` |

### 插槽

| 插槽名 |
| --- |
| `right` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPToolbar` | `packages/ultra_ui/lib/src/widgets/up_toolbar.dart` |
| React Native · TypeScript | `UPToolbar` | `src/components/toolbar` |
| Taro · React + TypeScript | `UPToolbar` | `src/ultra-ui/components/up-toolbar` |
| uni-app · Vue 3 | `up-toolbar` | `uni_modules/uview-ultra/components/up-toolbar` |
| uni-app-x · UTS / UVUE | `up-toolbar` | `uni_modules/uview-ultra/components/up-toolbar` |

