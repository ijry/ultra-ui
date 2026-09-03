---
title: Button 按钮
description: 最基础的操作单元，内置六种主题、四种尺寸，支持镂空、加载态与渐变色。
generated: true
---

# Button 按钮

最基础的操作单元，内置六种主题、四种尺寸，支持镂空、加载态与渐变色。

<PlatformBadges component="button" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

#### 主题类型

```swift
import SwiftUI
import UltraUI

UPButton(type: "primary", size: "large", text: "主按钮")
```

#### 形状和状态

```swift
UPButton(type: "primary", shape: "circle", text: "胶囊按钮")
```

#### 尺寸和图标

```swift
UPButton(type: "primary", size: "small", text: "Small")
```

<small>示例来源 `ultra-ui-ios/Demo/ButtonDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPButton
import net.lingyun.ultraui.android.components.UPButtonProps

UPButton(
    props = UPButtonProps(text = "主要按钮", type = "primary", shape = "circle"),
    onClick = { eventText = "按钮：点击 primary" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

#### 基础类型

```typescript
import { UPButton, UPButtonProps } from '@lingyun/ultra-ui-hos';

UPButton({ props: new UPButtonProps({
  text: '主要按钮',
  type: 'primary',
  onClick: (): void => {
    this.click('主要按钮');
  }
}) })
```

#### 加载与禁用

```typescript
UPButton({ props: new UPButtonProps({
  text: '切换加载状态',
  loading: this.loading,
  loadingText: '处理中',
  type: 'primary',
  onClick: (): void => {
    this.loading = !this.loading;
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ButtonDemo.ets`</small>

</template>

<template #flutter>

#### 按钮类型

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPButton(
  text: '默认按钮',
  type: 'info',
  onClick: () => setState(() => _showActionSheet = true),
)
```

#### 镂空按钮

```dart
UPButton(text: '镂空按钮', type: 'info', plain: true)
```

#### 细边按钮

```dart
UPButton(
    text: '细边按钮', type: 'info', plain: true, hairline: true)
```

#### 禁用按钮

```dart
UPButton(text: '禁用按钮', type: 'info', disabled: true)
```

#### 加载中

```dart
UPButton(
  loading: true,
  loadingText: '加载中',
  loadingMode: 'circle',
  type: 'success',
)
```

#### 按钮图标&按钮形状

```dart
UPButton(
  text: '按钮图标',
  icon: 'map',
  plain: true,
  type: 'warning',
)
```

#### 自定义颜色

```dart
UPButton(
  text: '渐变色按钮',
  customStyle: BoxDecoration(
    gradient: LinearGradient(
      colors: <Color>[Color(0xFF4253D8), Color(0xFFD333BA)],
    ),
  ),
)
```

#### 自定义大小

```dart
UPButton(text: '超大尺寸', size: 'large', type: 'success')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/button_page.dart`</small>

</template>

<template #reactnative>

#### 按钮类型

```tsx
import { UPButton } from 'ultra-ui-rn';

<UPButton text="成功按钮" size="normal" type="success" />
```

#### 镂空按钮

```tsx
<UPButton text="镂空按钮" size="normal" type="info" plain />
```

#### 细边按钮

```tsx
<UPButton text="细边按钮" size="normal" type="info" plain hairline />
```

#### 禁用按钮

```tsx
<UPButton disabled text="禁用按钮" size="normal" type="info" />
```

#### 加载中

```tsx
<UPButton loadingText="加载中" size="normal" loading loadingMode="circle" type="success" />
```

#### 按钮图标&按钮形状

```tsx
<UPButton text="按钮图标" size="normal" icon="map" plain type="warning" />
```

#### 自定义颜色

```tsx
<UPButton
  text="渐变色按钮"
  size="normal"
  color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
/>
```

#### 自定义大小

```tsx
<UPButton text="超大尺寸" size="large" type="success" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/ButtonDemo.tsx`</small>

</template>

<template #taro>

#### 主题

type 属性，共 5 种

```tsx
import { UPButton } from '@ultra-ui'

<UPButton text='info' />
```

#### 镂空

plain 属性，背景透明

```tsx
<UPButton plain text='info' />
```

#### 细边框

hairline 配合 plain 使用

```tsx
<UPButton plain hairline type='primary' text='primary' />
```

#### 禁用

```tsx
<UPButton disabled text='info' />
```

#### 形状

shape=circle 圆角 / square 方角

```tsx
<UPButton shape='circle' type='primary' text='circle' />
```

#### 尺寸

size：large / normal / small / mini

```tsx
<UPButton size='large' type='primary' text='large' />
```

#### 图标

```tsx
<UPButton icon='star' type='primary' text='收藏' />
```

#### 加载中

loading / loadingText / loadingMode

```tsx
<UPButton loading loadingMode='circle' loadingText='加载中' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/button/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

文字内容通过`text`传入

```vue
<up-button text="月落"></up-button>
```

#### 设置按钮的多种形态

- `type`值可选的有`default`(默认)、`primary`、`success`、`info`、`warning`、`error`
- 通过`plain`值设置是否镂空
- 通过`hairline`值设置是否细边
- 通过`disabled`值设置是否禁用
- 通过`loading`值设置是否开启加载图标，`loadingText`设置加载中文字
- 通过`icon`值设置是否显示图标
- 通过`shape`值设置按钮形状，circle为圆角
- 通过`color`值设置按钮渐变颜色
- 通过`size`值设置按钮的大小

```vue
<template>
	<view style="padding: 20px;">
		<up-button type="primary" text="确定"></up-button>
		<up-button type="primary" :plain="true" text="镂空"></up-button>
		<up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
		<up-button type="primary" :disabled="disabled" text="禁用"></up-button>
		<up-button type="primary" loading loadingText="加载中"></up-button>
		<up-button type="primary" icon="map" text="图标按钮"></up-button>
		<up-button type="primary" shape="circle" text="按钮形状"></up-button>
		<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
		<up-button type="primary" size="small" text="大小尺寸"></up-button>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const disabled = ref(true);
</script>
```

#### 定义需要用到的外部样式

1. 针对非微信小程序平台，组件的根元素就是uni-app`button`组件，所以修改按钮的样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可。
2. 如果是微信小程序，编译后页面会有组件同名的元素存在，导致样式传递有问题。
3. 如果是为了修改按钮与其他元素之间的距离或者宽度等，可以给按钮外面套一个`view`元素，控制这个`view`与其他元素的距离或者宽度，即可达到同等效果。
4. `3.8.75`起，`up-button`基础宽度遵循`auto`语义；普通按钮在`flex`横排中通常按内容参与布局，`size="large"`仍保持全宽。旧版本依赖普通按钮默认铺满父容器的页面，请显式设置`:custom-style="{ width: '100%' }"`或控制外层容器宽度。

所以：我们提供了一个`custom-style`参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。

```vue
<template>
	<view style="padding: 20px;">
		 <!-- 以下形式在微信小程序会无效，APP和H5有效  -->
		<up-button class="custom-style" text="雪月夜"></up-button>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const disabled = ref(true);
const customStyle = reactive({
  marginTop: '20px',
  color: 'red'
});
</script>

<style lang="scss" scoped>
	.custom-style {
		color: #ff0000;
		width: 400rpx;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/button.md`</small>

</template>

<template #uniappx>

#### 基本使用

文字内容通过`text`传入

```vue
<up-button text="月落"></up-button>
```

#### 设置按钮的多种形态

- `type`值可选的有`default`(默认)、`primary`、`success`、`info`、`warning`、`error`
- 通过`plain`值设置是否镂空
- 通过`hairline`值设置是否细边
- 通过`disabled`值设置是否禁用
- 通过`loading`值设置是否开启加载图标，`loadingText`设置加载中文字
- 通过`icon`值设置是否显示图标
- 通过`shape`值设置按钮形状，circle为圆角
- 通过`color`值设置按钮渐变颜色
- 通过`size`值设置按钮的大小

```vue
<template>
	<view style="padding: 20px;">
		<up-button type="primary" text="确定"></up-button>
		<up-button type="primary" :plain="true" text="镂空"></up-button>
		<up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
		<up-button type="primary" :disabled="disabled" text="禁用"></up-button>
		<up-button type="primary" loading loadingText="加载中"></up-button>
		<up-button type="primary" icon="map" text="图标按钮"></up-button>
		<up-button type="primary" shape="circle" text="按钮形状"></up-button>
		<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
		<up-button type="primary" size="small" text="大小尺寸"></up-button>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const disabled = ref(true);
</script>
```

#### 定义需要用到的外部样式

1. 针对非微信小程序平台，组件的根元素就是uni-app`button`组件，所以修改按钮的样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可。  
2. 如果是微信小程序，编译后页面会有组件同名的元素存在，导致样式传递有问题。 
3. 如果是为了修改按钮与其他元素之间的距离或者宽度等，可以给按钮外面套一个`view`元素，控制这个`view`与其他元素的距离或者宽度，即可达到同等效果。  

所以：我们提供了一个`custom-style`参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。

```vue
<template>
	<view style="padding: 20px;">
		 <!-- 以下形式在微信小程序会无效，APP和H5有效  -->
		<up-button class="custom-style" text="雪月夜"></up-button>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const disabled = ref(true);
const customStyle = reactive({
  marginTop: '20px',
  color: 'red'
});
</script>

<style lang="scss" scoped>
	.custom-style {
		color: #ff0000;
		width: 400rpx;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/button.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hairline` | 是否细边框 | `Boolean` | `false` |
| `type` | 按钮的预置样式，info，primary，error，warning，success | `String` | `'info'` |
| `size` | 按钮尺寸，large，normal，small，mini | `String` | `'normal'` |
| `shape` | 按钮形状，circle（两边为半圆），square（带圆角） | `String` | `'square'` |
| `plain` | 按钮是否镂空 | `Boolean` | `false` |
| `disabled` | 是否禁止状态 | `Boolean` | `false` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `loadingText` | 加载中提示文字 | `String / Number` | `''` |
| `loadingMode` | 加载状态图标类型 | `String` | `'spinner'` |
| `loadingSize` | 加载图标大小 | `String / Number` | `15` |
| `openType` | 开放能力，具体请看uniapp稳定关于button组件部分说明 https://uniapp.dcloud.io/component/button | `String` | `''` |
| `formType` | 用于 &lt;form&gt; 组件，点击分别会触发 &lt;form&gt; 组件的 submit/reset 事件 取值为submit（提交表单），reset（重置表单） | `String` | `''` |
| `appParameter` | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 只微信小程序、QQ小程序有效 | `String` | `''` |
| `hoverStopPropagation` | 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效 | `Boolean` | `true` |
| `lang` | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效 | `String` | `'en'` |
| `sessionFrom` | 会话来源，open-type="contact"时有效。只微信小程序有效 | `String` | `''` |
| `sendMessageTitle` | 会话内消息卡片标题，open-type="contact"时有效 默认当前标题，只微信小程序有效 | `String` | `''` |
| `sendMessagePath` | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 默认当前分享路径，只微信小程序有效 | `String` | `''` |
| `sendMessageImg` | 会话内消息卡片图片，open-type="contact"时有效 默认当前页面截图，只微信小程序有效 | `String` | `''` |
| `showMessageCard` | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示， 用户点击后可以快速发送小程序消息，open-type="contact"时有效 | `Boolean` | `false` |
| `dataName` | 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取 | `String` | `''` |
| `throttleTime` | 节流，一定时间内只能触发一次 | `String / Number` | `0` |
| `hoverStartTime` | 按住后多久出现点击态，单位毫秒 | `String / Number` | `0` |
| `hoverStayTime` | 手指松开后点击态保留时间，单位毫秒 | `String / Number` | `200` |
| `text` | 按钮文字，之所以通过props传入，是因为slot传入的话 nvue中无法控制文字的样式 | `String / Number` | `''` |
| `icon` | 按钮图标 | `String` | `''` |
| `iconColor` | 按钮图标 | `String` | `''` |
| `color` | 按钮颜色，支持传入linear-gradient渐变色 | `String` | `''` |

### 事件

| 事件名 |
| --- |
| `agreeprivacyauthorization` |
| `click` |
| `error` |
| `getphonenumber` |
| `getuserinfo` |
| `launchapp` |
| `opensetting` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPButton` | `UltraUI/Sources/UltraUI/Components/UPButton.swift` |
| Android · Jetpack Compose | `UPButton` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPButton.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPButton` | `ultra-ui/src/main/ets/components/UPButton.ets` |
| Flutter · Dart | `UPButton` | `packages/ultra_ui/lib/src/widgets/up_button.dart` |
| React Native · TypeScript | `UPButton` | `src/components/button` |
| Taro · React + TypeScript | `UPButton` | `src/ultra-ui/components/up-button` |
| uni-app · Vue 3 | `up-button` | `uni_modules/uview-ultra/components/up-button` |
| uni-app-x · UTS / UVUE | `up-button` | `uni_modules/uview-ultra/components/up-button` |

