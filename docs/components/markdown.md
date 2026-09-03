---
title: Markdown Markdown 渲染
description: 渲染 Markdown 文本，支持代码块与表格。
generated: true
---

# Markdown Markdown 渲染

渲染 Markdown 文本，支持代码块与表格。

<PlatformBadges component="markdown" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/markdown_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/MarkdownDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/markdown/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

通过 `content` 属性传入 Markdown 文本内容。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="basicContent"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const basicContent = ref(`# 标题1
这是段落文本，包含**粗体**和*斜体*文本。

## 标题2
这是一个链接：[uview-plus](https://ijry.github.io/uview-plus)

### 列表示例
- 列表项1
- 列表项2
- 列表项3

> 这是一个引用块

---

段落中的行内代码： \`console.log('Hello World')\``);
</script>
```

#### 显示代码块行号

通过 `show-line-number` 属性控制是否显示代码块行号。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="codeContent" :show-line-number="true"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const codeContent = ref(`# 代码示例

以下是一个JavaScript函数：

\`\`\`javascript
function hello(name) {
    console.log('Hello, ' + name + '!');
}

hello('World');
\`\`\`

以下是一个Python示例：

\`\`\`python
def hello(name):
    print(f"Hello, {name}!")

hello("World")
\`\`\``);
</script>
```

#### 深色主题

通过 theme 属性设置主题样式，可选值为 `light`（默认）和 dark。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="basicContent" theme="dark"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const basicContent = ref(`# 标题1
这是段落文本，包含**粗体**和*斜体*文本。

## 标题2
这是一个链接：[uview-plus](https://ijry.github.io/uview-plus)

### 列表示例
- 列表项1
- 列表项2
- 列表项3

> 这是一个引用块

---

段落中的行内代码： \`console.log('Hello World')\``);
</script>
```

#### AI流式内容显示

模拟AI逐步输出文字的效果。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="streamingContent" :show-line-number="true"></up-markdown>
      <view style="flex-direction: row; margin-top: 10px;">
        <up-button 
          type="primary" 
          size="mini" 
          :text="isStreaming ? '停止' : '开始'" 
          @click="toggleStreaming"
          style="margin-right: 10px;"
        ></up-button>
        <up-button 
          type="default" 
          size="mini" 
          text="重置" 
          @click="resetStreaming"
        ></up-button>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref, onBeforeUnmount } from 'vue';

const fullAIContent = ref(`# AI助手回答

你好！我是AI助手，正在为你逐步生成回答内容...

## 问题分析

让我来分析你提出的问题：

1. 需要实现流式内容显示
2. 模拟AI逐步输出文字的效果
3. 使用定时器控制内容显示速度

## 解决方案

我们可以使用以下方法实现：

### 第一步：创建数据模型
\`\`\`javascript
data() {
  return {
    streamingContent: '',
    isStreaming: false,
    streamTimer: null
  }
}
\`\`\`

### 第二步：实现流式显示逻辑
\`\`\`javascript
methods: {
  startStreaming() {
    // 实现流式显示逻辑
  }
}
\`\`\`

## 总结

以上就是实现流式内容显示的基本方法。通过定时器控制内容逐字显示，可以营造出AI正在思考和逐步输出的效果。

这种交互方式在现代Web应用中非常常见，特别是在AI助手类产品中。

---

*内容生成完毕*`);

const streamingContent = ref('');
const isStreaming = ref(false);
const streamTimer = ref(null);
const streamIndex = ref(0);

// 开始/停止流式显示
const toggleStreaming = () => {
  if (isStreaming.value) {
    stopStreaming();
  } else {
    startStreaming();
  }
};

// 开始流式显示
const startStreaming = () => {
  if (isStreaming.value) return;
  
  // 如果是重新开始，重置索引
  if (streamIndex.value >= fullAIContent.value.length) {
    streamIndex.value = 0;
    streamingContent.value = '';
  }
  
  isStreaming.value = true;
  streamTimer.value = setInterval(() => {
    if (streamIndex.value < fullAIContent.value.length) {
      streamingContent.value += fullAIContent.value[streamIndex.value];
      streamIndex.value++;
    } else {
      stopStreaming();
    }
  }, 50); // 50ms间隔，模拟AI逐步输出
};

// 停止流式显示
const stopStreaming = () => {
  if (streamTimer.value) {
    clearInterval(streamTimer.value);
    streamTimer.value = null;
  }
  isStreaming.value = false;
};

// 重置流式显示
const resetStreaming = () => {
  stopStreaming();
  streamingContent.value = '';
  streamIndex.value = 0;
};

// 组件销毁前清理定时器
onBeforeUnmount(() => {
  stopStreaming();
});
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/markdown.md`</small>

</template>

<template #uniappx>

#### 基础用法

通过 `content` 属性传入 Markdown 文本内容。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="basicContent"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const basicContent = ref(`# 标题1
这是段落文本，包含**粗体**和*斜体*文本。

## 标题2
这是一个链接：[uview-plus](https://ijry.github.io/uview-plus)

### 列表示例
- 列表项1
- 列表项2
- 列表项3

> 这是一个引用块

---

段落中的行内代码： \`console.log('Hello World')\``);
</script>
```

#### 显示代码块行号

通过 `show-line-number` 属性控制是否显示代码块行号。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="codeContent" :show-line-number="true"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const codeContent = ref(`# 代码示例

以下是一个JavaScript函数：

\`\`\`javascript
function hello(name) {
    console.log('Hello, ' + name + '!');
}

hello('World');
\`\`\`

以下是一个Python示例：

\`\`\`python
def hello(name):
    print(f"Hello, {name}!")

hello("World")
\`\`\``);
</script>
```

#### 深色主题

通过 theme 属性设置主题样式，可选值为 `light`（默认）和 dark。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="basicContent" theme="dark"></up-markdown>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const basicContent = ref(`# 标题1
这是段落文本，包含**粗体**和*斜体*文本。

## 标题2
这是一个链接：[uview-plus](https://ijry.github.io/uview-plus)

### 列表示例
- 列表项1
- 列表项2
- 列表项3

> 这是一个引用块

---

段落中的行内代码： \`console.log('Hello World')\``);
</script>
```

#### AI流式内容显示

模拟AI逐步输出文字的效果。

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-markdown :content="streamingContent" :show-line-number="true"></up-markdown>
      <view style="flex-direction: row; margin-top: 10px;">
        <up-button 
          type="primary" 
          size="mini" 
          :text="isStreaming ? '停止' : '开始'" 
          @click="toggleStreaming"
          style="margin-right: 10px;"
        ></up-button>
        <up-button 
          type="default" 
          size="mini" 
          text="重置" 
          @click="resetStreaming"
        ></up-button>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref, onBeforeUnmount } from 'vue';

const fullAIContent = ref(`# AI助手回答

你好！我是AI助手，正在为你逐步生成回答内容...

## 问题分析

让我来分析你提出的问题：

1. 需要实现流式内容显示
2. 模拟AI逐步输出文字的效果
3. 使用定时器控制内容显示速度

## 解决方案

我们可以使用以下方法实现：

### 第一步：创建数据模型
\`\`\`javascript
data() {
  return {
    streamingContent: '',
    isStreaming: false,
    streamTimer: null
  }
}
\`\`\`

### 第二步：实现流式显示逻辑
\`\`\`javascript
methods: {
  startStreaming() {
    // 实现流式显示逻辑
  }
}
\`\`\`

## 总结

以上就是实现流式内容显示的基本方法。通过定时器控制内容逐字显示，可以营造出AI正在思考和逐步输出的效果。

这种交互方式在现代Web应用中非常常见，特别是在AI助手类产品中。

---

*内容生成完毕*`);

const streamingContent = ref('');
const isStreaming = ref(false);
const streamTimer = ref(null);
const streamIndex = ref(0);

// 开始/停止流式显示
const toggleStreaming = () => {
  if (isStreaming.value) {
    stopStreaming();
  } else {
    startStreaming();
  }
};

// 开始流式显示
const startStreaming = () => {
  if (isStreaming.value) return;
  
  // 如果是重新开始，重置索引
  if (streamIndex.value >= fullAIContent.value.length) {
    streamIndex.value = 0;
    streamingContent.value = '';
  }
  
  isStreaming.value = true;
  streamTimer.value = setInterval(() => {
    if (streamIndex.value < fullAIContent.value.length) {
      streamingContent.value += fullAIContent.value[streamIndex.value];
      streamIndex.value++;
    } else {
      stopStreaming();
    }
  }, 50); // 50ms间隔，模拟AI逐步输出
};

// 停止流式显示
const stopStreaming = () => {
  if (streamTimer.value) {
    clearInterval(streamTimer.value);
    streamTimer.value = null;
  }
  isStreaming.value = false;
};

// 重置流式显示
const resetStreaming = () => {
  stopStreaming();
  streamingContent.value = '';
  streamIndex.value = 0;
};

// 组件销毁前清理定时器
onBeforeUnmount(() => {
  stopStreaming();
});
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/markdown.md`</small>

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

