---
title: Drag sort 拖拽排序
description: 长按拖动重新排序的列表或宫格。
generated: true
---

# Drag sort 拖拽排序

长按拖动重新排序的列表或宫格。

<PlatformBadges component="dragsort" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 单列多行模式

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

#### 自定义拖动句柄

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-handler'),
  initialList: _list,
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) =>
      _item(tokens, item, index: index),
  // Source `handler` slot: a grip drawn beside each row.
  handlerBuilder: (context, item, index) => Container(
    width: 24,
    alignment: Alignment.center,
    child: Container(
      width: 14,
      height: 3,
      decoration: BoxDecoration(
        color: tokens.tipsColor,
        borderRadius: BorderRadius.circular(2),
      ),
    ),
  ),
)
```

#### 多行多列模式

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-grid'),
  initialList: _list,
  draggable: true,
  columns: 3,
  direction: 'all',
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) => _item(tokens, item),
)
```

#### 单行横向拖动

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-horizontal'),
  initialList: _list2,
  draggable: true,
  direction: 'horizontal',
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) => _item(tokens, item),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/dragsort_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDragsort } from 'ultra-ui-rn';

<UPDragsort initialList={list} onDragEnd={handleDragEnd}>
  {({ item, index }) => (
    <View style={s.customItem}>
      <Text>序号：{index + 1}</Text>
      <Text> - </Text>
      <Text>{item.label}</Text>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  initialList={list}
  onDragEnd={handleDragEnd}
  renderHandler={() => (
    <View style={s.customItemHandler}>
      <View style={s.handle} />
    </View>
  )}
>
  {({ item, index }) => (
    <View style={s.customItem}>
      <Text>序号：{index + 1}</Text>
      <Text> - </Text>
      <Text>{item.label}</Text>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  columns={3}
  direction="all"
  draggable
  initialList={list}
  onDragEnd={handleDragEnd}
>
  {({ item }) => (
    <View style={s.wrapper}>
      <View style={s.customItemH}>
        <Text>{item.label}</Text>
      </View>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  direction="horizontal"
  draggable
  initialList={list2}
  onDragEnd={handleDragEnd}
>
  {({ item }) => (
    <View style={s.wrapper}>
      <View style={s.customItemH}>
        <Text>{item.label}</Text>
      </View>
    </View>
  )}
</UPDragsort>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/DragsortDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

长按并上下拖拽「列表」图标即可重排

```tsx
import { UPDragsort } from '@ultra-ui'

<UPDragsort list={plain} onChange={setPlain} />
```

#### 对象数组

每个条目带 key / label，拖拽后顺序写回数据源

```tsx
<UPDragsort list={objects} onChange={setObjects} />
```

#### 禁用态

draggable=false 时不可拖拽

```tsx
<UPDragsort list={plain} onChange={setPlain} draggable={false} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/dragsort/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-dragsort :initial-list="list" @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="custom-item">
      <text class="custom-item__text">序号：{{ getDisplayIndex(index) }} - {{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<up-dragsort :initial-list="list" @drag-end="handleDragEnd">
  <template #handler="{ item, index }">
    <view class="custom-item-handler">
        <view class="handle"></view>
    </view>
  </template>
  <template #default="{ item, index }">
    <view class="custom-item">
      <text class="custom-item__text">序号：{{ getDisplayIndex(index) }} - {{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<up-dragsort
    :initial-list="list"
    :draggable="true"
    :columns="3"
    direction="all"
    @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="grid-item">
        <text class="custom-item__text">{{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<up-dragsort
    :initial-list="list2"
    :draggable="true"
    direction="horizontal"
    @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="horizontal-item">
        <text class="custom-item__text">{{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/dragsort/dragsort.uvue`</small>

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

```vue
<up-dragsort :initial-list="list" @drag-end="handleDragEnd">
  <template #handler="{ item, index }">
    <view class="custom-item-handler">
        <view class="handle"></view>
    </view>
  </template>
  <template #default="{ item, index }">
    <view class="custom-item">
      <text class="custom-item__text">序号：{{ getDisplayIndex(index) }} - {{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<up-dragsort
    :initial-list="list"
    :draggable="true"
    :columns="3"
    direction="all"
    @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="grid-item">
        <text class="custom-item__text">{{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<up-dragsort
    :initial-list="list2"
    :draggable="true"
    direction="horizontal"
    @drag-end="handleDragEnd">
  <template #default="{ item, index }">
    <view class="horizontal-item">
        <text class="custom-item__text">{{ getItemLabel(item) }}</text>
    </view>
  </template>
</up-dragsort>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/dragsort/dragsort.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `drag-end` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `handler` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPDragSort` | `packages/ultra_ui/lib/src/widgets/up_drag_sort.dart` |
| React Native · TypeScript | `UPDragsort` | `src/components/dragsort` |
| Taro · React + TypeScript | `UPDragsort` | `src/ultra-ui/components/up-dragsort` |
| uni-app · Vue 3 | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |
| uni-app-x · UTS / UVUE | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |

