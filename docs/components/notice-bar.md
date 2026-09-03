---
title: Notice bar 滚动通知
description: 横向滚动或纵向轮播的公告栏。
generated: true
---

# Notice bar 滚动通知

横向滚动或纵向轮播的公告栏。

<PlatformBadges component="notice-bar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNoticeBar
import net.lingyun.ultraui.android.components.UPNoticeBarProps

UPNoticeBar(
    props = UPNoticeBarProps(
        text = listOf("系统将于今晚维护", "请提前保存数据"),
        mode = "closable",
    ),
    onClick = { eventText = "滚动通知：点击第 $it 条" },
    onClose = { eventText = "滚动通知：关闭" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNoticeBar, UPNoticeBarProps } from '@lingyun/ultra-ui-hos';

UPNoticeBar({ props: new UPNoticeBarProps({ show: this.show, text: ['HarmonyOS NEXT 原生实现', '无网络静态示例'], mode: 'closable', url: 'local://notice', linkType: 'local', onClick: (): void => { this.feedback = '公告已点击'; }, onShowChange: (value: boolean): void => { this.show = value; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/NoticeBarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNoticeBar(
  text: _text1,
  fontSize: '30px',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/notice_bar_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNoticeBar } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPNoticeBar } from '@ultra-ui'

<UPNoticeBar
  text='ultra-ui 是 uview-plus 的 Taro + React 复刻版，前缀 up-，全端兼容。'
  mode='horizontal'
  icon
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/notice-bar/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-notice-bar
    fontSize="30px"
    :text="text1"
></up-notice-bar>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/noticeBar/noticeBar.nvue`</small>

</template>

<template #uniappx>

```vue
<up-notice-bar
    :text="text1"
></up-notice-bar>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/noticeBar/noticeBar.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-notice-bar>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 显示的内容，数组 | `Array / String` | `[]` |
| `direction` | 通告滚动模式，row-横向滚动，column-竖向滚动 | `String` | `'row'` |
| `step` | direction = row时，是否使用步进形式滚动 | `Boolean` | `false` |
| `icon` | 是否显示左侧的音量图标 | `String` | `'volume'` |
| `mode` | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | `String` | `''` |
| `color` | 文字颜色，各图标也会使用文字颜色 | `String` | `'#f9ae3d'` |
| `bgColor` | 背景颜色 | `String` | `'#fdf6ec'` |
| `speed` | 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度 | `String / Number` | `80` |
| `fontSize` | 字体大小 | `String / Number` | `14` |
| `duration` | 滚动一个周期的时间长，单位ms | `String / Number` | `2000` |
| `disableTouch` | 是否禁止用手滑动切换 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序 | `Boolean` | `true` |
| `url` | 跳转的页面路径 | `String` | `''` |
| `linkType` | 页面跳转的类型 | `String` | `'navigateTo'` |

#### 事件

| 事件名 |
| --- |
| `click` |
| `close` |

### `<up-row-notice>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 显示的内容，字符串 | `String` | `''` |
| `icon` | 是否显示左侧的音量图标 | `String` | `'volume'` |
| `mode` | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | `String` | `''` |
| `color` | 文字颜色，各图标也会使用文字颜色 | `String` | `'#f9ae3d'` |
| `bgColor` | 背景颜色 | `String` | `'#fdf6ec'` |
| `fontSize` | 字体大小，单位px | `String / Number` | `14` |
| `speed` | 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度 | `String / Number` | `80` |

#### 事件

| 事件名 |
| --- |
| `click` |
| `close` |

#### 插槽

| 插槽名 |
| --- |
| `icon` |

### `<up-column-notice>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 显示的内容，字符串 | `Array` | `''` |
| `icon` | 是否显示左侧的音量图标 | `String` | `'volume'` |
| `mode` | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | `String` | `''` |
| `color` | 文字颜色，各图标也会使用文字颜色 | `String` | `'#f9ae3d'` |
| `bgColor` | 背景颜色 | `String` | `'#fdf6ec'` |
| `fontSize` | 字体大小，单位px | `String / Number` | `14` |
| `speed` | 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度 | `String / Number` | `80` |
| `step` | direction = row时，是否使用步进形式滚动 | `Boolean` | `false` |
| `duration` | 滚动一个周期的时间长，单位ms | `String / Number` | `1500` |
| `disableTouch` | 是否禁止用手滑动切换 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序 | `Boolean` | `true` |
| `justifyContent` | — | `String` | `'flex-start'` |

#### 事件

| 事件名 |
| --- |
| `click` |
| `close` |

#### 插槽

| 插槽名 |
| --- |
| `icon` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNoticeBar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNoticeBar.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNoticeBar` | `ultra-ui/src/main/ets/components/UPNoticeBar.ets` |
| Flutter · Dart | `UPNoticeBar` | `packages/ultra_ui/lib/src/widgets/up_notice_bar.dart` |
| React Native · TypeScript | `UPNoticeBar` | `src/components/notice-bar` |
| Taro · React + TypeScript | `UPNoticeBar` | `src/ultra-ui/components/up-notice-bar` |
| uni-app · Vue 3 | `up-notice-bar` | `src/uni_modules/uview-plus/components/u-notice-bar` |
| uni-app-x · UTS / UVUE | `up-notice-bar` | `uni_modules/uview-ultra/components/up-notice-bar` |

