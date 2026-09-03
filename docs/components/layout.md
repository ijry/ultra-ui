---
title: Layout 栅格布局
description: 24 等分的行列栅格，用于快速搭建等宽或按比例分栏的结构。
generated: true
---

# Layout 栅格布局

24 等分的行列栅格，用于快速搭建等宽或按比例分栏的结构。

<PlatformBadges component="layout" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

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

#### 基本使用

通过`col`组件的`span`设置需要分栏的比例

```vue
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">基础使用</text>
            <view class="u-demo-block__content">
                <up-row customStyle="margin-bottom: 10px">
                    <up-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </up-col>
                    <up-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </up-col>
                </up-row>
                <up-row customStyle="margin-bottom: 10px">
                    <up-col span="4">
                        <view class="demo-layout bg-purple"></view>
                    </up-col>
                    <up-col span="4">
                        <view class="demo-layout bg-purple-light"></view>
                    </up-col>
                    <up-col span="4">
                        <view class="demo-layout bg-purple-dark"></view>
                    </up-col>
                </up-row>
                <up-row justify="space-between">
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
            </view>
        </view>
    </view>
</template>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 分栏间隔

通过设置`row`组件的`gutter`参数，来指定每一栏之间的间隔(最终表现为左边内边距各为gutter/2)，默认间隔为0

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            gutter="10"
    >
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
</view>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 混合布局

通过指定`col`组件的`span`属性，指定不同的值，达到不同的比例

```vue
<view class="u-demo-block__content">
    <up-row
        justify="space-between"
        gutter="10"
    >
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
</view>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 分栏偏移

通过指定`col`组件的`offset`属性可以指定分栏偏移的栏数。

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            customStyle="margin-bottom: 10px"
    >
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
    <up-row>
        <up-col span="3">
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
</view>
```

#### 对齐方式

通过`row`组件的`justify`来对分栏进行灵活的对齐，
可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)，
其最终的表现类似于css的`justify-content`属性。

**注意**：由于持微信小程序编译后的特殊结构，此方式不支持微信小程序。

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            customStyle="margin-bottom: 10px"
    >
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
    <up-row>
        <up-col span="3">
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
</view>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/layout.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`col`组件的`span`设置需要分栏的比例

```vue
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">基础使用</text>
            <view class="u-demo-block__content">
                <up-row customStyle="margin-bottom: 10px">
                    <up-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </up-col>
                    <up-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </up-col>
                </up-row>
                <up-row customStyle="margin-bottom: 10px">
                    <up-col span="4">
                        <view class="demo-layout bg-purple"></view>
                    </up-col>
                    <up-col span="4">
                        <view class="demo-layout bg-purple-light"></view>
                    </up-col>
                    <up-col span="4">
                        <view class="demo-layout bg-purple-dark"></view>
                    </up-col>
                </up-row>
                <up-row justify="space-between">
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
            </view>
        </view>
    </view>
</template>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 分栏间隔

通过设置`row`组件的`gutter`参数，来指定每一栏之间的间隔(最终表现为左边内边距各为gutter/2)，默认间隔为0

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            gutter="10"
    >
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
</view>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 混合布局

通过指定`col`组件的`span`属性，指定不同的值，达到不同的比例

```vue
<view class="u-demo-block__content">
    <up-row
        justify="space-between"
        gutter="10"
    >
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
</view>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
```

#### 分栏偏移

通过指定`col`组件的`offset`属性可以指定分栏偏移的栏数。

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            customStyle="margin-bottom: 10px"
    >
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
    <up-row>
        <up-col span="3">
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
                offset="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
</view>
```

#### 对齐方式

通过`row`组件的`justify`来对分栏进行灵活的对齐，
可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)，
其最终的表现类似于css的`justify-content`属性。

**注意**：由于持微信小程序编译后的特殊结构，此方式不支持微信小程序。

```vue
<view class="u-demo-block__content">
    <up-row
            justify="space-between"
            customStyle="margin-bottom: 10px"
    >
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
    <up-row>
        <up-col span="3">
            <view class="demo-layout bg-purple-light"></view>
        </up-col>
        <up-col
                span="3"
        >
            <view class="demo-layout bg-purple"></view>
        </up-col>
    </up-row>
</view>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/layout.md`</small>

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

