---
title: Picker
description: A single- or multi-column scroll picker, including cascading data.
generated: true
---

# Picker

A single- or multi-column scroll picker, including cascading data.

<PlatformBadges component="picker" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPicker
import net.lingyun.ultraui.android.components.UPPickerProps

DemoSection("选择器") { UPPicker(UPPickerProps(show = true, title = "城市", columns = listOf(listOf(mapOf("text" to "北京", "value" to "bj")))))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPicker(
  key: const ValueKey('picker-page-basic'),
  show: _activePicker == 0,
  columns: <List<dynamic>>[_countries],
  toolbarRightSlot: true,
  toolbarRight: const Padding(
    padding: EdgeInsets.symmetric(horizontal: 15),
    child: Text('右侧'),
  ),
  pageInline: false,
  onConfirm: _confirmBasic,
  onCancel: () => _close(0),
  onClose: () => _close(0),
  onUpdateShow: (show) => _updateShow(0, show),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/picker_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPicker } from 'ultra-ui-rn';

<UPPicker
  columns={[['中国', '美国', '日本']]}
  defaultIndex={[1]}
  onCancel={close}
  onChange={change}
  onConfirm={close}
  show={active === 2}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/PickerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPPicker } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-picker
    :show="show1"
    :columns="columns1"
    @change="change"
    @cancel="cancel"
    @confirm="confirm"
    toolbarRightSlot
>
<template #toolbar-right>
    <view style="padding-right: 10px;">右侧</view>
</template>
<template #toolbar-bottom>
</template>
</up-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/picker/picker.nvue`</small>

</template>

<template #uniappx>

```vue
<up-picker
    :show="show1"
    :columns="columns1"
    @change="change"
    @cancel="cancel"
    @confirm="confirm"
></up-picker>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/picker/picker.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-picker>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | — | `Array` | `—` |
| `hasInput` | — | `Boolean` | `—` |
| `inputProps` | — | `Object` | `{}` |
| `inputBorder` | — | `String` | `—` |
| `disabled` | — | `Boolean` | `false` |
| `disabledColor` | — | `String` | `''` |
| `placeholder` | — | `String` | `t('up.common.pleaseChoose')` |
| `show` | 是否展示picker弹窗 | `Boolean` | `false` |
| `popupMode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `showToolbar` | 是否展示顶部的操作栏 | `Boolean` | `true` |
| `title` | 顶部标题 | `String` | `''` |
| `columns` | 对象数组，设置每一列的数据 | `Array` | `[]` |
| `loading` | 是否显示加载中状态 | `Boolean` | `false` |
| `itemHeight` | 各列中，单个选项的高度 | `String / Number` | `44` |
| `cancelText` | 取消按钮的文字 | `String` | `t('up.common.cancel')` |
| `confirmText` | 确认按钮的文字 | `String` | `t('up.common.confirm')` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `''` |
| `visibleItemCount` | 每列中可见选项的数量 | `String / Number` | `5` |
| `keyName` | 选项对象中，需要展示的属性键名 | `String` | `'text'` |
| `valueName` | 选项对象中，需要获取的属性值键名 | `String` | `'value'` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭选择器 | `Boolean` | `false` |
| `defaultIndex` | 各列的默认索引 | `Array` | `[]` |
| `immediateChange` | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效 | `Boolean` | `true` |
| `toolbarRightSlot` | 工具栏右侧插槽是否开启 | `Boolean` | `—` |
| `zIndex` | 层级 | `String / Number` | `10076` |
| `bgColor` | 弹窗背景色，设置为transparent可去除白色背景 | `String` | `''` |
| `round` | 是否显示圆角 | `Boolean / String / Number` | `0` |
| `duration` | 动画时长，单位ms | `String / Number` | `300` |
| `overlayOpacity` | 遮罩的透明度，0-1之间 | `Number / String` | `0.5` |
| `pageInline` | 是否页面内展示 | `Boolean` | `false` |
| `maskClass` | 蒙层样式样式 | `String` | `—` |
| `maskStyle` | 蒙层样式样式 | `String` | `—` |

#### Events

| Event |
| --- |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |
| `update:show` |

#### Slots

| Slot |
| --- |
| `default` |
| `toolbar-bottom` |
| `toolbar-right` |
| `trigger` |

### `<up-picker-data>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | — | `String / Number` | `—` |
| `title` | — | `String` | `—` |
| `description` | — | `String` | `—` |
| `options` | — | `Array` | `—` |
| `valueKey` | — | `String` | `—` |
| `labelKey` | — | `String` | `—` |

#### Events

| Event |
| --- |
| `cancel` |
| `close` |
| `closed` |
| `confirm` |

#### Slots

| Slot |
| --- |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPicker` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPPicker` | `packages/ultra_ui/lib/src/widgets/up_picker.dart` |
| React Native · TypeScript | `UPPicker` | `src/components/picker` |
| Taro · React + TypeScript | `UPPicker` | `src/ultra-ui/components/up-picker` |
| uni-app · Vue 3 | `up-picker` | `src/uni_modules/uview-plus/components/u-picker` |
| uni-app-x · UTS / UVUE | `up-picker` | `uni_modules/uview-ultra/components/up-picker` |

