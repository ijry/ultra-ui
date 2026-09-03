---
title: No network 无网络提示
description: 断网时的全屏提示，提供重试与跳转系统设置入口。
generated: true
---

# No network 无网络提示

断网时的全屏提示，提供重试与跳转系统设置入口。

<PlatformBadges component="no-network" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNoNetwork(
  key: _networkKey,
  show: false,
  onDisconnected: () {
    if (mounted) {
      setState(() => _disconnectedCount++);
    }
  },
  onConnected: () {
    if (mounted) {
      setState(() => _connectedCount++);
    }
  },
  onRetry: () {
    if (mounted) {
      setState(() => _retryCount++);
    }
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/no_network_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNoNetwork } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPNoNetwork } from '@ultra-ui'

<UPNoNetwork force tips='网络不可用，请检查网络设置' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/no-network/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-no-network
    @disconnected="disconnected"
    @connected="connected"
    @retry="retry"
></up-no-network>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/noNetwork/noNetwork.nvue`</small>

</template>

<template #uniappx>

```vue
<up-no-network
    @disconnected="disconnected"
    @connected="connected"
    @retry="retry"
></up-no-network>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/noNetwork/noNetwork.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tips` | 页面文字提示 | `String` | `—` |
| `zIndex` | 一个z-index值，用于设置没有网络这个组件的层次，因为页面可能会有其他定位的元素层级过高，导致此组件被覆盖 | `String / Number` | `—` |
| `image` | image 没有网络的图片提示 | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `connected` |
| `disconnected` |
| `retry` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPNoNetwork` | `packages/ultra_ui/lib/src/widgets/up_no_network.dart` |
| React Native · TypeScript | `UPNoNetwork` | `src/components/no-network` |
| Taro · React + TypeScript | `UPNoNetwork` | `src/ultra-ui/components/up-no-network` |
| uni-app · Vue 3 | `up-no-network` | `src/uni_modules/uview-plus/components/u-no-network` |
| uni-app-x · UTS / UVUE | `up-no-network` | `uni_modules/uview-ultra/components/up-no-network` |

