---
title: Notify
description: A banner sliding in from the top for non-blocking feedback.
generated: true
---

# Notify

A banner sliding in from the top for non-blocking feedback.

<PlatformBadges component="notify" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNotify
import net.lingyun.ultraui.android.components.UPNotifyProps

UPNotify(
    props = UPNotifyProps(message = "保存成功", duration = -1),
    onClick = { eventText = "通知：点击" },
    onClose = {
        notifyVisible = false
        eventText = "通知：关闭"
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### Top notification

```typescript
import { UPNotify, UPNotifyProps } from '@lingyun/ultra-ui-hos';

UPNotify({ props: new UPNotifyProps({ show: this.show, message: '这是由页面控制 show 的本地通知。', type: 'primary', onShowChange: (value: boolean): void => { this.show = value; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/NotifyDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNotify(key: _notifyKey)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/notify_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNotify } from 'ultra-ui-rn';

<UPNotify ref={notify} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/NotifyDemo.tsx`</small>

</template>

<template #taro>

#### Component-style usage

```tsx
import { UPNotify } from '@ultra-ui'

<UPNotify
  show={inlineShow}
  type='primary'
  message='我是组件式 UPNotify'
  duration={0}
  icon={
    <UPIcon
      name='bell'
      color='#ffffff'
      size={19}
      customStyle={{ marginRight: '4px' }}
    />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/notify/index.tsx`</small>

</template>

<template #uniapp>

#### Global call via Root (recommended)

```js
// 快捷写法
uni.$u.rootNotify('网络已恢复')

// 完整写法
uni.$u.rootNotify({
  message: '请先登录',
  type: 'warning',
  duration: 3000,
  safeAreaInsetTop: true
})
```

#### Basic usage

```vue
<template>
	<up-notify message="Hi uview-plus" :show="show"></up-notify>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(true);  
</script>
```

#### Calling through a ref

```vue
<template>
	<up-notify ref="uNotifyRef" message="Hi uview-plus"></up-notify>
</template>
```

```vue
<script setup>  
import { onMounted, ref, onUnmounted } from 'vue';  
  
// 假设你有一个 uNotify 组件的引用  
const uNotifyRef = ref(null);  
  
// 在组件挂载后执行  
onMounted(() => {  
    uNotifyRef.value.show({  
        top: 10,  
        type: 'error',  
        color: '#000',  
        bgColor: '#e8e8e8',  
        message: 'Hi uview-plus',  
        duration: 1000 * 3,  
        fontSize: 20,  
        safeAreaInsetTop: true  
    });  
  
    // 你也可以定义其他方法或逻辑  
    // uNotifyRef.value.primary('Primary主题')
});  
  
// 如果需要，在组件卸载时关闭 notify  
onUnmounted(() => {  
    if (uNotifyRef.value) {  
        uNotifyRef.value.close();  
    }  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/notify.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<up-notify message="Hi uview-ultra" :show="show"></up-notify>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const show = ref(true);  
</script>
```

#### Calling through a ref

```vue
<template>
	<up-notify ref="uNotifyRef" message="Hi uview-ultra"></up-notify>
</template>
```

```vue
<script setup>  
import { onMounted, ref, onUnmounted } from 'vue';  
  
// 假设你有一个 uNotify 组件的引用  
const uNotifyRef = ref(null);  
  
// 在组件挂载后执行  
onMounted(() => {  
    uNotifyRef.value.show({  
        top: 10,  
        type: 'error',  
        color: '#000',  
        bgColor: '#e8e8e8',  
        message: 'Hi uview-ultra',  
        duration: 1000 * 3,  
        fontSize: 20,  
        safeAreaInsetTop: true  
    });  
  
    // 你也可以定义其他方法或逻辑  
    // uNotifyRef.value.primary('Primary主题')
});  
  
// 如果需要，在组件卸载时关闭 notify  
onUnmounted(() => {  
    if (uNotifyRef.value) {  
        uNotifyRef.value.close();  
    }  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/notify.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `top` | 到顶部的距离 | `String / Number` | `0` |
| `type` | 是否展示组件 show: { type: Boolean, default: () =&gt; defProps.notify.show }, type主题，primary，success，warning，error | `String` | `'primary'` |
| `color` | 字体颜色 | `String` | `'#ffffff'` |
| `bgColor` | 背景颜色 | `String` | `''` |
| `message` | 展示的文字内容 | `String` | `''` |
| `duration` | 展示时长，为0时不消失，单位ms | `String / Number` | `3000` |
| `fontSize` | 字体大小 | `String / Number` | `15` |
| `safeAreaInsetTop` | 是否留出顶部安全距离（状态栏高度） | `Boolean` | `false` |

### Slots

| Slot |
| --- |
| `icon` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNotify` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNotify.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNotify` | `ultra-ui/src/main/ets/components/UPNotify.ets` |
| Flutter · Dart | `UPNotify` | `packages/ultra_ui/lib/src/widgets/up_notify.dart` |
| React Native · TypeScript | `UPNotify` | `src/components/notify` |
| Taro · React + TypeScript | `UPNotify` | `src/ultra-ui/components/up-notify` |
| uni-app · Vue 3 | `up-notify` | `uni_modules/uview-ultra/components/up-notify` |
| uni-app-x · UTS / UVUE | `up-notify` | `uni_modules/uview-ultra/components/up-notify` |

