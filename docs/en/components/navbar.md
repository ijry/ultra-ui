---
title: Navbar
description: Replaces the system nav bar, handling status-bar height and back navigation.
generated: true
---

# Navbar

Replaces the system nav bar, handling status-bar height and back navigation.

<PlatformBadges component="navbar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNavbar
import net.lingyun.ultraui.android.components.UPNavbarProps

DemoSection("导航栏") { UPNavbar(UPNavbarProps(title = "订单详情"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNavbar, UPNavbarProps } from '@lingyun/ultra-ui-hos';

UPNavbar({ props: new UPNavbarProps({ title: '订单详情', leftText: '返回', rightText: '更多', border: true, autoBack: true, navigationAdapter: this.adapter(), onLeftClick: (): void => { this.message = '先收到左侧点击回调'; }, onRightClick: (): void => { this.message = '右侧点击'; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/NavbarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNavbar(
  key: const ValueKey('navbar-ios-page-navbar'),
  mode: 'ios',
  title: '设置',
  scrollTop: _scrollTop,
  autoBack: true,
  rightIcon: 'search',
  safeAreaInsetTop: false,
  fixed: false,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/navbar_ios_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNavbar } from 'ultra-ui-rn';

<UPNavbar
  fixed={false}
  leftText="返回"
  rightIcon="map"
  safeAreaInsetTop={false}
  title="个人中心"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/NavbarDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPNavbar } from '@ultra-ui'

<UPNavbar safeAreaInsetTop={false} title='个人中心' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/navbar/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-navbar
    title="导航栏"
    safeAreaInsetTop
    fixed
    placeholder
    :autoBack="true"
>
</up-navbar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/navbar/navbar.nvue`</small>

</template>

<template #uniappx>

```vue
<up-navbar
    title="导航栏"
    safeAreaInsetTop
    fixed
    placeholder
    :autoBack="true"
>
</up-navbar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/navbar/navbar.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-navbar>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `safeAreaInsetTop` | 是否开启顶部安全区适配 | `Boolean` | `true` |
| `placeholder` | 固定在顶部时，是否生成一个等高元素，以防止塌陷 | `Boolean` | `false` |
| `fixed` | 是否固定在顶部 | `Boolean` | `true` |
| `border` | 是否显示下边框 | `Boolean` | `false` |
| `leftIcon` | 左边的图标 | `String` | `'arrow-left'` |
| `leftText` | 左边的提示文字 | `String` | `''` |
| `rightText` | 左右的提示文字 | `String` | `''` |
| `rightIcon` | 右边的图标 | `String` | `''` |
| `title` | 标题 | `String / Number` | `''` |
| `titleColor` | 标题颜色 | `String` | `''` |
| `bgColor` | 背景颜色 | `String` | `''` |
| `statusBarBgColor` | 状态栏背景颜色 不写会使用背景颜色bgColor | `String` | `—` |
| `titleWidth` | 标题的宽度 | `String / Number` | `'400rpx'` |
| `height` | 导航栏高度 | `String / Number` | `'44px'` |
| `leftIconSize` | 左侧返回图标的大小 | `String / Number` | `20` |
| `leftIconColor` | 左侧返回图标的颜色 | `String` | `''` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `false` |
| `titleStyle` | 标题的样式，对象或字符串 | `String / Object` | `''` |
| `mode` | 导航栏模式，default-常规，ios-大标题磨砂模式 | `String` | `'default'` |
| `scrollTop` | 页面滚动距离，仅 ios 模式使用，由页面 onPageScroll 传入 | `String / Number` | `0` |

#### Events

| Event |
| --- |
| `leftClick` |
| `rightClick` |

#### Slots

| Slot |
| --- |
| `center` |
| `left` |
| `right` |

### `<up-navbar-mini>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `safeAreaInsetTop` | 是否开启顶部安全区适配 | `Boolean` | `—` |
| `fixed` | 是否固定在顶部 | `Boolean` | `—` |
| `leftIcon` | 左边的图标 | `String` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `height` | 导航栏高度 | `String / Number` | `—` |
| `iconSize` | 图标的大小 | `String / Number` | `—` |
| `iconColor` | 图标的颜色 | `String` | `—` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `—` |
| `homeUrl` | 首页路径 | `String` | `—` |

#### Events

| Event |
| --- |
| `homeClick` |
| `leftClick` |

#### Slots

| Slot |
| --- |
| `center` |
| `left` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNavbar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNavbar` | `ultra-ui/src/main/ets/components/UPNavbar.ets` |
| Flutter · Dart | `UPNavbar` | `packages/ultra_ui/lib/src/widgets/up_navbar.dart` |
| React Native · TypeScript | `UPNavbar` | `src/components/navbar` |
| Taro · React + TypeScript | `UPNavbar` | `src/ultra-ui/components/up-navbar` |
| uni-app · Vue 3 | `up-navbar` | `src/uni_modules/uview-plus/components/u-navbar` |
| uni-app-x · UTS / UVUE | `up-navbar` | `uni_modules/uview-ultra/components/up-navbar` |

