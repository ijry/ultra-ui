---
title: Table
description: A data table with a fixed header, custom columns and cell slots.
generated: true
---

# Table

A data table with a fixed header, custom columns and cell slots.

<PlatformBadges component="table" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

```tsx
import { UPTable } from 'ultra-ui-rn';

<UPTable align={align} borderColor={borderColor}>
  <UPTr>
    <UPTh>姓名</UPTh>
    <UPTh>年龄</UPTh>
    <UPTh>籍贯</UPTh>
    <UPTh>性别</UPTh>
  </UPTr>
  {rows.map((row) => (
    <UPTr key={row[0]}>
      {row.map((cell, index) => (
        <UPTd key={`${row[0]}-${index}`}>{cell}</UPTd>
      ))}
    </UPTr>
  ))}
</UPTable>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/TableDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPTable } from '@ultra-ui'

<UPTable>
  <UPTr>
    <UPTh>学校</UPTh>
    <UPTh>城市</UPTh>
    <UPTh>排名</UPTh>
  </UPTr>
  {SCHOOLS.map((item) => (
    <UPTr key={item.name}>
      <UPTd>{item.name}</UPTd>
      <UPTd>{item.city}</UPTd>
      <UPTd>{item.rank}</UPTd>
    </UPTr>
  ))}
</UPTable>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/table/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-table :align="align" :borderColor="borderColor">
    <up-tr class="up-tr">
        <up-th class="up-th">姓名</up-th>
        <up-th class="up-th">年龄</up-th>
        <up-th class="up-th">籍贯</up-th>
        <up-th class="up-th">性别</up-th>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">吕布</up-td>
        <up-td class="up-td">22</up-td>
        <up-td class="up-td">楚河</up-td>
        <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">项羽</up-td>
        <up-td class="up-td">28</up-td>
        <up-td class="up-td">汉界</up-td>
        <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">木兰</up-td>
        <up-td class="up-td">24</up-td>
        <up-td class="up-td">南国</up-td>
        <up-td class="up-td">女</up-td>
    </up-tr>
</up-table>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/table/table.nvue`</small>

</template>

<template #uniappx>

```vue
<up-table :align="align" :borderColor="borderColor">
    <up-tr class="up-tr">
        <up-th class="up-th">姓名</up-th>
        <up-th class="up-th">年龄</up-th>
        <up-th class="up-th">籍贯</up-th>
        <up-th class="up-th">性别</up-th>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">吕布</up-td>
        <up-td class="up-td">22</up-td>
        <up-td class="up-td">楚河</up-td>
        <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">项羽</up-td>
        <up-td class="up-td">28</up-td>
        <up-td class="up-td">汉界</up-td>
        <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
        <up-td class="up-td">木兰</up-td>
        <up-td class="up-td">24</up-td>
        <up-td class="up-td">南国</up-td>
        <up-td class="up-td">女</up-td>
    </up-tr>
</up-table>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/table/table.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-table>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `borderColor` | — | `String` | `—` |
| `align` | — | `String` | `—` |
| `padding` | td的内边距 | `String` | `—` |
| `fontSize` | 字体大小 | `String` | `—` |
| `color` | 字体颜色 | `String` | `—` |
| `thStyle` | th的自定义样式 | `Object` | `—` |
| `bgColor` | table的背景颜色 | `String` | `—` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-table2>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `data` | — | `Array` | `—` |
| `columns` | — | `Array` | `—` |
| `stripe` | — | `Boolean` | `—` |
| `border` | — | `Boolean` | `—` |
| `height` | — | `String / Number` | `—` |
| `maxHeight` | — | `String / Number` | `—` |
| `showHeader` | — | `Boolean` | `—` |
| `highlightCurrentRow` | — | `Boolean` | `—` |
| `rowKey` | — | `String` | `—` |
| `currentRowKey` | — | `String / Number` | `—` |
| `rowStyle` | — | `Object / Function` | `—` |
| `cellClassName` | — | `Function` | `—` |
| `cellStyle` | — | `Function` | `—` |
| `headerCellClassName` | — | `Function` | `—` |
| `rowClassName` | — | `Function` | `—` |
| `context` | — | `Object` | `—` |
| `showOverflowTooltip` | — | `Boolean / Object` | `—` |
| `lazy` | — | `Boolean` | `—` |
| `load` | — | `Function` | `—` |
| `treeProps` | — | `Object` | `—` |
| `defaultExpandAll` | — | `Boolean` | `—` |
| `expandRowKeys` | — | `Array` | `—` |
| `sortOrders` | — | `Array` | `—` |
| `sortable` | — | `Boolean / String` | `—` |
| `multiSort` | — | `Boolean` | `—` |
| `sortBy` | — | `String` | `—` |
| `sortMethod` | — | `Function` | `—` |
| `filters` | — | `Object` | `—` |
| `fixedHeader` | — | `Boolean` | `—` |
| `emptyText` | — | `String` | `—` |
| `mainCol` | 添加mainCol属性，用于指定树形结构展开控制图标所在的列 | `String` | `—` |
| `expandWidth` | — | `String` | `—` |
| `rowHeight` | — | `String` | `—` |
| `spanMethod` | 添加spanMethod属性，用于合并单元格 | `Function` | `—` |

#### Events

| Event |
| --- |
| `cell-click` |
| `current-change` |
| `expand-change` |
| `filter-change` |
| `header-click` |
| `row-click` |
| `row-dblclick` |
| `select` |
| `select-all` |
| `selection-change` |
| `sort-change` |

#### Slots

| Slot |
| --- |
| `cell` |
| `empty` |
| `header` |
| `headerSort` |

### `<up-td>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `width` | 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比 | `String` | `—` |
| `textAlign` | — | `String` | `—` |
| `fontSize` | — | `String` | `—` |
| `borderColor` | — | `String` | `—` |
| `color` | — | `String` | `—` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-th>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `width` | 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比 | `String` | `—` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-tr>`

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPTable` | `packages/ultra_ui/lib/src/widgets/up_table.dart` |
| React Native · TypeScript | `UPTable` | `src/components/table` |
| Taro · React + TypeScript | `UPTable` | `src/ultra-ui/components/up-table` |
| uni-app · Vue 3 | `up-table` | `src/uni_modules/uview-plus/components/u-table` |
| uni-app-x · UTS / UVUE | `up-table` | `uni_modules/uview-ultra/components/up-table` |

