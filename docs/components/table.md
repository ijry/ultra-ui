---
title: Table 表格
description: 数据表格，支持固定表头、自定义列与单元格插槽。
generated: true
---

# Table 表格

数据表格，支持固定表头、自定义列与单元格插槽。

<PlatformBadges component="table" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/TableDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/table/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/table/table.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/table/table.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-table>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `borderColor` | — | `String` | `—` |
| `align` | — | `String` | `—` |
| `padding` | td的内边距 | `String` | `—` |
| `fontSize` | 字体大小 | `String` | `—` |
| `color` | 字体颜色 | `String` | `—` |
| `thStyle` | th的自定义样式 | `Object` | `—` |
| `bgColor` | table的背景颜色 | `String` | `—` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-table2>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
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

#### 插槽

| 插槽名 |
| --- |
| `cell` |
| `empty` |
| `header` |
| `headerSort` |

### `<up-td>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比 | `String` | `—` |
| `textAlign` | — | `String` | `—` |
| `fontSize` | — | `String` | `—` |
| `borderColor` | — | `String` | `—` |
| `color` | — | `String` | `—` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-th>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比 | `String` | `—` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-tr>`

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPTable` | `packages/ultra_ui/lib/src/widgets/up_table.dart` |
| React Native · TypeScript | `UPTable` | `src/components/table` |
| Taro · React + TypeScript | `UPTable` | `src/ultra-ui/components/up-table` |
| uni-app · Vue 3 | `up-table` | `src/uni_modules/uview-plus/components/u-table` |
| uni-app-x · UTS / UVUE | `up-table` | `uni_modules/uview-ultra/components/up-table` |

