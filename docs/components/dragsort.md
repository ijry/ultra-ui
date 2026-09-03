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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/dragsort_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDragsort } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPDragsort } from '@ultra-ui'

<UPDragsort list={plain} onChange={setPlain} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/dragsort/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/dragsort/dragsort.vue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/dragsort/dragsort.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `initialList` | — | `Array` | `—` |
| `draggable` | — | `Boolean` | `—` |
| `vibrate` | — | `Boolean` | `—` |
| `direction` | — | `String` | `—` |
| `columns` | 新增列数属性，用于all模式 | `Number` | `—` |

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
| uni-app · Vue 3 | `up-dragsort` | `src/uni_modules/uview-plus/components/u-dragsort` |
| uni-app-x · UTS / UVUE | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |

