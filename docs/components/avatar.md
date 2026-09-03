---
title: Avatar 头像
description: 展示用户头像，支持图片、文字、图标三种内容与头像组堆叠。
generated: true
---

# Avatar 头像

展示用户头像，支持图片、文字、图标三种内容与头像组堆叠。

<PlatformBadges component="avatar" show-missing />

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
import net.lingyun.ultraui.android.components.UPAvatar
import net.lingyun.ultraui.android.components.UPAvatarProps

UPAvatar(props = UPAvatarProps(text = "U", randomBgColor = true, name = "avatar-u"), onClick = {
    eventText = "头像：$it"
})
```

```kotlin
UPAvatar(props = UPAvatarProps(text = "A", shape = "square", bgColor = "#2979ff", color = "#ffffff"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPAvatar, UPAvatarProps } from '@lingyun/ultra-ui-hos';

UPAvatar({ props: new UPAvatarProps({ text: '林', name: 'lingyun', randomBgColor: true, onClick: (event: UPAvatarClickEvent): void => { this.select(event); } }) })
```

```typescript
UPAvatar({ props: new UPAvatarProps({ text: 'UI', shape: 'square', bgColor: 'primary', size: 48, onClick: (event: UPAvatarClickEvent): void => { this.select(event); } }) })
```

```typescript
UPAvatar({ props: new UPAvatarProps({ icon: 'account', bgColor: 'success', size: 56, onClick: (event: UPAvatarClickEvent): void => { this.select(event); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/AvatarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPAvatar(
  key: ValueKey('avatar-page-basic'),
  src: '${_base}1.jpg',
)
```

```dart
UPAvatar(
  key: const ValueKey('avatar-page-clickable'),
  src: '${_base}2.jpg',
  shape: 'circle',
  onClick: (_) => setState(() => _clickCount += 1),
)
```

```dart
const UPAvatar(
  src: '${_base}3.jpg',
  shape: 'square',
)
```

```dart
_avatarItem(const UPAvatar(src: '${_base}4.jpg', size: 30)
```

```dart
_avatarItem(const UPAvatar(src: '${_base}5.jpg', size: 40)
```

```dart
const UPAvatar(src: '${_base}6.jpg', size: 50)
```

```dart
_avatarItem(const UPAvatar(
  icon: 'red-packet-fill',
  fontSize: 22,
)
```

```dart
const UPAvatar(
  icon: 'star-fill',
  fontSize: 22,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/avatar_page.dart`</small>

</template>

<template #reactnative>

#### 基础演示

```tsx
import { UPAvatar } from 'ultra-ui-rn';

<UPAvatar src={src1} />
```

#### 头像形状

```tsx
<UPAvatar src={src3} shape="square" />
```

#### 头像尺寸

```tsx
<UPAvatar src={src4} size="30" />
```

#### 图标头像

```tsx
<UPAvatar icon="red-packet-fill" fontSize="22" />
```

#### 文字头像(自动背景色)

```tsx
<UPAvatar text="U" fontSize="20" randomBgColor colorIndex={0} />
```

#### 图片加载失败(显示默认头像)

```tsx
<UPAvatar src={src7} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/AvatarDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

src 传图片地址，默认 40px 圆形

```tsx
import { UPAvatar } from '@ultra-ui'

<UPAvatar src={PIC} />
```

#### 形状

shape：circle 圆形 / square 方形

```tsx
<UPAvatar src={PIC} shape='circle' />
```

#### 尺寸

size 支持数字（px）与带单位字符串

```tsx
<UPAvatar src={PIC} size={24} />
```

#### 文字头像

text 优先级高于 src，可配 bgColor / color / fontSize

```tsx
<UPAvatar text='张' />
```

#### 随机背景色

randomBgColor 随机取色，colorIndex 可锁定 0-19 号色

```tsx
<UPAvatar text='随' randomBgColor />
```

#### 图标头像

icon 优先级高于 src

```tsx
<UPAvatar icon='camera' bgColor='#ebedf0' color='#909399' />
```

#### 裁剪模式

mode 取值同 Taro Image

```tsx
<UPAvatar src={PIC} size={56} shape='square' mode={mode} />
```

#### 加载失败

src 无效时回退 defaultUrl，未配置则用内置兜底头像

```tsx
<UPAvatar src={BROKEN} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/avatar/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`src`指定头像的路径即可简单使用，如果传递了`text`参数，`text`将会优先起作用  

**注意：** 请保证传递给`src`的是绝对地址，而不是相对地址，为什么呢？因为传入`avatar`组件的相对地址，是相对于组件的，而不是父组件(页面)，所以相对址可能会出错。

```vue
<template>
	<view>
		<up-avatar :src="src"></up-avatar>
		<up-avatar :text="text"></up-avatar>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg');
const text = ref('无头像');
</script>
```

#### 头像形状

- `shape`参数指定头像的形状，取值`circle`为圆形，取值`square`为圆角方形

```vue
<template>
	<up-avatar :src="src" shape="square"></up-avatar>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg');
</script>
```

#### 图标头像

- `icon`参数指定头像的图标，图标可参考`icon`组件

```vue
<view class="u-demo-block__content">
    <view class="u-avatar-item">
        <up-avatar
                icon="red-packet-fill"
                fontSize="22"
        ></up-avatar>
    </view>
    <view class="u-avatar-item">
        <up-avatar
                icon="star-fill"
                fontSize="22"
        ></up-avatar>
    </view>
</view>

<style lang="scss">
    .u-demo-block__content {
        @include flex;
        align-items: center;
    }

    .u-avatar-item {
        margin-right: 30px;
    }
</style>
```

#### 文字头像（自动背景色）

- `randomBgColor`参数开启头像的自动背景色

```vue
<template>
    <up-avatar
            text="北"
            fontSize="18"
            randomBgColor
    ></up-avatar>
</template>
```

#### 头像组

使用`up-avatar-group`实现头像组

```vue
<template>
    <up-avatar-group
            :urls="urls"
            size="35"
            gap="0.4"
    ></up-avatar-group>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式数组  
const urls = reactive([  
    'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/2.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/3.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/4.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/7.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/6.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/5.jpg'  
]);  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/avatar.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`src`指定头像的路径即可简单使用，如果传递了`text`参数，`text`将会优先起作用  

**注意：** 请保证传递给`src`的是绝对地址，而不是相对地址，为什么呢？因为传入`avatar`组件的相对地址，是相对于组件的，而不是父组件(页面)，所以相对址可能会出错。

```vue
<template>
	<view>
		<up-avatar :src="src"></up-avatar>
		<up-avatar :text="text"></up-avatar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				text: '无头像'
			}
		}
	}
</script>
```

#### 头像形状

- `shape`参数指定头像的形状，取值`circle`为圆形，取值`square`为圆角方形

```vue
<template>
	<up-avatar :src="src" shape="square"></up-avatar>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
			}
		}
	}
</script>
```

#### 图标头像

- `icon`参数指定头像的图标，图标可参考`icon`组件

```vue
<view class="u-demo-block__content">
    <view class="u-avatar-item">
        <up-avatar
                icon="red-packet-fill"
                fontSize="22"
        ></up-avatar>
    </view>
    <view class="u-avatar-item">
        <up-avatar
                icon="star-fill"
                fontSize="22"
        ></up-avatar>
    </view>
</view>

<style lang="scss">
    .u-demo-block__content {
        @include flex;
        align-items: center;
    }

    .u-avatar-item {
        margin-right: 30px;
    }
</style>
```

#### 文字头像（自动背景色）

- `randomBgColor`参数开启头像的自动背景色

```vue
<template>
    <up-avatar
            text="北"
            fontSize="18"
            randomBgColor
    ></up-avatar>
</template>
```

#### 头像组

使用`up-avatar-group`实现头像组

```vue
<template>
    <up-avatar-group
            :urls="urls"
            size="35"
            gap="0.4"
    ></up-avatar-group>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式数组  
const urls = reactive([  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/1.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/2.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/3.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/4.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/7.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/6.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/5.jpg'  
]);  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/avatar.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-avatar>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 头像图片路径(不能为相对路径) | `String` | `''` |
| `shape` | 头像形状，circle-圆形，square-方形 | `String` | `'circle'` |
| `size` | 头像尺寸 | `String / Number` | `40` |
| `mode` | 裁剪模式 | `String` | `'scaleToFill'` |
| `text` | 显示的文字 | `String` | `''` |
| `bgColor` | 背景色 | `String` | `'#c0c4cc'` |
| `color` | 文字颜色 | `String` | `'#ffffff'` |
| `fontSize` | 文字大小 | `String / Number` | `18` |
| `icon` | 显示的图标 | `String` | `''` |
| `mpAvatar` | 显示小程序头像，只对百度，微信，QQ小程序有效 | `Boolean` | `false` |
| `randomBgColor` | 是否使用随机背景色 | `Boolean` | `false` |
| `defaultUrl` | 加载失败的默认头像(组件有内置默认图片) | `String` | `''` |
| `colorIndex` | 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间 | `String / Number` | `''` |
| `name` | 组件标识符 | `String` | `''` |

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-avatar-group>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `urls` | 头像图片组 | `Array` | `[]` |
| `maxCount` | 最多展示的头像数量 | `String / Number` | `5` |
| `shape` | 头像形状 | `String` | `'circle'` |
| `mode` | 图片裁剪模式 | `String` | `'scaleToFill'` |
| `showMore` | 超出maxCount时是否显示查看更多的提示 | `Boolean` | `true` |
| `size` | 头像大小 | `String / Number` | `40` |
| `keyName` | 指定从数组的对象元素中读取哪个属性作为图片地址 | `String` | `''` |
| `gap` | 头像之间的遮挡比例 | `String / Number` | `0.5` |
| `extraValue` | 需额外显示的值 | `Number / String` | `0` |

#### 事件

| 事件名 |
| --- |
| `showMore` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPAvatar` | `UltraUI/Sources/UltraUI/Components/UPAvatar.swift` |
| Android · Jetpack Compose | `UPAvatar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPAvatar.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPAvatar` | `ultra-ui/src/main/ets/components/UPAvatar.ets` |
| Flutter · Dart | `UPAvatar` | `packages/ultra_ui/lib/src/widgets/up_avatar.dart` |
| React Native · TypeScript | `UPAvatar` | `src/components/avatar` |
| Taro · React + TypeScript | `UPAvatar` | `src/ultra-ui/components/up-avatar` |
| uni-app · Vue 3 | `up-avatar` | `uni_modules/uview-ultra/components/up-avatar` |
| uni-app-x · UTS / UVUE | `up-avatar` | `uni_modules/uview-ultra/components/up-avatar` |

