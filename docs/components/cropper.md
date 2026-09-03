---
title: Cropper 图片裁剪
description: 图片裁剪器，支持缩放、旋转与固定比例。
generated: true
---

# Cropper 图片裁剪

图片裁剪器，支持缩放、旋转与固定比例。

<PlatformBadges component="cropper" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 头像裁剪

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCropper(
  key: const ValueKey('cropper-page-avatar'),
  index: 0,
  canChangeSize: false,
  areaWidth: '300rpx',
  areaHeight: '300rpx',
  exportWidth: '260rpx',
  exportHeight: '260rpx',
  onConfirm: _cutImage,
  // Source default slot: an avatar that opens the cropper.
  child: Align(
    alignment: Alignment.centerLeft,
    child: UPAvatar(src: _urls[0] ?? '', size: 120),
  ),
)
```

#### 可变大小

```dart
UPCropper(
  key: const ValueKey('cropper-page-resizable'),
  index: 1,
  canChangeSize: true,
  areaWidth: '300rpx',
  areaHeight: '180rpx',
  exportWidth: '260rpx',
  exportHeight: '160rpx',
  onConfirm: _cutImage,
  child: SizedBox(
    height: 160,
    child: UPImage(src: _urls[1] ?? '', height: 160),
  ),
)
```

#### 限制在图片内

```dart
UPCropper(
  key: const ValueKey('cropper-page-inner'),
  index: 2,
  inner: true,
  canChangeSize: false,
  areaWidth: '300rpx',
  areaHeight: '300rpx',
  exportWidth: '260rpx',
  exportHeight: '260rpx',
  onConfirm: _cutImage,
  child: Align(
    alignment: Alignment.centerLeft,
    child: UPAvatar(src: _urls[2] ?? '', size: 120),
  ),
)
```

#### 裁剪已有临时图片

```dart
UPCropper(
  key: const ValueKey('cropper-page-external'),
  index: 3,
  areaWidth: '300rpx',
  areaHeight: '300rpx',
  exportWidth: '260rpx',
  exportHeight: '260rpx',
  onConfirm: _cutImage,
  child: Align(
    alignment: Alignment.centerLeft,
    child: UPAvatar(src: _urls[3] ?? '', size: 120),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/cropper_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCropper } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCropper } from '@ultra-ui'

<UPCropper onConfirm={handleConfirm} onAvtinit={handleAvtinit}>
  <View className="cropper-demo__avatar-wrapper">
    {avatarUrl ? (
      <Image src={avatarUrl} className="cropper-demo__avatar" mode="aspectFill" />
    ) : (
      <View className="cropper-demo__avatar-placeholder">点击选择图片</View>
    )}
  </View>
</UPCropper>
```

```tsx
<UPCropper
  areaWidth="400rpx"
  areaHeight="400rpx"
  exportWidth="400"
  exportHeight="400"
  onConfirm={handleSquareCrop}
>
  <View className="cropper-demo__btn">选择图片（正方形）</View>
</UPCropper>
```

```tsx
<UPCropper
  areaWidth="500rpx"
  areaHeight="300rpx"
  exportWidth="500"
  exportHeight="300"
  onConfirm={handleRectCrop}
>
  <View className="cropper-demo__btn">选择图片（矩形）</View>
</UPCropper>
```

```tsx
<UPCropper
  canChangeSize
  areaWidth="400rpx"
  areaHeight="400rpx"
  onConfirm={handleResizeCrop}
>
  <View className="cropper-demo__btn">选择图片（可调整）</View>
</UPCropper>
```

```tsx
<UPCropper
  canRotate={false}
  areaWidth="400rpx"
  areaHeight="400rpx"
  onConfirm={handleNoRotateCrop}
>
  <View className="cropper-demo__btn">选择图片（禁用旋转）</View>
</UPCropper>
```

```tsx
<UPCropper
  canScale={false}
  areaWidth="400rpx"
  areaHeight="400rpx"
  onConfirm={handleNoScaleCrop}
>
  <View className="cropper-demo__btn">选择图片（禁用缩放）</View>
</UPCropper>
```

```tsx
<UPCropper
  inner
  areaWidth="400rpx"
  areaHeight="400rpx"
  onConfirm={handleInnerCrop}
>
  <View className="cropper-demo__btn">选择图片（内嵌模式）</View>
</UPCropper>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/cropper/index.tsx`</small>

</template>

<template #uniapp>

#### 头像裁剪模式

设置固定裁剪区域大小，适用于头像裁剪等场景。

```vue
<template>
  <view>
    <up-cropper 
      ref="avatarCropperRef"
      :canChangeSize="false"
      areaWidth="300rpx" 
      areaHeight="300rpx" 
      exportWidth="260rpx" 
      exportHeight="260rpx"
      @confirm="onAvatarConfirm"
    >
      <view class="avatar-wrapper">
        <up-avatar :src="avatarImage" size="120px"></up-avatar>
      </view>
    </up-cropper>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const avatarImage = ref('');
const avatarCropperRef = ref(null);

const onAvatarConfirm = (rsp) => {
  avatarImage.value = rsp.path;
};
</script>
```

#### 裁剪已有临时图片

业务可以先自行拍照或选图，再把得到的临时图片路径传给 Cropper。传入有效 `imageSrc` 时，组件不会再次打开系统图片选择器。

```vue
<template>
  <view>
    <button @click="takePhotoAndCrop">拍照或选图后裁剪</button>
    <up-cropper ref="externalCropperRef" @confirm="onExternalConfirm" />
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const externalCropperRef = ref(null);
const croppedImage = ref('');

const takePhotoAndCrop = () => {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      externalCropperRef.value.chooseImage(0, {
        imageSrc: res.tempFilePaths[0],
        areaWidth: '300rpx',
        areaHeight: '300rpx'
      });
    }
  });
};

const onExternalConfirm = (rsp) => {
  croppedImage.value = rsp.path;
};
</script>
```

```vue

### 可变裁剪区域

允许用户调整裁剪区域大小，适用于需要自定义裁剪区域的场景。

```vue
<template>
  <view>
    <view class="image-wrapper" @click="chooseCustomImage">
      <up-image :src="customImage" height="160px"></up-image>
    </view>
    <up-cropper 
      ref="customCropperRef"
      @confirm="onCustomConfirm"
    />
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const customImage = ref('');
const customCropperRef = ref(null);

const chooseCustomImage = () => {
  customCropperRef.value.chooseImage(0, {
    canChangeSize: true,
    areaWidth: "300rpx", 
    areaHeight: "180rpx",
    exportWidth: '260rpx', 
    exportHeight: '160rpx'
  });
};

const onCustomConfirm = (rsp) => {
  customImage.value = rsp.path;
};
</script>
```

```vue

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| canChangeSize | 是否允许调整裁剪区域大小 | boolean | false | true/false |
| areaWidth | 裁剪区域宽度 | string | 300rpx | - |
| areaHeight | 裁剪区域高度 | string | 300rpx | - |
| exportWidth | 导出图片宽度 | string | 260rpx | - |
| exportHeight | 导出图片高度 | string | 260rpx | - |
| minScale | 最小缩放比例 | number | 0.3 | - |
| maxScale | 最大缩放比例 | number | 4 | - |
| canScale | 是否允许缩放 | boolean | true | true/false |
| canRotate | 是否允许旋转 | boolean | true | true/false |
| inner | 是否限制裁剪框始终在图片内（开启后不可旋转） | boolean | false | true/false |
| quality | 图片质量 | number | 0.9 | 0-1 |
| noTab | 是否隐藏底部操作栏 | boolean | true | true/false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 裁剪完成时触发 | { avatar, path, index, data } |
| avtinit | 组件初始化完成时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发裁剪的元素，点击该插槽内容时会打开裁剪界面 |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| chooseImage | 选择图片或加载已有路径并开始裁剪 | (index, params, data) <br> index: 索引标识 <br> params: 配置参数对象；`imageSrc` 为非空字符串时直接加载该路径并跳过系统选图 <br> data: 自定义数据 |
| close | 关闭裁剪界面 | - |
| rotate | 旋转图片 | - |
| preview | 预览裁剪结果 | - |

### 注意事项

1. 使用[chooseImage]方法时，可以通过第二个参数传入配置项来临时改变裁剪区域大小等属性
2. 裁剪完成后会返回临时文件路径，可用于上传或展示
3. 支持手势操作：单指拖动图片，双指缩放图片
4. 可通过`canChangeSize`属性控制是否允许调整裁剪区域大小
5. 在H5平台可能需要处理跨域图片问题
6. 设置 `inner` 为 `true` 时，裁剪框始终保持在图片范围内，适合头像等禁止留白场景；该模式下旋转会被禁用
7. `chooseImage` 的第二个参数也可传 `inner: true` 临时开启
8. `params.imageSrc` 仅在值为非空字符串时生效；未传、空字符串或非字符串仍会打开系统图片选择器
9. `imageSrc` 必须能被当前平台的 `uni.getImageInfo` 和画布读取；远程地址在 H5 仍受跨域配置限制，组件不会自动下载或转换地址
10. 使用外部路径进入裁剪后，底部“重选”按钮仍会打开系统图片选择器
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/cropper.md`</small>

</template>

<template #uniappx>

#### 头像裁剪模式

设置固定裁剪区域大小，适用于头像裁剪等场景。

```vue
<template>
  <view>
    <up-cropper 
      ref="avatarCropperRef"
      :canChangeSize="false"
      areaWidth="300rpx" 
      areaHeight="300rpx" 
      exportWidth="260rpx" 
      exportHeight="260rpx"
      @confirm="onAvatarConfirm"
    >
      <view class="avatar-wrapper">
        <up-avatar :src="avatarImage" size="120px"></up-avatar>
      </view>
    </up-cropper>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const avatarImage = ref('');
const avatarCropperRef = ref(null);

const onAvatarConfirm = (rsp) => {
  avatarImage.value = rsp.path;
};
</script>
```

```vue

### 可变裁剪区域

允许用户调整裁剪区域大小，适用于需要自定义裁剪区域的场景。

```vue
<template>
  <view>
    <view class="image-wrapper" @click="chooseCustomImage">
      <up-image :src="customImage" height="160px"></up-image>
    </view>
    <up-cropper 
      ref="customCropperRef"
      @confirm="onCustomConfirm"
    />
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const customImage = ref('');
const customCropperRef = ref(null);

const chooseCustomImage = () => {
  customCropperRef.value.chooseImage(0, {
    canChangeSize: true,
    areaWidth: "300rpx", 
    areaHeight: "180rpx",
    exportWidth: '260rpx', 
    exportHeight: '160rpx'
  });
};

const onCustomConfirm = (rsp) => {
  customImage.value = rsp.path;
};
</script>
```

```vue

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| canChangeSize | 是否允许调整裁剪区域大小 | boolean | false | true/false |
| areaWidth | 裁剪区域宽度 | string | 300rpx | - |
| areaHeight | 裁剪区域高度 | string | 300rpx | - |
| exportWidth | 导出图片宽度 | string | 260rpx | - |
| exportHeight | 导出图片高度 | string | 260rpx | - |
| minScale | 最小缩放比例 | number | 0.3 | - |
| maxScale | 最大缩放比例 | number | 4 | - |
| canScale | 是否允许缩放 | boolean | true | true/false |
| canRotate | 是否允许旋转 | boolean | true | true/false |
| inner | 是否限制裁剪框始终在图片内（开启后不可旋转） | boolean | false | true/false |
| quality | 图片质量 | number | 0.9 | 0-1 |
| noTab | 是否隐藏底部操作栏 | boolean | true | true/false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 裁剪完成时触发 | { avatar, path, index, data } |
| avtinit | 组件初始化完成时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发裁剪的元素，点击该插槽内容时会打开裁剪界面 |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| chooseImage | 打开图片选择器并开始裁剪 | (index, params, data) <br> index: 索引标识 <br> params: 配置参数对象 <br> data: 自定义数据 |
| close | 关闭裁剪界面 | - |
| rotate | 旋转图片 | - |
| preview | 预览裁剪结果 | - |

### 注意事项

1. 使用[chooseImage]方法时，可以通过第二个参数传入配置项来临时改变裁剪区域大小等属性
2. 裁剪完成后会返回临时文件路径，可用于上传或展示
3. 支持手势操作：单指拖动图片，双指缩放图片
4. 可通过`canChangeSize`属性控制是否允许调整裁剪区域大小
5. 在H5平台可能需要处理跨域图片问题
```

6. 设置 `inner` 为 `true` 时，裁剪框始终保持在图片范围内，适合头像等禁止留白场景；该模式下旋转会被禁用
7. `chooseImage` 的第二个参数也可传 `inner: true` 临时开启

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/cropper.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `avtinit` |
| `cancel` |
| `confirm` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCropper` | `packages/ultra_ui/lib/src/widgets/up_cropper.dart` |
| React Native · TypeScript | `UPCropper` | `src/components/cropper` |
| Taro · React + TypeScript | `UPCropper` | `src/ultra-ui/components/up-cropper` |
| uni-app · Vue 3 | `up-cropper` | `uni_modules/uview-ultra/components/up-cropper` |
| uni-app-x · UTS / UVUE | `up-cropper` | `uni_modules/uview-ultra/components/up-cropper` |

