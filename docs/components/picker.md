---
title: Picker 选择器
description: 单列或多列的滚动选择器，支持联动数据。
generated: true
---

# Picker 选择器

单列或多列的滚动选择器，支持联动数据。

<PlatformBadges component="picker" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPicker
import net.lingyun.ultraui.android.components.UPPickerProps

DemoSection("选择器") { UPPicker(UPPickerProps(show = true, title = "城市", columns = listOf(listOf(mapOf("text" to "北京", "value" to "bj")))))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/picker_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/PickerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPPicker } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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
></up-picker>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/picker/picker.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/picker/picker.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-picker>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | — | `Array` | `—` |
| `hasInput` | — | `Boolean` | `—` |
| `placeholder` | — | `String` | `—` |
| `show` | 是否展示picker弹窗 | `Boolean` | `false` |
| `popupMode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `showToolbar` | 是否展示顶部的操作栏 | `Boolean` | `true` |
| `title` | 顶部标题 | `String` | `''` |
| `columns` | 对象数组，设置每一列的数据 | `Array` | `[]` |
| `loading` | 是否显示加载中状态 | `Boolean` | `false` |
| `itemHeight` | 各列中，单个选项的高度 | `String / Number` | `44` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确定'` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `visibleItemCount` | 每列中可见选项的数量 | `String / Number` | `5` |
| `keyName` | 选项对象中，需要展示的属性键名 | `String` | `'text'` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭选择器 | `Boolean` | `false` |
| `defaultIndex` | 各列的默认索引 | `Array` | `[]` |
| `immediateChange` | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效 | `Boolean` | `true` |
| `toolbarRightSlot` | 工具栏右侧插槽是否开启 | `Boolean` | `—` |
| `pageInline` | 是否内联在页面中（不使用弹窗形式） | `Boolean` | `false` |

#### 事件

| 事件名 |
| --- |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `toolbar-bottom` |
| `toolbar-right` |

### `<up-picker-data>`

#### 事件

| 事件名 |
| --- |
| `cancel` |
| `close` |
| `closed` |
| `confirm` |

#### 插槽

| 插槽名 |
| --- |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPicker` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPPicker` | `packages/ultra_ui/lib/src/widgets/up_picker.dart` |
| React Native · TypeScript | `UPPicker` | `src/components/picker` |
| Taro · React + TypeScript | `UPPicker` | `src/ultra-ui/components/up-picker` |
| uni-app · Vue 3 | `up-picker` | `uni_modules/uview-ultra/components/up-picker` |
| uni-app-x · UTS / UVUE | `up-picker` | `uni_modules/uview-ultra/components/up-picker` |

