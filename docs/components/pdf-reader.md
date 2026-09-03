---
title: PDF reader PDF 阅读器
description: 内嵌 PDF 浏览器，支持翻页与缩放。
generated: true
---

# PDF reader PDF 阅读器

内嵌 PDF 浏览器，支持翻页与缩放。

<PlatformBadges component="pdf-reader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 默认

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPdfReader(
  key: const ValueKey('pdf-reader-page-viewer'),
  src: _pdfFileUrl,
  baseUrl: '',
  viewerBuilder: (viewerUrl) => UPPdfView(
    target: resolvePdfTarget(viewerUrl),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/pdf_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPdfReader } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 自定义地址

输入其他 PDF 链接后重新加载

```tsx
import { UPPdfReader } from '@ultra-ui'

<UPPdfReader src={src} height='360px' />
```

#### 自定义高度

height 控制容器高度

```tsx
<UPPdfReader src={SAMPLE} height='240px' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/pdf-reader/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`src`参数传入PDF文件的URL地址即可显示PDF内容。

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl">
		</up-pdf-reader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const pdfUrl = ref('https://example.com/sample.pdf')
</script>
```

#### 自定义高度

通过[height]参数可以设置PDF阅读器的高度。

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl" 
			height="500px">
		</up-pdf-reader>
	</view>
</template>
```

#### 使用自定义pdf.js

通过[baseUrl]参数可以指定自定义的pdf.js资源地址，注意需要下载pdfjs.zip进static目录，并打包部署一份H5网站到自己的服务器。

下载链接: https://pan.baidu.com/s/1tYi2GI77g5Js25wrAO0UaA?pwd=kxp8 提取码: kxp8 复制这段内容后打开百度网盘手机App，操作更方便哦

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl" 
			baseUrl="https://your-domain.com">
		</up-pdf-reader>
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/pdfReader.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`src`参数传入PDF文件的URL地址即可显示PDF内容。

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl">
		</up-pdf-reader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const pdfUrl = ref('https://example.com/sample.pdf')
</script>
```

#### 自定义高度

通过[height]参数可以设置PDF阅读器的高度。

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl" 
			height="500px">
		</up-pdf-reader>
	</view>
</template>
```

#### 使用自定义pdf.js

通过[baseUrl]参数可以指定自定义的pdf.js资源地址，注意需要下载pdfjs.zip进static目录，并打包部署一份H5网站到自己的服务器。

下载链接: https://pan.baidu.com/s/1tYi2GI77g5Js25wrAO0UaA?pwd=kxp8 提取码: kxp8 复制这段内容后打开百度网盘手机App，操作更方便哦

```vue
<template>
	<view>
		<up-pdf-reader 
			:src="pdfUrl" 
			baseUrl="https://your-domain.com">
		</up-pdf-reader>
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/pdfReader.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | PDF文件地址 | `String` | `—` |
| `height` | 组件高度 | `String` | `—` |
| `baseUrl` | pdfjs资源域名 | `String` | `—` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPPdfReader` | `packages/ultra_ui/lib/src/widgets/up_pdf_reader.dart` |
| React Native · TypeScript | `UPPdfReader` | `src/components/pdf-reader` |
| Taro · React + TypeScript | `UPPdfReader` | `src/ultra-ui/components/up-pdf-reader` |
| uni-app · Vue 3 | `up-pdf-reader` | `uni_modules/uview-ultra/components/up-pdf-reader` |
| uni-app-x · UTS / UVUE | `up-pdf-reader` | `uni_modules/uview-ultra/components/up-pdf-reader` |

