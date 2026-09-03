---
title: Album
description: A grid of images with full-screen preview on tap.
generated: true
---

# Album

A grid of images with full-screen preview on tap.

<PlatformBadges component="album" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

album: UPAlbum(
  key: const ValueKey('album-page-basic'),
  urls: _urls1,
  keyName: 'src2',
  singleSize: 180,
  onPreview: _onPreview,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/album_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAlbum } from 'ultra-ui-rn';

<UPAlbum urls={urls2} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/AlbumDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPAlbum } from '@ultra-ui'

<UPAlbum urls={urls1} rowCount={4} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/album/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-album @click="testStop"
    :urls="urls1"
    keyName="src2"
></up-album>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/album/album.nvue`</small>

</template>

<template #uniappx>

```vue
<up-album
    :urls="urls1"
    keyName="src2"
></up-album>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/album/album.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `urls` | 图片地址，Array&lt;String&gt;&#124;Array&lt;Object&gt;形式 | `Array` | `[]` |
| `keyName` | 指定从数组的对象元素中读取哪个属性作为图片地址 | `String` | `''` |
| `singleSize` | 单图时，图片长边的长度 | `String / Number` | `180` |
| `multipleSize` | 多图时，图片边长 | `String / Number` | `70` |
| `space` | 多图时，图片水平和垂直之间的间隔 | `String / Number` | `6` |
| `singleMode` | 单图时，图片缩放裁剪的模式 | `String` | `'scaleToFill'` |
| `multipleMode` | 多图时，图片缩放裁剪的模式 | `String` | `'aspectFill'` |
| `maxCount` | 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量 | `String / Number` | `9` |
| `previewFullImage` | 是否可以预览图片 | `Boolean` | `true` |
| `rowCount` | 每行展示图片数量，如设置，singleSize和multipleSize将会无效 | `String / Number` | `3` |
| `showMore` | 超出maxCount时是否显示查看更多的提示 | `Boolean` | `true` |
| `shape` | 图片形状，circle-圆形，square-方形 | `String` | `—` |
| `radius` | 圆角，单位任意 | `String / Number` | `—` |
| `autoWrap` | 自适应换行 | `Boolean` | `false` |
| `unit` | 单位 | `String` | `'px'` |
| `stop` | 阻止点击冒泡 | `Boolean` | `true` |

### Events

| Event |
| --- |
| `albumWidth` |
| `preview` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPAlbum` | `packages/ultra_ui/lib/src/widgets/up_album.dart` |
| React Native · TypeScript | `UPAlbum` | `src/components/album` |
| Taro · React + TypeScript | `UPAlbum` | `src/ultra-ui/components/up-album` |
| uni-app · Vue 3 | `up-album` | `src/uni_modules/uview-plus/components/u-album` |
| uni-app-x · UTS / UVUE | `up-album` | `uni_modules/uview-ultra/components/up-album` |

