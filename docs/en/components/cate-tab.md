---
title: Category tab
description: Two-level navigation with categories on the left and content on the right.
generated: true
---

# Category tab

Two-level navigation with categories on the left and content on the right.

<PlatformBadges component="cate-tab" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

#### 左右联动

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

#### 左右独立

```dart
UPCateTab(
  key: const ValueKey('cate-tab-page-tab'),
  mode: 'tab',
  height: '320px',
  tabList: _categories,
  current: _tabIndex,
  itemBuilder: _itemBuilder,
  onChange: (index) => setState(() {
    if (index != _tabIndex) _tabChanges += 1;
    _tabIndex = index;
  }),
  onUpdateCurrent: (index) => setState(() {
    _tabIndex = index;
  }),
  onUpdateModelValue: (index) => setState(() {
    _tabIndex = index;
  }),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/cate_tab_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCateTab } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### 基础两栏

follow 模式：滚动右侧自动联动左侧

```tsx
import { UPCateTab } from '@ultra-ui'

<UPCateTab height='70vh' tabList={basicTabs} />
```

#### 带图标

子项通过 icon 字段渲染缩略图

```tsx
<UPCateTab height='70vh' tabList={iconTabs} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/cate-tab/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-cate-tab class="cate-tab" mode="follow" :height="height" :tabList="tabList"
    tabKeyName="title" itemKeyName="title"></up-cate-tab>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cateTab/cateTab.uvue`</small>

</template>

<template #uniappx>

```vue
<up-cate-tab class="cate-tab" mode="follow" :height="height" :tabList="tabList"
    tabKeyName="title" itemKeyName="title"></up-cate-tab>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cateTab/cateTab.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `update:current` |

### Slots

| Slot |
| --- |
| `itemList` |
| `pageItem` |
| `rightTop` |
| `tabItem` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCateTab` | `packages/ultra_ui/lib/src/widgets/up_cate_tab.dart` |
| React Native · TypeScript | `UPCateTab` | `src/components/cate-tab` |
| Taro · React + TypeScript | `UPCateTab` | `src/ultra-ui/components/up-cate-tab` |
| uni-app · Vue 3 | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |
| uni-app-x · UTS / UVUE | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |

