---
title: Tree
description: Hierarchical data with expand/collapse, checkboxes and lazy loading.
generated: true
---

# Tree

Hierarchical data with expand/collapse, checkboxes and lazy loading.

<PlatformBadges component="tree" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/tree_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTree } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-taro/src/pages/components/tree/index.tsx`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/tree/tree.uvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/tree/tree.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `check` |
| `check-change` |
| `current-change` |
| `node-click` |
| `node-collapse` |
| `node-expand` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPTree` | `packages/ultra_ui/lib/src/widgets/up_tree.dart` |
| React Native · TypeScript | `UPTree` | `src/components/tree` |
| Taro · React + TypeScript | `UPTree` | `src/ultra-ui/components/up-tree` |
| uni-app · Vue 3 | `up-tree` | `uni_modules/uview-ultra/components/up-tree` |
| uni-app-x · UTS / UVUE | `up-tree` | `uni_modules/uview-ultra/components/up-tree` |

