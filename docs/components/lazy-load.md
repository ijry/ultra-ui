---
title: Lazy load 图片懒加载
description: 进入视口后才真正加载图片，减少首屏请求。
generated: true
---

# Lazy load 图片懒加载

进入视口后才真正加载图片，减少首屏请求。

<PlatformBadges component="lazy-load" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLazyLoad(
  index: index,
  image: _images[index],
  threshold: -450,
  height: '100px',
  imgMode: 'aspectFill',
  borderRadius: 10,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/lazy_load_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLazyLoad } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 自定义占位色

placeholder 传颜色字符串

```tsx
import { UPLazyLoad } from '@ultra-ui'

<UPLazyLoad
  key={index}
  src={src}
  width='100%'
  height='360rpx'
  placeholder='#ecf5ff'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/lazy-load/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`image`参数传入图片的`src`路径即可

:::warning 注意
由于uni-app默认给了image组件的`height`为225px，同时也只有在uni-appimage组件的`mode`参数为`widthFix`时，image才会自动计算出一个高度值
覆盖默认的`height`(225px)。其他`mode`参数下，如果设置`height`参数为`auto`，或者`100%`的话，图片将会无法显示。  

所以：当您使用uView的`lazyload`组件时，如果设置`height`参数为`auto`，或者`100%`，而`img-mode`参数又不为`widthFix`的话，图片将会不显示，这不是uView的BUG。  

结论：如果`img-mode`参数不为`widthFix`的话，必须设置`height`参数为一个固定的高度(单位rpx)，否则无效。
:::

```vue
<template>
	<view>
		<up-lazy-load v-for="(item, index) in list" :key="index" :image="item.src"></up-lazy-load>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref([
  {
    src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
  },
  {
    src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
  },
  {
    src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
  },
  {
    // 这里图片不存在，会加载失败，显示错误的占位图
    src: "xxx",
  },
]);
</script>
```

#### 配置占位图

占位图有两种情况：
- 一种是正常预加载时显示的，通过`loading-img`配置类似"正在加载"的占位图。
- 另一种是图片加载失败(如图片不存在，路径不完整等)，通过`error-img`参数配置类似"图片加载错误"的占位图

```vue
<template>
	<view>
		<up-lazy-load :image="image" :loading-img="loadingImg" :error-img="errorImg"></up-lazy-load>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const image = ref("https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg");
const loadingImg = ref('/static/uView/loading.png');
const errorImg = ref('/static/uView/load_error.png');
</script>
```

#### 图片加载位置

可以通过`threshold`参数设置图片距离屏幕底部多少距离时触发图片加载，单位rpx，说明：
- 如果取负值(如-300)，为尚未到达屏幕底部，距离300rpx时触发
- 如果取正数(如300)，为图片超出屏幕底部300rpx时触发

```vue
<up-lazy-load :image="image" threshold="300"></up-lazy-load>
```

```vue
<script setup>
import { ref } from 'vue';

const image = ref("https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg");
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/lazyLoad.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`image`参数传入图片的`src`路径即可

:::warning 注意
由于uni-app默认给了image组件的`height`为225px，同时也只有在uni-appimage组件的`mode`参数为`widthFix`时，image才会自动计算出一个高度值
覆盖默认的`height`(225px)。其他`mode`参数下，如果设置`height`为`auto`，或者`100%`的话，图片将会无法显示。  

所以：当您使用uView的`lazyload`组件时，如果设置`height`参数为`auto`，或者`100%`，而`img-mode`参数又不为`widthFix`的话，图片将会不显示，这不是uView的BUG。  

结论：如果`img-mode`参数不为`widthFix`的话，必须设置`height`参数为一个固定的高度(单位rpx)，否则无效。
:::

```vue
<template>
	<view>
		<up-lazy-load v-for="(item, index) in list" :key="index" :image="item.src"></up-lazy-load>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 设计成数组内嵌对象而不是纯数组形式，是考虑到真实环境后端返回的数据为如此形式
				list: [{
						src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
					},
					{
						src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",
					},
					{
						src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",
					},
					{
						// 这里图片不存在，会加载失败，显示错误的占位图
						src: "xxx",
					},
				]
			}
		}
	}
</script>
```

#### 配置占位图

占位图有两种情况：
- 一种是正常预加载时显示的，通过`loading-img`配置类似"正在加载"的占位图。
- 另一种是图片加载失败(如图片不存在，路径不完整等)，通过`error-img`参数配置类似"图片加载错误"的占位图

```vue
<template>
	<view>
		<up-lazy-load :image="image" :loading-img="loadingImg" :error-img="errorImg"></up-lazy-load>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				image: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
				loadingImg: '/static/uView/loading.png',
				errorImg: '/static/uView/load_error.png'
			}
		}
	}
</script>
```

#### 图片加载位置

可以通过`threshold`参数设置图片距离屏幕底部多少距离时触发图片加载，单位rpx，说明：
- 如果取负值(如-300)，为尚未到达屏幕底部，距离300rpx时触发
- 如果取正数(如300)，为图片超出屏幕底部300rpx时触发

```vue
<up-lazy-load :image="image" threshold="300"></up-lazy-load>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/lazyLoad.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `click` |
| `error` |
| `load` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPLazyLoad` | `packages/ultra_ui/lib/src/widgets/up_lazy_load.dart` |
| React Native · TypeScript | `UPLazyLoad` | `src/components/lazy-load` |
| Taro · React + TypeScript | `UPLazyLoad` | `src/ultra-ui/components/up-lazy-load` |
| uni-app · Vue 3 | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |
| uni-app-x · UTS / UVUE | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |

