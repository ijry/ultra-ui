---
title: No network
description: A full-screen offline notice with retry and system-settings shortcuts.
generated: true
---

# No network

A full-screen offline notice with retry and system-settings shortcuts.

<PlatformBadges component="no-network" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### 占位展示（演示用 force）

force 强制展示，真实场景由网络状态自动显隐

```tsx
import { UPNoNetwork } from '@ultra-ui'

<UPNoNetwork force tips='网络不可用，请检查网络设置' />
```

#### 自定义图标与文案

icon / tips 可覆盖默认占位

```tsx
<UPNoNetwork force icon='error-circle' tips='网络连接已断开' />
```

#### 自定义占位内容

children 完全接管占位渲染

```tsx
<UPNoNetwork force>
  <View className='no-network-demo__custom'>这是自定义占位内容</View>
</UPNoNetwork>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/no-network/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view>
		<up-no-network
			@disconnected="disconnected"
			@connected="connected"
			@retry="retry"
		></up-no-network>
		<view class="up-content">
			<view class="up-content__circle">
				<up-icon
					name="checkbox-mark"
					color="#fff"
					size="30"
				></up-icon>
			</view>
			<text class="up-content__normal">网络正常</text>
		</view>
	</view>
</template>
```

```vue
<script setup>  
// 定义方法  
function disconnected() {  
    console.log('disconnected');  
}  
  
function connected() {  
    console.log('connected');  
}  
  
function retry() {  
    console.log('retry');  
}  
</script>
```

```vue
<style lang="scss" scoped>
	.up-content {
		padding: 150px 60px 0;
		@include flex(column);
		align-items: center;
		justify-content: center;

		&__circle {
			background-color: $u-success;
			@include flex;
			border-radius: 100px;
			width: 60px;
			height: 60px;
			align-items: center;
			justify-content: center;
		}

		&__normal {
			font-size: 15px;
			color: $u-success;
			margin-top: 15px;
		}
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/noNetwork.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view>
		<up-no-network
			@disconnected="disconnected"
			@connected="connected"
			@retry="retry"
		></up-no-network>
		<view class="up-content">
			<view class="up-content__circle">
				<up-icon
					name="checkbox-mark"
					color="#fff"
					size="30"
				></up-icon>
			</view>
			<text class="up-content__normal">网络正常</text>
		</view>
	</view>
</template>
```

```vue
<script setup>  
// 定义方法  
function disconnected() {  
    console.log('disconnected');  
}  
  
function connected() {  
    console.log('connected');  
}  
  
function retry() {  
    console.log('retry');  
}  
</script>
```

```vue
<style lang="scss" scoped>
	.up-content {
		padding: 150px 60px 0;
		@include flex(column);
		align-items: center;
		justify-content: center;

		&__circle {
			background-color: $up-success;
			@include flex;
			border-radius: 100px;
			width: 60px;
			height: 60px;
			align-items: center;
			justify-content: center;
		}

		&__normal {
			font-size: 15px;
			color: $up-success;
			margin-top: 15px;
		}
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/noNetwork.md`</small>

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
| uni-app · Vue 3 | `up-no-network` | `uni_modules/uview-ultra/components/up-no-network` |
| uni-app-x · UTS / UVUE | `up-no-network` | `uni_modules/uview-ultra/components/up-no-network` |

