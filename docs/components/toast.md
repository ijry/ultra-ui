---
title: Toast 消息提示
description: 轻量的全局提示，支持成功、失败、加载等主题与完成回调。
generated: true
---

# Toast 消息提示

轻量的全局提示，支持成功、失败、加载等主题与完成回调。

<PlatformBadges component="toast" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPToast.show(message: "这是一条默认消息")
```

<small>示例来源 `ultra-ui-ios/Demo/ToastDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPToast
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

```typescript
import { UPToastHost } from '@lingyun/ultra-ui-hos';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPToast.show(
  context,
  message: preset.message,
  type: preset.hideIcon ? '' : preset.type,
  icon: preset.icon,
  loading: preset.loading,
  overlay: true,
  position: preset.position,
  duration: 2000,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/toast_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPToast } from 'ultra-ui-rn';

<UPToast ref={toast} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/ToastDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPToast } from '@ultra-ui'

<UPToast
  show={inlineShow}
  message='我是组件式 UPToast'
  type='primary'
  icon={true}
  position='center'
  duration={-1}
  onChangeShow={setInlineShow}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/toast/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-toast ref="uToastRef"></up-toast>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/toast/toast.nvue`</small>

</template>

<template #uniappx>

```vue
<up-toast ref="upToastRef"></up-toast>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/toast/toast.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPToast` | `UltraUI/Sources/UltraUI/Components/UPToast.swift` |
| Android · Jetpack Compose | `UPToast` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPToast.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPToastHost` | `ultra-ui/src/main/ets/components/UPToastHost.ets` |
| Flutter · Dart | `UPToast` | `packages/ultra_ui/lib/src/widgets/up_toast.dart` |
| React Native · TypeScript | `UPToast` | `src/components/toast` |
| Taro · React + TypeScript | `UPToast` | `src/ultra-ui/components/up-toast` |
| uni-app · Vue 3 | `up-toast` | `src/uni_modules/uview-plus/components/u-toast` |
| uni-app-x · UTS / UVUE | `up-toast` | `uni_modules/uview-ultra/components/up-toast` |

