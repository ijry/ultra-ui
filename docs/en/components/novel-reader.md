---
title: Novel reader
description: A long-form reader with catalogue, paging and reading settings.
generated: true
---

# Novel reader

A long-form reader with catalogue, paging and reading settings.

<PlatformBadges component="novel-reader" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/novel_reader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPNovelReader } from 'ultra-ui-rn';

<UPNovelReader
chapters={CHAPTERS}
currentChapter={chapter}
mode="scroll"
showBack
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/NovelReaderDemo.tsx`</small>

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

```vue
<up-novel-reader
    book-id="demo-novel"
    :chapters="chapters"
    :current-chapter="currentChapter"
    :loading="loading"
    :error="error"
    :progress="progress"
    :settings="settings"
    :mode="mode"
    @chapter-request="handleChapterRequest"
    @chapter-prefetch="handleChapterPrefetch"
    @progress-change="handleProgressChange"
    @settings-change="handleSettingsChange"
    @retry="handleRetry"
>
    <template #toolbar-extra>
        <view
            class="novel-reader-demo__mode"
            @tap.stop="mode = mode === 'scroll' ? 'page' : 'scroll'"
        >
            <up-icon name="order" size="18" color="#2979ff"></up-icon>
        </view>
    </template>
</up-novel-reader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/novelReader/novelReader.nvue`</small>

</template>

<template #uniappx>

```vue
<up-novel-reader
    :chapters="chapters"
    :current-chapter="currentChapter"
    book-id="demo-novel"
    :mode="mode"
    :initial-bookmarks="bookmarks"
    @chapter-request="handleChapterRequest"
    @chapter-prefetch="handleChapterPrefetch"
    @progress-change="handleProgressChange"
    @settings-change="handleSettingsChange"
    @bookmark-change="handleBookmarkChange"
    @reading-time-change="handleReadingTimeChange"
    @mode-change="handleModeChange"
    @back="handleBack"
>
    <template #toolbar-extra>
        <view class="novel-reader-demo__mode" @tap.stop="toggleMode">
            <up-icon name="order" size="18" color="#2979ff"></up-icon>
        </view>
    </template>
</up-novel-reader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/novelReader/novelReader.uvue`</small>

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
| uni-app · Vue 3 | `up-novel-reader` | `src/uni_modules/uview-plus/components/u-novel-reader` |
| uni-app-x · UTS / UVUE | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |

