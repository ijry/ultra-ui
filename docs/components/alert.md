---
title: Alert 警告提示
description: 常驻页面的提示条，用于说明需要关注但不打断流程的信息。
generated: true
---

# Alert 警告提示

常驻页面的提示条，用于说明需要关注但不打断流程的信息。

<PlatformBadges component="alert" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 提示条

```typescript
import { UPAlert, UPAlertProps } from '@lingyun/ultra-ui-hos';

UPAlert({ props: new UPAlertProps({ title: '操作成功', description: '页面状态控制提示条的显示与关闭。', type: 'success', closable: true, modelValue: this.visible, onVisibleChange: (value: boolean): void => { this.visible = value; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/AlertDemo.ets`</small>

</template>

<template #flutter>

#### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPAlert(description: '山不在于高，有了神仙就出名')
```

#### 深浅色

```dart
const UPAlert(
  description: '无丝竹之乱耳，无案牍之劳形',
  type: 'warning',
)
```

#### 显示图标

```dart
const UPAlert(
  description: '六王毕，四海一；蜀山兀，阿房出',
  type: 'error',
  showIcon: true,
)
```

#### 可关闭

```dart
UPAlert(
  description: '五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角',
  type: 'success',
  showIcon: true,
  closable: true,
  onClose: () => setState(() => _closeable[0] = false),
)
```

#### 带标题

```dart
const UPAlert(
  title: '妃嫔媵嫱，王子皇孙，辞楼下殿',
  description: '长桥卧波，未云何龙？复道行空，不霁何虹',
  type: 'info',
  showIcon: true,
  closable: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/alert_page.dart`</small>

</template>

<template #reactnative>

#### 基础功能

```tsx
import { UPAlert } from 'ultra-ui-rn';

<UPAlert description="山不在于高，有了神仙就出名" />
```

#### 深浅色

```tsx
<UPAlert description="无丝竹之乱耳，无案牍之劳形" type="warning" />
```

#### 显示图标

```tsx
<UPAlert description="六王毕，四海一；蜀山兀，阿房出" showIcon type="error" />
```

#### 可关闭

```tsx
<UPAlert
  closable
  description="五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角"
  showIcon
  type="success"
/>
```

#### 带标题

```tsx
<UPAlert
  closable
  description="长桥卧波，未云何龙？复道行空，不霁何虹"
  showIcon
  title="妃嫔媵嫱，王子皇孙，辞楼下殿"
  type="info"
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/AlertDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

title 为主文字，type 决定配色

```tsx
import { UPAlert } from '@ultra-ui'

<UPAlert type='primary' title='primary 主要提示' />
```

#### 深色主题

effect='dark'，背景填充为主题色

```tsx
<UPAlert effect='dark' type='primary' title='primary 主要提示' />
```

#### 辅助描述

description 字号更小、颜色更浅

```tsx
<UPAlert
  type='warning'
  title='标题：账号存在风险'
  description='描述：检测到你的账号在异地登录，如非本人操作请及时修改密码。'
/>
```

#### 显示图标

showIcon，图标由 type 自动推导

```tsx
<UPAlert showIcon type='primary' title='primary 主要提示' />
```

#### 自定义图标

icon 优先级高于 type 的默认图标

```tsx
<UPAlert showIcon icon='bell' type='primary' title='使用 bell 图标' />
```

#### 文字居中

center=true

```tsx
<UPAlert center type='primary' title='这是一条居中的提示' />
```

#### 字体大小

fontSize，单位默认 px

```tsx
<UPAlert type='primary' fontSize={12} title='fontSize = 12' />
```

#### 自定义关闭区域

closeSlot 替换默认叉号

```tsx
<UPAlert
  closable
  type='primary'
  title='右侧是自定义的关闭内容'
  closeSlot={<UPIcon name='trash' size={15} color='primary' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/alert/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`title`和`description`设置组件的标题和描述内容
- 通过`type`设置主题类型，有`primary`,`success`,`error`,`warning`,`info`可选值
- 通过`effect`设置主题浅或深色调，有`light`(浅色 默认),`dark`(深色)可选值

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

#### 图标

通过`showIcon`设置是否显示图标，作用是让信息类型更加醒目。

**注意**：当前版本图标为uview-plus内置图标，根据`type`参数显示不同的图标，无法自定义。

```vue
<up-alert type="warning" :show-icon="true"></up-alert>
```

#### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。
- `closable`参数配置是否可关闭

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/alert.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`title`和`description`设置组件的标题和描述内容
- 通过`type`设置主题类型，有`primary`,`success`,`error`,`warning`,`info`可选值
- 通过`effect`设置主题浅或深色调，有`light`(浅色 默认),`dark`(深色)可选值

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

#### 图标

通过`showIcon`设置是否显示图标，作用是让信息类型更加醒目。

**注意**：当前版本图标为uview-ultra内置图标，根据`type`参数显示不同的图标，无法自定义。

```vue
<up-alert type="warning" :show-icon="true"></up-alert>
```

#### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。
- `closable`参数配置是否可关闭

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/alert.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 显示文字 | `String` | `''` |
| `type` | 主题，success/warning/info/error | `String` | `'warning'` |
| `description` | 辅助性文字 | `String` | `''` |
| `closable` | 是否可关闭 | `Boolean` | `false` |
| `showIcon` | 是否显示图标 | `Boolean` | `false` |
| `effect` | 浅或深色调，light-浅色，dark-深色 | `String` | `'light'` |
| `center` | 文字是否居中 | `Boolean` | `false` |
| `fontSize` | 字体大小 | `String / Number` | `14` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPAlert` | `UltraUI/Sources/UltraUI/Components/UPAlert.swift` |
| Android · Jetpack Compose | `UPAlert` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPAlert.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPAlert` | `ultra-ui/src/main/ets/components/UPAlert.ets` |
| Flutter · Dart | `UPAlert` | `packages/ultra_ui/lib/src/widgets/up_alert.dart` |
| React Native · TypeScript | `UPAlert` | `src/components/alert` |
| Taro · React + TypeScript | `UPAlert` | `src/ultra-ui/components/up-alert` |
| uni-app · Vue 3 | `up-alert` | `uni_modules/uview-ultra/components/up-alert` |
| uni-app-x · UTS / UVUE | `up-alert` | `uni_modules/uview-ultra/components/up-alert` |

