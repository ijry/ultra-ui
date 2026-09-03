---
title: Navbar 自定义导航栏
description: 替代系统导航栏，自动处理状态栏高度与返回逻辑。
generated: true
---

# Navbar 自定义导航栏

替代系统导航栏，自动处理状态栏高度与返回逻辑。

<PlatformBadges component="navbar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNavbar
import net.lingyun.ultraui.android.components.UPNavbarProps

DemoSection("导航栏") { UPNavbar(UPNavbarProps(title = "订单详情"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNavbar, UPNavbarProps } from '@lingyun/ultra-ui-hos';

UPNavbar({ props: new UPNavbarProps({ title: '订单详情', leftText: '返回', rightText: '更多', border: true, autoBack: true, navigationAdapter: this.adapter(), onLeftClick: (): void => { this.message = '先收到左侧点击回调'; }, onRightClick: (): void => { this.message = '右侧点击'; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/NavbarDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/navbar_ios_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/NavbarDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

仅设置 title，默认 fixed={false}

```tsx
import { UPNavbar } from '@ultra-ui'

<UPNavbar safeAreaInsetTop={false} title='个人中心' />
```

### 下边框

border 属性

```tsx
<UPNavbar safeAreaInsetTop={false} border title='带下边框' />
```

### 自定义颜色

bgColor / titleColor，bgColor 支持渐变

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  title='渐变导航栏'
  bgColor='linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))'
  titleColor='#ffffff'
  leftIconColor='#ffffff'
/>
```

### 高度与标题样式

height / titleStyle

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  border
  title='高度 60px'
  height='60px'
  titleStyle={{ fontSize: '18px', fontWeight: 'bold' }}
/>
```

### 标题宽度

titleWidth 限制宽度，超出以省略号显示

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  border
  title='这是一个非常非常长的导航栏标题会被截断'
  titleWidth='160px'
/>
```

### 状态栏背景色

safeAreaInsetTop 开启后，statusBarBgColor 可单独设置状态栏背景

```tsx
<UPNavbar
  safeAreaInsetTop
  title='状态栏单独着色'
  bgColor='#ffffff'
  statusBarBgColor='#3c9cff'
  border
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/navbar/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/navbar/navbar.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/navbar/navbar.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-navbar>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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
| `bgColor` | 背景颜色 | `String` | `'var(--up-navbar-bg-color, #ffffff)'` |
| `titleWidth` | 标题的宽度 | `String / Number` | `'400rpx'` |
| `height` | 导航栏高度 | `String / Number` | `'44px'` |
| `leftIconSize` | 左侧返回图标的大小 | `String / Number` | `20` |
| `leftIconColor` | 左侧返回图标的颜色 | `String` | `'var(--up-main-color, #303133)'` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `false` |
| `titleStyle` | 标题的样式，对象或字符串 | `String / Object` | `''` |
| `mode` | 导航栏模式，default-常规，ios-大标题模式 | `String` | `'default'` |
| `scrollTop` | 页面滚动距离，仅 ios 模式使用，由页面 onPageScroll 传入 | `String / Number` | `0` |

#### 事件

| 事件名 |
| --- |
| `leftClick` |
| `rightClick` |

#### 插槽

| 插槽名 |
| --- |
| `center` |
| `left` |
| `right` |

### `<up-navbar-mini>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `safeAreaInsetTop` | 是否开启顶部安全区适配 | `Boolean` | `true` |
| `fixed` | 是否固定在顶部 | `Boolean` | `true` |
| `leftIcon` | 左边的图标 | `String` | `'arrow-leftward'` |
| `bgColor` | 背景颜色 | `String` | `'rgba(0,0,0,.15)'` |
| `height` | 导航栏高度 | `String / Number` | `'32px'` |
| `iconSize` | 图标的大小 | `String / Number` | `'20px'` |
| `iconColor` | 图标的颜色 | `String` | `'#fff'` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `true` |
| `homeUrl` | 首页路径 | `String` | `''` |

#### 事件

| 事件名 |
| --- |
| `homeClick` |
| `leftClick` |

#### 插槽

| 插槽名 |
| --- |
| `center` |
| `left` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNavbar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNavbar` | `ultra-ui/src/main/ets/components/UPNavbar.ets` |
| Flutter · Dart | `UPNavbar` | `packages/ultra_ui/lib/src/widgets/up_navbar.dart` |
| React Native · TypeScript | `UPNavbar` | `src/components/navbar` |
| Taro · React + TypeScript | `UPNavbar` | `src/ultra-ui/components/up-navbar` |
| uni-app · Vue 3 | `up-navbar` | `uni_modules/uview-ultra/components/up-navbar` |
| uni-app-x · UTS / UVUE | `up-navbar` | `uni_modules/uview-ultra/components/up-navbar` |

