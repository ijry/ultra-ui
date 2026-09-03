---
title: Tooltip 文字提示
description: 长按或点击后出现的气泡文字，可附带复制操作。
generated: true
---

# Tooltip 文字提示

长按或点击后出现的气泡文字，可附带复制操作。

<PlatformBadges component="tooltip" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTooltip
import net.lingyun.ultraui.android.components.UPTooltipProps

DemoSection("文字提示") { UPTooltip(UPTooltipProps(text = "提示内容", triggerMode = "click"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTooltip(
  text: '长按文本，上方提示',
  overlay: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/tooltip_page.dart`</small>

</template>

<template #reactnative>

### 基础使用

```tsx
import { UPTooltip } from 'ultra-ui-rn';

<UPTooltip overlay text="长按文本，上方提示" />
```

### 扩展按钮

```tsx
<UPTooltip buttons={['扩展']} onClick={click} text="显示多个扩展按钮" />
```

### 自动调整位置

```tsx
<UPTooltip buttons={['扩展', '搜索', '翻译']} text="自动调整气泡位置" />
```

### 高亮选中文本背景色

```tsx
<UPTooltip
  bgColor="#e3e4e6"
  buttons={['扩展', '搜索', '翻译']}
  direction="top"
  text="长按文本，显示背景色"
  triggerMode="click"
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/TooltipDemo.tsx`</small>

</template>

<template #taro>

### 自定义颜色 / 禁用

color / bgColor / disabled

```tsx
import { UPTooltip } from '@ultra-ui'

<UPTooltip
  text='自定义文字与背景色'
  placement='top'
  color='#ffffff'
  bgColor='#3c9cff'
>
  <UPButton size='small' type='warning' text='彩色提示' />
</UPTooltip>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/tooltip/index.tsx`</small>

</template>

<template #uniapp>

### 基础使用

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

### 下方显示

```vue
<up-tooltip
    :text="text2"
    direction="bottom"
></up-tooltip>
```

### 扩展按钮

```vue
<up-tooltip
    :text="text3"
    :buttons="buttons1"
    @click="click"
></up-tooltip>
```

### 自动调整位置

```vue
<up-tooltip
    :text="text4"
    :buttons="buttons2"
></up-tooltip>
```

### 高亮选中文本背景色

```vue
<up-tooltip
    :text="text5"
    :buttons="buttons3"
    bgColor="#e3e4e6"
></up-tooltip>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/tooltip/tooltip.uvue`</small>

</template>

<template #uniappx>

### 基础使用

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

### 下方显示

```vue
<up-tooltip
    :text="text2"
    direction="bottom"
></up-tooltip>
```

### 扩展按钮

```vue
<up-tooltip
    :text="text3"
    :buttons="buttons1"
    @click="click"
></up-tooltip>
```

### 自动调整位置

```vue
<up-tooltip
    :text="text4"
    :buttons="buttons2"
></up-tooltip>
```

### 高亮选中文本背景色

```vue
<up-tooltip
    :text="text5"
    :buttons="buttons3"
    bgColor="#e3e4e6"
></up-tooltip>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/tooltip/tooltip.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 需要显示的提示文字 | `String / Number` | `''` |
| `copyText` | 点击复制按钮时，复制的文本，为空则使用text值 | `String / Number` | `''` |
| `size` | 文本大小 | `String / Number` | `14` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `bgColor` | 弹出提示框时，文本的背景色 | `String` | `'transparent'` |
| `direction` | 弹出提示的方向，top-上方，bottom-下方 | `String` | `'top'` |
| `zIndex` | 弹出提示的z-index，nvue无效 | `String / Number` | `10071` |
| `showCopy` | 是否显示复制按钮 | `Boolean` | `true` |
| `buttons` | 扩展的按钮组 | `Array` | `[]` |
| `overlay` | 是否显示透明遮罩以防止触摸穿透 | `Boolean` | `true` |
| `showToast` | 是否显示复制成功或者失败的toast | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTooltip` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPTooltip` | `packages/ultra_ui/lib/src/widgets/up_tooltip.dart` |
| React Native · TypeScript | `UPTooltip` | `src/components/tooltip` |
| Taro · React + TypeScript | `UPTooltip` | `src/ultra-ui/components/up-tooltip` |
| uni-app · Vue 3 | `up-tooltip` | `uni_modules/uview-ultra/components/up-tooltip` |
| uni-app-x · UTS / UVUE | `up-tooltip` | `uni_modules/uview-ultra/components/up-tooltip` |

