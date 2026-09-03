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

```tsx
import { UPCateTab } from '@ultra-ui'

<UPCateTab height='70vh' tabList={basicTabs} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/cate-tab/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

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
| uni-app · Vue 3 | `up-cate-tab` | `src/uni_modules/uview-plus/components/u-cate-tab` |
| uni-app-x · UTS / UVUE | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |

