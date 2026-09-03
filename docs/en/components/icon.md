---
title: Icon
description: A built-in icon font, which also accepts an image path in place of a glyph.
generated: true
---

# Icon

A built-in icon font, which also accepts an image path in place of a glyph.

<PlatformBadges component="icon" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPIcon(name: icon, color: "primary", size: "30px")
```

<small>Snippet from `ultra-ui-ios/Demo/IconDemoView.swift`</small>

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/IconDemoPage.kt`</small>

</template>

<template #harmony>

#### Common icons

```typescript
import { UPIcon, UPIconProps } from '@lingyun/ultra-ui-hos';

UPIcon({ props: new UPIconProps({
  name: 'check', color: 'success', size: 28, label: '完成', labelPos: 'bottom', index: 'check',
  onClick: (index: UPRawValue): void => {
    this.select(String(index));
  }
}) })
```

#### Label position

```typescript
UPIcon({ props: new UPIconProps({ name: 'info', color: 'primary', label: '标签在左侧', labelPos: 'left', size: 22 }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/IconDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPIcon(name: name, size: 30, color: '#909399')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/icon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPIcon } from 'ultra-ui-rn';

<UPIcon customPrefix="xyicon" name="light-mode" size="30" color="#909399" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/IconDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPIcon } from '@ultra-ui'

<UPIcon name='home' />
```

#### Sizes

```tsx
<UPIcon name='star-fill' size={14} />
```

#### Colours

```tsx
<UPIcon name='heart-fill' size='26px' color='primary' />
```

#### Bold

```tsx
<UPIcon name='checkmark' size='28px' />
```

#### Text label

```tsx
<UPIcon name='photo' size='22px' label='右侧' labelPos='right' />
```

#### Label styling

```tsx
<UPIcon name='bell' size='20px' label='通知' />
```

#### Vertical nudge

```tsx
<UPIcon name='clock' size='24px' label='top=0' />
```

#### Image as icon

```tsx
<UPIcon
  name='https://cdn.uviewui.com/uview/common/logo.png'
  width='40px'
  height='40px'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/icon/index.tsx`</small>

</template>

<template #uniapp>

#### Global loading in newer versions

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

#### Icon loading failures on WeChat mini programs

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

#### Self-hosting the default icon font

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

#### Adding your own icon font

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

```vue
@font-face {
	font-family: 'xyicon';
	src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
```

```vue
<up-icon customPrefix="xyicon" name="light-mode"></up-icon>
```

#### Basic usage

```vue
<up-icon name="photo"></up-icon>
```

#### Restyling the icon

```vue
<up-icon name="photo" color="#2979ff" size="28"></up-icon>
```

#### Image as icon

```vue
<up-icon label="uview-plus" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></up-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/icon.md`</small>

</template>

<template #uniappx>

#### Global loading in newer versions

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

#### Self-hosting the default icon font

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

#### Adding your own icon font

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

```vue
@font-face {
	font-family: 'xyicon';
	src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
```

```vue
<up-icon customPrefix="xyicon" name="light-mode"></up-icon>
```

#### Basic usage

```vue
<up-icon name="photo"></up-icon>
```

#### Restyling the icon

```vue
<up-icon name="photo" color="#2979ff" size="28"></up-icon>
```

#### Image as icon

```vue
<up-icon label="uview-ultra" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></up-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/icon.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPIcon` | `UltraUI/Sources/UltraUI/Components/UPIcon.swift` |
| Android · Jetpack Compose | `UPIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPIcon` | `ultra-ui/src/main/ets/components/UPIcon.ets` |
| Flutter · Dart | `UPIcon` | `packages/ultra_ui/lib/src/widgets/up_icon.dart` |
| React Native · TypeScript | `UPIcon` | `src/components/icon` |
| Taro · React + TypeScript | `UPIcon` | `src/ultra-ui/components/up-icon` |
| uni-app · Vue 3 | `up-icon` | `uni_modules/uview-ultra/components/up-icon` |
| uni-app-x · UTS / UVUE | `up-icon` | `uni_modules/uview-ultra/components/up-icon` |

