---
title: Layout 栅格布局
description: 24 等分的行列栅格，用于快速搭建等宽或按比例分栏的结构。
generated: true
---

# Layout 栅格布局

24 等分的行列栅格，用于快速搭建等宽或按比例分栏的结构。

<PlatformBadges component="layout" show-missing />

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

### 行布局

```kotlin
import net.lingyun.ultraui.android.components.UPRow

UPRow(gutter = 8, justify = "between", onClick = { eventText = "行布局：点击" }) {
    UPCol(span = 4) { DemoTile("span 4") }
    UPCol(span = 4) { DemoTile("span 4") }
    UPCol(span = 4) { DemoTile("span 4") }
}
```

### 列布局

```kotlin
UPRow(gutter = 8) {
    UPCol(span = 6, onClick = { eventText = "列布局：左列" }) { DemoTile("左列") }
    UPCol(span = 6, onClick = { eventText = "列布局：右列" }) { DemoTile("右列") }
}
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRow, UPRowProps } from '@lingyun/ultra-ui-hos';

UPRow({ props: new UPRowProps({ gutter: 12 }) }) {
  UPCol({ props: new UPColProps({ span: 6 }) }) {
    Column() { Text('span=6').fontSize(13).fontColor('#ffffff') }
    .width('100%').height(44).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#2979ff').borderRadius(4)
  }
  UPCol({ props: new UPColProps({ span: 6 }) }) {
    Column() { Text('span=6').fontSize(13).fontColor('#ffffff') }
    .width('100%').height(44).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#2979ff').borderRadius(4)
  }
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/RowDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPRow(
  key: const ValueKey('layout-page-basic-row'),
  children: <Widget>[
    UPCol(span: 6, child: _demoLayout('#e5e9f2')),
    UPCol(span: 6, child: _demoLayout('#ced7e1')),
  ],
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/layout_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLayout } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPLayout } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

### 基础使用

```vue
<up-row :customStyle="{marginBottom: '10px'}">
    <up-col span="6">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="6">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

### 分栏间隔

```vue
<up-row justify="space-between" gutter="10">
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
</up-row>
```

### 混合布局

```vue
<up-row justify="space-between" gutter="10">
    <up-col span="2">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="4">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="6">
        <view class="demo-layout bg-purple-dark"></view>
    </up-col>
</up-row>
```

### 分栏偏移

```vue
<up-row
    justify="space-between"
    :customStyle="{marginBottom: '10px'}"
>
    <up-col span="3" offset="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3" offset="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

### 对齐方式

```vue
<up-row
    justify="space-between"
    :customStyle="{marginBottom: '10px'}"
>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/layout/layout.uvue`</small>

</template>

<template #uniappx>

### 基础使用

```vue
<up-row :customStyle="{marginBottom: '10px'}">
    <up-col span="6">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="6">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

### 分栏间隔

```vue
<up-row justify="space-between" gutter="10">
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
</up-row>
```

### 混合布局

```vue
<up-row justify="space-between" gutter="10">
    <up-col span="2">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="4">
        <view class="demo-layout bg-purple"></view>
    </up-col>
    <up-col span="6">
        <view class="demo-layout bg-purple-dark"></view>
    </up-col>
</up-row>
```

### 分栏偏移

```vue
<up-row
    justify="space-between"
    :customStyle="{marginBottom: '10px'}"
>
    <up-col span="3" offset="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3" offset="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

### 对齐方式

```vue
<up-row
    justify="space-between"
    :customStyle="{marginBottom: '10px'}"
>
    <up-col span="3">
        <view class="demo-layout bg-purple-light"></view>
    </up-col>
    <up-col span="3">
        <view class="demo-layout bg-purple"></view>
    </up-col>
</up-row>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/layout/layout.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-row>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `gutter` | 给col添加间距，左右边距各占一半 | `String / Number` | `0` |
| `justify` | 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `'start'` |
| `align` | 垂直对齐方式，可选值为top、center、bottom | `String` | `'center'` |

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-col>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `span` | 占父容器宽度的多少等分，总分为12份 | `String / Number` | `12` |
| `offset` | 指定栅格左侧的间隔数(总12栏) | `String / Number` | `0` |
| `justify` | 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `'start'` |
| `align` | 垂直对齐方式，可选值为top、center、bottom、stretch | `String` | `'stretch'` |
| `textAlign` | 文字对齐方式 | `String` | `'left'` |

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPRow` | `UltraUI/Sources/UltraUI/Components/UPRow.swift` |
| Android · Jetpack Compose | `UPRow` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRow.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRow` | `ultra-ui/src/main/ets/components/UPRow.ets` |
| Flutter · Dart | `UPRow` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPLayout` | `src/components/row` |
| Taro · React + TypeScript | `UPLayout` | `src/ultra-ui/components/up-row` |
| uni-app · Vue 3 | `up-row` | `uni_modules/uview-ultra/components/up-row` |
| uni-app-x · UTS / UVUE | `up-row` | `uni_modules/uview-ultra/components/up-row` |

