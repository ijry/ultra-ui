---
title: Upload 上传
description: 图片与文件上传，内置选择、预览、删除与进度展示。
generated: true
---

# Upload 上传

图片与文件上传，内置选择、预览、删除与进度展示。

<PlatformBadges component="upload" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/upload_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPUpload } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-taro/src/pages/components/upload/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/upload/upload.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/upload/upload.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `afterAutoUpload` |
| `afterRead` |
| `beforeRead` |
| `clickPreview` |
| `delete` |
| `error` |
| `oversize` |
| `update:fileList` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `playIcon` |
| `success` |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPUpload` | `packages/ultra_ui/lib/src/widgets/up_upload.dart` |
| React Native · TypeScript | `UPUpload` | `src/components/upload` |
| Taro · React + TypeScript | `UPUpload` | `src/ultra-ui/components/up-upload` |
| uni-app · Vue 3 | `up-upload` | `src/uni_modules/uview-plus/components/u-upload` |
| uni-app-x · UTS / UVUE | `up-upload` | `uni_modules/uview-ultra/components/up-upload` |

