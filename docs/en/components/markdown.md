---
title: Markdown
description: Renders Markdown text, including code blocks and tables.
generated: true
---

# Markdown

Renders Markdown text, including code blocks and tables.

<PlatformBadges component="markdown" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPMarkdown(
  key: ValueKey('markdown-page-basic'),
  content: _basicContent,
)
```

#### 带代码块行号

```dart
UPMarkdown(
  key: ValueKey('markdown-page-line-number'),
  content: _codeContent,
  showLineNumber: true,
)
```

#### 深色主题

```dart
UPMarkdown(
  key: ValueKey('markdown-page-dark'),
  content: _basicContent,
  theme: 'dark',
)
```

#### AI流式内容显示

```dart
UPMarkdown(
  key: const ValueKey('markdown-page-streaming'),
  content: _streamingContent,
  showLineNumber: true,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/markdown_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPMarkdown } from 'ultra-ui-rn';

<UPMarkdown content={basicContent} />
```

```tsx
<UPMarkdown content={codeContent} showLineNumber />
```

```tsx
<UPMarkdown content={basicContent} theme="dark" />
```

```tsx
<UPMarkdown content={streamingContent} showLineNumber />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/MarkdownDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

标题、正文、行内标记与链接

```tsx
import { UPMarkdown } from '@ultra-ui'

<UPMarkdown content={basicMd} />
```

#### 列表与引用

有序、无序、嵌套与引用块

```tsx
<UPMarkdown content={listMd} />
```

#### 代码块

围栏代码块保留缩进，可切换行号显示

```tsx
<UPMarkdown content={codeMd} showLineNumber={showLineNumber} />
```

#### 表格

GFM 表格语法

```tsx
<UPMarkdown content={tableMd} />
```

#### 深色主题

theme='dark' 时改写代码块、引用与链接配色

```tsx
<UPMarkdown content={codeMd} theme={dark ? 'dark' : 'light'} />
```

#### 文本可选

selectable 允许长按选中

```tsx
<UPMarkdown content='可以长按选中这段 **markdown** 文字。' selectable />
```

#### 空内容

content 为空时不渲染任何节点

```tsx
<UPMarkdown content='' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/markdown/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

```vue
<up-markdown :content="codeContent" :show-line-number="true"></up-markdown>
```

```vue
<up-markdown :content="basicContent" theme="dark"></up-markdown>
```

```vue
<up-markdown :content="streamingContent" :show-line-number="true"></up-markdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/markdown/markdown.uvue`</small>

</template>

<template #uniappx>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

```vue
<up-markdown :content="codeContent" :show-line-number="true"></up-markdown>
```

```vue
<up-markdown :content="basicContent" theme="dark"></up-markdown>
```

```vue
<up-markdown :content="streamingContent" :show-line-number="true"></up-markdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/markdown/markdown.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPMarkdown` | `packages/ultra_ui/lib/src/widgets/up_markdown.dart` |
| React Native · TypeScript | `UPMarkdown` | `src/components/markdown` |
| Taro · React + TypeScript | `UPMarkdown` | `src/ultra-ui/components/up-markdown` |
| uni-app · Vue 3 | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |
| uni-app-x · UTS / UVUE | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |

