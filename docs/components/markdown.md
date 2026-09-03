---
title: Markdown Markdown 渲染
description: 渲染 Markdown 文本，支持代码块与表格。
generated: true
---

# Markdown Markdown 渲染

渲染 Markdown 文本，支持代码块与表格。

<PlatformBadges component="markdown" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPMarkdown(
  key: ValueKey('markdown-page-basic'),
  content: _basicContent,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/markdown_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPMarkdown } from 'ultra-ui-rn';

<UPMarkdown content={CONTENT} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/MarkdownDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPMarkdown } from '@ultra-ui'

<UPMarkdown content={basicMd} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/markdown/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/markdown/markdown.nvue`</small>

</template>

<template #uniappx>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/markdown/markdown.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | markdown内容 | `String` | `—` |
| `previewImg` | 是否启用图片预览 | `Boolean` | `—` |
| `copyLink` | 是否允许外部链接被点击时自动打开 | `Boolean / String` | `—` |
| `domain` | 主域名，用于 up-parse 处理相对链接 | `String` | `—` |
| `showLineNumber` | 是否显示代码块行号 | `Boolean` | `—` |
| `theme` | 主题样式 'light' &#124; 'dark' | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `error` |
| `imgtap` |
| `linktap` |
| `load` |
| `play` |
| `ready` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPMarkdown` | `packages/ultra_ui/lib/src/widgets/up_markdown.dart` |
| React Native · TypeScript | `UPMarkdown` | `src/components/markdown` |
| Taro · React + TypeScript | `UPMarkdown` | `src/ultra-ui/components/up-markdown` |
| uni-app · Vue 3 | `up-markdown` | `src/uni_modules/uview-plus/components/u-markdown` |
| uni-app-x · UTS / UVUE | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |

