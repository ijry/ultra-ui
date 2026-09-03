---
title: Tree
description: Hierarchical data with expand/collapse, checkboxes and lazy loading.
generated: true
---

# Tree

Hierarchical data with expand/collapse, checkboxes and lazy loading.

<PlatformBadges component="tree" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### Basic usage

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

#### Checkbox

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

#### Accordion mode

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

#### Accordion with strict mode

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

#### Slots on WeChat mini programs

```vue
<template>
  <up-tree
    :data="treeData"
    :props="defaultProps"
    :default-expanded-keys="['1']"
    highlight-current
    current-node-key="1"
    @node-click="handleNodeClick"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const defaultProps = ref({
  label: 'label',
  children: 'children',
  nodeKey: 'id',
  disabled: 'disabled'
});

const treeData = ref([
  {
    id: '1',
    label: '一级 1',
    children: [
      {
        id: '1-1',
        label: '二级 1-1',
        children: [
          { id: '1-1-1', label: '三级 1-1-1' },
          { id: '1-1-2', label: '三级 1-1-2' }
        ]
      },
      { id: '1-2', label: '二级 1-2' }
    ]
  }
]);

const handleNodeClick = (node) => {
  console.log('节点被点击:', node);
};
</script>
```

```vue
<template>
  <up-tree :data="treeData" :props="defaultProps" default-expand-all>
    <template #default="{ node, level, expanded }">
      <view class="custom-tree-node">
        <text>{{ node.label }}</text>
        <text v-if="node.children && node.children.length">
          {{ expanded ? '已展开' : '已收起' }} · {{ level }}级
        </text>
      </view>
    </template>
  </up-tree>
</template>
```

```vue
<template>
  <up-tree
    ref="treeRef"
    :data="treeData"
    :props="defaultProps"
    show-checkbox
    default-expand-all
    check-on-click-node
    :default-checked-keys="['2-1-1']"
    @check-change="handleCheckChange"
    @check="handleCheck"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const treeRef = ref(null);
const defaultProps = ref({
  label: 'label',
  children: 'children',
  nodeKey: 'id',
  disabled: 'disabled'
});
const treeData = ref([
  {
    id: '2',
    label: '表单组件',
    children: [
      {
        id: '2-1',
        label: '输入组件',
        children: [
          { id: '2-1-1', label: 'Input 输入框' },
          { id: '2-1-2', label: 'Textarea 文本域' }
        ]
      }
    ]
  }
]);

const handleCheckChange = (node, checked) => {
  console.log('勾选状态变化:', node, checked);
};

const handleCheck = (node, state) => {
  console.log('当前选中 keys:', state.checkedKeys);
};

const setChecked = () => {
  treeRef.value.setCheckedKeys(['2-1-2']);
};
</script>
```

```vue
<template>
  <up-tree
    :data="treeData"
    :props="defaultProps"
    accordion
    expand-on-click-node
  />
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/tree.md`</small>

</template>

<template #uniappx>

#### Slots on WeChat mini programs

```vue
<template>
  <up-tree
    :data="treeData"
    :props="defaultProps"
    :default-expanded-keys="['1']"
    highlight-current
    current-node-key="1"
    @node-click="handleNodeClick"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const defaultProps = ref({
  label: 'label',
  children: 'children',
  nodeKey: 'id',
  disabled: 'disabled'
});

const treeData = ref([
  {
    id: '1',
    label: '一级 1',
    children: [
      {
        id: '1-1',
        label: '二级 1-1',
        children: [
          { id: '1-1-1', label: '三级 1-1-1' },
          { id: '1-1-2', label: '三级 1-1-2' }
        ]
      },
      { id: '1-2', label: '二级 1-2' }
    ]
  }
]);

const handleNodeClick = (node) => {
  console.log('节点被点击:', node);
};
</script>
```

```vue
<template>
  <up-tree :data="treeData" :props="defaultProps" default-expand-all>
    <template #default="{ node, level, expanded }">
      <view class="custom-tree-node">
        <text>{{ node.label }}</text>
        <text v-if="node.children && node.children.length">
          {{ expanded ? '已展开' : '已收起' }} · {{ level }}级
        </text>
      </view>
    </template>
  </up-tree>
</template>
```

```vue
<template>
  <up-tree
    ref="treeRef"
    :data="treeData"
    :props="defaultProps"
    show-checkbox
    default-expand-all
    check-on-click-node
    :default-checked-keys="['2-1-1']"
    @check-change="handleCheckChange"
    @check="handleCheck"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const treeRef = ref(null);
const defaultProps = ref({
  label: 'label',
  children: 'children',
  nodeKey: 'id',
  disabled: 'disabled'
});
const treeData = ref([
  {
    id: '2',
    label: '表单组件',
    children: [
      {
        id: '2-1',
        label: '输入组件',
        children: [
          { id: '2-1-1', label: 'Input 输入框' },
          { id: '2-1-2', label: 'Textarea 文本域' }
        ]
      }
    ]
  }
]);

const handleCheckChange = (node, checked) => {
  console.log('勾选状态变化:', node, checked);
};

const handleCheck = (node, state) => {
  console.log('当前选中 keys:', state.checkedKeys);
};

const setChecked = () => {
  treeRef.value.setCheckedKeys(['2-1-2']);
};
</script>
```

```vue
<template>
  <up-tree
    :data="treeData"
    :props="defaultProps"
    accordion
    expand-on-click-node
  />
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/tree.md`</small>

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

