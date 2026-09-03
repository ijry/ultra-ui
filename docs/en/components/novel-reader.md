---
title: Novel reader
description: A long-form reader with catalogue, paging and reading settings.
generated: true
---

# Novel reader

A long-form reader with catalogue, paging and reading settings.

<PlatformBadges component="novel-reader" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### Scrolling mode (the source default)

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

#### Paged mode with the dark theme

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/novel_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNovelReader } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPNovelReader } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Basic usage

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

#### Controlled chapter loading

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

#### Reading settings and theme

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

#### Persistence

```txt
uview-plus:novel-reader:${bookId}
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/novelReader.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Reading settings

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

#### Vertical scrolling and horizontal paging

```vue
<up-novel-reader
	:chapters="chapters"
	:current-chapter="currentChapter"
	mode="page"
	:page-animation="true"
	:preload-threshold="2"
/>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/novelReader.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
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

### Slots

| Slot |
| --- |
| `bottom` |
| `catalog` |
| `empty` |
| `error` |
| `loading` |
| `settings` |
| `toolbar-extra` |
| `top` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPNovelReader` | `packages/ultra_ui/lib/src/widgets/up_novel_reader.dart` |
| React Native · TypeScript | `UPNovelReader` | `src/components/novel-reader` |
| Taro · React + TypeScript | `UPNovelReader` | `src/ultra-ui/components/up-novel-reader` |
| uni-app · Vue 3 | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |
| uni-app-x · UTS / UVUE | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |

