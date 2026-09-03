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

#### 右侧弹出

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

#### 左侧弹出及强制定位

```dart
UPPopover(
  key: const ValueKey('popover-page-left'),
  color: '#fff',
  bgColor: '#333',
  popupBgColor: '#333',
  direction: 'left',
  forcePosition: const <String, String>{
    'right': '108px',
    'top': '0px',
  },
  trigger: UPButton(
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

#### 顶部弹出

placement="top"

```tsx
import { UPPopover } from '@ultra-ui'

<UPPopover placement='top' content='这是顶部弹出的气泡内容'>
  <View className='popover-demo__trigger'>上</View>
</UPPopover>
```

#### 底部弹出

placement="bottom"

```tsx
<UPPopover placement='bottom' content='这是底部弹出的气泡内容'>
  <View className='popover-demo__trigger'>下</View>
</UPPopover>
```

#### 左侧弹出

placement="left"

```tsx
<UPPopover placement='left' content='这是左侧弹出的气泡内容'>
  <View className='popover-demo__trigger'>左</View>
</UPPopover>
```

#### 右侧弹出

placement="right"

```tsx
<UPPopover placement='right' content='这是右侧弹出的气泡内容'>
  <View className='popover-demo__trigger'>右</View>
</UPPopover>
```

#### 对齐变体

top-start / bottom-end 等

```tsx
<UPPopover placement='top-start' content='top-start 对齐触发元素左缘'>
  <View className='popover-demo__trigger'>左上</View>
</UPPopover>
```

#### 自定义样式

bgColor / color / offset

```tsx
<UPPopover
  placement='top'
  content='自定义主题色的气泡'
  bgColor='#3c9cff'
  color='#ffffff'
  offset={12}
>
  <View className='popover-demo__trigger'>主题</View>
</UPPopover>
```

#### 禁用

disabled 不响应点击

```tsx
<UPPopover placement='top' content='disabled 时不会弹出' disabled>
  <View className='popover-demo__trigger popover-demo__trigger--disabled'>禁用</View>
</UPPopover>
```

#### 回调

onOpen / onClose

```tsx
<UPPopover
  placement='top'
  content='监听 onOpen / onClose'
  onOpen={() => console.log('popover open')}
  onClose={() => console.log('popover close')}
>
  <View className='popover-demo__trigger'>事件</View>
</UPPopover>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/popover/index.tsx`</small>

</template>

<template #uniapp>

#### 右侧弹出

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

#### 左侧弹出及强制定位

```vue
<up-popover
    color="#fff"
    bgColor="#333"
    popupBgColor="#333"
    :forcePosition="{right: '108px', top: '0px'}"
    direction="left"
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

<template #uniappx>

#### 右侧弹出

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

#### 左侧弹出及强制定位

```vue
<up-popover
    color="#fff"
    bgColor="#333"
    popupBgColor="#333"
    :forcePosition="{right: '108px', top: '0px'}"
    direction="left"
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
| uni-app · Vue 3 | `up-popover` | `uni_modules/uview-ultra/components/up-popover` |
| uni-app-x · UTS / UVUE | `up-popover` | `uni_modules/uview-ultra/components/up-popover` |

