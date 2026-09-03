---
title: Virtual list
description: Renders only the visible window, so it scales to tens of thousands of rows.
generated: true
---

# Virtual list

Renders only the visible window, so it scales to tens of thousands of rows.

<PlatformBadges component="virtual-list" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPVirtualList(
  key: const ValueKey('virtual-list-page-basic'),
  listData: _items,
  itemHeight: 49,
  height: '800px',
  keyField: 'id',
  scrollTop: _scrollTop,
  onUpdateScrollTop: (value) {
    setState(() => _scrollTop = value);
  },
  itemBuilder: (context, item, index) => UPCell(
    title: 'Item ${item['id']}',
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/virtual_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPVirtualList } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPVirtualList } from '@ultra-ui'

<UPVirtualList
  ref={listRef}
  listData={BIG}
  itemHeight={64}
  height={320}
  buffer={4}
  renderItem={renderRow}
  onRangeChange={setRange}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/virtual-list/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-virtual-list class=""
    :list-data="listData3"
    :item-height="49"
    height="800px"
    v-model:scrollTop="scrollTop"
    @scroll="onScroll3"
  >
    <template #default="{ item, index }">
      <up-cell class="list-item" :title="'Item' + item.id">
      </up-cell>
    </template>
  </up-virtual-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/virtualList/virtualList.nvue`</small>

</template>

<template #uniappx>

```vue
<up-virtual-list
  :list-data="listData"
  :item-height="49"
  height="800px"
  v-model:scrollTop="scrollTop"
  @scroll="onScroll"
>
  <template #default="{ item, index }">
    <up-cell class="list-item" :title="getItemTitle(item)"></up-cell>
  </template>
</up-virtual-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/virtualList/virtualList.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-virtual-list>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `listData` | 数据源 | `Array` | `—` |
| `itemHeight` | 每项高度（固定高度模式） | `Number` | `—` |
| `height` | 容器高度 | `String / Number` | `—` |
| `buffer` | 缓冲区项数 | `Number` | `—` |
| `keyField` | 索引键名 | `String` | `—` |
| `scrollTop` | 当前滚动位置 | `Number` | `—` |

#### Events

| Event |
| --- |
| `scroll` |
| `update:scrollTop` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-refresh-virtual-list>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `listData` | 数据源 | `Array` | `—` |
| `itemHeight` | 每项高度（固定高度模式） | `Number` | `—` |
| `height` | 容器高度 | `String / Number` | `—` |
| `buffer` | 缓冲区项数 | `Number` | `—` |
| `keyField` | 索引键名 | `String` | `—` |

#### Events

| Event |
| --- |
| `refresh` |
| `scroll` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPVirtualList` | `packages/ultra_ui/lib/src/widgets/up_virtual_list.dart` |
| React Native · TypeScript | `UPVirtualList` | `src/components/virtual-list` |
| Taro · React + TypeScript | `UPVirtualList` | `src/ultra-ui/components/up-virtual-list` |
| uni-app · Vue 3 | `up-virtual-list` | `src/uni_modules/uview-plus/components/u-virtual-list` |
| uni-app-x · UTS / UVUE | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |

