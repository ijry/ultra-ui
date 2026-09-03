---
title: Toast
description: A lightweight global message with success, error and loading themes plus a completion callback.
generated: true
---

# Toast

A lightweight global message with success, error and loading themes plus a completion callback.

<PlatformBadges component="toast" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPToast.show(message: "这是一条默认消息")
```

```swift
UPToast.show(message: "操作成功", type: "success")
```

```swift
UPToast.show(message: "操作失败", type: "error")
```

```swift
UPToast.show(message: "请检查输入内容", type: "warning")
```

```swift
UPToast.show(message: "正在加载…", type: "loading", duration: 1_800)
```

```swift
UPToast.show(message: "顶部提示", type: "success", position: "top")
```

```swift
UPToast.show(message: "底部提示", type: "success", position: "bottom")
```

<small>Snippet from `ultra-ui-ios/Demo/ToastDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPToast
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

```typescript
import { UPToastHost } from '@lingyun/ultra-ui-hos';
```

::: tip
No snippet could be extracted automatically — please read the source.
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

```dart
UPToast.show(context, message: 'Tag 页面尚未迁移')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/toast_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPToast } from 'ultra-ui-rn';

<UPToast ref={toast} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/ToastDemo.tsx`</small>

</template>

<template #taro>

#### Component-style usage

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

<small>Snippet from `ultra-ui-taro/src/pages/components/toast/index.tsx`</small>

</template>

<template #uniapp>

#### Global call via Root (recommended)

```js
// 快捷写法
uni.$u.rootToast('保存成功')

// 完整写法
uni.$u.rootToast({
  message: '操作完成',
  type: 'success',
  duration: 2000
})
```

#### Basic usage

```vue
<template>
	<view>
		<up-toast ref="uToastRef"></up-toast>
		<up-cell-group title-bg-color="rgb(243, 244, 246)">
			<up-cell
				:titleStyle="{fontWeight: 500}"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
				:icon="item.iconUrl"
				@click="showToast(item)"
			>
			</up-cell>
		</up-cell-group>
	</view>
</template>
```

```vue
<script setup>  
import { ref, computed } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
const list = ref([  
  	{
		type: 'default',
		title: '默认主题',
		message: "锦瑟无端五十弦",
		iconUrl: 'https://uview-plus.jiangruyi.com/resources/toast/default.png'
	},
	{
		type: 'error',
		icon: false,
		title: '失败主题',
		message: "一弦一柱思华年",
		iconUrl: 'https://uview-plus.jiangruyi.com/resources/toast/error.png'
	},
	{
		type: 'success',
		title: '成功主题(带图标)',
		message: "庄生晓梦迷蝴蝶",
		iconUrl: 'https://uview-plus.jiangruyi.com/resources/toast/success.png'
	},
	{
		type: 'loading',
		title: '正在加载',
		message: "正在加载",
		iconUrl: 'https://uview-plus.jiangruyi.com/resources/toast/loading.png'
	},
	{
		type: 'default',
		title: '结束后跳转标签页',
		message: "此情可待成追忆",
		url: '/pages/componentsB/tag/tag',
		iconUrl: 'https://uview-plus.jiangruyi.com/resources/toast/jump.png'
	}
]);  
  
// 计算属性  
const getIcon = computed(() => {  
  return path => {  
    return 'https://cdn.uviewui.com/uview/example/' + path + '.png';  
  }  
});  
  
// 方法
const uToastRef = ref(null)
function showToast(params) {  
  uToastRef.value.show({  
    ...params,  
    complete() {  
      params.url && uni.navigateTo({  
        url: params.url  
      });  
    }  
  });  
}  
</script>
```

```vue
<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.u-cell-group__title__text {
		font-weight: bold;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/toast.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
		<up-toast ref="uToastRef"></up-toast>
		<up-cell-group title-bg-color="rgb(243, 244, 246)">
			<up-cell
				:titleStyle="{fontWeight: 500}"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
				:icon="item.iconUrl"
				@click="showToast(item)"
			>
			</up-cell>
		</up-cell-group>
	</view>
</template>
```

```vue
<script setup>  
import { ref, computed } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
const list = ref([  
  	{
		type: 'default',
		title: '默认主题',
		message: "锦瑟无端五十弦",
		iconUrl: 'https://uview-ultra.jiangruyi.com/resources/toast/default.png'
	},
	{
		type: 'error',
		icon: false,
		title: '失败主题',
		message: "一弦一柱思华年",
		iconUrl: 'https://uview-ultra.jiangruyi.com/resources/toast/error.png'
	},
	{
		type: 'success',
		title: '成功主题(带图标)',
		message: "庄生晓梦迷蝴蝶",
		iconUrl: 'https://uview-ultra.jiangruyi.com/resources/toast/success.png'
	},
	{
		type: 'loading',
		title: '正在加载',
		message: "正在加载",
		iconUrl: 'https://uview-ultra.jiangruyi.com/resources/toast/loading.png'
	},
	{
		type: 'default',
		title: '结束后跳转标签页',
		message: "此情可待成追忆",
		url: '/pages/componentsB/tag/tag',
		iconUrl: 'https://uview-ultra.jiangruyi.com/resources/toast/jump.png'
	}
]);  
  
// 计算属性  
const getIcon = computed(() => {  
  return path => {  
    return 'https://cdn.uviewui.com/uview/example/' + path + '.png';  
  }  
});  
  
// 方法
const uToastRef = ref(null)
function showToast(params) {  
  uToastRef.value.show({  
    ...params,  
    complete() {  
      params.url && uni.navigateTo({  
        url: params.url  
      });  
    }  
  });  
}  
</script>
```

```vue
<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.u-cell-group__title__text {
		font-weight: bold;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/toast.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPToast` | `UltraUI/Sources/UltraUI/Components/UPToast.swift` |
| Android · Jetpack Compose | `UPToast` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPToast.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPToastHost` | `ultra-ui/src/main/ets/components/UPToastHost.ets` |
| Flutter · Dart | `UPToast` | `packages/ultra_ui/lib/src/widgets/up_toast.dart` |
| React Native · TypeScript | `UPToast` | `src/components/toast` |
| Taro · React + TypeScript | `UPToast` | `src/ultra-ui/components/up-toast` |
| uni-app · Vue 3 | `up-toast` | `uni_modules/uview-ultra/components/up-toast` |
| uni-app-x · UTS / UVUE | `up-toast` | `uni_modules/uview-ultra/components/up-toast` |

