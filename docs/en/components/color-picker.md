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

### 基础用法

默认纯色选择器

```tsx
import { UPColorPicker } from '@ultra-ui'

<UPColorPicker value={solidColor} onChange={setSolidColor} />
```

### 渐变色

支持线性渐变

```tsx
<UPColorPicker value={gradientColor} onChange={setGradientColor} />
```

### 常用颜色

提供快速选择色板

```tsx
<UPColorPicker
  value={customColor}
  onChange={setCustomColor}
  commonColors={commonColors}
/>
```

### 自定义触发器

```tsx
<UPColorPicker value={solidColor} onChange={setSolidColor}>
  <View className="color-picker-demo__trigger-btn">点击选择颜色</View>
</UPColorPicker>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/color-picker/index.tsx`</small>

</template>

<template #uniapp>

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
| uni-app · Vue 3 | `up-color-picker` | `uni_modules/uview-ultra/components/up-color-picker` |
| uni-app-x · UTS / UVUE | `up-color-picker` | `uni_modules/uview-ultra/components/up-color-picker` |

