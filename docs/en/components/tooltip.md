---
title: Tooltip
description: A text bubble on tap or long press, optionally with a copy action.
generated: true
---

# Tooltip

A text bubble on tap or long press, optionally with a copy action.

<PlatformBadges component="tooltip" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTooltip
import net.lingyun.ultraui.android.components.UPTooltipProps

DemoSection("文字提示") { UPTooltip(UPTooltipProps(text = "提示内容", triggerMode = "click"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTooltip(
  text: '长按文本，上方提示',
  overlay: true,
)
```

#### 下方显示

```dart
UPTooltip(
  text: '长按文本，下方提示',
  direction: 'bottom',
)
```

#### 扩展按钮

```dart
UPTooltip(
  key: const ValueKey('tooltip-page-extension'),
  text: '显示多个扩展按钮',
  buttons: const <String>['扩展'],
  showCopy: false,
  onClick: (_) => setState(() => _extensionClicks += 1),
)
```

#### 自动调整位置

```dart
UPTooltip(
  text: '自动调整气泡位置',
  buttons: <String>['扩展', '搜索', '翻译'],
)
```

#### 高亮选中文本背景色

```dart
UPTooltip(
  text: '长按文本，显示背景色',
  buttons: <String>['扩展', '搜索', '翻译'],
  bgColor: '#e3e4e6',
  triggerMode: 'click',
  direction: 'top',
)
```

#### 单例打开

```dart
const UPTooltip(
  text: '第一个',
  triggerMode: 'click',
  singleton: true,
)
```

#### 自定义触发器

```dart
UPTooltip(
  key: _customTooltipKey,
  text: '长按文本，显示背景色',
  color: '#333',
  bgColor: '#e3e4e6',
  popupBgColor: '#f7f7f7',
  triggerMode: 'click',
  direction: 'right',
  child: _button(
    key: const ValueKey('tooltip-page-custom-trigger'),
    text: '点击',
    onClick: _openCustomTooltip,
  ),
  content: const Padding(
    padding: EdgeInsets.symmetric(horizontal: 6, vertical: 12),
    child: Text('自定义内容'),
  ),
)
```

#### 左侧弹出

```dart
UPTooltip(
  text: '长按文本，显示背景色',
  color: '#fff',
  bgColor: '#333',
  popupBgColor: '#333',
  triggerMode: 'click',
  forcePosition: const <String, String>{
    'right': '108px',
    'top': '0px',
  },
  direction: 'left',
  child: _button(
    text: '点击',
    onClick: () {},
  ),
  content: const Padding(
    padding: EdgeInsets.symmetric(horizontal: 6, vertical: 12),
    child: Text('自定义内容'),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/tooltip_page.dart`</small>

</template>

<template #reactnative>

#### 基础使用

```tsx
import { UPTooltip } from 'ultra-ui-rn';

<UPTooltip overlay text="长按文本，上方提示" />
```

#### 下方显示

```tsx
<UPTooltip direction="bottom" text="长按文本，下方提示" />
```

#### 扩展按钮

```tsx
<UPTooltip buttons={['扩展']} onClick={click} text="显示多个扩展按钮" />
```

#### 自动调整位置

```tsx
<UPTooltip buttons={['扩展', '搜索', '翻译']} text="自动调整气泡位置" />
```

#### 高亮选中文本背景色

```tsx
<UPTooltip
  bgColor="#e3e4e6"
  buttons={['扩展', '搜索', '翻译']}
  direction="top"
  text="长按文本，显示背景色"
  triggerMode="click"
/>
```

#### 单例打开

```tsx
<UPTooltip singleton text="第一个" triggerMode="click" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/TooltipDemo.tsx`</small>

</template>

<template #taro>

#### 上方提示

placement="top"（默认），点击文字弹出气泡

```tsx
import { UPTooltip } from '@ultra-ui'

<UPTooltip text='这是一条上方的文字提示' placement='top'>
  <Text className='tooltip-demo__trigger'>点我查看提示</Text>
</UPTooltip>
```

#### 下方提示

placement="bottom"

```tsx
<UPTooltip text='这是一条下方的文字提示' placement='bottom'>
  <Text className='tooltip-demo__trigger'>点我查看提示</Text>
</UPTooltip>
```

#### 左右提示

placement="left" / "right"

```tsx
<UPTooltip text='我在左边' placement='left'>
  <UPButton size='small' text='左侧' />
</UPTooltip>
```

#### 自定义颜色 / 禁用

color / bgColor / disabled

```tsx
<UPTooltip
  text='自定义文字与背景色'
  placement='top'
  color='#ffffff'
  bgColor='#3c9cff'
>
  <UPButton size='small' type='warning' text='彩色提示' />
</UPTooltip>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tooltip/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

#### 下方显示

```vue
<up-tooltip
    :text="text2"
    direction="bottom"
></up-tooltip>
```

#### 扩展按钮

```vue
<up-tooltip
    :text="text3"
    :buttons="buttons1"
    @click="click"
></up-tooltip>
```

#### 自动调整位置

```vue
<up-tooltip
    :text="text4"
    :buttons="buttons2"
></up-tooltip>
```

#### 高亮选中文本背景色

```vue
<up-tooltip
    :text="text5"
    :buttons="buttons3"
    bgColor="#e3e4e6"
></up-tooltip>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/tooltip/tooltip.uvue`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

#### 下方显示

```vue
<up-tooltip
    :text="text2"
    direction="bottom"
></up-tooltip>
```

#### 扩展按钮

```vue
<up-tooltip
    :text="text3"
    :buttons="buttons1"
    @click="click"
></up-tooltip>
```

#### 自动调整位置

```vue
<up-tooltip
    :text="text4"
    :buttons="buttons2"
></up-tooltip>
```

#### 高亮选中文本背景色

```vue
<up-tooltip
    :text="text5"
    :buttons="buttons3"
    bgColor="#e3e4e6"
></up-tooltip>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/tooltip/tooltip.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTooltip` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPTooltip` | `packages/ultra_ui/lib/src/widgets/up_tooltip.dart` |
| React Native · TypeScript | `UPTooltip` | `src/components/tooltip` |
| Taro · React + TypeScript | `UPTooltip` | `src/ultra-ui/components/up-tooltip` |
| uni-app · Vue 3 | `up-tooltip` | `uni_modules/uview-ultra/components/up-tooltip` |
| uni-app-x · UTS / UVUE | `up-tooltip` | `uni_modules/uview-ultra/components/up-tooltip` |

