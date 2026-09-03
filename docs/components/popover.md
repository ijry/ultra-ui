---
title: Popover 气泡卡片
description: 锚定在元素旁的气泡面板，可放入菜单或任意内容。
generated: true
---

# Popover 气泡卡片

锚定在元素旁的气泡面板，可放入菜单或任意内容。

<PlatformBadges component="popover" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPopover
import net.lingyun.ultraui.android.components.UPPopoverProps

DemoSection("气泡弹出") { UPPopover(UPPopoverProps(text = "气泡内容"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPopover(
  key: const ValueKey('popover-page-right'),
  color: '#333',
  bgColor: '#e3e4e6',
  popupBgColor: '#f7f7f7',
  direction: 'right',
  onOpen: _recordOpen,
  onClose: _recordClose,
  trigger: UPButton(
    key: const ValueKey('popover-page-right-trigger'),
    type: 'primary',
    size: 'small',
    text: '点击打开',
    stop: false,
  ),
  content: _content(),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/popover_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPopover } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPPopover } from '@ultra-ui'

<UPPopover placement='top' content='这是顶部弹出的气泡内容'>
  <View className='popover-demo__trigger'>上</View>
</UPPopover>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/popover/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-popover
    :color="upThemeVar('--up-main-color', '#333')"
    :bgColor="upThemeVar('--up-bg-color', '#e3e4e6')"
    :popupBgColor="upThemeVar('--up-card-bg-color', '#f7f7f7')"
    direction="right"
>
    <template #trigger>
        <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
    </template>
    <template #content>
        <view style="padding: 6px 12px;">自定义内容</view>
    </template>
</up-popover>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/popover/popover.vue`</small>

</template>

<template #uniappx>

```vue
<up-popover
    color="#333"
    bgColor="#e3e4e6"
    popupBgColor="#f7f7f7"
    direction="right"
>
    <template #trigger>
        <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
    </template>
    <template #content>
        <view style="padding: 6px 12px;">自定义内容</view>
    </template>
</up-popover>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/popover/popover.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 显示的文字内容 | `String / Number` | `—` |
| `color` | 文字颜色 | `String` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `popupBgColor` | 弹出框背景颜色 | `String` | `—` |
| `placement` | 弹出框位置 | `String` | `—` |
| `triggerMode` | 触发方式 | `String` | `—` |
| `show` | 是否显示 (manual模式下使用) | `Boolean` | `—` |
| `zIndex` | z-index值 | `Number / String` | `—` |
| `forcePosition` | 强制定位 | `Object` | `—` |
| `direction` | 弹出方向 | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `click` |
| `close` |
| `open` |

### 插槽

| 插槽名 |
| --- |
| `content` |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPopover` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPPopover` | `packages/ultra_ui/lib/src/widgets/up_popover.dart` |
| React Native · TypeScript | `UPPopover` | `src/components/popover` |
| Taro · React + TypeScript | `UPPopover` | `src/ultra-ui/components/up-popover` |
| uni-app · Vue 3 | `up-popover` | `src/uni_modules/uview-plus/components/u-popover` |
| uni-app-x · UTS / UVUE | `up-popover` | `uni_modules/uview-ultra/components/up-popover` |

