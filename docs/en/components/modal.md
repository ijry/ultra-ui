---
title: Modal
description: A centred dialog with confirm/cancel, async close and custom content.
generated: true
---

# Modal

A centred dialog with confirm/cancel, async close and custom content.

<PlatformBadges component="modal" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPModal(show: $showConfirm,
        title: "提示",
        content: "确定要执行此操作吗？",
        showCancelButton: true,
        onConfirm: {
            UPToast.show(message: "已确认", type: "success")
        },
        onCancel: {
            UPToast.show(message: "已取消", type: "default")
        })
```

```swift
UPModal(show: $showAsync,
        title: "异步操作",
        content: "确认后按钮进入 loading 状态，请在回调完成后手动修改 show。",
        showCancelButton: true,
        asyncClose: true,
        onConfirm: {
            Task { @MainActor in
                try? await Task.sleep(nanoseconds: 1_200_000_000)
                showAsync = false
                UPToast.show(message: "异步操作完成", type: "success")
            }
        })
```

<small>Snippet from `ultra-ui-ios/Demo/ModalDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPModal
import net.lingyun.ultraui.android.components.UPModalProps

UPModal(
    props = UPModalProps(show = modalVisible, title = "提示", content = "这是 Android 原生 Compose 模态框", showCancelButton = true),
    onUpdateShow = { modalVisible = it },
    onConfirm = {
        eventText = "模态框：确认"
        modalVisible = false
    },
    onCancel = {
        eventText = "模态框：取消"
        modalVisible = false
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

#### Confirm and cancel

```typescript
import { UPModal, UPModalProps } from '@lingyun/ultra-ui-hos';

UPModal({ props: new UPModalProps({
  show: this.showModal,
  title: '删除提示',
  content: '是否确认执行此操作？',
  onAction: (event: UPModalAction): void => {
    this.message = '操作：' + event.action;
  },
  onClose: (event: UPModalCloseEvent): void => {
    this.message = '关闭原因：' + event.reason;
  },
  onShowChange: (show: boolean): void => {
    this.showModal = show;
  }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/ModalDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPModal(
  key: const ValueKey('modal-page-basic'),
  show: _shows[0],
  title: '标题',
  content: _content,
  contentTextAlign: 'left',
  onConfirm: _recordConfirm,
  onUpdateShow: (show) => _setShow(0, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-untitled'),
  show: _shows[1],
  content: _content,
  onUpdateShow: (show) => _setShow(1, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-cancel'),
  show: _shows[2],
  content: _content,
  showCancelButton: true,
  closeOnClickOverlay: true,
  onConfirm: _recordConfirm,
  onCancel: _recordCancel,
  onClose: _recordClose,
  onUpdateShow: (show) => _setShow(2, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-async'),
  show: _shows[3],
  content: _content,
  showCancelButton: true,
  asyncClose: true,
  onConfirm: _confirmAsync,
  onCancel: () => _setShow(3, false),
  onUpdateShow: (show) => _setShow(3, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-reverse'),
  show: _shows[4],
  content: _content,
  showCancelButton: true,
  buttonReverse: true,
  onConfirm: _recordConfirm,
  onCancel: _recordCancel,
  onUpdateShow: (show) => _setShow(4, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-overlay'),
  show: _shows[5],
  title: '标题',
  content: _content,
  closeOnClickOverlay: true,
  onConfirm: _recordConfirm,
  onClose: _recordClose,
  onUpdateShow: (show) => _setShow(5, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-slot'),
  show: _shows[6],
  title: '利剑出鞘,一统江湖',
  closeOnClickOverlay: true,
  child: Image.asset(
    'assets/uview/common/logo.png',
    width: 80,
    height: 80,
  ),
  onUpdateShow: (show) => _setShow(6, show),
)
```

```dart
UPModal(
  key: const ValueKey('modal-page-custom-button'),
  show: _shows[7],
  title: '标题',
  content: _content,
  closeOnClickOverlay: true,
  showCancelButton: true,
  confirmButton: UPButton(
    type: 'success',
    shape: 'circle',
    text: '确定',
    stop: false,
    onClick: () => _setShow(7, false),
  ),
  onUpdateShow: (show) => _setShow(7, show),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/modal_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPModal } from 'ultra-ui-rn';

<UPModal
  content={content}
  contentTextAlign="left"
  onConfirm={close}
  show={active === 1}
  title="标题"
/>
```

```tsx
<UPModal content={content} onConfirm={close} show={active === 2} />
```

```tsx
<UPModal
  asyncClose
  content={content}
  onCancel={close}
  onConfirm={confirm4}
  show={active === 4}
  showCancelButton
/>
```

```tsx
<UPModal
  buttonReverse
  content={content}
  onCancel={close}
  onConfirm={close}
  show={active === 5}
  showCancelButton
/>
```

```tsx
<UPModal
  closeOnClickOverlay
  content={content}
  onClose={close}
  onConfirm={close}
  show={active === 6}
  title="标题"
/>
```

```tsx
<UPModal
  closeOnClickOverlay
  onConfirm={close}
  show={active === 7}
  title="利剑出鞘,一统江湖"
>
  <Image source={{ uri: LOGO }} style={s.logo} />
</UPModal>
```

```tsx
<UPModal
  closeOnClickOverlay
  confirmButtonNode={
    <UPButton onClick={close} shape="circle" text="确定" type="success" />
```

```tsx
<UPModal
  content={content}
  onConfirm={close}
  show={active === 9}
  title="标题"
  zoom={false}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/ModalDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPModal } from '@ultra-ui'

<UPModal
  show={current === 'noTitle'}
  content='没有标题时，内容区会自动增加顶部内边距。'
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'onlyCancel'}
  title='仅取消按钮'
  content='showConfirmButton=false，只保留一个取消按钮。'
  showCancelButton
  showConfirmButton={false}
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'text'}
  title='自定义按钮文案'
  content='confirmText / cancelText 可以换成任意文字。'
  showCancelButton
  confirmText='立即开通'
  cancelText='再想想'
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'color'}
  title='自定义按钮颜色'
  content="confirmColor='#f56c6c'，cancelColor='#909399'。"
  showCancelButton
  confirmColor='#f56c6c'
  cancelColor='#909399'
  confirmText='确认删除'
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'reverse'}
  title='按钮换位'
  content='buttonReverse=true 时，确认按钮排在左侧。'
  showCancelButton
  buttonReverse
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'narrow'}
  title='窄一点'
  content="width='500rpx'"
  width='500rpx'
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'wide'}
  title='宽一点'
  content="width='700rpx'"
  width='700rpx'
  onChangeShow={close}
/>
```

```tsx
<UPModal
  show={current === 'alignLeft'}
  title='左对齐'
  content={CONTENT}
  contentTextAlign='left'
  onChangeShow={close}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/modal/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view >
		<up-modal :show="show" :title="title" :content='content'></up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const show = ref(false);  
const title = ref('标题');  
const content = ref('uview-plus的目标是成为uni-app生态最优秀的UI框架');  
</script>
```

#### Passing rich text

```vue
<template>
	<view >
		<up-modal :show="show"  :title="title" >
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
const title = ref('标题');  
const content = ref(`空山新雨后<br>  
                      天气晚来秋`);  
</script>
```

#### Closing asynchronously

```vue
<template>
	<view class="">
		<up-modal :show="show" @confirm="confirm" ref="uModal" :asyncClose="true"></up-modal>
		<up-button @click="showModal">弹起Modal</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onLoad, onShow } from "@dcloudio/uni-app";  
  
// 创建响应式数据  
const show = ref(false);  
  
// 方法  
const showModal = () => {  
    show.value = true;  
};  
  
const confirm = () => {  
    setTimeout(() => {  
        // 3秒后自动关闭  
        show.value = false;  
    }, 3000);  
};  
  
// uni-app 的生命周期钩子  
onLoad((opt) => {  
    // 页面加载时执行的代码  
    console.log('页面加载了', opt);  
});  
  
onShow(() => {  
    // 页面显示时执行的代码  
    console.log('页面显示了');  
});  
</script>
```

#### Close on mask tap

```vue
<up-modal :show="show" :closeOnClickOverlay="true"></up-modal>
```

#### Modal width

```vue
<up-modal v-model:show="show" width="300px"></up-modal>
```

#### Zoom effect

```vue
<up-modal v-model:show="show" :zoom="false"></up-modal>
```

#### With a close button at the foot

```vue
<up-modal
	:content="content"
	title="标题"
	:show="show10"
>
	<template #popupBottom>
		<view class="rounded" style="margin-top: 20px;" @click="show10 = false">
			<up-icon name="close" color="#fff"></up-icon>
		</view>
	</template>
</up-modal>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/modal.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view >
		<up-modal :show="show" :title="title" :content='content'></up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const show = ref(false);  
const title = ref('标题');  
const content = ref('uview-ultra的目标是成为uni-app生态最优秀的UI框架');  
</script>
```

#### Passing rich text

```vue
<template>
	<view >
		<up-modal :show="show"  :title="title" >
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(false);  
const title = ref('标题');  
const content = ref(`空山新雨后<br>  
                      天气晚来秋`);  
</script>
```

#### Closing asynchronously

```vue
<template>
	<view class="">
		<up-modal :show="show" @confirm="confirm" ref="uModal" :asyncClose="true"></up-modal>
		<up-button @click="showModal">弹起Modal</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onLoad, onShow } from "@dcloudio/uni-app";  
  
// 创建响应式数据  
const show = ref(false);  
  
// 方法  
const showModal = () => {  
    show.value = true;  
};  
  
const confirm = () => {  
    setTimeout(() => {  
        // 3秒后自动关闭  
        show.value = false;  
    }, 3000);  
};  
  
// uni-app 的生命周期钩子  
onLoad((opt) => {  
    // 页面加载时执行的代码  
    console.log('页面加载了', opt);  
});  
  
onShow(() => {  
    // 页面显示时执行的代码  
    console.log('页面显示了');  
});  
</script>
```

#### Close on mask tap

```vue
<up-modal :show="show" :closeOnClickOverlay="true"></up-modal>
```

#### Modal width

```vue
<up-modal v-model="show" width="300px"></up-modal>
```

#### Zoom effect

```vue
<up-modal v-model="show" :zoom="false"></up-modal>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/modal.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否展示modal | `Boolean` | `false` |
| `title` | 标题 | `String` | `''` |
| `content` | 弹窗内容 | `String` | `''` |
| `confirmText` | 确认文案 | `String` | `t("up.common.confirm")` |
| `cancelText` | 取消文案 | `String` | `t("up.common.cancel")` |
| `showConfirmButton` | 是否显示确认按钮 | `Boolean` | `true` |
| `showCancelButton` | 是否显示取消按钮 | `Boolean` | `false` |
| `confirmColor` | 确认按钮颜色 | `String` | `'#2979ff'` |
| `cancelColor` | 取消文字颜色 | `String` | `'#606266'` |
| `buttonReverse` | 对调确认和取消的位置 | `Boolean` | `false` |
| `zoom` | 是否开启缩放效果 | `Boolean` | `true` |
| `asyncClose` | 是否异步关闭，只对确定按钮有效 | `Boolean` | `false` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭modal | `Boolean` | `false` |
| `negativeTop` | 给一个负的margin-top，往上偏移，避免和键盘重合的情况 | `String / Number` | `0` |
| `width` | modal宽度，不支持百分比，可以数值，px，rpx单位 | `String / Number` | `'650rpx'` |
| `confirmButtonShape` | 确认按钮的样式，circle-圆形，square-方形，如设置，将不会显示取消按钮 | `String` | `''` |
| `duration` | 弹窗动画过度时间 | `Number` | `400` |
| `contentTextAlign` | 文案对齐方式 | `String` | `'left'` |
| `asyncCloseTip` | 异步确定时如果点击了取消时候的提示文案 | `String` | `t("up.common.inOperation") + '...'` |
| `asyncCancelClose` | 是否异步关闭，只对取消按钮有效 | `Boolean` | `false` |
| `contentStyle` | 内容样式 | `Object` | `{}` |

### Events

| Event |
| --- |
| `cancel` |
| `cancelOnAsync` |
| `close` |
| `confirm` |
| `update:show` |

### Slots

| Slot |
| --- |
| `confirmButton` |
| `default` |
| `popupBottom` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPModal` | `UltraUI/Sources/UltraUI/Components/UPModal.swift` |
| Android · Jetpack Compose | `UPModal` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPModal.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPModal` | `ultra-ui/src/main/ets/components/UPModal.ets` |
| Flutter · Dart | `UPModal` | `packages/ultra_ui/lib/src/widgets/up_modal.dart` |
| React Native · TypeScript | `UPModal` | `src/components/modal` |
| Taro · React + TypeScript | `UPModal` | `src/ultra-ui/components/up-modal` |
| uni-app · Vue 3 | `up-modal` | `uni_modules/uview-ultra/components/up-modal` |
| uni-app-x · UTS / UVUE | `up-modal` | `uni_modules/uview-ultra/components/up-modal` |

