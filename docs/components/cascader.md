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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/cascader/cascader.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cascader/cascader.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 通过双向绑定控制组件的弹出与收起 | `Boolean` | `—` |
| `data` | 级联数据 | `Array` | `—` |
| `modelValue` | 默认选中的值 | `Array` | `—` |
| `valueKey` | 指定选项的值为选项对象中的哪个属性值 | `String` | `—` |
| `labelKey` | 指定选项标签为选项对象中的哪个属性值 | `String` | `—` |
| `childrenKey` | 指定选项的子选项为选项对象中的哪个属性值 | `String` | `—` |
| `maskCloseAble` | 是否允许通过点击遮罩关闭Picker | `Boolean` | `—` |
| `zIndex` | 弹出的z-index值 | `String / Number` | `—` |
| `autoClose` | 是否在选择最后一级时自动关闭并触发confirm | `Boolean` | `—` |
| `headerDirection` | 选中项目的展示方向direction垂直方向适合文字长度过长 | `String` | `—` |
| `optionsCols` | 选项区域列数，支持1列和2列，默认为2列 | `Number` | `—` |
| `closeable` | 是否显示关闭图标 | `Boolean` | `—` |

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
| uni-app · Vue 3 | `up-cascader` | `src/uni_modules/uview-plus/components/u-cascader` |
| uni-app-x · UTS / UVUE | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |

