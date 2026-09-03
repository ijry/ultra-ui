---
title: Alert
description: An inline banner for information that matters but should not interrupt.
generated: true
---

# Alert

An inline banner for information that matters but should not interrupt.

<PlatformBadges component="alert" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPAlert
import net.lingyun.ultraui.android.components.UPAlertProps

UPAlert(
    props = UPAlertProps(
        title = "系统提示",
        description = "这是原生 Compose 的 u-alert",
        type = "warning",
        showIcon = true,
        closable = true,
        modelValue = alertVisible,
    ),
    onUpdateModelValue = {
        alertVisible = it
        eventText = "警告提示：${if (it) "打开" else "关闭"}"
    },
    onClick = { eventText = "警告提示：点击" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### Hint bar

```typescript
import { UPAlert, UPAlertProps } from '@lingyun/ultra-ui-hos';

UPAlert({ props: new UPAlertProps({ title: '操作成功', description: '页面状态控制提示条的显示与关闭。', type: 'success', closable: true, modelValue: this.visible, onVisibleChange: (value: boolean): void => { this.visible = value; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/AlertDemo.ets`</small>

</template>

<template #flutter>

#### Basic features

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPAlert(description: '山不在于高，有了神仙就出名')
```

#### Light and dark

```dart
const UPAlert(
  description: '无丝竹之乱耳，无案牍之劳形',
  type: 'warning',
)
```

#### Showing an icon

```dart
const UPAlert(
  description: '六王毕，四海一；蜀山兀，阿房出',
  type: 'error',
  showIcon: true,
)
```

#### Closable

```dart
UPAlert(
  description: '五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角',
  type: 'success',
  showIcon: true,
  closable: true,
  onClose: () => setState(() => _closeable[0] = false),
)
```

#### With a title

```dart
const UPAlert(
  title: '妃嫔媵嫱，王子皇孙，辞楼下殿',
  description: '长桥卧波，未云何龙？复道行空，不霁何虹',
  type: 'info',
  showIcon: true,
  closable: true,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/alert_page.dart`</small>

</template>

<template #reactnative>

#### Basic features

```tsx
import { UPAlert } from 'ultra-ui-rn';

<UPAlert description="山不在于高，有了神仙就出名" />
```

#### Light and dark

```tsx
<UPAlert description="无丝竹之乱耳，无案牍之劳形" type="warning" />
```

#### Showing an icon

```tsx
<UPAlert description="六王毕，四海一；蜀山兀，阿房出" showIcon type="error" />
```

#### Closable

```tsx
<UPAlert
  closable
  description="五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角"
  showIcon
  type="success"
/>
```

#### With a title

```tsx
<UPAlert
  closable
  description="长桥卧波，未云何龙？复道行空，不霁何虹"
  showIcon
  title="妃嫔媵嫱，王子皇孙，辞楼下殿"
  type="info"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/AlertDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPAlert } from '@ultra-ui'

<UPAlert type='primary' title='primary 主要提示' />
```

#### Dark theme

```tsx
<UPAlert effect='dark' type='primary' title='primary 主要提示' />
```

#### Supporting description

```tsx
<UPAlert
  type='warning'
  title='标题：账号存在风险'
  description='描述：检测到你的账号在异地登录，如非本人操作请及时修改密码。'
/>
```

#### Showing an icon

```tsx
<UPAlert showIcon type='primary' title='primary 主要提示' />
```

#### Custom icon

```tsx
<UPAlert showIcon icon='bell' type='primary' title='使用 bell 图标' />
```

#### Centred text

```tsx
<UPAlert center type='primary' title='这是一条居中的提示' />
```

#### Font size

```tsx
<UPAlert type='primary' fontSize={12} title='fontSize = 12' />
```

#### Custom close area

```tsx
<UPAlert
  closable
  type='primary'
  title='右侧是自定义的关闭内容'
  closeSlot={<UPIcon name='trash' size={15} color='primary' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/alert/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view>
		<up-alert :title="title" type = "warning" :description = "description"></up-alert>
		<up-alert :title="title" type = "warning" effect="dark" :description = "description"></up-alert>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const title = ref('uview-plus的目标是成为uni-app生态最优秀的UI框架');  
const description = ref('uview-plus是uni-app生态专用的UI框架');  

</script>
```

#### Icons

```vue
<up-alert type="warning" :show-icon="true"></up-alert>
```

#### Closable alert

```vue
<template>
	<view>
		<up-alert :title="title"  type = "warning" :closable="closable" :description = "description"></up-alert>
	
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onLoad, onShow } from '@dcloudio/uni-app';  
  
// 定义响应式数据  
const title = ref('uview-plus的目标是成为uni-app生态最优秀的UI框架');  
const description = ref('uview-plus是uni-app生态专用的UI框架');  
const closable = ref(true);  
  
// 使用 uni-app 的 onLoad 生命周期钩子  
onLoad(() => {  
  // 组件加载时执行的逻辑  
  console.log('组件加载了');  
});  
  
// 使用 uni-app 的 onShow 生命周期钩子  
onShow(() => {  
  // 组件显示时执行的逻辑  
  console.log('组件显示了');  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/alert.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
		<up-alert :title="title" type = "warning" :description = "description"></up-alert>
		<up-alert :title="title" type = "warning" effect="dark" :description = "description"></up-alert>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const title = ref('uview-ultra的目标是成为uni-app生态最优秀的UI框架');  
const description = ref('uview-ultra是uni-app生态专用的UI框架');  

</script>
```

#### Icons

```vue
<up-alert type="warning" :show-icon="true"></up-alert>
```

#### Closable alert

```vue
<template>
	<view>
		<up-alert :title="title"  type = "warning" :closable="closable" :description = "description"></up-alert>
	
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onLoad, onShow } from '@dcloudio/uni-app';  
  
// 定义响应式数据  
const title = ref('uview-ultra的目标是成为uni-app生态最优秀的UI框架');  
const description = ref('uview-ultra是uni-app生态专用的UI框架');  
const closable = ref(true);  
  
// 使用 uni-app 的 onLoad 生命周期钩子  
onLoad(() => {  
  // 组件加载时执行的逻辑  
  console.log('组件加载了');  
});  
  
// 使用 uni-app 的 onShow 生命周期钩子  
onShow(() => {  
  // 组件显示时执行的逻辑  
  console.log('组件显示了');  
});  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/alert.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 显示文字 | `String` | `''` |
| `type` | 主题，success/warning/info/error | `String` | `'warning'` |
| `description` | 辅助性文字 | `String` | `''` |
| `closable` | 是否可关闭 | `Boolean` | `false` |
| `showIcon` | 是否显示图标 | `Boolean` | `false` |
| `effect` | 浅或深色调，light-浅色，dark-深色 | `String` | `'light'` |
| `center` | 文字是否居中 | `Boolean` | `false` |
| `fontSize` | 字体大小 | `String / Number` | `14` |

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPAlert` | `UltraUI/Sources/UltraUI/Components/UPAlert.swift` |
| Android · Jetpack Compose | `UPAlert` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPAlert.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPAlert` | `ultra-ui/src/main/ets/components/UPAlert.ets` |
| Flutter · Dart | `UPAlert` | `packages/ultra_ui/lib/src/widgets/up_alert.dart` |
| React Native · TypeScript | `UPAlert` | `src/components/alert` |
| Taro · React + TypeScript | `UPAlert` | `src/ultra-ui/components/up-alert` |
| uni-app · Vue 3 | `up-alert` | `uni_modules/uview-ultra/components/up-alert` |
| uni-app-x · UTS / UVUE | `up-alert` | `uni_modules/uview-ultra/components/up-alert` |

