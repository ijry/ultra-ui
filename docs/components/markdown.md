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

<UPMarkdown content={basicContent} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/MarkdownDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

标题、正文、行内标记与链接

```tsx
import { UPMarkdown } from '@ultra-ui'

<UPMarkdown content={basicMd} />
```

### 列表与引用

有序、无序、嵌套与引用块

```tsx
<UPMarkdown content={listMd} />
```

### 代码块

围栏代码块保留缩进，可切换行号显示

```tsx
<UPMarkdown content={codeMd} showLineNumber={showLineNumber} />
```

### 表格

GFM 表格语法

```tsx
<UPMarkdown content={tableMd} />
```

### 文本可选

selectable 允许长按选中

```tsx
<UPMarkdown content='可以长按选中这段 **markdown** 文字。' selectable />
```

### 空内容

content 为空时不渲染任何节点

```tsx
<UPMarkdown content='' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/markdown/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/markdown/markdown.uvue`</small>

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

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPMarkdown` | `packages/ultra_ui/lib/src/widgets/up_markdown.dart` |
| React Native · TypeScript | `UPMarkdown` | `src/components/markdown` |
| Taro · React + TypeScript | `UPMarkdown` | `src/ultra-ui/components/up-markdown` |
| uni-app · Vue 3 | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |
| uni-app-x · UTS / UVUE | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |

