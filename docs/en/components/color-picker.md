---
title: Color picker
description: A colour panel with hue, saturation and alpha controls.
generated: true
---

# Color picker

A colour panel with hue, saturation and alpha controls.

<PlatformBadges component="color-picker" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPColorPicker(
  key: const ValueKey('color-picker-page-basic'),
  modelValue: _selectedColor,
  onConfirm: (color) =>
      setState(() => _selectedColor = color),
  // Source default slot: the tappable preview swatch.
  child: _preview(_selectedColor, tokens),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/color_picker_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPColorPicker } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPColorPicker } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-color-picker
    v-model="selectedColor"
    :show="showColorPicker"
    @confirm="confirmColor"
    @close="showColorPicker = false"
>
<view class="color-preview" :style="{ backgroundColor: upThemeVar('--up-bg-color') }">
<view class="color-block" :style="{ backgroundColor: selectedColor, borderColor: upThemeVar('--up-border-color') }"></view>
<text class="color-text" :style="{ color: upThemeVar('--up-content-color') }">{{ selectedColor }}</text>
    </view>
</up-color-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/colorPicker/colorPicker.nvue`</small>

</template>

<template #uniappx>

```vue
<up-color-picker
    v-model="selectedColor"
    @confirm="confirmColor"
>
    <view class="color-preview">
        <view class="color-block" :style="{ backgroundColor: selectedColor }"></view>
        <text class="color-text">{{ selectedColor }}</text>
    </view>
</up-color-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/colorPicker/colorPicker.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | 初始颜色值 | `String` | `—` |
| `commonColors` | 常用颜色列表 | `Array` | `—` |

### Events

| Event |
| --- |
| `close` |
| `closed` |
| `confirm` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPColorPicker` | `packages/ultra_ui/lib/src/widgets/up_color_picker.dart` |
| React Native · TypeScript | `UPColorPicker` | `src/components/color-picker` |
| Taro · React + TypeScript | `UPColorPicker` | `src/ultra-ui/components/up-color-picker` |
| uni-app · Vue 3 | `up-color-picker` | `src/uni_modules/uview-plus/components/u-color-picker` |
| uni-app-x · UTS / UVUE | `up-color-picker` | `uni_modules/uview-ultra/components/up-color-picker` |

