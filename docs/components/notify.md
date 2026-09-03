---
title: Notify 顶部通知
description: 从屏幕顶部滑入的通知条，适合非阻塞的结果反馈。
generated: true
---

# Notify 顶部通知

从屏幕顶部滑入的通知条，适合非阻塞的结果反馈。

<PlatformBadges component="notify" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

### 通知

```kotlin
import net.lingyun.ultraui.android.components.UPNotify
import net.lingyun.ultraui.android.components.UPNotifyProps

UPNotify(
    props = UPNotifyProps(message = "保存成功", duration = -1),
    onClick = { eventText = "通知：点击" },
    onClose = {
        notifyVisible = false
        eventText = "通知：关闭"
    },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNotify, UPNotifyProps } from '@lingyun/ultra-ui-hos';

UPNotify({ props: new UPNotifyProps({ show: this.show, message: '这是由页面控制 show 的本地通知。', type: 'primary', onShowChange: (value: boolean): void => { this.show = value; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/NotifyDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNotify(key: _notifyKey)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/notify_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNotify } from 'ultra-ui-rn';

<UPNotify ref={notify} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/NotifyDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPNotify } from '@ultra-ui'

<UPNotify
  show={inlineShow}
  type='primary'
  message='我是组件式 UPNotify'
  duration={0}
  icon={
    <UPIcon
      name='bell'
      color='#ffffff'
      size={19}
      customStyle={{ marginRight: '4px' }}
    />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/notify/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-notify ref="upNotifyRef"></up-notify>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/notify/notify.uvue`</small>

</template>

<template #uniappx>

```vue
<up-notify ref="upNotifyRef"></up-notify>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/notify/notify.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `top` | 到顶部的距离 | `String / Number` | `0` |
| `type` | 是否展示组件 show: { type: Boolean, default: () =&gt; defProps.notify.show }, type主题，primary，success，warning，error | `String` | `'primary'` |
| `color` | 字体颜色 | `String` | `'#ffffff'` |
| `bgColor` | 背景颜色 | `String` | `''` |
| `message` | 展示的文字内容 | `String` | `''` |
| `duration` | 展示时长，为0时不消失，单位ms | `String / Number` | `3000` |
| `fontSize` | 字体大小 | `String / Number` | `15` |
| `safeAreaInsetTop` | 是否留出顶部安全距离（状态栏高度） | `Boolean` | `false` |

### 插槽

| 插槽名 |
| --- |
| `icon` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNotify` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNotify.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNotify` | `ultra-ui/src/main/ets/components/UPNotify.ets` |
| Flutter · Dart | `UPNotify` | `packages/ultra_ui/lib/src/widgets/up_notify.dart` |
| React Native · TypeScript | `UPNotify` | `src/components/notify` |
| Taro · React + TypeScript | `UPNotify` | `src/ultra-ui/components/up-notify` |
| uni-app · Vue 3 | `up-notify` | `uni_modules/uview-ultra/components/up-notify` |
| uni-app-x · UTS / UVUE | `up-notify` | `uni_modules/uview-ultra/components/up-notify` |

