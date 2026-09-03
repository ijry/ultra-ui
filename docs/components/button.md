---
title: Button 按钮
description: 最基础的操作单元，内置六种主题、四种尺寸，支持镂空、加载态与渐变色。
generated: true
---

# Button 按钮

最基础的操作单元，内置六种主题、四种尺寸，支持镂空、加载态与渐变色。

<PlatformBadges component="button" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPButton(type: "primary", size: "large", text: "主按钮")
```

<small>示例来源 `ultra-ui-ios/Demo/ButtonDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPButton
import net.lingyun.ultraui.android.components.UPButtonProps

UPButton(
    props = UPButtonProps(text = "主要按钮", type = "primary", shape = "circle"),
    onClick = { eventText = "按钮：点击 primary" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPButton, UPButtonProps } from '@lingyun/ultra-ui-hos';

UPButton({ props: new UPButtonProps({
  text: '主要按钮',
  type: 'primary',
  onClick: (): void => {
    this.click('主要按钮');
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ButtonDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPButton(
  text: '打开上拉菜单',
  type: 'primary',
  onClick: () => setState(() => _showActionSheet = true),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/button_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPButton } from 'ultra-ui-rn';

<UPButton text="成功按钮" size="normal" type="success" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/ButtonDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPButton } from '@ultra-ui'

<UPButton text='info' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/button/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-button
    text="默认按钮"
    size="normal"
    type="info"
    @click="click"
></up-button>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/button/button.nvue`</small>

</template>

<template #uniappx>

```vue
<up-button
    text="默认按钮"
    size="normal"
    type="info"
    @click="click"
></up-button>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/button/button.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hairline` | 是否细边框 | `Boolean` | `false` |
| `type` | 按钮的预置样式，info，primary，error，warning，success | `String` | `'info'` |
| `size` | 按钮尺寸，large，normal，small，mini | `String` | `'normal'` |
| `shape` | 按钮形状，circle（两边为半圆），square（带圆角） | `String` | `'square'` |
| `plain` | 按钮是否镂空 | `Boolean` | `false` |
| `disabled` | 是否禁止状态 | `Boolean` | `false` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `loadingText` | 加载中提示文字 | `String / Number` | `''` |
| `loadingMode` | 加载状态图标类型 | `String` | `'spinner'` |
| `loadingSize` | 加载图标大小 | `String / Number` | `15` |
| `openType` | 开放能力，具体请看uniapp稳定关于button组件部分说明 https://uniapp.dcloud.io/component/button | `String` | `''` |
| `formType` | 用于 &lt;form&gt; 组件，点击分别会触发 &lt;form&gt; 组件的 submit/reset 事件 取值为submit（提交表单），reset（重置表单） | `String` | `''` |
| `appParameter` | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 只微信小程序、QQ小程序有效 | `String` | `''` |
| `hoverStopPropagation` | 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效 | `Boolean` | `true` |
| `lang` | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效 | `String` | `'en'` |
| `sessionFrom` | 会话来源，open-type="contact"时有效。只微信小程序有效 | `String` | `''` |
| `sendMessageTitle` | 会话内消息卡片标题，open-type="contact"时有效 默认当前标题，只微信小程序有效 | `String` | `''` |
| `sendMessagePath` | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 默认当前分享路径，只微信小程序有效 | `String` | `''` |
| `sendMessageImg` | 会话内消息卡片图片，open-type="contact"时有效 默认当前页面截图，只微信小程序有效 | `String` | `''` |
| `showMessageCard` | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示， 用户点击后可以快速发送小程序消息，open-type="contact"时有效 | `Boolean` | `false` |
| `dataName` | 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取 | `String` | `''` |
| `throttleTime` | 节流，一定时间内只能触发一次 | `String / Number` | `0` |
| `hoverStartTime` | 按住后多久出现点击态，单位毫秒 | `String / Number` | `0` |
| `hoverStayTime` | 手指松开后点击态保留时间，单位毫秒 | `String / Number` | `200` |
| `text` | 按钮文字，之所以通过props传入，是因为slot传入的话 nvue中无法控制文字的样式 | `String / Number` | `''` |
| `icon` | 按钮图标 | `String` | `''` |
| `iconColor` | 按钮图标 | `String` | `''` |
| `color` | 按钮颜色，支持传入linear-gradient渐变色 | `String` | `''` |
| `stop` | 停止冒泡 | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `agreeprivacyauthorization` |
| `click` |
| `error` |
| `getphonenumber` |
| `getuserinfo` |
| `launchapp` |
| `opensetting` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPButton` | `UltraUI/Sources/UltraUI/Components/UPButton.swift` |
| Android · Jetpack Compose | `UPButton` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPButton.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPButton` | `ultra-ui/src/main/ets/components/UPButton.ets` |
| Flutter · Dart | `UPButton` | `packages/ultra_ui/lib/src/widgets/up_button.dart` |
| React Native · TypeScript | `UPButton` | `src/components/button` |
| Taro · React + TypeScript | `UPButton` | `src/ultra-ui/components/up-button` |
| uni-app · Vue 3 | `up-button` | `src/uni_modules/uview-plus/components/u-button` |
| uni-app-x · UTS / UVUE | `up-button` | `uni_modules/uview-ultra/components/up-button` |

