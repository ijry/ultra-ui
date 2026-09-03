---
title: Cell 单元格
description: 列表项的通用容器，可组合标题、描述、图标、右侧箭头与自定义内容。
generated: true
---

# Cell 单元格

列表项的通用容器，可组合标题、描述、图标、右侧箭头与自定义内容。

<PlatformBadges component="cell" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CellDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCell(title: 'uview-plus', value: '内容', isLink: true)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/cell_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCell } from 'ultra-ui-rn';

<UPCell title="单元格" value="内容" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CellGroupDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCell } from '@ultra-ui'

<UPCell title='单元格' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/cell/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-cell
    title="uview-plus"
    value="内容"
    :isLink="true"
></up-cell>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/cell/cell.nvue`</small>

</template>

<template #uniappx>

```vue
<up-cell
    title="uview-plus"
    value="内容"
    :isLink="true"
></up-cell>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/cell/cell.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-cell>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `icon` |
| `label` |
| `right-icon` |
| `righticon` |
| `title` |
| `value` |

### `<up-cell-group>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 分组标题 | `String` | `''` |
| `border` | 是否显示外边框 | `Boolean` | `true` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `title` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCell` | `UltraUI/Sources/UltraUI/Components/UPCell.swift` |
| Android · Jetpack Compose | `UPCell` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCell.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCell` | `ultra-ui/src/main/ets/components/UPCell.ets` |
| Flutter · Dart | `UPCell` | `packages/ultra_ui/lib/src/widgets/up_cell.dart` |
| React Native · TypeScript | `UPCell` | `src/components/cell` |
| Taro · React + TypeScript | `UPCell` | `src/ultra-ui/components/up-cell` |
| uni-app · Vue 3 | `up-cell` | `src/uni_modules/uview-plus/components/u-cell` |
| uni-app-x · UTS / UVUE | `up-cell` | `uni_modules/uview-ultra/components/up-cell` |

