---
title: Rich text
description: Parses an HTML string into native nodes on every platform.
generated: true
---

# Rich text

Parses an HTML string into native nodes on every platform.

<PlatformBadges component="parse" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPParse(
  content: parseSourceContent,
  domain: _domain,
  lazyLoad: true,
  scrollTable: true,
  selectable: true,
  useAnchor: true,
  imageSourceResolver: _offlineImageSource,
  onLinkTap: (href) => _handleSourceLink(context, href),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/parse_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPParse } from 'ultra-ui-rn';

<UPParse
  containerStyle="padding: 20px" // CSS string from upstream; deprecated in RN (use customStyle)
  content={content}
  customStyle={s.parse}
  domain="https://6874-html-foe72-1259071903.tcb.qcloud.la/demo"
  lazyLoad
  scrollTable
  selectable
  tagStyle={tagStyle}
  useAnchor
  // Upstream wires: @load, @ready, @imgTap, @linkTap as no-ops
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/ParseDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPParse } from '@ultra-ui'

<UPParse content={basicHtml} />
```

#### Lists and blockquotes

```tsx
<UPParse content={listHtml} />
```

#### Table

```tsx
<UPParse content={tableHtml} />
```

#### Content sanitising

```tsx
<UPParse content={unsafeHtml} />
```

#### HTML entities

```tsx
<UPParse content={entityHtml} />
```

#### Resolving relative paths

```tsx
<UPParse content={relativeHtml} domain='https://cdn.uviewui.com' />
```

#### Empty-state fallback

```tsx
<UPParse content=''>
  <View className='parse-demo__empty'>
    <Text className='parse-demo__empty-text'>暂无内容</Text>
  </View>
</UPParse>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/parse/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view class="up-content">
		<up-parse :content="content"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const content = ref(`  
	<p>露从今夜白，月是故乡明</p>  
	<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />  
`);  
</script>
```

```vue
<style lang="scss" scoped>
    .up-content {
        padding: 24rpx;
    }
</style>
```

#### Long-press to copy

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### Styling it

```vue
<template>
	<view class="up-content">
		<up-parse :content="content" :tagStyle="style"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const paragraphText = ref('露从今夜白，月是故乡明');  
const imageSrc = ref('https://cdn.uviewui.com/uview/swiper/2.jpg');  
  
// 样式对象，可以直接绑定到元素上  
const styles = "{p: { color: 'red', fontSize: '32rpx'  },  span: {  fontSize: '30rpx'  }  }";  
</script>
```

```vue
<template>
	<view class="up-content">
		<up-parse :content="content"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const content = ref(`  
	<p>露从今夜白，月是故乡明</p>  
	<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />  
`);  
</script>
```

```vue
<style lang="scss" scoped>
    .up-content {
        padding: 24rpx;
        font-size: 32rpx;
        color: $u-content-color;
        line-height: 1.6;
    }
</style>
```

#### Lazy loading with a placeholder

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### Links and anchors

```vue
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/parse.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view class="up-content">
		<up-parse :content="content"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const content = ref(`  
	<p>露从今夜白，月是故乡明</p>  
	<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />  
`);  
</script>
```

```vue
<style lang="scss" scoped>
    .up-content {
        padding: 24rpx;
    }
</style>
```

#### Long-press to copy

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### Styling it

```vue
<template>
	<view class="up-content">
		<up-parse :content="content" :tagStyle="style"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const paragraphText = ref('露从今夜白，月是故乡明');  
const imageSrc = ref('https://cdn.uviewui.com/uview/swiper/2.jpg');  
  
// 样式对象，可以直接绑定到元素上  
const styles = {  
  p: {  
    color: 'red',  
    fontSize: '32rpx'  
  },  
  span: {  
    fontSize: '30rpx'  
  }  
};  
</script>
```

```vue
<template>
	<view class="up-content">
		<up-parse :content="content"></up-parse>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const content = ref(`  
	<p>露从今夜白，月是故乡明</p>  
	<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />  
`);  
</script>
```

```vue
<style lang="scss" scoped>
    .up-content {
        padding: 24rpx;
        font-size: 32rpx;
        color: $up-content-color;
        line-height: 1.6;
    }
</style>
```

#### Lazy loading with a placeholder

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### Links and anchors

```vue
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/parse.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `containerStyle` | — | `String` | `—` |
| `copyLink` | — | `Boolean` | `true` |
| `errorImg` | — | `String` | `''` |
| `lazyLoad` | — | `Boolean` | `false` |
| `loadingImg` | — | `String` | `''` |
| `pauseVideo` | — | `Boolean` | `true` |
| `previewImg` | — | `Boolean` | `true` |
| `setTitle` | — | `Boolean` | `true` |
| `showImgMenu` | — | `Boolean` | `true` |

### Events

| Event |
| --- |
| `click` |
| `error` |
| `imgTap` |
| `linkTap` |
| `load` |
| `play` |
| `ready` |
| `tap` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPParse` | `packages/ultra_ui/lib/src/widgets/up_parse.dart` |
| React Native · TypeScript | `UPParse` | `src/components/parse` |
| Taro · React + TypeScript | `UPParse` | `src/ultra-ui/components/up-parse` |
| uni-app · Vue 3 | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |
| uni-app-x · UTS / UVUE | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |

