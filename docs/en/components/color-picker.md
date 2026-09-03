---
title: Color picker
description: A colour panel with hue, saturation and alpha controls.
generated: true
---

# Color picker

A colour panel with hue, saturation and alpha controls.

<PlatformBadges component="color-picker" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 颜色选择器示例

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

#### 带常用颜色的示例

```dart
UPColorPicker(
  key: const ValueKey('color-picker-page-common'),
  modelValue: _selectedColor2,
  commonColors: _commonColors,
  onConfirm: (color) =>
      setState(() => _selectedColor2 = color),
  child: _preview(_selectedColor2, tokens),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/color_picker_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPColorPicker } from 'ultra-ui-rn';

<UPColorPicker
  onClose={() => setShowColorPicker(false)}
  onConfirm={confirmColor}
  show={showColorPicker}
  value={selectedColor}
>
  <View style={s.colorPreview}>
    <View style={[s.colorBlock, { backgroundColor: selectedColor }]} />
    <Text style={s.colorText}>{selectedColor}</Text>
  </View>
</UPColorPicker>
```

```tsx
<UPColorPicker
  commonColors={commonColors}
  onClose={() => setShowColorPickerWithCommon(false)}
  onConfirm={confirmColor2}
  show={showColorPickerWithCommon}
  value={selectedColor2}
>
  <View style={s.colorPreview}>
    <View style={[s.colorBlock, { backgroundColor: selectedColor2 }]} />
    <Text style={s.colorText}>{selectedColor2}</Text>
  </View>
</UPColorPicker>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/ColorPickerDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

默认纯色选择器

```tsx
import { UPColorPicker } from '@ultra-ui'

<UPColorPicker value={solidColor} onChange={setSolidColor} />
```

#### 渐变色

支持线性渐变

```tsx
<UPColorPicker value={gradientColor} onChange={setGradientColor} />
```

#### 常用颜色

提供快速选择色板

```tsx
<UPColorPicker
  value={customColor}
  onChange={setCustomColor}
  commonColors={commonColors}
/>
```

#### 自定义触发器

```tsx
<UPColorPicker value={solidColor} onChange={setSolidColor}>
  <View className="color-picker-demo__trigger-btn">点击选择颜色</View>
</UPColorPicker>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/color-picker/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view class="p-4 bg-white">
        <up-color-picker 
            v-model="color" 
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">{{ color }}</text>
            </view>
        </up-color-picker>
    </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const color = ref('#ff0000');

const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
</script>
```

#### 带常用颜色的使用

```vue
<template>
	<view class="p-4 bg-white">
        <up-color-picker 
            v-model="color" 
            :commonColors="commonColors" 
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">{{ color }}</text>
            </view>
        </up-color-picker>
    </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const color = ref('#ff0000');
const commonColors = ref([
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
    '#ffffff',
    '#000000'
]);

const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/colorPicker.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view class="p-4 bg-white">
        <up-color-picker 
            v-model="color" 
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">{{ color }}</text>
            </view>
        </up-color-picker>
    </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const color = ref('#ff0000');

const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
</script>
```

#### 带常用颜色的使用

```vue
<template>
	<view class="p-4 bg-white">
        <up-color-picker 
            v-model="color" 
            :commonColors="commonColors" 
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">{{ color }}</text>
            </view>
        </up-color-picker>
    </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const color = ref('#ff0000');
const commonColors = ref([
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
    '#ffffff',
    '#000000'
]);

const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/colorPicker.md`</small>

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

