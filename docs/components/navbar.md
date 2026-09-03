---
title: Navbar 自定义导航栏
description: 替代系统导航栏，自动处理状态栏高度与返回逻辑。
generated: true
---

# Navbar 自定义导航栏

替代系统导航栏，自动处理状态栏高度与返回逻辑。

<PlatformBadges component="navbar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPNavbar
import net.lingyun.ultraui.android.components.UPNavbarProps

DemoSection("导航栏") { UPNavbar(UPNavbarProps(title = "订单详情"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPNavbar, UPNavbarProps } from '@lingyun/ultra-ui-hos';

UPNavbar({ props: new UPNavbarProps({ title: '订单详情', leftText: '返回', rightText: '更多', border: true, autoBack: true, navigationAdapter: this.adapter(), onLeftClick: (): void => { this.message = '先收到左侧点击回调'; }, onRightClick: (): void => { this.message = '右侧点击'; } }) })
```

```typescript
UPNavbar({ props: new UPNavbarProps({ title: '占位导航', safeAreaInsetTop: false, placeholder: true, bgColor: '#ecf5ff' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/NavbarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNavbar(
  key: const ValueKey('navbar-ios-page-navbar'),
  mode: 'ios',
  title: '设置',
  scrollTop: _scrollTop,
  autoBack: true,
  rightIcon: 'search',
  safeAreaInsetTop: false,
  fixed: false,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/navbar_ios_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNavbar } from 'ultra-ui-rn';

<UPNavbar
  fixed={false}
  leftText="返回"
  rightIcon="map"
  safeAreaInsetTop={false}
  title="个人中心"
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/NavbarDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

仅设置 title，默认 fixed={false}

```tsx
import { UPNavbar } from '@ultra-ui'

<UPNavbar safeAreaInsetTop={false} title='个人中心' />
```

#### 下边框

border 属性

```tsx
<UPNavbar safeAreaInsetTop={false} border title='带下边框' />
```

#### 自定义颜色

bgColor / titleColor，bgColor 支持渐变

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  title='渐变导航栏'
  bgColor='linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))'
  titleColor='#ffffff'
  leftIconColor='#ffffff'
/>
```

#### 高度与标题样式

height / titleStyle

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  border
  title='高度 60px'
  height='60px'
  titleStyle={{ fontSize: '18px', fontWeight: 'bold' }}
/>
```

#### 标题宽度

titleWidth 限制宽度，超出以省略号显示

```tsx
<UPNavbar
  safeAreaInsetTop={false}
  border
  title='这是一个非常非常长的导航栏标题会被截断'
  titleWidth='160px'
/>
```

#### 状态栏背景色

safeAreaInsetTop 开启后，statusBarBgColor 可单独设置状态栏背景

```tsx
<UPNavbar
  safeAreaInsetTop
  title='状态栏单独着色'
  bgColor='#ffffff'
  statusBarBgColor='#3c9cff'
  border
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/navbar/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

默认情况下，该组件只有向左的箭头，**点击**可以返回上一页，如果您想将自定义导航栏用在tabbar(不存在要返回的逻辑)页面，
这样会隐藏左边的返回图标区域。

- 如果想在返回箭头的右边自定义类似"返回"字样，可以将`left-text`设置为"返回"
- 通过`title`参数传入需要显示的标题，通过`title-width`(rpx)设置标题区域的宽度，文字超出会通过省略号隐藏
- 通过`fixed`配置是否将导航栏固定在顶部

:::tip 说明
- 在小程序中，导航栏会自动适配导航栏右侧的胶囊位置，避开该区域
- 组件底部默认有一条下边框，如您不需要，可以设置`border`为`false`即可
:::

```vue
<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar
            title="个人中心"
            @rightClick="rightClick"
            :autoBack="true"
        >
        </up-navbar>
	</view>
</template>
```

```vue
<script setup>  
  
// 定义方法  
const rightClick = () => {  
    console.log('rightClick');  
};  
  
const leftClick = () => {  
    console.log('leftClick');  
};  

</script>
```

#### 注意事项

既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，
自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。

```js
// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom" ,// 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]
```

#### 自定义导航栏内容

通过自定义`slot`传入的内容

```vue
<template>
	<view>
        <up-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <template #left>
                <view
                    class="u-nav-slot"
                >
                    <up-icon
                        name="arrow-left"
                        size="19"
                    ></up-icon>
                    <up-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 8px"
                    ></up-line>
                    <up-icon
                        name="home"
                        size="20"
                    ></up-icon>
                </view>
          </template>
	</up-navbar>
  </view>
</template>
```

#### 自定义导航栏背景颜色

uview-plus提供了一个`bgColor`参数，可以自定义导航栏的背景颜色：

```vue
<template>
	<view>
		<up-navbar title="" :bgColor="bgColor">
			
		</up-navbar>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const bgColor = ref('#001f3f');  
</script>
```

#### iOS 大标题模式

通过 `mode="ios"` 启用现代 iOS 系统应用的导航栏体验：进入页面时导航栏背景透明、标题以大字号靠左显示；向下滚动时大标题被压缩进导航栏，标题过渡为常规居中形态，同时出现毛玻璃磨砂背景。

组件内部无法获取页面级的 `onPageScroll`，因此必须由页面把滚动距离通过 `scrollTop` 传入。

```vue
<template>
	<view>
		<up-navbar
			mode="ios"
			title="设置"
			:scrollTop="scrollTop"
			:autoBack="true"
		></up-navbar>
		<view><!-- 页面内容 --></view>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';

const scrollTop = ref(0);

onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
});
</script>
```

:::warning 注意
- `mode="ios"` 下 `fixed` 与 `placeholder` 会被**忽略**：导航栏恒定固定，大标题所在的占位层恒定渲染。因为该层承载的是大标题这一实际内容，而非可选占位
- 不传 `scrollTop` 时导航栏会停留在大标题展开态，不会报错。这是有意的静默降级
- `bgColor` 传入后会作为压缩态背景并仍按曲线淡入；传入**不透明**颜色会掩盖模糊效果
- `title` 为空字符串时不渲染大标题行，导航栏初始即为磨砂态
- 使用 `center` 插槽时，插槽内容随压缩过程淡入上浮，但大标题始终取 `title` 属性渲染。若需要大标题，必须同时传 `title`
- nvue 端不支持该模式，传入 `mode="ios"` 时渲染为 `default` 形态
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/navbar.md`</small>

</template>

<template #uniappx>

#### 基本使用

默认情况下，该组件只有向左的箭头，**点击**可以返回上一页，如果您想将自定义导航栏用在tabbar(不存在要返回的逻辑)页面，
这样会隐藏左边的返回图标区域。

- 如果想在返回箭头的右边自定义类似"返回"字样，可以将`left-text`设置为"返回"
- 通过`title`参数传入需要显示的标题，通过`title-width`(rpx)设置标题区域的宽度，文字超出会通过省略号隐藏
- 通过`fixed`配置是否将导航栏固定在顶部

:::tip 说明
- 在小程序中，导航栏会自动适配导航栏右侧的胶囊位置，避开该区域
- 组件底部默认有一条下边框，如您不需要，可以设置`border`为`false`即可
:::

```vue
<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar
            title="个人中心"
            @rightClick="rightClick"
            :autoBack="true"
        >
        </up-navbar>
	</view>
</template>
```

```vue
<script setup>  
  
// 定义方法  
const rightClick = () => {  
    console.log('rightClick');  
};  
  
const leftClick = () => {  
    console.log('leftClick');  
};  

</script>
```

#### 注意事项

既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，
自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。

```js
// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom" ,// 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]
```

#### 自定义导航栏内容

通过自定义`slot`传入的内容

```vue
<template>
	<view>
        <up-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <template #left>
                <view
                    class="u-nav-slot"
                >
                    <up-icon
                        name="arrow-left"
                        size="19"
                    ></up-icon>
                    <up-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 8px"
                    ></up-line>
                    <up-icon
                        name="home"
                        size="20"
                    ></up-icon>
                </view>
          </template>
	</up-navbar>
  </view>
</template>
```

#### 自定义导航栏背景颜色

uview-ultra提供了一个`bgColor`参数，可以自定义导航栏的背景颜色：

```vue
<template>
	<view>
		<up-navbar title="" :bgColor="bgColor">
			
		</up-navbar>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const bgColor = ref('#001f3f');  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/navbar.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-navbar>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `safeAreaInsetTop` | 是否开启顶部安全区适配 | `Boolean` | `true` |
| `placeholder` | 固定在顶部时，是否生成一个等高元素，以防止塌陷 | `Boolean` | `false` |
| `fixed` | 是否固定在顶部 | `Boolean` | `true` |
| `border` | 是否显示下边框 | `Boolean` | `false` |
| `leftIcon` | 左边的图标 | `String` | `'arrow-left'` |
| `leftText` | 左边的提示文字 | `String` | `''` |
| `rightText` | 左右的提示文字 | `String` | `''` |
| `rightIcon` | 右边的图标 | `String` | `''` |
| `title` | 标题 | `String / Number` | `''` |
| `bgColor` | 背景颜色 | `String` | `'var(--up-navbar-bg-color, #ffffff)'` |
| `titleWidth` | 标题的宽度 | `String / Number` | `'400rpx'` |
| `height` | 导航栏高度 | `String / Number` | `'44px'` |
| `leftIconSize` | 左侧返回图标的大小 | `String / Number` | `20` |
| `leftIconColor` | 左侧返回图标的颜色 | `String` | `'var(--up-main-color, #303133)'` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `false` |
| `titleStyle` | 标题的样式，对象或字符串 | `String / Object` | `''` |
| `mode` | 导航栏模式，default-常规，ios-大标题模式 | `String` | `'default'` |
| `scrollTop` | 页面滚动距离，仅 ios 模式使用，由页面 onPageScroll 传入 | `String / Number` | `0` |

#### 事件

| 事件名 |
| --- |
| `leftClick` |
| `rightClick` |

#### 插槽

| 插槽名 |
| --- |
| `center` |
| `left` |
| `right` |

### `<up-navbar-mini>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `safeAreaInsetTop` | 是否开启顶部安全区适配 | `Boolean` | `true` |
| `fixed` | 是否固定在顶部 | `Boolean` | `true` |
| `leftIcon` | 左边的图标 | `String` | `'arrow-leftward'` |
| `bgColor` | 背景颜色 | `String` | `'rgba(0,0,0,.15)'` |
| `height` | 导航栏高度 | `String / Number` | `'32px'` |
| `iconSize` | 图标的大小 | `String / Number` | `'20px'` |
| `iconColor` | 图标的颜色 | `String` | `'#fff'` |
| `autoBack` | 点击左侧区域(返回图标)，是否自动返回上一页 | `Boolean` | `true` |
| `homeUrl` | 首页路径 | `String` | `''` |

#### 事件

| 事件名 |
| --- |
| `homeClick` |
| `leftClick` |

#### 插槽

| 插槽名 |
| --- |
| `center` |
| `left` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPNavbar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPNavbar` | `ultra-ui/src/main/ets/components/UPNavbar.ets` |
| Flutter · Dart | `UPNavbar` | `packages/ultra_ui/lib/src/widgets/up_navbar.dart` |
| React Native · TypeScript | `UPNavbar` | `src/components/navbar` |
| Taro · React + TypeScript | `UPNavbar` | `src/ultra-ui/components/up-navbar` |
| uni-app · Vue 3 | `up-navbar` | `uni_modules/uview-ultra/components/up-navbar` |
| uni-app-x · UTS / UVUE | `up-navbar` | `uni_modules/uview-ultra/components/up-navbar` |

