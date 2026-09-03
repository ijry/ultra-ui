---
title: Table 表格
description: 数据表格，支持固定表头、自定义列与单元格插槽。
generated: true
---

# Table 表格

数据表格，支持固定表头、自定义列与单元格插槽。

<PlatformBadges component="table" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/table_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/TableDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/table/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

本组件标签类似HTML的table表格，由`table`、`tr`、`th`、`td`四个组件组成

- `table`组件裹在最外层，可以配置一些基础参数
- `tr`组件用于显示"行"数据
- `th`组件用于显示表头内容，类似`td`，不同之处在于字体加粗了，也带有背景颜色，也可以直接用`td`替代`th`
- `td`组件不是最小单位，为了合并单元格时，内部可以嵌入`tr`和`td`组件

```vue
<template>
	<up-table>
		<up-tr>
			<up-th>学校</up-th>
			<up-th>班级</up-th>
			<up-th>年龄</up-th>
		</up-tr>
		<up-tr>
			<up-td>浙江大学</up-td>
			<up-td>二年级</up-td>
			<up-td>22</up-td>
		</up-tr>
		<up-tr>
			<up-td>清华大学</up-td>
			<up-td>05班</up-td>
			<up-td>20</up-td>
		</up-tr>
	</up-table>
</template>
```

#### 兼容性

由于`头条小程序`的兼容性问题，您需要给表格相关的组件(`up-tr`、`up-th`、`up-td`)写上对应的类名才有效，如下：

```vue
<up-table>
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
</up-table>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/table.md`</small>

</template>

<template #uniappx>

#### 基本使用

本组件标签类似HTML的table表格，由`table`、`tr`、`th`、`td`四个组件组成

- `table`组件裹在最外层，可以配置一些基础参数
- `tr`组件用于显示"行"数据
- `th`组件用于显示表头内容，类似`td`，不同之处在于字体加粗了，也带有背景颜色，也可以直接用`td`替代`th`
- `td`组件不是最小单位，为了合并单元格时，内部可以嵌入`tr`和`td`组件

```vue
<template>
	<up-table>
		<up-tr>
			<up-th>学校</up-th>
			<up-th>班级</up-th>
			<up-th>年龄</up-th>
		</up-tr>
		<up-tr>
			<up-td>浙江大学</up-td>
			<up-td>二年级</up-td>
			<up-td>22</up-td>
		</up-tr>
		<up-tr>
			<up-td>清华大学</up-td>
			<up-td>05班</up-td>
			<up-td>
                <!-- 如果是非纯文本内容需要使用content插槽 -->
                <template #content>
                    <view>20</view>
                </template>
            </up-td>
		</up-tr>
	</up-table>
</template>
```

#### 兼容性

由于`头条小程序`的兼容性问题，您需要给表格相关的组件(`up-tr`、`up-th`、`up-td`)写上对应的类名才有效，如下：

```vue
<up-table>
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
</up-table>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/table.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-table>`

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-table2>`

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

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-th>`

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
| uni-app · Vue 3 | `up-table` | `uni_modules/uview-ultra/components/up-table` |
| uni-app-x · UTS / UVUE | `up-table` | `uni_modules/uview-ultra/components/up-table` |

