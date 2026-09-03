---
title: Upload
description: Image and file upload with selection, preview, removal and progress.
generated: true
---

# Upload

Image and file upload with selection, preview, removal and progress.

<PlatformBadges component="upload" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPUpload(
  key: const ValueKey('upload-page-basic'),
  fileList: _fileList1,
  useBeforeRead: true,
  name: '1',
  multiple: true,
  maxCount: 10,
  autoUpload: true,
  picker: () => _pickFile('1', 'image'),
  onBeforeRead: _beforeRead,
  onDelete: (index, item) => _deleteFile('1', index),
  onUpdateFileList: (list) => _setFileList('1', list),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/upload_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPUpload } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPUpload } from '@ultra-ui'

<UPUpload
  fileList={basic}
  autoDelete
  onChange={setBasic}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/upload/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-upload
    :fileList="fileList1"
    useBeforeRead
    @beforeRead="beforeRead"
    @afterRead="afterRead"
    @delete="deletePic"
    name="1"
    multiple
    :maxCount="10"
></up-upload>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/upload/upload.nvue`</small>

</template>

<template #uniappx>

```vue
<up-upload
    :fileList="fileList1"
    useBeforeRead
    @beforeRead="beforeRead"
    @afterRead="afterRead"
    @delete="deletePic"
    name="1"
    multiple
    :maxCount="10"
></up-upload>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/upload/upload.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `accept` | 接受的文件类型, 可选值为all media image file video | `String` | `—` |
| `extension` | — | `Array` | `—` |
| `capture` | 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 | `String / Array` | `—` |
| `compressed` | 当accept为video时生效，是否压缩视频，默认为true | `Boolean` | `—` |
| `camera` | 当accept为video时生效，可选值为back或front | `String` | `—` |
| `maxDuration` | 当accept为video时生效，拍摄视频最长拍摄时间，单位秒 | `Number` | `—` |
| `uploadIcon` | 上传区域的图标，只能内置图标 | `String` | `—` |
| `uploadIconColor` | 上传区域的图标的颜色，默认 | `String` | `—` |
| `useBeforeRead` | 是否开启文件读取前事件 | `Boolean` | `—` |
| `afterRead` | 读取后的处理函数 | `Function` | `—` |
| `beforeRead` | 读取前的处理函数 | `Function` | `—` |
| `previewFullImage` | 是否显示组件自带的图片&amp;视频预览功能 | `Boolean` | `—` |
| `maxCount` | 最大上传数量 | `String / Number` | `—` |
| `disabled` | 是否启用 | `Boolean` | `—` |
| `imageMode` | 预览上传的图片时的裁剪模式，和image组件mode属性一致 | `String` | `—` |
| `name` | 标识符，可以在回调函数的第二项参数中获取 | `String` | `—` |
| `sizeType` | 所选的图片的尺寸, 可选值为original compressed | `Array` | `—` |
| `multiple` | 是否开启图片多选，部分安卓机型不支持 | `Boolean` | `—` |
| `deletable` | 是否展示删除按钮 | `Boolean` | `—` |
| `maxSize` | 文件大小限制，单位为byte | `String / Number` | `—` |
| `fileList` | 显示已上传的文件列表 | `Array` | `—` |
| `uploadText` | 上传区域的提示文字 | `String` | `—` |
| `width` | 内部预览图片区域和选择图片按钮的区域宽度 | `String / Number` | `—` |
| `height` | 内部预览图片区域和选择图片按钮的区域高度 | `String / Number` | `—` |
| `previewImage` | 是否在上传完成后展示预览图 | `Boolean` | `—` |
| `autoDelete` | 是否自动删除 | `Boolean` | `—` |
| `autoUpload` | 是否自动上传需要传递action指定地址 | `Boolean` | `—` |
| `autoUploadApi` | 自动上传接口地址 | `String` | `—` |
| `autoUploadDriver` | 自动上传驱动，local/oss/cos/kodo | `String` | `—` |
| `autoUploadAuthUrl` | 自动上传授权接口，比如oss的签名接口。 | `String` | `—` |
| `autoUploadHeader` | 自动上传携带的header | `Object` | `—` |
| `getVideoThumb` | 本地计算视频封面 | `Boolean` | `—` |
| `customAfterAutoUpload` | 自定义自动上传后处理 | `Boolean` | `—` |
| `videoPreviewObjectFit` | — | `String` | `—` |

### Events

| Event |
| --- |
| `afterAutoUpload` |
| `afterRead` |
| `beforeRead` |
| `clickPreview` |
| `delete` |
| `error` |
| `oversize` |
| `update:fileList` |

### Slots

| Slot |
| --- |
| `default` |
| `playIcon` |
| `success` |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPUpload` | `packages/ultra_ui/lib/src/widgets/up_upload.dart` |
| React Native · TypeScript | `UPUpload` | `src/components/upload` |
| Taro · React + TypeScript | `UPUpload` | `src/ultra-ui/components/up-upload` |
| uni-app · Vue 3 | `up-upload` | `src/uni_modules/uview-plus/components/u-upload` |
| uni-app-x · UTS / UVUE | `up-upload` | `uni_modules/uview-ultra/components/up-upload` |

