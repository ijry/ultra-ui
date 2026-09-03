---
title: Safe bottom 底部安全区
description: 为 iPhone 等带 Home 指示条的机型撑出底部安全距离。
generated: true
---

# Safe bottom 底部安全区

为 iPhone 等带 Home 指示条的机型撑出底部安全距离。

<PlatformBadges component="safe-bottom" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSafeBottom

DemoSection("底部安全区") { BasicText("内容"); UPSafeBottom()
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSafeBottom, UPSafeBottomProps } from '@lingyun/ultra-ui-hos';

UPSafeBottom({ props: new UPSafeBottomProps({ safeAreaInsetBottom: true }) }) { Text('safeAreaInsetBottom=true').fontSize(12).fontColor('#909399') }
```

```typescript
UPSafeBottom({ props: new UPSafeBottomProps({ safeAreaInsetBottom: false, customStyle: { backgroundColor: '#ecf5ff', padding: { bottom: 10 } } }) }) { Text('关闭安全区并指定 padding').fontSize(12).fontColor('#2979ff') }
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SafeBottomDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

#### 底部安全区域占位

```tsx
import { UPSafeBottom } from 'ultra-ui-rn';

<UPSafeBottom />
```

#### 自定义背景色

```tsx
<UPSafeBottom customStyle={{ backgroundColor: '#333' }} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/SafeBottomDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSafeBottom } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 底部安全区

这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。  
uview-plus是uni-app态的UI框架uni-app专门针对底部安全区域的解决方案，具体如下(也可见uni官方说明[全面屏、刘海屏适配（iphoneX适配）及安全区设置](https://ask.dcloud.net.cn/article/35564))：
- 在APP上(以下只对APP生效)，可以通过项目根目录的`mainfest.json`文件`app-plus`节点下配置`safearea`的`bottom`属性为`none`，以此来关闭IPhone X等机型的底部安全区域。
配置后需要重新编译，并重启调试基座才会生效，具体如下：

```json
"app-plus": {
	"safearea": {
		"bottom": {
			"offset": "none"
		}
	}
}
```

如果`offset`设置为`auto`，那么在IPhone X的底部安全区，APP上就会生成一个原生的元素进行占位，此时也就无需解决安全区指示条引起的问题。

- 在非APP端，诸如小程序，或者微信浏览器(其他浏览器，如UC等手机浏览器，底部有浏览器工具条，不存在安全区指示条引起的问题)，底部是没有安全区占位的，
这种情况，就要使用css去解决，一般是通过给元素添加底部内边距的形式，如下：

```vue
<style>  
	.list {  
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);  
	}  
</style>
```

鉴于以上问题，uview-plus提供了一个组件`up-safe-bottom`，如果有需要，您可以在任何地方引用它，它会自动判断在并且在IPhone X等机型的时候，给元素加上一个适当
底部内边距，在APP上，即使您保留了原生安全区占位(`offset`设置为`auto`)，也不会导致底部出现双倍的空白区域，也即APP上`offset`设置为`auto`时。

```vue
<template>
	<view>
		......
		<up-safe-bottom></up-safe-bottom>
	</view>
</template>
```

#### 顶部安全区

由于我们在做页面布局时经常会使用顶部位置，uview-plus提供了一个组件`up-status-bar`，如`up-popup`从顶部弹出时，可以考虑使用此组件。

```vue
<template>
	<view>
		<up-status-bar></up-status-bar>
		......
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/safeAreaInset.md`</small>

</template>

<template #uniappx>

#### 底部安全区

这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。  
uview-ultra是uni-app态的UI框架uni-app专门针对底部安全区域的解决方案，具体如下(也可见uni官方说明[全面屏、刘海屏适配（iphoneX适配）及安全区设置](https://ask.dcloud.net.cn/article/35564))：
- 在APP上(以下只对APP生效)，可以通过项目根目录的`mainfest.json`文件`app-plus`节点下配置`safearea`的`bottom`属性为`none`，以此来关闭IPhone X等机型的底部安全区域。
配置后需要重新编译，并重启调试基座才会生效，具体如下：

```json
"app-plus": {
	"safearea": {
		"bottom": {
			"offset": "none"
		}
	}
}
```

如果`offset`设置为`auto`，那么在IPhone X的底部安全区，APP上就会生成一个原生的元素进行占位，此时也就无需解决安全区指示条引起的问题。

- 在非APP端，诸如小程序，或者微信浏览器(其他浏览器，如UC等手机浏览器，底部有浏览器工具条，不存在安全区指示条引起的问题)，底部是没有安全区占位的，
这种情况，就要使用css去解决，一般是通过给元素添加底部内边距的形式，如下：

```vue
<style>  
	.list {  
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);  
	}  
</style>
```

鉴于以上问题，uview-ultra提供了一个组件`up-safe-bottom`，如果有需要，您可以在任何地方引用它，它会自动判断在并且在IPhone X等机型的时候，给元素加上一个适当
底部内边距，在APP上，即使您保留了原生安全区占位(`offset`设置为`auto`)，也不会导致底部出现双倍的空白区域，也即APP上`offset`设置为`auto`时。

```vue
<template>
	<view>
		......
		<up-safe-bottom></up-safe-bottom>
	</view>
</template>
```

#### 顶部安全区

由于我们在做页面布局时经常会使用顶部位置，uview-ultra提供了一个组件`up-status-bar`，如`up-popup`从顶部弹出时，可以考虑使用此组件。

```vue
<template>
	<view>
		<up-status-bar></up-status-bar>
		......
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/safeAreaInset.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSafeBottom` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSafeBottom` | `ultra-ui/src/main/ets/components/UPSafeBottom.ets` |
| Flutter · Dart | `UPSafeBottom` | `packages/ultra_ui/lib/src/widgets/up_safe_bottom.dart` |
| React Native · TypeScript | `UPSafeBottom` | `src/components/safe-bottom` |
| Taro · React + TypeScript | `UPSafeBottom` | `src/ultra-ui/components/up-safe-bottom` |
| uni-app · Vue 3 | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |
| uni-app-x · UTS / UVUE | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |

