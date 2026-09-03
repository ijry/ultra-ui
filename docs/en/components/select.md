---
title: Select
description: A bottom-sheet list picker, ideal when there are few options.
generated: true
---

# Select

A bottom-sheet list picker, ideal when there are few options.

<PlatformBadges component="select" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSelect
import net.lingyun.ultraui.android.components.UPSelectProps

DemoSection("下拉选择") { UPSelect(UPSelectProps(options = listOf(mapOf("id" to 1, "name" to "北京"), mapOf("id" to 2, "name" to "上海")), current = select), onUpdateCurrent = { select = it })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 默认

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

#### 插槽

```dart
UPSelect(
  key: const ValueKey('select-page-slot'),
  label: '分类',
  showOptionsLabel: true,
  options: _scenesList,
  current: _cateId,
  onUpdateCurrent: (value) =>
      setState(() => _cateId = '$value'),
  // Source `optionItem` slot renders just the name as text.
  optionItemBuilder: (item) => Text(
    '${item['name'] ?? ''}',
    style: TextStyle(color: tokens.mainColor, fontSize: 14),
  ),
)
```

#### 边框与下拉宽度

```dart
UPSelect(
  key: const ValueKey('select-page-border'),
  label: '请选择分类',
  showOptionsLabel: true,
  options: _scenesList,
  border: true,
  optionsWidth: '100%',
  current: _pcSelectId,
  onUpdateCurrent: (value) =>
      setState(() => _pcSelectId = '$value'),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/select_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSelect } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPSelect } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList"></up-select>
```

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList">
    <template #optionItem="{item}">
        <text class="up-select__item-text">
            自定义选项
        </text>
    </template>
</up-select>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/select/select.uvue`</small>

</template>

<template #uniappx>

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList"></up-select>
```

```vue
<up-select v-model:current="cateId" label="分类"
    :options="scenesList">
    <template #optionItem="{item}">
        <text class="up-select__item-text">
            自定义选项
        </text>
    </template>
</up-select>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/select/select.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `select` |
| `update:current` |

### Slots

| Slot |
| --- |
| `icon` |
| `optionItem` |
| `options` |
| `text` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSelect` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPSelect` | `packages/ultra_ui/lib/src/widgets/up_select.dart` |
| React Native · TypeScript | `UPSelect` | `src/components/select` |
| Taro · React + TypeScript | `UPSelect` | `src/ultra-ui/components/up-select` |
| uni-app · Vue 3 | `up-select` | `uni_modules/uview-ultra/components/up-select` |
| uni-app-x · UTS / UVUE | `up-select` | `uni_modules/uview-ultra/components/up-select` |

