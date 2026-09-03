---
title: Upload
description: Image and file upload with selection, preview, removal and progress.
generated: true
---

# Upload

Image and file upload with selection, preview, removal and progress.

<PlatformBadges component="upload" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基础用法

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

#### 上传视频

```dart
UPUpload(
  fileList: _fileList2,
  name: '2',
  multiple: true,
  maxCount: 10,
  accept: 'video',
  autoUpload: true,
  picker: () => _pickFile('2', 'video'),
  onDelete: (index, item) => _deleteFile('2', index),
  onUpdateFileList: (list) => _setFileList('2', list),
)
```

#### 文件预览

```dart
UPUpload(
  fileList: _fileList3,
  name: '3',
  multiple: true,
  maxCount: 10,
  previewFullImage: true,
  autoUpload: true,
  picker: () => _pickFile('3', 'image'),
  onDelete: (index, item) => _deleteFile('3', index),
  onUpdateFileList: (list) => _setFileList('3', list),
)
```

#### 隐藏上传按钮

```dart
UPUpload(
  fileList: _fileList4,
  name: '4',
  multiple: true,
  maxCount: 2,
  autoUpload: true,
  picker: () => _pickFile('4', 'image'),
  onDelete: (index, item) => _deleteFile('4', index),
  onUpdateFileList: (list) => _setFileList('4', list),
)
```

#### 限制上传数量

```dart
UPUpload(
  fileList: _fileList5,
  name: '5',
  multiple: true,
  maxCount: 3,
  autoUpload: true,
  picker: () => _pickFile('5', 'image'),
  onDelete: (index, item) => _deleteFile('5', index),
  onUpdateFileList: (list) => _setFileList('5', list),
)
```

#### 自定义上传样式

```dart
UPUpload(
  fileList: _fileList6,
  name: '6',
  multiple: true,
  maxCount: 1,
  width: 250,
  height: 150,
  autoUpload: true,
  picker: () => _pickFile('6', 'image'),
  trigger: Image.asset(
    'assets/uview/demo/upload/positive.png',
    width: 250,
    height: 150,
    fit: BoxFit.cover,
  ),
  onDelete: (index, item) => _deleteFile('6', index),
  onUpdateFileList: (list) => _setFileList('6', list),
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

#### 基础用法

点击加号选择图片，deletable 默认开启可删除

```tsx
import { UPUpload } from '@ultra-ui'

<UPUpload
  fileList={basic}
  autoDelete
  onChange={setBasic}
/>
```

#### 多选与数量限制

multiple 开启多选，maxCount=4 达到上限后隐藏选择区

```tsx
<UPUpload
  fileList={multiple}
  multiple
  maxCount={4}
  autoDelete
  onChange={setMultiple}
/>
```

#### 上传状态

status 为 uploading / failed / success 时的三种呈现

```tsx
<UPUpload fileList={status} deletable={false} previewFullImage={false} />
```

#### 自定义选择区

triggerSlot 替换默认加号方块

```tsx
<UPUpload
  fileList={custom}
  autoDelete
  triggerSlot={<UPButton type='primary' size='small' text='选择图片' />
```

#### 选择视频

accept=video，点击预览图会内嵌播放

```tsx
<UPUpload
  fileList={videoMode}
  accept='video'
  autoDelete
  onChange={setVideoMode}
/>
```

#### 选择文件

accept=file，非图片以图标 + 文件名呈现（微信小程序 / H5 支持）

```tsx
<UPUpload
  fileList={fileMode}
  accept='file'
  autoDelete
  onChange={setFileMode}
/>
```

#### 禁用

disabled 后不响应点击

```tsx
<UPUpload fileList={[]} disabled />
```

#### 自定义尺寸与文字

width / height 控制方块大小，uploadText 显示提示语

```tsx
<UPUpload
  fileList={[]}
  width={100}
  height={100}
  uploadText='上传图片'
  uploadIcon='plus'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/upload/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

```vue
<template>
	<up-upload
		:fileList="fileList1"
		@afterRead="afterRead"
		@delete="deletePic"
		name="1"
		multiple
		:maxCount="10"
	></up-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList1 = ref([]);

// 删除图片
const deletePic = (event) => {
  fileList1.value.splice(event.index, 1);
};

// 新增图片
const afterRead = async (event) => {
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  let fileListLen = fileList1.value.length;
  lists.map((item) => {
    fileList1.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = fileList1.value[fileListLen];
    fileList1.value.splice(fileListLen, 1, {
      ...item,
      status: 'success',
      message: '',
      url: result,
    });
    fileListLen++;
  }
};

const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    let a = uni.uploadFile({
      url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
      filePath: url,
      name: 'file',
      formData: {
        user: 'test',
      },
      success: (res) => {
        setTimeout(() => {
          resolve(res.data.data);
        }, 1000);
      },
    });
  });
};
</script>
```

#### 读取前处理程序

```vue
<up-upload
	width="56px"
	height="56px"
	v-model:fileList="fileList"
	name="1"
	multiple
	:maxCount="8"
	:previewFullImage="true"
	accept="image"
	:useBeforeRead="true"
	@beforeRead="beforeRead"
>
	<template #trigger>
		<view class="w-56px h-56px border border-solid border-#E3E3E3 flex justify-center items-center">
			<up-icon name="plus" color="#E3E3E3" size="33px"></up-icon>
		</view>
	</template>
</up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList: [],
	}
},
methods:{
	beforeRead(res) {
		// 一定要调用callback方法
		res.callback(true);
	}
}
```

#### 上传视频

```vue
<up-upload
	:fileList="fileList2"
	@afterRead="afterRead"
	@delete="deletePic"
	name="2"
	multiple
	:maxCount="10"
	accept="video"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList2: [],
	}
}
```

#### 文件预览

```vue
<up-upload
	:fileList="fileList3"
	@afterRead="afterRead"
	@delete="deletePic"
	name="3"
	multiple
	:maxCount="10"
	:previewFullImage="true"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList3: [{
			type: 'image',	// 文件类型，image/video/file
			url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
		}],
	}
}
```

#### 隐藏上传按钮

```vue
<up-upload
	:fileList="fileList4"
	@afterRead="afterRead"
	@delete="deletePic"
	name="4"
	multiple
	:maxCount="2"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList4: [{
			    type: 'image',
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			},
			{
				type: 'image',
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			}
		],
	}
}
```

#### 限制上传数量

```vue
<up-upload
	:fileList="fileList5"
	@afterRead="afterRead"
	@delete="deletePic"
	name="5"
	multiple
	:maxCount="3"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList5: [],
	}
}
```

#### 自定义上传样式

```vue
<up-upload
	:fileList="fileList6"
	@afterRead="afterRead"
	@delete="deletePic"
	name="6"
	multiple
	:maxCount="1"
	width="250"
	height="150"
>
	<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" 
	mode="widthFix" style="width: 250px;height: 150px;"></image>
</up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList6: [],
	}
}
```

#### 示例

```vue
<up-upload
	width="56px"
	height="56px"
	v-model:fileList="fileList"
	autoDelete
	autoUpload
	autoUploadApi="https://test.com/api/v1/local/upload"
	autoUploadDriver="local"
	:autoUploadHeader="{
		'Authorization': '123456'
	}"
	getVideoThumb
	name="1"
	multiple
	:maxCount="8"
	:previewFullImage="true"
	accept="video"
>
	<template #trigger>
		<view class="w-56px h-56px border border-solid border-#E3E3E3 flex justify-center items-center">
			<up-icon name="plus" color="#E3E3E3" size="33px"></up-icon>
		</view>
	</template>
</up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList: [],
	}
}
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/upload.md`</small>

</template>

<template #uniappx>

#### 基础用法

```vue
<template>
	<up-upload
		:fileList="fileList1"
		@afterRead="afterRead"
		@delete="deletePic"
		name="1"
		multiple
		:maxCount="10"
	></up-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList1 = ref([]);

// 删除图片
const deletePic = (event) => {
  fileList1.value.splice(event.index, 1);
};

// 新增图片
const afterRead = async (event) => {
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  let fileListLen = fileList1.value.length;
  lists.map((item) => {
    fileList1.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = fileList1.value[fileListLen];
    fileList1.value.splice(fileListLen, 1, {
      ...item,
      status: 'success',
      message: '',
      url: result,
    });
    fileListLen++;
  }
};

const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    let a = uni.uploadFile({
      url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
      filePath: url,
      name: 'file',
      formData: {
        user: 'test',
      },
      success: (res) => {
        setTimeout(() => {
          resolve(res.data.data);
        }, 1000);
      },
    });
  });
};
</script>
```

#### 上传视频

```vue
<up-upload
	:fileList="fileList2"
	@afterRead="afterRead"
	@delete="deletePic"
	name="2"
	multiple
	:maxCount="10"
	accept="video"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList2: [],
	}
}
```

#### 文件预览

```vue
<up-upload
	:fileList="fileList3"
	@afterRead="afterRead"
	@delete="deletePic"
	name="3"
	multiple
	:maxCount="10"
	:previewFullImage="true"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList3: [{
			url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
		}],
	}
}
```

#### 隐藏上传按钮

```vue
<up-upload
	:fileList="fileList4"
	@afterRead="afterRead"
	@delete="deletePic"
	name="4"
	multiple
	:maxCount="2"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList4: [{
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			},
			{
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			}
		],
	}
}
```

#### 限制上传数量

```vue
<up-upload
	:fileList="fileList5"
	@afterRead="afterRead"
	@delete="deletePic"
	name="5"
	multiple
	:maxCount="3"
></up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList5: [],
	}
}
```

#### 自定义上传样式

```vue
<up-upload
	:fileList="fileList6"
	@afterRead="afterRead"
	@delete="deletePic"
	name="6"
	multiple
	:maxCount="1"
	width="250"
	height="150"
>
	<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" 
	mode="widthFix" style="width: 250px;height: 150px;"></image>
</up-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList6: [],
	}
}
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/upload.md`</small>

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
| uni-app · Vue 3 | `up-upload` | `uni_modules/uview-ultra/components/up-upload` |
| uni-app-x · UTS / UVUE | `up-upload` | `uni_modules/uview-ultra/components/up-upload` |

