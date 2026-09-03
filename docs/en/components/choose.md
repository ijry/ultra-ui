---
title: Choose
description: A data-driven picker covering single select, multi select and search in one.
generated: true
---

# Choose

A data-driven picker covering single select, multi select and search in one.

<PlatformBadges component="choose" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPChoose(
  key: const ValueKey('choose-page-basic'),
  options: _options1,
  value: _value1,
  onChange: (value) =>
      setState(() => _value1 = value is int ? value : 0),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/choose_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPChoose } from 'ultra-ui-rn';

<UPChoose modelValue={value1} onUpdateModelValue={setValue1} options={options1} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/ChooseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPChoose } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/choose/choose.nvue`</small>

</template>

<template #uniappx>

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/choose/choose.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `options` | — | `Array` | `—` |
| `modelValue` | — | `Number / String / Array` | `—` |
| `type` | — | `String` | `—` |
| `itemWidth` | — | `String` | `—` |
| `itemHeight` | — | `String` | `—` |
| `itemPadding` | — | `String` | `—` |
| `labelName` | — | `String` | `—` |
| `valueName` | — | `String` | `—` |
| `customClick` | — | `Boolean` | `—` |
| `wrap` | 是否换行 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `custom-click` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPChoose` | `packages/ultra_ui/lib/src/widgets/up_choose.dart` |
| React Native · TypeScript | `UPChoose` | `src/components/choose` |
| Taro · React + TypeScript | `UPChoose` | `src/ultra-ui/components/up-choose` |
| uni-app · Vue 3 | `up-choose` | `src/uni_modules/uview-plus/components/u-choose` |
| uni-app-x · UTS / UVUE | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |

