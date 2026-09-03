---
title: Lazy load
description: Defers image loading until it enters the viewport.
generated: true
---

# Lazy load

Defers image loading until it enters the viewport.

<PlatformBadges component="lazy-load" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/lazy_load_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLazyLoad } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### Custom placeholder colour

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

<small>Snippet from `ultra-ui-taro/src/pages/components/lazy-load/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

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

#### Placeholder image

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

#### Where the image loads

```vue
<up-lazy-load :image="image" threshold="300"></up-lazy-load>
```

```vue
<script setup>
import { ref } from 'vue';

const image = ref("https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg");
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/lazyLoad.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Placeholder image

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

#### Where the image loads

```vue
<up-lazy-load :image="image" threshold="300"></up-lazy-load>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/lazyLoad.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `click` |
| `error` |
| `load` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPLazyLoad` | `packages/ultra_ui/lib/src/widgets/up_lazy_load.dart` |
| React Native · TypeScript | `UPLazyLoad` | `src/components/lazy-load` |
| Taro · React + TypeScript | `UPLazyLoad` | `src/ultra-ui/components/up-lazy-load` |
| uni-app · Vue 3 | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |
| uni-app-x · UTS / UVUE | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |

