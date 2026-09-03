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

#### 基础用法

标题、段落与行内标签

```tsx
import { UPParse } from '@ultra-ui'

<UPParse content={basicHtml} />
```

#### 列表与引用

ul / ol / blockquote

```tsx
<UPParse content={listHtml} />
```

#### 表格

table / thead / tbody / th / td

```tsx
<UPParse content={tableHtml} />
```

#### 内容净化

script / style 整树丢弃，事件属性与危险协议链接剔除

```tsx
<UPParse content={unsafeHtml} />
```

#### HTML 实体

实体自动解码且文本不碎片化

```tsx
<UPParse content={entityHtml} />
```

#### 相对路径补全

domain 指定主域名

```tsx
<UPParse content={relativeHtml} domain='https://cdn.uviewui.com' />
```

#### 空内容兜底

content 为空时渲染 children

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

#### 基本使用

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

#### 长按复制

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### 设置样式

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

#### 懒加载和占位图

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### 链接跳转/锚点

```vue
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/parse.md`</small>

</template>

<template #uniappx>

#### 基本使用

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

#### 长按复制

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### 设置样式

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

#### 懒加载和占位图

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### 链接跳转/锚点

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

