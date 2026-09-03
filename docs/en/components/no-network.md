---
title: No network
description: A full-screen offline notice with retry and system-settings shortcuts.
generated: true
---

# No network

A full-screen offline notice with retry and system-settings shortcuts.

<PlatformBadges component="no-network" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/no_network_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNoNetwork } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPNoNetwork } from '@ultra-ui'

<UPNoNetwork force tips='网络不可用，请检查网络设置' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/no-network/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-no-network
    @disconnected="disconnected"
    @connected="connected"
    @retry="retry"
></up-no-network>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/noNetwork/noNetwork.nvue`</small>

</template>

<template #uniappx>

```vue
<up-no-network
    @disconnected="disconnected"
    @connected="connected"
    @retry="retry"
></up-no-network>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/noNetwork/noNetwork.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `tips` | 页面文字提示 | `String` | `—` |
| `zIndex` | 一个z-index值，用于设置没有网络这个组件的层次，因为页面可能会有其他定位的元素层级过高，导致此组件被覆盖 | `String / Number` | `—` |
| `image` | image 没有网络的图片提示 | `String` | `—` |

### Events

| Event |
| --- |
| `connected` |
| `disconnected` |
| `retry` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPNoNetwork` | `packages/ultra_ui/lib/src/widgets/up_no_network.dart` |
| React Native · TypeScript | `UPNoNetwork` | `src/components/no-network` |
| Taro · React + TypeScript | `UPNoNetwork` | `src/ultra-ui/components/up-no-network` |
| uni-app · Vue 3 | `up-no-network` | `src/uni_modules/uview-plus/components/u-no-network` |
| uni-app-x · UTS / UVUE | `up-no-network` | `uni_modules/uview-ultra/components/up-no-network` |

