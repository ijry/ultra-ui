---
title: Cascader
description: A cascading picker for tree data such as regions or categories.
generated: true
---

# Cascader

A cascading picker for tree data such as regions or categories.

<PlatformBadges component="cascader" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/cascader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCascader } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCascader } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cascader/cascader.uvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cascader/cascader.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `cancel` |
| `change` |
| `confirm` |
| `update:show` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPCascader` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCascaderComponents.kt` |
| Flutter · Dart | `UPCascader` | `packages/ultra_ui/lib/src/widgets/up_cascader.dart` |
| React Native · TypeScript | `UPCascader` | `src/components/cascader` |
| Taro · React + TypeScript | `UPCascader` | `src/ultra-ui/components/up-cascader` |
| uni-app · Vue 3 | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |
| uni-app-x · UTS / UVUE | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |

