---
title: Color picker 颜色选择器
description: 取色面板，支持色相、饱和度与透明度调节。
generated: true
---

# Color picker 颜色选择器

取色面板，支持色相、饱和度与透明度调节。

<PlatformBadges component="color-picker" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/color_picker_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/ColorPickerDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/color-picker/index.tsx`</small>

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

```vue
<up-color-picker
    v-model="selectedColor2"
    :commonColors="commonColors"
    @confirm="confirmColor2"
>
    <view class="color-preview">
        <view class="color-block" :style="{ backgroundColor: selectedColor2 }"></view>
        <text class="color-text">{{ selectedColor2 }}</text>
    </view>
    </up-color-picker>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/colorPicker/colorPicker.uvue`</small>

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

```vue
<up-color-picker
    v-model="selectedColor2"
    :commonColors="commonColors"
    @confirm="confirmColor2"
>
    <view class="color-preview">
        <view class="color-block" :style="{ backgroundColor: selectedColor2 }"></view>
        <text class="color-text">{{ selectedColor2 }}</text>
    </view>
    </up-color-picker>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/colorPicker/colorPicker.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `close` |
| `closed` |
| `confirm` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPColorPicker` | `packages/ultra_ui/lib/src/widgets/up_color_picker.dart` |
| React Native · TypeScript | `UPColorPicker` | `src/components/color-picker` |
| Taro · React + TypeScript | `UPColorPicker` | `src/ultra-ui/components/up-color-picker` |
| uni-app · Vue 3 | `up-color-picker` | `uni_modules/uview-ultra/components/up-color-picker` |
| uni-app-x · UTS / UVUE | `up-color-picker` | `uni_modules/uview-ultra/components/up-color-picker` |

