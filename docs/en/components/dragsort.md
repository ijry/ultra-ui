---
title: Drag sort
description: A list or grid reordered by long-press and drag.
generated: true
---

# Drag sort

A list or grid reordered by long-press and drag.

<PlatformBadges component="dragsort" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPDragSort(
  key: const ValueKey('dragsort-page-vertical'),
  initialList: _list,
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) =>
      _item(tokens, item, index: index),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/dragsort_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDragsort } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPDragsort } from '@ultra-ui'

<UPDragsort list={plain} onChange={setPlain} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/dragsort/index.tsx`</small>

</template>

<template #uniapp>

```vue
<u-dragsort :initial-list="list" @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="custom-item" :style="{ backgroundColor: upThemeVar('--up-bg-color'), color: upThemeVar('--up-main-color') }">
      <text>序号：{{ index + 1 }}</text> -
      <text>{{ item.label }}</text>
    </view>
  </template>
</u-dragsort>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/dragsort/dragsort.vue`</small>

</template>

<template #uniappx>

```vue
<up-dragsort :initial-list="list" @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="custom-item">
      <text class="custom-item__text">序号：{{ getDisplayIndex(index) }} - {{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/dragsort/dragsort.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `initialList` | — | `Array` | `—` |
| `draggable` | — | `Boolean` | `—` |
| `vibrate` | — | `Boolean` | `—` |
| `direction` | — | `String` | `—` |
| `columns` | 新增列数属性，用于all模式 | `Number` | `—` |

### Events

| Event |
| --- |
| `drag-end` |

### Slots

| Slot |
| --- |
| `default` |
| `handler` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPDragSort` | `packages/ultra_ui/lib/src/widgets/up_drag_sort.dart` |
| React Native · TypeScript | `UPDragsort` | `src/components/dragsort` |
| Taro · React + TypeScript | `UPDragsort` | `src/ultra-ui/components/up-dragsort` |
| uni-app · Vue 3 | `up-dragsort` | `src/uni_modules/uview-plus/components/u-dragsort` |
| uni-app-x · UTS / UVUE | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |

