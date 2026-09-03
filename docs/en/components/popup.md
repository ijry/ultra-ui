---
title: Popup
description: A generic container popping from any edge or the centre; the base of many components.
generated: true
---

# Popup

A generic container popping from any edge or the centre; the base of many components.

<PlatformBadges component="popup" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPPopup(show: $showPopup,
        mode: mode,
        closeable: true,
        closeOnClickOverlay: true) {
    VStack(spacing: 14) {
        Text("u-popup")
            .font(.headline)
        Text("当前弹出方向：\(mode)")
            .foregroundStyle(.secondary)
        UPButton(type: "primary", text: "关闭") {
            showPopup = false
        }
    }
    .padding(24)
    .frame(maxWidth: mode == "center" ? 280 : nil)
}
```

<small>Snippet from `ultra-ui-ios/Demo/PopupDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPopup
import net.lingyun.ultraui.android.components.UPPopupProps

UPPopup(
    props = UPPopupProps(show = popupVisible, pageInline = true, overlay = false, mode = "center", round = 8),
    onUpdateShow = { popupVisible = it },
    onClick = { eventText = "弹窗：内容点击" },
) {
    Text("内联 popup 内容", color = UPTheme.Main, modifier = Modifier.padding(16.dp))
}
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

#### 不同方向

```typescript
import { UPPopup, UPPopupProps } from '@lingyun/ultra-ui-hos';

UPPopup({ props: new UPPopupProps({
  show: this.showPopup,
  mode: this.mode,
  round: true,
  closeable: true,
  safeAreaInsetBottom: true,
  onClose: (event: UPPopupCloseEvent): void => {
    this.message = '关闭原因：' + event.reason;
  },
  onShowChange: (show: boolean): void => {
    this.showPopup = show;
  }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/PopupDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPopup(
  show: _show,
  safeAreaInsetBottom: true,
  safeAreaInsetTop: true,
  mode: _preset.mode,
  round: _preset.round,
  overlay: _preset.overlay,
  closeable: _preset.closeable,
  closeOnClickOverlay: _preset.closeOnClickOverlay,
  touchable: _preset.touchable,
  minHeight: _preset.minHeight,
  maxHeight: _preset.maxHeight,
  onClose: _close,
  onUpdateShow: (show) => setState(() => _show = show),
  child: _PopupContent(
    mode: _preset.mode,
    scrollHeight: _preset.scrollHeight,
    onClose: _close,
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/popup_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPopup } from 'ultra-ui-rn';

<UPPopup
  bottom={
    popupData.mode === 'center' ? (
      <View style={s.rounded}>
        <UPIcon color="#fff" name="close" />
      </View>
    ) : undefined
  }
  closeable={popupData.closeable}
  closeOnClickOverlay={popupData.closeOnClickOverlay}
  maxHeight={popupData.maxHeight}
  minHeight={popupData.minHeight}
  mode={popupData.mode}
  onChangeShow={setShow}
  onClose={() => setShow(false)}
  overlay={popupData.overlay}
  round={popupData.round}
  safeAreaInsetBottom
  safeAreaInsetTop
  show={show}
  touchable={popupData.touchable}
>
  <View
    style={[
      s.slot,
      { marginTop: horizontal ? 240 : 0, width: vertical ? '100%' : 200 },
    ]}
  >
    <ScrollView style={[s.scroll, { height: popupData.height ? 160 : 80 }]}>
      {Array.from({ length: 30 }, (_, index) => (
        <Text key={index}>列表滚动{index + 1}</Text>
      ))}
    </ScrollView>
    <View>
      <UPButton
        customStyle={s.closeButton}
        onClick={() => setShow(false)}
        size="small"
        text="点我关闭"
        type="success"
      />
    </View>
  </View>
</UPPopup>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/PopupDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPPopup } from '@ultra-ui'

<UPPopup show={current === 'top'} mode='top' onClose={close}>
  <Panel title='顶部弹出' tips='mode="top"，点击遮罩关闭' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'bottom'} mode='bottom' onClose={close}>
  <Panel title='底部弹出' tips='mode="bottom"，最常用的弹出方式' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'left'} mode='left' onClose={close}>
  <Panel variant='side' title='左侧弹出' tips='mode="left"' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'right'} mode='right' onClose={close}>
  <Panel variant='side' title='右侧弹出' tips='mode="right"' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'center'} mode='center' onClose={close}>
  <Panel variant='center' title='居中弹出' tips='mode="center"' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'round0'} mode='bottom' round={0} onClose={close}>
  <Panel title='没有圆角' tips='round = 0' />
</UPPopup>
```

```tsx
<UPPopup show={current === 'round40'} mode='bottom' round='40px' onClose={close}>
  <Panel title='大圆角' tips="round = '40px'" />
</UPPopup>
```

```tsx
<UPPopup show={current === 'roundCenter'} mode='center' round={16} onClose={close}>
  <Panel variant='center' title='居中圆角' tips='round = 16' />
</UPPopup>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/popup/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view>
		<up-popup :show="show" @close="close" @open="open">
        <view>
            <text>出淤泥而不染，濯清涟而不妖</text>
        </view>
		</up-popup>
    <up-popup v-model:show="show">
        <view>
            <text>出淤泥而不染，濯清涟而不妖</text>
        </view>
		</up-popup>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

#### 设置弹出层的方向

```vue
<template>
	<up-popup :show="show" mode="top"  @close="close" @open="open">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
	</up-popup>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

#### 设置弹出层的圆角

```vue
<template>
	<up-popup :show="show" :round="10" mode="top" @close="close" @open="open">
		<view>
        <text>人生若只如初见，何事秋风悲画扇</text>
		</view>
	</up-popup>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

#### 弹窗中内容滚动

```vue
<template>
	<up-popup :show="show" :round="10" mode="center" @close="close" @open="open">
		<scroll-view height="900px" scroll-y>
        <view>人生若只如初见，何事秋风悲画扇</view>
		</scroll-view>
	</up-popup>
</template>
```

#### 底部追加内容

```vue
<template>
	<up-popup :show="show" :round="10" mode="center" @close="close" @open="open">
		<view>
        <text>人生若只如初见，何事秋风悲画扇</text>
		</view>
    <template #bottom>
      <view v-if="popupData.mode == 'center'" class="rounded" style="margin-top: 20px;">
        <up-icon name="close" color="#fff"></up-icon>
      </view>
    </template>
	</up-popup>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/popup.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view>
		<up-popup :show="show" @close="close" @open="open">
        <view>
            <text>出淤泥而不染，濯清涟而不妖</text>
        </view>
		</up-popup>
    <up-popup v-model:show="show">
        <view>
            <text>出淤泥而不染，濯清涟而不妖</text>
        </view>
		</up-popup>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

#### 设置弹出层的方向

```vue
<template>
	<up-popup :show="show" mode="top"  @close="close" @open="open">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
	</up-popup>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

#### 设置弹出层的圆角

```vue
<template>
	<up-popup :show="show" :round="10" mode="top" @close="close" @open="open">
		<view>
        <text>人生若只如初见，何事秋风悲画扇</text>
		</view>
	</up-popup>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
  
// 定义方法  
function open() {  
  // 打开逻辑，比如设置 show 为 true  
  show.value = true;  
  // console.log('open');  
}  
  
function close() {  
  // 关闭逻辑，设置 show 为 false  
  show.value = false;  
  // console.log('close');  
}  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/popup.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否展示弹窗 | `Boolean` | `false` |
| `overlay` | 是否显示遮罩 | `Boolean` | `true` |
| `mode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `duration` | 动画时长，单位ms | `String / Number` | `300` |
| `closeable` | 是否显示关闭图标 | `Boolean` | `false` |
| `overlayStyle` | 自定义遮罩的样式 | `Object / String` | `{}` |
| `closeOnClickOverlay` | 点击遮罩是否关闭弹窗 | `Boolean` | `true` |
| `zIndex` | 层级 | `String / Number` | `10075` |
| `safeAreaInsetBottom` | 是否为iPhoneX留出底部安全距离 | `Boolean` | `true` |
| `safeAreaInsetTop` | 是否留出顶部安全距离（状态栏高度） | `Boolean` | `false` |
| `closeIconPos` | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 | `String` | `'top-right'` |
| `round` | 是否显示圆角 | `Boolean / String / Number` | `0` |
| `zoom` | mode=center，也即中部弹出时，是否使用缩放模式 | `Boolean` | `true` |
| `bgColor` | 弹窗背景色，设置为transparent可去除白色背景 | `String` | `''` |
| `overlayOpacity` | 遮罩的透明度，0-1之间 | `Number / String` | `0.5` |
| `pageInline` | 是否内联在页面中（不使用弹窗形式） | `Boolean` | `false` |

### Events

| Event |
| --- |
| `click` |
| `close` |
| `closed` |
| `open` |
| `update:show` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPPopup` | `UltraUI/Sources/UltraUI/Components/UPPopup.swift` |
| Android · Jetpack Compose | `UPPopup` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopup.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPPopup` | `ultra-ui/src/main/ets/components/UPPopup.ets` |
| Flutter · Dart | `UPPopup` | `packages/ultra_ui/lib/src/widgets/up_popup.dart` |
| React Native · TypeScript | `UPPopup` | `src/components/popup` |
| Taro · React + TypeScript | `UPPopup` | `src/ultra-ui/components/up-popup` |
| uni-app · Vue 3 | `up-popup` | `uni_modules/uview-ultra/components/up-popup` |
| uni-app-x · UTS / UVUE | `up-popup` | `uni_modules/uview-ultra/components/up-popup` |

