---
title: Tree 树形控件
description: 可展开收起的层级数据展示，支持复选与懒加载。
generated: true
---

# Tree 树形控件

可展开收起的层级数据展示，支持复选与懒加载。

<PlatformBadges component="tree" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTree(
  key: ValueKey('tree-page-basic'),
  data: _treeData,
  props: _defaultProps,
  defaultExpandedKeys: <String>['1'],
  highlightCurrent: true,
  currentNodeKey: '1',
)
```

#### 复选框

```dart
UPTree(
  key: _checkTree,
  data: _checkTreeData,
  props: _defaultProps,
  showCheckbox: true,
  defaultExpandAll: true,
  checkOnClickNode: true,
  defaultCheckedKeys: const <String>['2-1-1'],
  onCheck: _handleCheck,
)
```

#### 手风琴模式

```dart
UPTree(
  key: ValueKey('tree-page-accordion'),
  data: _accordionTreeData,
  props: _defaultProps,
  accordion: true,
  expandOnClickNode: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/tree_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTree } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 手风琴 + 严格模式

accordion（同级只展开一项）+ checkStrictly（父子不级联）

```tsx
import { UPTree } from '@ultra-ui'

<UPTree
  data={basicData}
  nodeKey='id'
  showCheckbox
  accordion
  checkStrictly
  highlightCurrent
  defaultExpandedKeys={[1]}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/tree/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-tree
  :data="treeData"
  :props="defaultProps"
  :default-expanded-keys="expandedKeys"
  highlight-current
  current-node-key="1"
  @node-click="handleNodeClick"
  @node-expand="handleNodeExpand"
/>
```

```vue
<up-tree
  :data="customTreeData"
  :props="defaultProps"
  default-expand-all
  :indent="40"
  @node-click="handleNodeClick"
>
  <template #default="{ node, level, expanded }">
    <view class="custom-tree-node">
      <text class="custom-tree-node__label">{{ getTreeNodeLabel(node) }}</text>
      <text v-if="hasTreeNodeTag(node)" class="custom-tree-node__tag">{{ getTreeNodeTag(node) }}</text>
      <text v-if="hasTreeNodeChildren(node)" class="custom-tree-node__state">
        {{ getExpandedText(expanded) }} · {{ getTreeLevel(level) }}级
      </text>
    </view>
  </template>
</up-tree>
```

```vue
<up-tree
  ref="checkTree"
  :data="checkTreeData"
  :props="defaultProps"
  show-checkbox
  default-expand-all
  check-on-click-node
  :default-checked-keys="defaultCheckedKeys"
  @check-change="handleCheckChange"
  @check="handleCheck"
/>
```

```vue
<up-tree
  :data="accordionTreeData"
  :props="defaultProps"
  accordion
  expand-on-click-node
  @node-click="handleNodeClick"
/>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/tree/tree.uvue`</small>

</template>

<template #uniappx>

```vue
<up-tree
  :data="treeData"
  :props="defaultProps"
  :default-expanded-keys="expandedKeys"
  highlight-current
  current-node-key="1"
  @node-click="handleNodeClick"
  @node-expand="handleNodeExpand"
/>
```

```vue
<up-tree
  :data="customTreeData"
  :props="defaultProps"
  default-expand-all
  :indent="40"
  @node-click="handleNodeClick"
>
  <template #default="{ node, level, expanded }">
    <view class="custom-tree-node">
      <text class="custom-tree-node__label">{{ getTreeNodeLabel(node) }}</text>
      <text v-if="hasTreeNodeTag(node)" class="custom-tree-node__tag">{{ getTreeNodeTag(node) }}</text>
      <text v-if="hasTreeNodeChildren(node)" class="custom-tree-node__state">
        {{ getExpandedText(expanded) }} · {{ getTreeLevel(level) }}级
      </text>
    </view>
  </template>
</up-tree>
```

```vue
<up-tree
  ref="checkTree"
  :data="checkTreeData"
  :props="defaultProps"
  show-checkbox
  default-expand-all
  check-on-click-node
  :default-checked-keys="defaultCheckedKeys"
  @check-change="handleCheckChange"
  @check="handleCheck"
/>
```

```vue
<up-tree
  :data="accordionTreeData"
  :props="defaultProps"
  accordion
  expand-on-click-node
  @node-click="handleNodeClick"
/>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/tree/tree.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `check` |
| `check-change` |
| `current-change` |
| `node-click` |
| `node-collapse` |
| `node-expand` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPTree` | `packages/ultra_ui/lib/src/widgets/up_tree.dart` |
| React Native · TypeScript | `UPTree` | `src/components/tree` |
| Taro · React + TypeScript | `UPTree` | `src/ultra-ui/components/up-tree` |
| uni-app · Vue 3 | `up-tree` | `uni_modules/uview-ultra/components/up-tree` |
| uni-app-x · UTS / UVUE | `up-tree` | `uni_modules/uview-ultra/components/up-tree` |

