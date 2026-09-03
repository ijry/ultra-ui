---
title: Tooltip
description: A text bubble on tap or long press, optionally with a copy action.
generated: true
---

# Tooltip

A text bubble on tap or long press, optionally with a copy action.

<PlatformBadges component="tooltip" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Basic usage

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTooltip(
  text: '长按文本，上方提示',
  overlay: true,
)
```

#### Shown below

```dart
UPTooltip(
  text: '长按文本，下方提示',
  direction: 'bottom',
)
```

#### Extra buttons

```dart
UPTooltip(
  key: const ValueKey('tooltip-page-extension'),
  text: '显示多个扩展按钮',
  buttons: const <String>['扩展'],
  showCopy: false,
  onClick: (_) => setState(() => _extensionClicks += 1),
)
```

#### Auto-repositioning

```dart
UPTooltip(
  text: '自动调整气泡位置',
  buttons: <String>['扩展', '搜索', '翻译'],
)
```

#### Highlight colour for selected text

```dart
UPTooltip(
  text: '长按文本，显示背景色',
  buttons: <String>['扩展', '搜索', '翻译'],
  bgColor: '#e3e4e6',
  triggerMode: 'click',
  direction: 'top',
)
```

#### One panel at a time

```dart
const UPTooltip(
  text: '第一个',
  triggerMode: 'click',
  singleton: true,
)
```

#### Custom trigger

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

#### Opens from the left

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

#### Basic usage

```tsx
import { UPTooltip } from 'ultra-ui-rn';

<UPTooltip overlay text="长按文本，上方提示" />
```

#### Shown below

```tsx
<UPTooltip direction="bottom" text="长按文本，下方提示" />
```

#### Extra buttons

```tsx
<UPTooltip buttons={['扩展']} onClick={click} text="显示多个扩展按钮" />
```

#### Auto-repositioning

```tsx
<UPTooltip buttons={['扩展', '搜索', '翻译']} text="自动调整气泡位置" />
```

#### Highlight colour for selected text

```tsx
<UPTooltip
  bgColor="#e3e4e6"
  buttons={['扩展', '搜索', '翻译']}
  direction="top"
  text="长按文本，显示背景色"
  triggerMode="click"
/>
```

#### One panel at a time

```tsx
<UPTooltip singleton text="第一个" triggerMode="click" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/TooltipDemo.tsx`</small>

</template>

<template #taro>

#### Hint above

```tsx
import { UPTooltip } from '@ultra-ui'

<UPTooltip text='这是一条上方的文字提示' placement='top'>
  <Text className='tooltip-demo__trigger'>点我查看提示</Text>
</UPTooltip>
```

#### Hint below

```tsx
<UPTooltip text='这是一条下方的文字提示' placement='bottom'>
  <Text className='tooltip-demo__trigger'>点我查看提示</Text>
</UPTooltip>
```

#### Hints on both sides

```tsx
<UPTooltip text='我在左边' placement='left'>
  <UPButton size='small' text='左侧' />
</UPTooltip>
```

#### Custom colour and disabled

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

#### Basic usage

```vue
<template>
    <up-tooltip text="复制" overlay></up-tooltip>
</template>
```

#### Shown below

```vue
<template>
    <up-tooltip text="下方显示" direction="bottom"></up-tooltip>
</template>
```

#### Extra buttons

```vue
<template>
    <up-tooltip text="扩展显示" :buttons="['扩展']"></up-tooltip>
</template>
```

#### Highlight colour for selected text

```vue
<template>
    <up-tooltip text="高亮选中文本背景色" :buttons="['扩展']" bgColor="#e3e4e6"></up-tooltip>
</template>
```

#### One panel at a time

```vue
<template>
    <up-tooltip text="第一个" triggerMode="click" singleton></up-tooltip>
    <up-tooltip text="第二个" triggerMode="click" singleton></up-tooltip>
</template>
```

#### Opens from the left, position forced

```vue
<template>
    <up-tooltip
        text="text5"
        color="#fff"
        bgColor="#333"
        popupBgColor="#333"
        triggerMode="click"
        :forcePosition="{right: '108px', top: '0px'}"
        direction="left"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-tooltip>
</template>
```

#### Opens from the right

```vue
<template>
    <up-tooltip
        text="text5"
        color="#333"
        bgColor="#e3e4e6"
        popupBgColor="#f7f7f7"
        triggerMode="click"
        direction="right"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-tooltip>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/tooltip.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
    <up-tooltip text="复制" overlay></up-tooltip>
</template>
```

#### Shown below

```vue
<template>
    <up-tooltip text="下方显示" direction="bottom"></up-tooltip>
</template>
```

#### Extra buttons

```vue
<template>
    <up-tooltip text="扩展显示" :buttons="['扩展']"></up-tooltip>
</template>
```

#### Highlight colour for selected text

```vue
<template>
    <up-tooltip text="高亮选中文本背景色" :buttons="['扩展']" bgColor="#e3e4e6"></up-tooltip>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/tooltip.md`</small>

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

