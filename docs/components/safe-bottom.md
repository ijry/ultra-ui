---
title: Safe bottom 底部安全区
description: 为 iPhone 等带 Home 指示条的机型撑出底部安全距离。
generated: true
---

# Safe bottom 底部安全区

为 iPhone 等带 Home 指示条的机型撑出底部安全距离。

<PlatformBadges component="safe-bottom" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSafeBottom

DemoSection("底部安全区") { BasicText("内容"); UPSafeBottom()
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSafeBottom, UPSafeBottomProps } from '@lingyun/ultra-ui-hos';

UPSafeBottom({ props: new UPSafeBottomProps({ safeAreaInsetBottom: true }) }) { Text('safeAreaInsetBottom=true').fontSize(12).fontColor('#909399') }
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SafeBottomDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

### 底部安全区域占位

```tsx
import { UPSafeBottom } from 'ultra-ui-rn';

<UPSafeBottom />
```

### 自定义背景色

```tsx
<UPSafeBottom customStyle={{ backgroundColor: '#333' }} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/SafeBottomDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSafeBottom } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

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
| Android · Jetpack Compose | `UPSafeBottom` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSafeBottom` | `ultra-ui/src/main/ets/components/UPSafeBottom.ets` |
| Flutter · Dart | `UPSafeBottom` | `packages/ultra_ui/lib/src/widgets/up_safe_bottom.dart` |
| React Native · TypeScript | `UPSafeBottom` | `src/components/safe-bottom` |
| Taro · React + TypeScript | `UPSafeBottom` | `src/ultra-ui/components/up-safe-bottom` |
| uni-app · Vue 3 | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |
| uni-app-x · UTS / UVUE | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |

