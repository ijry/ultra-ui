---
title: Notice bar
description: An announcement bar that scrolls horizontally or rotates vertically.
generated: true
---

# Notice bar

An announcement bar that scrolls horizontally or rotates vertically.

<PlatformBadges component="notice-bar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNoticeBar, UPNoticeBarProps } from '@lingyun/ultra-ui-hos';

UPNoticeBar({ props: new UPNoticeBarProps({ show: this.show, text: ['HarmonyOS NEXT 原生实现', '无网络静态示例'], mode: 'closable', url: 'local://notice', linkType: 'local', onClick: (): void => { this.feedback = '公告已点击'; }, onShowChange: (value: boolean): void => { this.show = value; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/NoticeBarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNoticeBar(
  text: _text1,
  fontSize: '30px',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/notice_bar_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNoticeBar } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-taro/src/pages/components/notice-bar/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-notice-bar
    fontSize="30px"
    :text="text1"
></up-notice-bar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/noticeBar/noticeBar.nvue`</small>

</template>

<template #uniappx>

```vue
<up-notice-bar
    :text="text1"
></up-notice-bar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/noticeBar/noticeBar.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-notice-bar>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `click` |
| `close` |

### `<up-row-notice>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `text` | 显示的内容，字符串 | `String` | `''` |
| `icon` | 是否显示左侧的音量图标 | `String` | `'volume'` |
| `mode` | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | `String` | `''` |
| `color` | 文字颜色，各图标也会使用文字颜色 | `String` | `'#f9ae3d'` |
| `bgColor` | 背景颜色 | `String` | `'#fdf6ec'` |
| `fontSize` | 字体大小，单位px | `String / Number` | `14` |
| `speed` | 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度 | `String / Number` | `80` |

#### Events

| Event |
| --- |
| `click` |
| `close` |

#### Slots

| Slot |
| --- |
| `icon` |

### `<up-column-notice>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `click` |
| `close` |

#### Slots

| Slot |
| --- |
| `icon` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNoticeBar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNoticeBar.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNoticeBar` | `ultra-ui/src/main/ets/components/UPNoticeBar.ets` |
| Flutter · Dart | `UPNoticeBar` | `packages/ultra_ui/lib/src/widgets/up_notice_bar.dart` |
| React Native · TypeScript | `UPNoticeBar` | `src/components/notice-bar` |
| Taro · React + TypeScript | `UPNoticeBar` | `src/ultra-ui/components/up-notice-bar` |
| uni-app · Vue 3 | `up-notice-bar` | `src/uni_modules/uview-plus/components/u-notice-bar` |
| uni-app-x · UTS / UVUE | `up-notice-bar` | `uni_modules/uview-ultra/components/up-notice-bar` |

