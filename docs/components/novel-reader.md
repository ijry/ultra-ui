---
title: Novel reader 小说阅读器
description: 带目录、翻页与阅读设置的长文阅读器。
generated: true
---

# Novel reader 小说阅读器

带目录、翻页与阅读设置的长文阅读器。

<PlatformBadges component="novel-reader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/novel_reader_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/NovelReaderDemo.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/novelReader/novelReader.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/novelReader/novelReader.uvue`</small>

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
| uni-app · Vue 3 | `up-novel-reader` | `src/uni_modules/uview-plus/components/u-novel-reader` |
| uni-app-x · UTS / UVUE | `up-novel-reader` | `uni_modules/uview-ultra/components/up-novel-reader` |

