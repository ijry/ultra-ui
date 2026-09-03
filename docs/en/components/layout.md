---
title: Layout
description: A 24-column row/col grid for equal-width or proportional layouts.
generated: true
---

# Layout

A 24-column row/col grid for equal-width or proportional layouts.

<PlatformBadges component="layout" show-missing />

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
import net.lingyun.ultraui.android.components.UPRow

UPRow(gutter = 8, justify = "between", onClick = { eventText = "行布局：点击" }) {
    UPCol(span = 4) { DemoTile("span 4") }
    UPCol(span = 4) { DemoTile("span 4") }
    UPCol(span = 4) { DemoTile("span 4") }
}
```

```kotlin
UPRow(gutter = 8) {
    UPCol(span = 6, onClick = { eventText = "列布局：左列" }) { DemoTile("左列") }
    UPCol(span = 6, onClick = { eventText = "列布局：右列" }) { DemoTile("右列") }
}
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

#### 12 栅格基础行

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

#### 偏移与换行

```typescript
UPRow({ props: new UPRowProps({ gutter: 8 }) }) {
  UPCol({ props: new UPColProps({ span: 4, offset: 2 }) }) {
    Column() { Text('span=4 offset=2').fontSize(12).fontColor('#ffffff') }
    .width('100%').height(40).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#5cdbd3').borderRadius(4)
  }
  UPCol({ props: new UPColProps({ span: 4 }) }) {
    Column() { Text('span=4').fontSize(12).fontColor('#ffffff') }
    .width('100%').height(40).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#5cdbd3').borderRadius(4)
  }
  UPCol({ props: new UPColProps({ span: 8 }) }) {
    Column() { Text('span=8 换行').fontSize(12).fontColor('#ffffff') }
    .width('100%').height(40).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#ff9900').borderRadius(4)
  }
}
```

#### 对齐方式

```typescript
UPRow({ props: new UPRowProps({ justify: 'space-between', align: 'center' }) }) {
  UPCol({ props: new UPColProps({ span: 3 }) }) {
    Column() { Text('A').fontSize(13).fontColor('#ffffff') }
    .width('100%').height(36).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#909399').borderRadius(4)
  }
  UPCol({ props: new UPColProps({ span: 3 }) }) {
    Column() { Text('B').fontSize(13).fontColor('#ffffff') }
    .width('100%').height(36).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#909399').borderRadius(4)
  }
  UPCol({ props: new UPColProps({ span: 3 }) }) {
    Column() { Text('C').fontSize(13).fontColor('#ffffff') }
    .width('100%').height(36).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
    .backgroundColor('#909399').borderRadius(4)
  }
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/RowDemo.ets`</small>

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

```dart
UPRow(
  children: <Widget>[
    UPCol(span: 4, child: _demoLayout('#ced7e1')),
    UPCol(span: 4, child: _demoLayout('#e5e9f2')),
    UPCol(span: 4, child: _demoLayout('#99a9bf')),
  ],
)
```

```dart
UPRow(
  justify: 'space-between',
  children: <Widget>[
    UPCol(span: 3, child: _demoLayout('#ced7e1')),
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
    UPCol(span: 3, child: _demoLayout('#ced7e1')),
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
  ],
)
```

```dart
UPRow(
  key: const ValueKey('layout-page-gutter-row'),
  justify: 'space-between',
  gutter: 10,
  children: <Widget>[
    UPCol(span: 3, child: _demoLayout('#ced7e1')),
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
    UPCol(span: 3, child: _demoLayout('#ced7e1')),
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
  ],
)
```

```dart
UPRow(
  key: const ValueKey('layout-page-mixed-row'),
  justify: 'space-between',
  gutter: 10,
  children: <Widget>[
    UPCol(span: 2, child: _demoLayout('#e5e9f2')),
    UPCol(span: 4, child: _demoLayout('#ced7e1')),
    UPCol(span: 6, child: _demoLayout('#99a9bf')),
  ],
)
```

```dart
UPRow(
  key: const ValueKey('layout-page-offset-row'),
  justify: 'space-between',
  children: <Widget>[
    UPCol(
      span: 3,
      offset: 3,
      child: _demoLayout('#e5e9f2'),
    ),
    UPCol(
      span: 3,
      offset: 3,
      child: _demoLayout('#ced7e1'),
    ),
  ],
)
```

```dart
UPRow(
  children: <Widget>[
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
    UPCol(
      key: const ValueKey('layout-page-offset-col'),
      span: 3,
      offset: 3,
      child: _demoLayout('#ced7e1'),
    ),
  ],
)
```

```dart
UPRow(
  key: const ValueKey('layout-page-alignment-row'),
  justify: 'space-between',
  children: <Widget>[
    UPCol(span: 3, child: _demoLayout('#e5e9f2')),
    UPCol(span: 3, child: _demoLayout('#ced7e1')),
  ],
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/layout_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLayout } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPLayout } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### 基础使用

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

#### 分栏间隔

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

#### 混合布局

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

#### 分栏偏移

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

#### 对齐方式

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/layout/layout.uvue`</small>

</template>

<template #uniappx>

#### 基础使用

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

#### 分栏间隔

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

#### 混合布局

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

#### 分栏偏移

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

#### 对齐方式

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/layout/layout.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-row>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `gutter` | 给col添加间距，左右边距各占一半 | `String / Number` | `0` |
| `justify` | 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `'start'` |
| `align` | 垂直对齐方式，可选值为top、center、bottom | `String` | `'center'` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-col>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `span` | 占父容器宽度的多少等分，总分为12份 | `String / Number` | `12` |
| `offset` | 指定栅格左侧的间隔数(总12栏) | `String / Number` | `0` |
| `justify` | 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `'start'` |
| `align` | 垂直对齐方式，可选值为top、center、bottom、stretch | `String` | `'stretch'` |
| `textAlign` | 文字对齐方式 | `String` | `'left'` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPRow` | `UltraUI/Sources/UltraUI/Components/UPRow.swift` |
| Android · Jetpack Compose | `UPRow` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRow.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRow` | `ultra-ui/src/main/ets/components/UPRow.ets` |
| Flutter · Dart | `UPRow` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPLayout` | `src/components/row` |
| Taro · React + TypeScript | `UPLayout` | `src/ultra-ui/components/up-row` |
| uni-app · Vue 3 | `up-row` | `uni_modules/uview-ultra/components/up-row` |
| uni-app-x · UTS / UVUE | `up-row` | `uni_modules/uview-ultra/components/up-row` |

