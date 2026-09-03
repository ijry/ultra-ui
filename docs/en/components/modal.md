---
title: Modal
description: A centred dialog with confirm/cancel, async close and custom content.
generated: true
---

# Modal

A centred dialog with confirm/cancel, async close and custom content.

<PlatformBadges component="modal" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-ios/Demo/ModalDemoView.swift`</small>

</template>

<template #android>

### 加载更多

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

<small>Snippet from `ultra-ui-taro/src/pages/components/modal/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-modal
    :content="content"
    title="标题"
    :show="show1"
    @confirm="() => {show1 = false}"
></up-modal>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/modal/modal.uvue`</small>

</template>

<template #uniappx>

```vue
<up-modal
    :content="content"
    title="标题"
    :show="show1"
    @confirm="() => {show1 = false}"
></up-modal>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/modal/modal.uvue`</small>

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

