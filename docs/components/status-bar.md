---
title: Status bar 状态栏占位
description: 撑出与系统状态栏等高的占位空间，配合自定义导航栏使用。
generated: true
---

# Status bar 状态栏占位

撑出与系统状态栏等高的占位空间，配合自定义导航栏使用。

<PlatformBadges component="status-bar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPStatusBar

DemoSection("状态栏") { UPStatusBar()
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPStatusBar, UPStatusBarProps } from '@lingyun/ultra-ui-hos';

UPStatusBar({ props: new UPStatusBarProps({ bgColor: '#2979ff', onHeightChange: (height: number): void => { this.statusBarHeight = height; } }) })
```

```typescript
UPStatusBar({ props: new UPStatusBarProps({ height: 18, bgColor: '#ecf5ff' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/StatusBarDemo.ets`</small>

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

```tsx
import { UPStatusBar } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPStatusBar } from '@ultra-ui'
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

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bgColor` | — | `String` | `'transparent'` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPStatusBar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPStatusBar` | `ultra-ui/src/main/ets/components/UPStatusBar.ets` |
| Flutter · Dart | `UPStatusBar` | `packages/ultra_ui/lib/src/widgets/up_status_bar.dart` |
| React Native · TypeScript | `UPStatusBar` | `src/components/status-bar` |
| Taro · React + TypeScript | `UPStatusBar` | `src/ultra-ui/components/up-status-bar` |
| uni-app · Vue 3 | `up-status-bar` | `uni_modules/uview-ultra/components/up-status-bar` |
| uni-app-x · UTS / UVUE | `up-status-bar` | `uni_modules/uview-ultra/components/up-status-bar` |

