---
title: Datetime picker
description: A date and time picker; compose year, month, day, hour, minute and second freely.
generated: true
---

# Datetime picker

A date and time picker; compose year, month, day, hour, minute and second freely.

<PlatformBadges component="datetime-picker" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPDatetimePicker
import net.lingyun.ultraui.android.components.UPDatetimePickerProps

UPDatetimePicker(
    UPDatetimePickerProps(
        pageInline = true,
        mode = "time",
        minHour = 8,
        maxHour = 10,
        minMinute = 0,
        maxMinute = 2,
        minSecond = 0,
        maxSecond = 2,
    ),
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPDatetimePicker(
  key: const ValueKey('datetime-picker-page-widget-0'),
  show: _activeIndex == index,
  mode: 'datetime',
  value: _fixedDatetime,
  closeOnClickOverlay: true,
  toolbarRightSlot: true,
  toolbarRight: const Text('右侧'),
  onConfirm: _confirm,
  onCancel: () => _close(index),
  onClose: () => _close(index),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/datetime_picker_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDatetimePicker } from 'ultra-ui-rn';

<UPDatetimePicker
  hasInput
  inputProps={{
    border: 'surround',
    inputAlign: 'center',
    shape: 'square',
    suffixIcon: 'calendar',
  }}
  mode="datetime"
  modelValue={1714266792000}
  placeholder="请选择日期"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/DatetimePickerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPDatetimePicker } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-datetime-picker
    :show="show1"
    v-model="value1"
    mode="datetime"
    closeOnClickOverlay
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
    @close="close"
></up-datetime-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/datetimePicker/datetimePicker.uvue`</small>

</template>

<template #uniappx>

```vue
<up-datetime-picker
    :show="show1"
    v-model="value1"
    mode="datetime"
    closeOnClickOverlay
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
    @close="close"
></up-datetime-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/datetimePicker/datetimePicker.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `hasInput` | 是否显示input | `Boolean` | `—` |
| `placeholder` | — | `String` | `—` |
| `format` | — | `String` | `—` |
| `show` | 是否打开组件 | `Boolean` | `false` |
| `popupMode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `showToolbar` | 是否展示顶部的操作栏 | `Boolean` | `true` |
| `toolbarRightSlot` | 工具栏右侧内容 | `Boolean` | `—` |
| `value` | 绑定值 | `String / Number` | `''` |
| `modelValue` | 绑定值 | `String / Number` | `—` |
| `title` | 顶部标题 | `String` | `''` |
| `mode` | 展示格式，支持date、time、year-month、datetime、datehour、timesecond、datetimesecond | `String` | `'datetime'` |
| `maxDate` | 可选的最大时间 | `Number` | `new Date(new Date().getFullYear() + 10, 0, 1)…` |
| `minDate` | 可选的最小时间 | `Number` | `new Date(new Date().getFullYear() - 10, 0, 1)…` |
| `minHour` | 可选的最小小时，仅mode=time/timesecond有效 | `Number` | `0` |
| `maxHour` | 可选的最大小时，仅mode=time/timesecond有效 | `Number` | `23` |
| `minMinute` | 可选的最小分钟，仅mode=time/timesecond有效 | `Number` | `0` |
| `maxMinute` | 可选的最大分钟，仅mode=time/timesecond有效 | `Number` | `59` |
| `minSecond` | 可选的最小秒，仅mode=timesecond有效 | `Number` | `0` |
| `maxSecond` | 可选的最大秒，仅mode=timesecond有效 | `Number` | `59` |
| `filter` | 选项过滤函数 | `Function / null` | `null` |
| `formatter` | 选项格式化函数 | `Function / null` | `null` |
| `loading` | 是否显示加载中状态 | `Boolean` | `false` |
| `itemHeight` | 各列中，单个选项的高度 | `String / Number` | `44` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确认'` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `visibleItemCount` | 每列中可见选项的数量 | `String / Number` | `5` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭选择器 | `Boolean` | `false` |
| `defaultIndex` | 各列的默认索引 | `Array` | `[]` |
| `pageInline` | 是否内联在页面中（不使用弹窗形式） | `Boolean` | `false` |

### Events

| Event |
| --- |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |
| `input` |

### Slots

| Slot |
| --- |
| `toolbar-bottom` |
| `toolbar-right` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPDatetimePicker` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDatetimePickerComponents.kt` |
| Flutter · Dart | `UPDatetimePicker` | `packages/ultra_ui/lib/src/widgets/up_datetime_picker.dart` |
| React Native · TypeScript | `UPDatetimePicker` | `src/components/datetime-picker` |
| Taro · React + TypeScript | `UPDatetimePicker` | `src/ultra-ui/components/up-datetime-picker` |
| uni-app · Vue 3 | `up-datetime-picker` | `uni_modules/uview-ultra/components/up-datetime-picker` |
| uni-app-x · UTS / UVUE | `up-datetime-picker` | `uni_modules/uview-ultra/components/up-datetime-picker` |

