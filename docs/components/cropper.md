---
title: Cropper 图片裁剪
description: 图片裁剪器，支持缩放、旋转与固定比例。
generated: true
---

# Cropper 图片裁剪

图片裁剪器，支持缩放、旋转与固定比例。

<PlatformBadges component="cropper" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/cropper/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-cropper
    ref="avatarRef0"
    :can-change-size="false"
    area-width="300rpx"
    area-height="300rpx"
    export-width="260rpx"
    export-height="260rpx"
    @confirm="cutImage"
>
    <view class="avatar-wrapper">
        <up-avatar :src="avatarUrl" size="120px"></up-avatar>
    </view>
</up-cropper>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cropper/cropper.uvue`</small>

</template>

<template #uniappx>

```vue
<up-cropper
    ref="avatarRef0"
    :can-change-size="false"
    area-width="300rpx"
    area-height="300rpx"
    export-width="260rpx"
    export-height="260rpx"
    @confirm="cutImage"
>
    <view class="avatar-wrapper">
        <up-avatar :src="avatarUrl" size="120px"></up-avatar>
    </view>
</up-cropper>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cropper/cropper.uvue`</small>

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

