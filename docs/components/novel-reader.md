---
title: Novel reader 小说阅读器
description: 带目录、翻页与阅读设置的长文阅读器。
generated: true
---

# Novel reader 小说阅读器

带目录、翻页与阅读设置的长文阅读器。

<PlatformBadges component="novel-reader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 滚动模式（源码默认）

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPNovelReader(
  key: const ValueKey('novel-reader-page-scroll'),
  chapters: _chapters,
  currentChapterIndex: _chapterIndex,
  storageKey: 'demo-book',
  hooks: hooks,
  // Tap the centre to reveal the toolbars, as in the source.
  onToolbarChange: (visible) =>
      _note('toolbar -> ${visible ? '显示' : '隐藏'}'),
  onChapterRequest: (chapter) {
    final index = chapter['index'];
    if (index is int) {
      setState(() => _chapterIndex = index);
    }
    _note('切换到 ${chapter['title']}');
  },
  onBookmarkChange: (list) {
    setState(() => _bookmarkCount = list.length);
    _note('书签数 ${list.length}');
  },
  onSettingsChange: (settings) => _note(
      '字号 ${settings['fontSize']}，主题 ${settings['theme']}'),
)
```

#### 翻页模式 + 夜间主题

```dart
UPNovelReader(
  key: const ValueKey('novel-reader-page-paged'),
  chapters: _chapters,
  mode: 'page',
  settings: const <String, dynamic>{
    'theme': 'night',
    'fontSize': 20,
  },
  onProgressChange: (progress) =>
      _note('进度 ${progress['pageIndex']}/'
          '${progress['pageCount']}'),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/novel_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNovelReader } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPNovelReader } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

`chapters` 提供目录元数据，`currentChapter` 提供当前章节正文。章节对象建议保持以下结构：

```js
const chapters = [
    {
        id: 'chapter-1',
        index: 0,
        title: '第一章 初见',
        isLocked: false,
        progress: 0
    }
]

const currentChapter = {
    id: 'chapter-1',
    index: 0,
    title: '第一章 初见',
    content: [
        '这是第一段正文。',
        '这是第二段正文。'
    ]
}
```

`index` 必须是业务目录中的稳定索引。`content` 可以是字符串或字符串数组，组件会按换行归一化为段落。

```vue
<template>
    <view class="reader-page">
        <up-novel-reader
            book-id="book-1"
            :chapters="chapters"
            :current-chapter="currentChapter"
            @chapter-request="loadChapter"
        />
    </view>
</template>
```

#### 受控章节加载

组件不会在内部发起接口请求。用户点击目录、上一章、下一章或翻到边界时，组件触发 `chapter-request`，业务完成请求后必须更新 `currentChapter`：

```vue
<script setup>
import { ref } from 'vue'

const currentChapter = ref(chapters[0])
const loading = ref(false)
const error = ref(null)

function loadChapter({ targetIndex }) {
    const target = chapters[targetIndex]
    if (!target || target.isLocked) return

    loading.value = true
    error.value = null
    loadChapterContent(target.id)
        .then((content) => {
            currentChapter.value = { ...target, content }
        })
        .catch((requestError) => {
            error.value = requestError
        })
        .finally(() => {
            loading.value = false
        })
}
</script>
```

事件只表达切换意图，不会替业务修改 `currentChapter`。组件会忽略重复请求和过期响应。

#### 阅读设置与主题

`settings` 支持受控传入；未传入时使用 `defaultSettings`、本地存储或默认值。内置主题如下：

| 主题 | 背景色 | 正文色 |
| --- | --- | --- |
| `day` | `#f7f8fa` | `#303133` |
| `paper` | `#f3ead7` | `#51483d` |
| `green` | `#e7f1e4` | `#3f5140` |
| `night` | `#202124` | `#d6d7da` |
| `dark` | `#111214` | `#e5e7eb` |

默认设置：

```js
{
    theme: 'day',
    fontSize: 18,
    lineHeight: 1.8,
    paragraphSpacing: 16,
    contentWidth: '92%',
    fontFamily: 'system',
    fontWeight: 400,
    animation: true
}
```

#### 持久化

`persist` 默认为 `true`。传入 `storageKey` 时使用自定义键；未传入时，有 `bookId` 则使用：

```txt
uview-plus:novel-reader:${bookId}
```

本地数据使用版本 `1`，保存 `progress`、`settings`、`bookmarks`、`readingTime` 和 `updatedAt`。状态优先级为：显式受控状态 > 初始状态 > 本地存储 > 默认值。存储损坏或写入失败不会阻塞正文渲染。

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/novelReader.md`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<template>
	<up-novel-reader
		:chapters="chapters"
		:current-chapter="currentChapter"
		book-id="demo-novel"
		@chapter-request="handleChapterRequest"
	/>
</template>
```

```ts
const chapters = ref([
	{ id: 'chapter-1', index: 0, title: '第一章', isLocked: false },
	{ id: 'chapter-2', index: 1, title: '第二章', isLocked: false }
])

const currentChapter = ref({
	id: 'chapter-1',
	index: 0,
	title: '第一章',
	content: ['第一段正文', '第二段正文']
})

function handleChapterRequest(payload) {
	// 由业务层请求或切换章节，完成后更新 currentChapter
	console.log(payload.targetId, payload.targetIndex)
}
```

#### 阅读设置

`defaultSettings`、`settings-change` 和 `settings` 支持以下字段：

```js
{
	theme: 'day',
	fontSize: 18,
	lineHeight: 1.8,
	paragraphSpacing: 16,
	contentWidth: '92%',
	fontFamily: 'system',
	fontWeight: 400,
	animation: true
}
```

`fontSize` 限制在 `12..48`，`lineHeight` 限制在 `1..3`，`paragraphSpacing` 限制在 `0..80`，`fontWeight` 归一化为 `400` 或 `600`。内置主题为 `day`、`paper`、`green`、`night`、`dark`。

#### 纵向滚动与横向分页

`mode="scroll"` 使用 `scroll-view`，进度根据滚动位置和正文长度计算；`mode="page"` 使用 `swiper`，组件会按容器尺寸、字号、行距和段距重新排版，并在布局变化后恢复字符锚点。

```vue
<up-novel-reader
	:chapters="chapters"
	:current-chapter="currentChapter"
	mode="page"
	:page-animation="true"
	:preload-threshold="2"
/>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/novelReader.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `chapters` | — | `Array` | `—` |
| `currentChapter` | — | `Object` | `—` |
| `loading` | — | `Boolean` | `—` |
| `error` | — | `Object` | `—` |
| `bookId` | — | `String / Number` | `—` |
| `storageKey` | — | `String` | `—` |
| `persist` | — | `Boolean` | `—` |
| `initialProgress` | — | `Object` | `—` |
| `progress` | — | `Object` | `—` |
| `initialBookmarks` | — | `Array` | `—` |
| `bookmarks` | — | `Array` | `—` |
| `defaultSettings` | — | `Object` | `—` |
| `settings` | — | `Object` | `—` |
| `mode` | — | `String` | `—` |
| `showBack` | — | `Boolean` | `—` |
| `autoBack` | — | `Boolean` | `—` |
| `backIcon` | — | `String` | `—` |
| `safeAreaInsetTop` | — | `Boolean` | `—` |
| `safeAreaInsetBottom` | — | `Boolean` | `—` |
| `preloadThreshold` | — | `Number` | `—` |
| `pageAnimation` | — | `Boolean` | `—` |
| `controlsAutoHide` | — | `Number` | `—` |

### 事件

| 事件名 |
| --- |
| `back` |
| `bookmark-change` |
| `chapter-prefetch` |
| `chapter-request` |
| `layout-ready` |
| `mode-change` |
| `progress-change` |
| `reading-time-change` |
| `retry` |
| `settings-change` |
| `toolbar-change` |

### 插槽

| 插槽名 |
| --- |
| `bottom` |
| `catalog` |
| `empty` |
| `error` |
| `loading` |
| `settings` |
| `toolbar-extra` |
| `top` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPNovelReader` | `packages/ultra_ui/lib/src/widgets/up_novel_reader.dart` |
| React Native · TypeScript | `UPNovelReader` | `src/components/novel-reader` |
| Taro · React + TypeScript | `UPNovelReader` | `src/ultra-ui/components/up-novel-reader` |
| uni-app · Vue 3 | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |
| uni-app-x · UTS / UVUE | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |

