---
title: Rich text 富文本解析
description: 把 HTML 字符串解析为各端原生节点渲染。
generated: true
---

# Rich text 富文本解析

把 HTML 字符串解析为各端原生节点渲染。

<PlatformBadges component="parse" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/parse_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/ParseDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/parse/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`content`参数绑定需要解析的内容即可。

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

可以通过设置`selectable`参数为`true`来实现长按复制的效果

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### 设置样式

可以有两种方法可设置富文本的样式：

- 通过组件的`tagStyle`参数可以精细化的对单独的标签设置样式，注意此方式设置的样式为**字符串**的形式，而非**对象**形式：

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

- 通过父元素标签，统一设置全文的颜色，行高，字体大小等，注意这种方式无法对单独的标签设置样式：

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

- 设置`lazyLoad`为`true`即可开启图片懒加载功能
- 设置`loadingImg`为网络路径或者base64图片，可以在图片加载完成前展示占位图

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### 链接跳转/锚点

H5、App（含NVUE）外链可以直接打开，小程序端将自动复制链接  
小程序端`a`标签设置`app-id`后可以跳转到其他小程序

```vue
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<br>

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/parse.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`content`参数绑定需要解析的内容即可。

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

可以通过设置`selectable`参数为`true`来实现长按复制的效果

```vue
<up-parse :content="content" :selectable="true"></up-parse>
```

#### 设置样式

可以有两种方法可设置富文本的样式：

- 通过组件的`tagStyle`参数可以精细化的对单独的标签设置样式，注意此方式设置的样式为**字符串**的形式，而非**对象**形式：

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

- 通过父元素标签，统一设置全文的颜色，行高，字体大小等，注意这种方式无法对单独的标签设置样式：

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

- 设置`lazyLoad`为`true`即可开启图片懒加载功能
- 设置`loadingImg`为网络路径或者base64图片，可以在图片加载完成前展示占位图

```vue
<up-parse :content="content" :lazyLoad="true" :loadingImg="/xxx/xxx.jpg"></up-parse>
```

#### 链接跳转/锚点

H5、App（含NVUE）外链可以直接打开，小程序端将自动复制链接  
小程序端`a`标签设置`app-id`后可以跳转到其他小程序

```vue
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<br>

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/parse.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `click` |
| `error` |
| `imgTap` |
| `linkTap` |
| `load` |
| `play` |
| `ready` |
| `tap` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPParse` | `packages/ultra_ui/lib/src/widgets/up_parse.dart` |
| React Native · TypeScript | `UPParse` | `src/components/parse` |
| Taro · React + TypeScript | `UPParse` | `src/ultra-ui/components/up-parse` |
| uni-app · Vue 3 | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |
| uni-app-x · UTS / UVUE | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |

