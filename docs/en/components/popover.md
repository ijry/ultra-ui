---
title: Popover
description: A bubble panel anchored to an element, holding a menu or any content.
generated: true
---

# Popover

A bubble panel anchored to an element, holding a menu or any content.

<PlatformBadges component="popover" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPopover
import net.lingyun.ultraui.android.components.UPPopoverProps

DemoSection("气泡弹出") { UPPopover(UPPopoverProps(text = "气泡内容"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPopover(
  key: const ValueKey('popover-page-right'),
  color: '#333',
  bgColor: '#e3e4e6',
  popupBgColor: '#f7f7f7',
  direction: 'right',
  onOpen: _recordOpen,
  onClose: _recordClose,
  trigger: UPButton(
    key: const ValueKey('popover-page-right-trigger'),
    type: 'primary',
    size: 'small',
    text: '点击打开',
    stop: false,
  ),
  content: _content(),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/popover_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPopover } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

### 对齐变体

top-start / bottom-end 等

```tsx
import { UPPopover } from '@ultra-ui'

<UPPopover placement='top-start' content='top-start 对齐触发元素左缘'>
  <View className='popover-demo__trigger'>左上</View>
</UPPopover>
```

### 自定义样式

bgColor / color / offset

```tsx
<UPPopover
  placement='top'
  content='自定义主题色的气泡'
  bgColor='#3c9cff'
  color='#ffffff'
  offset={12}
>
  <View className='popover-demo__trigger'>主题</View>
</UPPopover>
```

### 禁用

disabled 不响应点击

```tsx
<UPPopover placement='top' content='disabled 时不会弹出' disabled>
  <View className='popover-demo__trigger popover-demo__trigger--disabled'>禁用</View>
</UPPopover>
```

### 回调

onOpen / onClose

```tsx
<UPPopover
  placement='top'
  content='监听 onOpen / onClose'
  onOpen={() => console.log('popover open')}
  onClose={() => console.log('popover close')}
>
  <View className='popover-demo__trigger'>事件</View>
</UPPopover>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/popover/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-popover
    color="#333"
    bgColor="#e3e4e6"
    popupBgColor="#f7f7f7"
    direction="right"
>
    <template #trigger>
        <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
    </template>
    <template #content>
        <view style="padding: 6px 12px;">自定义内容</view>
    </template>
</up-popover>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/popover/popover.uvue`</small>

</template>

<template #uniappx>

```vue
<up-popover
    color="#333"
    bgColor="#e3e4e6"
    popupBgColor="#f7f7f7"
    direction="right"
>
    <template #trigger>
        <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
    </template>
    <template #content>
        <view style="padding: 6px 12px;">自定义内容</view>
    </template>
</up-popover>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/popover/popover.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `text` | 显示的文字内容 | `String / Number` | `—` |
| `color` | 文字颜色 | `String` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `popupBgColor` | 弹出框背景颜色 | `String` | `—` |
| `placement` | 弹出框位置 | `String` | `—` |
| `triggerMode` | 触发方式 | `String` | `—` |
| `show` | 是否显示 (manual模式下使用) | `Boolean` | `—` |
| `zIndex` | z-index值 | `Number / String` | `—` |
| `forcePosition` | 强制定位 | `Object` | `—` |
| `direction` | 弹出方向 | `String` | `—` |

### Events

| Event |
| --- |
| `click` |
| `close` |
| `open` |

### Slots

| Slot |
| --- |
| `content` |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPopover` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPPopover` | `packages/ultra_ui/lib/src/widgets/up_popover.dart` |
| React Native · TypeScript | `UPPopover` | `src/components/popover` |
| Taro · React + TypeScript | `UPPopover` | `src/ultra-ui/components/up-popover` |
| uni-app · Vue 3 | `up-popover` | `uni_modules/uview-ultra/components/up-popover` |
| uni-app-x · UTS / UVUE | `up-popover` | `uni_modules/uview-ultra/components/up-popover` |

