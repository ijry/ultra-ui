---
title: Cascader 级联选择
description: 多级联动选择器，常用于省市区、分类等树形数据。
generated: true
---

# Cascader 级联选择

多级联动选择器，常用于省市区、分类等树形数据。

<PlatformBadges component="cascader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCascader
import net.lingyun.ultraui.android.components.UPCascaderProps

UPCascader(
    props = UPCascaderProps(show = true, data = cascaderData, modelValue = cascaderValue),
    onUpdateModelValue = { cascaderValue = it },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCascader(
  show: _show1,
  data: _areaData,
  // Source keys results by label in this demo.
  valueKey: 'label',
  value: _result1,
  onUpdateShow: (value) => setState(() => _show1 = value),
  onUpdateModelValue: (value) =>
      setState(() => _result1 = value),
)
```

#### 带默认值

```dart
UPCascader(
  show: _show2,
  data: _categoryData,
  headerDirection: 'column',
  value: _defaultCategory,
  onUpdateShow: (value) => setState(() => _show2 = value),
  onConfirm: (value) => setState(() => _result2 = value),
)
```

#### 自定义字段名

```dart
UPCascader(
  show: _show3,
  data: _orgData,
  valueKey: 'id',
  labelKey: 'name',
  childrenKey: 'childs',
  onUpdateShow: (value) => setState(() => _show3 = value),
  onConfirm: (value) => setState(() => _result3 = value),
)
```

#### 垂直头部及单列选项

```dart
UPCascader(
  show: _show4,
  data: _categoryData,
  headerDirection: 'column',
  optionsCols: 1,
  value: _defaultCategory,
  onUpdateShow: (value) => setState(() => _show4 = value),
  onConfirm: (value) => setState(() => _result4 = value),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/cascader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCascader } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCascader } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-cascader 
  v-model:show="show1"
  v-model="result1"
  valueKey="label"
  :data="areaData" 
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show2" 
  v-model="result2"
  :data="categoryData"
  headerDirection="column"
  @confirm="confirm2"
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show3" 
  v-model="result3"
  :data="orgData" 
  value-key="id"
  label-key="name"
  children-key="childs"
  @confirm="confirm3"
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show2" 
  v-model="result2"
  :data="categoryData"
  headerDirection="column"
  :optionsCols="1"
  @confirm="confirm2"
></up-cascader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cascader/cascader.uvue`</small>

</template>

<template #uniappx>

```vue
<up-cascader 
  v-model:show="show1"
  v-model="result1"
  valueKey="label"
  :data="areaData" 
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show2" 
  v-model="result2"
  :data="categoryData"
  headerDirection="column"
  @confirm="confirm2"
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show3" 
  v-model="result3"
  :data="orgData" 
  value-key="id"
  label-key="name"
  children-key="childs"
  @confirm="confirm3"
></up-cascader>
```

```vue
<up-cascader 
  v-model:show="show2" 
  v-model="result2"
  :data="categoryData"
  headerDirection="column"
  :optionsCols="1"
  @confirm="confirm2"
></up-cascader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cascader/cascader.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `cancel` |
| `change` |
| `confirm` |
| `update:show` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPCascader` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCascaderComponents.kt` |
| Flutter · Dart | `UPCascader` | `packages/ultra_ui/lib/src/widgets/up_cascader.dart` |
| React Native · TypeScript | `UPCascader` | `src/components/cascader` |
| Taro · React + TypeScript | `UPCascader` | `src/ultra-ui/components/up-cascader` |
| uni-app · Vue 3 | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |
| uni-app-x · UTS / UVUE | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |

