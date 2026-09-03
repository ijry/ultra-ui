---
title: Virtual list 虚拟列表
description: 只渲染可视区域的虚拟滚动列表，可承载上万条数据。
generated: true
---

# Virtual list 虚拟列表

只渲染可视区域的虚拟滚动列表，可承载上万条数据。

<PlatformBadges component="virtual-list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/virtual_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPVirtualList } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-taro/src/pages/components/virtual-list/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/virtualList/virtualList.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/virtualList/virtualList.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-virtual-list>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `listData` | 数据源 | `Array` | `—` |
| `itemHeight` | 每项高度（固定高度模式） | `Number` | `—` |
| `height` | 容器高度 | `String / Number` | `—` |
| `buffer` | 缓冲区项数 | `Number` | `—` |
| `keyField` | 索引键名 | `String` | `—` |
| `scrollTop` | 当前滚动位置 | `Number` | `—` |

#### 事件

| 事件名 |
| --- |
| `scroll` |
| `update:scrollTop` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-refresh-virtual-list>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `listData` | 数据源 | `Array` | `—` |
| `itemHeight` | 每项高度（固定高度模式） | `Number` | `—` |
| `height` | 容器高度 | `String / Number` | `—` |
| `buffer` | 缓冲区项数 | `Number` | `—` |
| `keyField` | 索引键名 | `String` | `—` |

#### 事件

| 事件名 |
| --- |
| `refresh` |
| `scroll` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPVirtualList` | `packages/ultra_ui/lib/src/widgets/up_virtual_list.dart` |
| React Native · TypeScript | `UPVirtualList` | `src/components/virtual-list` |
| Taro · React + TypeScript | `UPVirtualList` | `src/ultra-ui/components/up-virtual-list` |
| uni-app · Vue 3 | `up-virtual-list` | `src/uni_modules/uview-plus/components/u-virtual-list` |
| uni-app-x · UTS / UVUE | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |

