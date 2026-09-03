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

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPMarkdown(
  key: ValueKey('markdown-page-basic'),
  content: _basicContent,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/markdown_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPMarkdown } from 'ultra-ui-rn';

<UPMarkdown content={CONTENT} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/MarkdownDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPMarkdown } from '@ultra-ui'

<UPMarkdown content={basicMd} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/markdown/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/markdown/markdown.nvue`</small>

</template>

<template #uniappx>

```vue
<up-markdown :content="basicContent"></up-markdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/markdown/markdown.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `content` | markdown内容 | `String` | `—` |
| `previewImg` | 是否启用图片预览 | `Boolean` | `—` |
| `copyLink` | 是否允许外部链接被点击时自动打开 | `Boolean / String` | `—` |
| `domain` | 主域名，用于 up-parse 处理相对链接 | `String` | `—` |
| `showLineNumber` | 是否显示代码块行号 | `Boolean` | `—` |
| `theme` | 主题样式 'light' &#124; 'dark' | `String` | `—` |

### Events

| Event |
| --- |
| `error` |
| `imgtap` |
| `linktap` |
| `load` |
| `play` |
| `ready` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPMarkdown` | `packages/ultra_ui/lib/src/widgets/up_markdown.dart` |
| React Native · TypeScript | `UPMarkdown` | `src/components/markdown` |
| Taro · React + TypeScript | `UPMarkdown` | `src/ultra-ui/components/up-markdown` |
| uni-app · Vue 3 | `up-markdown` | `src/uni_modules/uview-plus/components/u-markdown` |
| uni-app-x · UTS / UVUE | `up-markdown` | `uni_modules/uview-ultra/components/up-markdown` |

