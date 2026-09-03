---
title: Cell
description: The general-purpose list row： title, label, icon, arrow and custom content.
generated: true
---

# Cell

The general-purpose list row: title, label, icon, arrow and custom content.

<PlatformBadges component="cell" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCell
import net.lingyun.ultraui.android.components.UPCellProps

UPCell(
    props = UPCellProps(title = "账户资料", label = "公开 UPCellProps", value = "查看", isLink = true, clickable = true),
    onClick = { eventText = "单元格：$it" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCell, UPCellProps } from '@lingyun/ultra-ui-hos';

UPCell({ props: new UPCellProps({
  title: '头像',
  value: '默认头像',
  icon: 'home',
  arrow: true,
  clickable: true,
  name: 1001,
  onClick: (event: UPCellClickEvent): void => {
    this.select(event);
  }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CellDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCell(title: 'uview-plus', value: '内容', isLink: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/cell_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCell } from 'ultra-ui-rn';

<UPCell title="单元格" value="内容" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CellGroupDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCell } from '@ultra-ui'

<UPCell title='单元格' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/cell/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-cell
    title="uview-plus"
    value="内容"
    :isLink="true"
></up-cell>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/cell/cell.nvue`</small>

</template>

<template #uniappx>

```vue
<up-cell
    title="uview-plus"
    value="内容"
    :isLink="true"
></up-cell>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/cell/cell.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-cell>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 标题 | `String / Number` | `''` |
| `label` | 标题下方的描述信息 | `String / Number` | `''` |
| `value` | 右侧的内容 | `String / Number` | `''` |
| `icon` | 左侧图标名称，或者图片链接(本地文件建议使用绝对地址) | `String` | `''` |
| `disabled` | 是否禁用cell | `Boolean` | `false` |
| `border` | 是否显示下边框 | `Boolean` | `true` |
| `center` | 内容是否垂直居中(主要是针对右侧的value部分) | `Boolean` | `false` |
| `url` | 点击后跳转的URL地址 | `String` | `''` |
| `linkType` | 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作 | `String` | `'navigateTo'` |
| `clickable` | 是否开启点击反馈(表现为点击时加上灰色背景) | `Boolean` | `false` |
| `isLink` | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| `required` | 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件) | `Boolean` | `false` |
| `rightIcon` | 右侧的图标箭头 | `String` | `'arrow-right'` |
| `arrowDirection` | 右侧箭头的方向，可选值为：left，up，down | `String` | `''` |
| `iconStyle` | 左侧图标样式 | `Object / String` | `{}` |
| `rightIconStyle` | 右侧箭头图标的样式 | `Object / String` | `{}` |
| `titleStyle` | 标题的样式 | `Object / String` | `{}` |
| `size` | 单位元的大小，可选值为large | `String` | `''` |
| `stop` | 点击cell是否阻止事件传播 | `Boolean` | `true` |
| `name` | 标识符，cell被点击时返回 | `Number / String` | `''` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `icon` |
| `label` |
| `right-icon` |
| `righticon` |
| `title` |
| `value` |

### `<up-cell-group>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 分组标题 | `String` | `''` |
| `border` | 是否显示外边框 | `Boolean` | `true` |

#### Slots

| Slot |
| --- |
| `default` |
| `title` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCell` | `UltraUI/Sources/UltraUI/Components/UPCell.swift` |
| Android · Jetpack Compose | `UPCell` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCell.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCell` | `ultra-ui/src/main/ets/components/UPCell.ets` |
| Flutter · Dart | `UPCell` | `packages/ultra_ui/lib/src/widgets/up_cell.dart` |
| React Native · TypeScript | `UPCell` | `src/components/cell` |
| Taro · React + TypeScript | `UPCell` | `src/ultra-ui/components/up-cell` |
| uni-app · Vue 3 | `up-cell` | `src/uni_modules/uview-plus/components/u-cell` |
| uni-app-x · UTS / UVUE | `up-cell` | `uni_modules/uview-ultra/components/up-cell` |

