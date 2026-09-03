---
title: Tree 树形控件
description: 可展开收起的层级数据展示，支持复选与懒加载。
generated: true
---

# Tree 树形控件

可展开收起的层级数据展示，支持复选与懒加载。

<PlatformBadges component="tree" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 微信小程序插槽说明

为规避微信小程序端动态 scoped slot 在树形递归场景下可能不显示或运行时报错的问题，组件在微信小程序端会使用内置文本渲染作为稳定兜底。H5、App 等平台仍支持默认插槽自定义节点内容。

## 基本使用

通过 `data` 传入树数据，通过 `props` 指定节点字段映射。

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

## 自定义节点内容

H5、App 等平台可以通过默认插槽自定义节点内容。插槽参数包含 `node`、`data`、`level`、`expanded`、`checked`、`indeterminate`、`disabled`。

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

## 复选框

设置 `show-checkbox` 后展示复选框。默认情况下父子节点会联动；设置 `check-strictly` 后父子节点互不影响。

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

## 手风琴模式

设置 `accordion` 后，同一级节点每次只展开一个。

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

## API

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/tree.md`</small>

</template>

<template #uniappx>

#### 微信小程序插槽说明

为规避微信小程序端动态 scoped slot 在树形递归场景下可能不显示或运行时报错的问题，组件在微信小程序端会使用内置文本渲染作为稳定兜底。H5、App 等平台仍支持默认插槽自定义节点内容。

## 基本使用

通过 `data` 传入树数据，通过 `props` 指定节点字段映射。

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

## 自定义节点内容

H5、App 等平台可以通过默认插槽自定义节点内容。插槽参数包含 `node`、`data`、`level`、`expanded`、`checked`、`indeterminate`、`disabled`。

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

## 复选框

设置 `show-checkbox` 后展示复选框。默认情况下父子节点会联动；设置 `check-strictly` 后父子节点互不影响。

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

## 手风琴模式

设置 `accordion` 后，同一级节点每次只展开一个。

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

## API

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/tree.md`</small>

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

