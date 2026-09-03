---
title: Icon 图标
description: 内置字体图标库，同时支持传入图片路径作为图标使用。
generated: true
---

# Icon 图标

内置字体图标库，同时支持传入图片路径作为图标使用。

<PlatformBadges component="icon" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPIcon(name: icon, color: "primary", size: "30px")
```

<small>示例来源 `ultra-ui-ios/Demo/IconDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPIcon
import net.lingyun.ultraui.android.components.UPIconProps

UPIcon(
    props = UPIconProps(
        name = name,
        size = 30,
        color = "#909399",
        stop = true,
    ),
    modifier = Modifier.padding(bottom = 10.dp),
)
```

```kotlin
UPIcon(
    props = UPIconProps(
        name = "map",
        size = 24,
        color = "primary",
        label = label,
        labelPos = position,
    ),
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/IconDemoPage.kt`</small>

</template>

<template #harmony>

#### 常用图标

```typescript
import { UPIcon, UPIconProps } from '@lingyun/ultra-ui-hos';

UPIcon({ props: new UPIconProps({
  name: 'check', color: 'success', size: 28, label: '完成', labelPos: 'bottom', index: 'check',
  onClick: (index: UPRawValue): void => {
    this.select(String(index));
  }
}) })
```

#### 标签方向

```typescript
UPIcon({ props: new UPIconProps({ name: 'info', color: 'primary', label: '标签在左侧', labelPos: 'left', size: 22 }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/IconDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPIcon(name: name, size: 30, color: '#909399')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/icon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPIcon } from 'ultra-ui-rn';

<UPIcon customPrefix="xyicon" name="light-mode" size="30" color="#909399" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/IconDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

name 指定内置图标名

```tsx
import { UPIcon } from '@ultra-ui'

<UPIcon name='home' />
```

#### 尺寸

size 支持数字（px 语义）与带单位字符串

```tsx
<UPIcon name='star-fill' size={14} />
```

#### 颜色

color 支持主题 token 与任意 CSS 颜色

```tsx
<UPIcon name='heart-fill' size='26px' color='primary' />
```

#### 加粗

bold 属性

```tsx
<UPIcon name='checkmark' size='28px' />
```

#### 文字标签

label + labelPos 控制文字位置

```tsx
<UPIcon name='photo' size='22px' label='右侧' labelPos='right' />
```

#### 标签样式

labelSize / labelColor / space

```tsx
<UPIcon name='bell' size='20px' label='通知' />
```

#### 垂直微调

top 让图标相对基线上下偏移

```tsx
<UPIcon name='clock' size='24px' label='top=0' />
```

#### 图片图标

name 含 / 时按图片渲染，用 width / height / imgMode 控制

```tsx
<UPIcon
  name='https://cdn.uviewui.com/uview/common/logo.png'
  width='40px'
  height='40px'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/icon/index.tsx`</small>

</template>

<template #uniapp>

#### 新版本全局加载兼容性

默认不再加载一次，需要只加载一次可以配置如下参数：

```js
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					// 只加载一次字体图标
					loadFontOnce: true
				}
			}
		}
	})
```

#### 微信小程序图标加载异常处理

正常情况下，`u-icon` 会自动加载字体。如果微信小程序出现图标不显示或字体加载失败，可以在 `App.vue` 的 `onLaunch` 中手动调用 `fontUtil.loadFont()`，确保字体在应用启动时完成加载。

```vue
<script>
import { fontUtil } from 'uview-plus'

export default {
	onLaunch() {
		fontUtil.loadFont()
	}
}
</script>
```

:::tip
`fontUtil` 已从 uview-plus 主入口直接导出，无需从组件内部路径导入。通过 uni_modules 安装时，将导入路径改为 `@/uni_modules/uview-plus`。
:::

#### 自定义默认字体图标自托管资源

受限于uni.loadFontFace，目前仅在APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台支持自定义。
https://zh.uniapp.dcloud.io/api/ui/font.html
因公共CDN存在不稳定等问题，建议将图标放在自己的服务器上，然后在uview-plus初始化时如下配置加载字体图标：

Tips
字体链接需要是下载类型。
字体文件返回的 content-type 参考 font，格式不正确时会解析失败。
字体链接必须是 https（ios不支持http)。
建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
字体链接必须是同源下的，或开启了cors支持，小程序的域名是servicewechat.com
微信开发者工具里提示 Faild to load font可以忽略(这是微信自己的问题不用管https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)

```js
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					// 默认字体图标自托管资源地址
					iconUrl: 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf'
				}
			}
		}
	})
```

#### 扩充自定义字体图标

如果内置图标不够用可以使用如下方式扩展

APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台如下示例：

```js
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					customIcon: {
						family: 'xyicon',
						url: 'https://at.alicdn.com/t/c/font_1305928_egvk3tbr3fs.ttf?t=1744189362601'
					},
					customIcons: {
						'light-mode' : '\ue66c'
					}
				}
			}
		}
	})
```

其他平台如抖音/QQ/百度小程序请直接在App.vue定一个一个css示例如下：

```vue
@font-face {
	font-family: 'xyicon';
	src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
```

扩展图标使用方式

```vue
<up-icon customPrefix="xyicon" name="light-mode"></up-icon>
```

#### 基本使用

<br>


icon下载地址
:::

<br>

通过`<up-icon>`形式来调用，设置`name`参数为图标名即可。其中`color`默认为`#606266`，`size`默认为`16px`

```vue
<up-icon name="photo"></up-icon>
```

#### 修改图标的样式

- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为px

```vue
<up-icon name="photo" color="#2979ff" size="28"></up-icon>
```

#### 图片图标

这里说的图片图标，指的是小图标，起作用定位为"icon"图标作用，而非大尺寸的图片展示场景，理论上，这个小图标应该为`png`格式的正方形图标。

上面说到，给组件的`name`参数传入一个图片的名称即可显示字体图标，这些名称中不能带有`/`斜杠符号，否则会被认为是传入了图片图标，同时，`size`参数
也被设置为这个图片图标的宽度，由于是图片，诸如颜色`color`等参数都会失效。

```vue
<up-icon label="uview-plus" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></up-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/icon.md`</small>

</template>

<template #uniappx>

#### 新版本全局加载兼容性

默认不再加载一次，需要只加载一次可以配置如下参数：

```js
app.use(store)
	.use(i18n)
	.use(ultrUI, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					// 只加载一次字体图标
					loadFontOnce: true
				}
			}
		}
	})
```

#### 自定义默认字体图标自托管资源

受限于uni.loadFontFace，目前仅在APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台支持自定义。
https://zh.uniapp.dcloud.io/api/ui/font.html
因公共CDN存在不稳定等问题，建议将图标放在自己的服务器上，然后在uview-ultra初始化时如下配置加载字体图标：

Tips
字体链接需要是下载类型。
字体文件返回的 content-type 参考 font，格式不正确时会解析失败。
字体链接必须是 https（ios不支持http)。
建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
字体链接必须是同源下的，或开启了cors支持，小程序的域名是servicewechat.com
微信开发者工具里提示 Faild to load font可以忽略(这是微信自己的问题不用管https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)

```js
app.use(store)
	.use(i18n)
	.use(ultrUI, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					// 默认字体图标自托管资源地址
					iconUrl: 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf'
				}
			}
		}
	})
```

#### 扩充自定义字体图标

如果内置图标不够用可以使用如下方式扩展

APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台如下示例：

```js
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改config对象的属性
				config: {
					customIcon: {
						family: 'xyicon',
						url: 'https://at.alicdn.com/t/c/font_1305928_egvk3tbr3fs.ttf?t=1744189362601'
					},
					customIcons: {
						'light-mode' : '\ue66c'
					}
				}
			}
		}
	})
```

其他平台如抖音/QQ/百度小程序请直接在App.vue定一个一个css示例如下：

```vue
@font-face {
	font-family: 'xyicon';
	src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
```

扩展图标使用方式

```vue
<up-icon customPrefix="xyicon" name="light-mode"></up-icon>
```

#### 基本使用

<br>


icon下载地址
:::

<br>

通过`<up-icon>`形式来调用，设置`name`参数为图标名即可。其中`color`默认为`#606266`，`size`默认为`16px`

```vue
<up-icon name="photo"></up-icon>
```

#### 修改图标的样式

- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为px

```vue
<up-icon name="photo" color="#2979ff" size="28"></up-icon>
```

#### 图片图标

这里说的图片图标，指的是小图标，起作用定位为"icon"图标作用，而非大尺寸的图片展示场景，理论上，这个小图标应该为`png`格式的正方形图标。

上面说到，给组件的`name`参数传入一个图片的名称即可显示字体图标，这些名称中不能带有`/`斜杠符号，否则会被认为是传入了图片图标，同时，`size`参数
也被设置为这个图片图标的宽度，由于是图片，诸如颜色`color`等参数都会失效。

```vue
<up-icon label="uview-ultra" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></up-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/icon.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标类名 | `String` | `''` |
| `color` | 图标颜色，可接受主题色 | `String` | `color['up-content-color']` |
| `size` | 字体大小，单位px | `String / Number` | `'16px'` |
| `bold` | 是否显示粗体 | `Boolean` | `false` |
| `index` | 点击图标的时候传递事件出去的index（用于区分点击了哪一个） | `String / Number` | `''` |
| `hoverClass` | 触摸图标时的类名 | `String` | `''` |
| `customPrefix` | 自定义扩展前缀，方便用户扩展自己的图标库 | `String` | `'upicon'` |
| `label` | 图标右边或者下面的文字 | `String / Number` | `''` |
| `labelPos` | label的位置，只能右边或者下边 | `String` | `'right'` |
| `labelSize` | label的大小 | `String / Number` | `'15px'` |
| `labelColor` | label的颜色 | `String` | `color['up-content-color']` |
| `space` | label与图标的距离 | `String / Number` | `'3px'` |
| `imgMode` | 图片的mode | `String` | `''` |
| `width` | 用于显示图片小图标时，图片的宽度 | `String / Number` | `''` |
| `height` | 用于显示图片小图标时，图片的高度 | `String / Number` | `''` |
| `top` | 用于解决某些情况下，让图标垂直居中的用途 | `String / Number` | `'0'` |
| `stop` | 是否阻止事件传播 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPIcon` | `UltraUI/Sources/UltraUI/Components/UPIcon.swift` |
| Android · Jetpack Compose | `UPIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPIcon` | `ultra-ui/src/main/ets/components/UPIcon.ets` |
| Flutter · Dart | `UPIcon` | `packages/ultra_ui/lib/src/widgets/up_icon.dart` |
| React Native · TypeScript | `UPIcon` | `src/components/icon` |
| Taro · React + TypeScript | `UPIcon` | `src/ultra-ui/components/up-icon` |
| uni-app · Vue 3 | `up-icon` | `uni_modules/uview-ultra/components/up-icon` |
| uni-app-x · UTS / UVUE | `up-icon` | `uni_modules/uview-ultra/components/up-icon` |

