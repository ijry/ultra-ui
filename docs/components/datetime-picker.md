---
title: Datetime picker 时间选择器
description: 日期与时间选择器，可自由组合年月日时分秒。
generated: true
---

# Datetime picker 时间选择器

日期与时间选择器，可自由组合年月日时分秒。

<PlatformBadges component="datetime-picker" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/datetime_picker_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/DatetimePickerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPDatetimePicker } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-datetime-picker
    hasInput
    placeholder="请选择日期"
    mode="datetime"
    :inputProps="{
        border: 'surround',
        shape: 'square',
        inputAlign: 'center',
        suffixIcon: 'calendar'
    }"
    :modelValue="1714266792000"
    >
</up-datetime-picker>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/datetimePicker/datetimePicker.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/datetimePicker/datetimePicker.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hasInput` | 是否显示input | `Boolean` | `—` |
| `inputProps` | — | `Object` | `{}` |
| `inputBorder` | — | `String` | `'surround'` |
| `disabled` | — | `String` | `false` |
| `placeholder` | — | `String` | `t("up.common.pleaseChoose")` |
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
| `cancelText` | 取消按钮的文字 | `String` | `t("up.common.cancel")` |
| `confirmText` | 确认按钮的文字 | `String` | `t("up.common.confirm")` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `visibleItemCount` | 每列中可见选项的数量 | `String / Number` | `5` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭选择器 | `Boolean` | `false` |
| `defaultIndex` | 各列的默认索引 | `Array` | `[]` |
| `pageInline` | 是否页面内展示 | `Boolean` | `false` |
| `maskClass` | 蒙层样式样式 | `String` | `—` |
| `maskStyle` | 蒙层样式样式 | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |
| `input` |

### 插槽

| 插槽名 |
| --- |
| `toolbar-bottom` |
| `toolbar-right` |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPDatetimePicker` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDatetimePickerComponents.kt` |
| Flutter · Dart | `UPDatetimePicker` | `packages/ultra_ui/lib/src/widgets/up_datetime_picker.dart` |
| React Native · TypeScript | `UPDatetimePicker` | `src/components/datetime-picker` |
| Taro · React + TypeScript | `UPDatetimePicker` | `src/ultra-ui/components/up-datetime-picker` |
| uni-app · Vue 3 | `up-datetime-picker` | `src/uni_modules/uview-plus/components/u-datetime-picker` |
| uni-app-x · UTS / UVUE | `up-datetime-picker` | `uni_modules/uview-ultra/components/up-datetime-picker` |

