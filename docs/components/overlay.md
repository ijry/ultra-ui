---
title: Overlay 遮罩层
description: 半透明遮罩，用于突出弹出内容并拦截背景交互。
generated: true
---

# Overlay 遮罩层

半透明遮罩，用于突出弹出内容并拦截背景交互。

<PlatformBadges component="overlay" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPOverlay(show: true) {
    showOverlay = false
}
```

<small>示例来源 `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPOverlay
import net.lingyun.ultraui.android.components.UPOverlayProps

UPOverlay(props = UPOverlayProps(show = true, opacity = 0.35), onClick = { eventText = "遮罩：点击" })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

#### 点击按钮显示遮罩层

```typescript
import { UPOverlay, UPOverlayProps } from '@lingyun/ultra-ui-hos';

UPOverlay({ props: new UPOverlayProps({
  show: this.showOverlay,
  opacity: 0.55,
  onClickOverlay: (event: UPOverlayClickEvent): void => {
    this.message = '已点击 ' + event.source;
  },
  onShowChange: (show: boolean): void => {
    this.showOverlay = show;
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/OverlayDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPOverlay(
  show: true,
  rootOverlay: false,
  onClick: () => setState(() => _showBase = false),
)
```

```dart
UPOverlay(
  show: true,
  rootOverlay: false,
  onClick: () => setState(() => _showContent = false),
  child: Center(
    child: IgnorePointer(
      child: Container(
        key: const ValueKey('overlay-content-box'),
        width: 100,
        height: 100,
        color: const Color(0xFF70E1F5),
      ),
    ),
  ),
)
```

```dart
UPOverlay(
  show: true,
  rootOverlay: false,
  opacity: .85,
  onClick: () => setState(() => _showTransparency = false),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/overlay_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPOverlay } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPOverlay } from '@ultra-ui'

<UPOverlay show={current === 'basic'} onClick={close} />
```

```tsx
<UPOverlay show={current === 'light'} opacity={0.2} onClick={close} />
```

```tsx
<UPOverlay show={current === 'normal'} onClick={close} />
```

```tsx
<UPOverlay show={current === 'dark'} opacity={0.9} onClick={close} />
```

```tsx
<UPOverlay show={current === 'fast'} duration={100} onClick={close} />
```

```tsx
<UPOverlay show={current === 'slow'} duration={1500} onClick={close} />
```

```tsx
<UPOverlay show={current === 'zIndex'} zIndex={12000} onClick={close} />
```

```tsx
<UPOverlay show={current === 'content'} onClick={close}>
  <View className='overlay-demo__wrap'>
    {/* 阻止冒泡，点内容区不关闭 */}
    <View
      className='overlay-demo__card'
      onClick={(event) => event.stopPropagation()}
    >
      <UPIcon name='checkmark-circle' size={40} color='#19be6b' />
      <Text className='overlay-demo__title'>操作成功</Text>
      <Text className='overlay-demo__tips'>点击遮罩空白处关闭</Text>
      <View className='overlay-demo__action'>
        <UPButton size='small' type='primary' text='我知道了' onClick={close} />
      </View>
    </View>
  </View>
</UPOverlay>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/overlay/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`show`参数配置是否显示遮罩  
- 遮罩被点击时，会发送一个`click`事件，如不需要此事件，请设置`mask-click-able`参数为`false`

```vue
<template>
	<up-overlay :show="show" @click="show = false"></up-overlay>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容  
注意：如果不想让`slot`插槽内容的点击事件冒泡到遮罩，请给指定元素添加上`@tap.stop`

```vue
<template>
	<up-overlay :show="show" @click="show = false">
		<view class="warp">
			<view class="rect" @tap.stop></view>
		</view>
	</up-overlay>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

```vue
<style scoped>
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}
</style>
```

#### 遮罩样式

- 通过`duration`设置遮罩淡入淡出的时长，单位`ms`

```vue
<up-overlay :show="show" :duration="400" :z-index ="999" :opacity="0.3"></up-overlay>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/overlay.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`show`参数配置是否显示遮罩  
- 遮罩被点击时，会发送一个`click`事件，如不需要此事件，请设置`mask-click-able`参数为`false`

```vue
<template>
	<up-overlay :show="show" @click="show = false"></up-overlay>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容  
注意：如果不想让`slot`插槽内容的点击事件冒泡到遮罩，请给指定元素添加上`@tap.stop`

```vue
<template>
	<up-overlay :show="show" @click="show = false">
		<view class="warp">
			<view class="rect" @tap.stop></view>
		</view>
	</up-overlay>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

```vue
<style scoped>
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}
</style>
```

#### 遮罩样式

- 通过`duration`设置遮罩淡入淡出的时长，单位`ms`

```vue
<up-overlay :show="show" :duration="400" :z-index ="999" :opacity="0.3"></up-overlay>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/overlay.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示遮罩 | `Boolean` | `false` |
| `zIndex` | 层级z-index | `String / Number` | `10070` |
| `duration` | 遮罩的过渡时间，单位为ms | `String / Number` | `300` |
| `opacity` | 不透明度值，当做rgba的第四个参数 | `String / Number` | `0.5` |

### 事件

| 事件名 |
| --- |
| `click` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPOverlay` | `UltraUI/Sources/UltraUI/Components/UPOverlay.swift` |
| Android · Jetpack Compose | `UPOverlay` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPOverlay.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPOverlay` | `ultra-ui/src/main/ets/components/UPOverlay.ets` |
| Flutter · Dart | `UPOverlay` | `packages/ultra_ui/lib/src/widgets/up_overlay.dart` |
| React Native · TypeScript | `UPOverlay` | `src/components/overlay` |
| Taro · React + TypeScript | `UPOverlay` | `src/ultra-ui/components/up-overlay` |
| uni-app · Vue 3 | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |
| uni-app-x · UTS / UVUE | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |

