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

#### 演示效果

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTable(
  align: _align,
  borderColor: _borderColor,
  children: const <UPTr>[
    UPTr(
      children: <Widget>[
        UPTh(child: Text('姓名')),
        UPTh(child: Text('年龄')),
        UPTh(child: Text('籍贯')),
        UPTh(child: Text('性别')),
      ],
    ),
    UPTr(
      children: <Widget>[
        UPTd(child: Text('吕布')),
        UPTd(child: Text('22')),
        UPTd(child: Text('楚河')),
        UPTd(child: Text('男')),
      ],
    ),
    UPTr(
      children: <Widget>[
        UPTd(child: Text('项羽')),
        UPTd(child: Text('28')),
        UPTd(child: Text('汉界')),
        UPTd(child: Text('男')),
      ],
    ),
    UPTr(
      children: <Widget>[
        UPTd(child: Text('木兰')),
        UPTd(child: Text('24')),
        UPTd(child: Text('南国')),
        UPTd(child: Text('女')),
      ],
    ),
  ],
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/table_page.dart`</small>

</template>

<template #reactnative>

#### 演示效果

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

#### 基础用法

th 表头行 + td 数据行，列宽 flex 均分

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

#### 指定列宽

width 传百分比，未指定的列按 flex 均分剩余空间

```tsx
<UPTable>
  <UPTr>
    <UPTh width='40%'>订单号</UPTh>
    <UPTh>商品</UPTh>
  </UPTr>
  {ORDERS.map((item) => (
    <UPTr key={item.id}>
      <UPTd width='40%'>{item.id}</UPTd>
      <UPTd>{item.product}</UPTd>
    </UPTr>
  ))}
</UPTable>
```

#### 左对齐

align 控制全表对齐方式

```tsx
<UPTable align='left'>
  <UPTr>
    <UPTh>商品</UPTh>
    <UPTh>金额</UPTh>
  </UPTr>
  {ORDERS.map((item) => (
    <UPTr key={item.id}>
      <UPTd>{item.product}</UPTd>
      <UPTd>{item.amount}</UPTd>
    </UPTr>
  ))}
</UPTable>
```

#### 单元格覆盖表格样式

td 的 textAlign / color / fontSize 优先于表格级配置

```tsx
<UPTable align='center'>
  <UPTr>
    <UPTh>商品</UPTh>
    <UPTh>金额</UPTh>
  </UPTr>
  {ORDERS.map((item) => (
    <UPTr key={item.id}>
      <UPTd textAlign='left'>{item.product}</UPTd>
      <UPTd color='#fa3534' fontSize='15px'>
        {item.amount}
      </UPTd>
    </UPTr>
  ))}
</UPTable>
```

#### 自定义表头与边框

thStyle 集中配置表头样式，borderColor 改变边框色

```tsx
<UPTable
  borderColor='#2979ff'
  thStyle={{ backgroundColor: '#ecf5ff', color: '#2979ff' }}
>
  <UPTr>
    <UPTh>订单号</UPTh>
    <UPTh>状态</UPTh>
  </UPTr>
  {ORDERS.map((item) => (
    <UPTr key={item.id}>
      <UPTd>{item.id}</UPTd>
      <UPTd>{item.status}</UPTd>
    </UPTr>
  ))}
</UPTable>
```

#### 单元格内嵌组件

td 内可放任意节点，如 Tag

```tsx
<UPTable align='center'>
  <UPTr>
    <UPTh width='45%'>商品</UPTh>
    <UPTh>状态</UPTh>
  </UPTr>
  {ORDERS.map((item) => (
    <UPTr key={item.id}>
      <UPTd width='45%'>{item.product}</UPTd>
      <UPTd>
        <View className='table-demo__cell'>
          <UPTag
            text={item.status}
            type={STATUS_TYPE[item.status]}
            size='mini'
          />
        </View>
      </UPTd>
    </UPTr>
  ))}
</UPTable>
```

#### 紧凑与宽松

padding 与 fontSize 控制疏密

```tsx
<UPTable padding='3px 2px' fontSize='12px'>
  <UPTr>
    <UPTh>学校</UPTh>
    <UPTh>城市</UPTh>
  </UPTr>
  {SCHOOLS.slice(0, 2).map((item) => (
    <UPTr key={item.name}>
      <UPTd>{item.name}</UPTd>
      <UPTd>{item.city}</UPTd>
    </UPTr>
  ))}
</UPTable>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/table/index.tsx`</small>

</template>

<template #uniapp>

#### 演示效果

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

<template #uniappx>

#### 演示效果

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

#### Slots

| Slot |
| --- |
| `default` |

### `<up-table2>`

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

#### Slots

| Slot |
| --- |
| `default` |

### `<up-th>`

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
| uni-app · Vue 3 | `up-table` | `uni_modules/uview-ultra/components/up-table` |
| uni-app-x · UTS / UVUE | `up-table` | `uni_modules/uview-ultra/components/up-table` |

