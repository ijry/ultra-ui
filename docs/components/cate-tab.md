---
title: Category tab 分类选项卡
description: 左侧分类、右侧内容的二级联动导航。
generated: true
---

# Category tab 分类选项卡

左侧分类、右侧内容的二级联动导航。

<PlatformBadges component="cate-tab" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCateTab(
  key: const ValueKey('cate-tab-page-follow'),
  mode: 'follow',
  height: '320px',
  tabList: _categories,
  current: 0,
  itemBuilder: _itemBuilder,
  tabBuilder: _followTabBuilder,
  onChange: (index) => setState(() {
    _followIndex = index;
  }),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/cate_tab_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCateTab } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

### 基础两栏

follow 模式：滚动右侧自动联动左侧

```tsx
import { UPCateTab } from '@ultra-ui'

<UPCateTab height='70vh' tabList={basicTabs} />
```

### 带图标

子项通过 icon 字段渲染缩略图

```tsx
<UPCateTab height='70vh' tabList={iconTabs} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/cate-tab/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-cate-tab class="cate-tab" mode="follow" :height="height" :tabList="tabList"
    tabKeyName="title" itemKeyName="title"></up-cate-tab>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cateTab/cateTab.uvue`</small>

</template>

<template #uniappx>

```vue
<up-cate-tab class="cate-tab" mode="follow" :height="height" :tabList="tabList"
    tabKeyName="title" itemKeyName="title"></up-cate-tab>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cateTab/cateTab.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `update:current` |

### 插槽

| 插槽名 |
| --- |
| `itemList` |
| `pageItem` |
| `rightTop` |
| `tabItem` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCateTab` | `packages/ultra_ui/lib/src/widgets/up_cate_tab.dart` |
| React Native · TypeScript | `UPCateTab` | `src/components/cate-tab` |
| Taro · React + TypeScript | `UPCateTab` | `src/ultra-ui/components/up-cate-tab` |
| uni-app · Vue 3 | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |
| uni-app-x · UTS / UVUE | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |

