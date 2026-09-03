---
title: Select 列选择器
description: 从底部弹出的列表选择器，适合选项较少的场景。
generated: true
---

# Select 列选择器

从底部弹出的列表选择器，适合选项较少的场景。

<PlatformBadges component="select" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSelect
import net.lingyun.ultraui.android.components.UPSelectProps

DemoSection("下拉选择") { UPSelect(UPSelectProps(options = listOf(mapOf("id" to 1, "name" to "北京"), mapOf("id" to 2, "name" to "上海")), current = select), onUpdateCurrent = { select = it })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSelect(
  key: const ValueKey('select-page-basic'),
  label: '分类',
  showOptionsLabel: true,
  options: _scenesList,
  current: _cateId,
  onUpdateCurrent: (value) =>
      setState(() => _cateId = '$value'),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/select_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSelect } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPSelect } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList"></up-select>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/select/select.uvue`</small>

</template>

<template #uniappx>

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList"></up-select>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/select/select.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `select` |
| `update:current` |

### 插槽

| 插槽名 |
| --- |
| `icon` |
| `optionItem` |
| `options` |
| `text` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSelect` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPSelect` | `packages/ultra_ui/lib/src/widgets/up_select.dart` |
| React Native · TypeScript | `UPSelect` | `src/components/select` |
| Taro · React + TypeScript | `UPSelect` | `src/ultra-ui/components/up-select` |
| uni-app · Vue 3 | `up-select` | `uni_modules/uview-ultra/components/up-select` |
| uni-app-x · UTS / UVUE | `up-select` | `uni_modules/uview-ultra/components/up-select` |

