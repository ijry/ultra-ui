---
title: Signature
description: A handwriting signature pad that exports to an image.
generated: true
---

# Signature

A handwriting signature pad that exports to an image.

<PlatformBadges component="signature" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基础签名示例

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSignature(
  key: const ValueKey('signature-page-basic'),
  controller: _signature1,
  // Source passes 700x200 in rpx-derived px units.
  width: 700,
  height: 200,
  bgColor: bgColor,
  showToolbar: false,
  onConfirm: (payload) => _capture(1),
)
```

#### 自定义颜色和工具栏示例

```dart
UPSignature(
  key: const ValueKey('signature-page-custom'),
  controller: _signature2,
  width: 700,
  height: 200,
  color: '#ff0000',
  thickness: 6,
  bgColor: bgColor,
  onConfirm: (payload) => _capture(2),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/signature_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSignature } from 'ultra-ui-rn';

<UPSignature
  bgColor={bgColor}
  height={200}
  onConfirm={onConfirm1}
  onError={onError1}
  ref={signature1}
  showToolbar={false}
  width={700}
/>
```

```tsx
<UPSignature
  bgColor={bgColor}
  color="#ff0000"
  height={200}
  onConfirm={onConfirm2}
  onError={onError2}
  ref={signature2}
  thickness={6}
  width={700}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/SignatureDemo.tsx`</small>

</template>

<template #taro>

#### 自定义笔画

color 与 thickness 设置初始笔形

```tsx
import { UPSignature } from '@ultra-ui'

<UPSignature
  width={320}
  height={180}
  color='#2979ff'
  thickness={6}
/>
```

#### 自定义背景

bgColor 改变画布底色

```tsx
<UPSignature
  width={320}
  height={180}
  bgColor='#fffbe6'
  color='#ad6800'
/>
```

#### 隐藏工具栏

showToolbar 为 false，改由外部通过 ref 控制

```tsx
<UPSignature
  ref={manualRef}
  width={320}
  height={180}
  showToolbar={false}
/>
```

#### 尺寸

width / height 控制画布大小

```tsx
<UPSignature width={240} height={140} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/signature/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

```vue
<template>
  <view>
    <up-signature 
        ref="signature1" 
        :width="700" 
        :height="200" 
        bg-color="#f5f5f5"
        :show-toolbar="false"
        @confirm="onConfirm1"
        @error="onError1"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature1 = ref(null);

const onConfirm1 = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError1 = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 自定义样式

```vue
<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      color="#ff0000"
      thickness="6"
      bg-color="#f5f5f0"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 隐藏工具栏

```vue
<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      bg-color="#ffffff"
      :show-toolbar="false"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 完整示例

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <text class="u-page__item__title">基础签名示例</text>
      <view class="u-page__item__content">
        <up-signature 
          ref="signature1" 
          :width="300" 
          :height="200" 
          bg-color="#f5f5f5"
          :show-toolbar="false"
          @confirm="onConfirm1"
          @error="onError1"
        ></up-signature>
        
        <view class="preview" v-if="signatureImage1">
          <text>签名预览:</text>
          <image :src="signatureImage1" class="preview-image"></image>
          <up-button type="primary" size="small" @click="clearSignature1">清除签名</up-button>
        </view>
      </view>
    </view>
    
    <view class="u-page__item">
      <text class="u-page__item__title">自定义颜色和工具栏示例</text>
      <view class="u-page__item__content">
        <up-signature 
          ref="signature2" 
          :width="300" 
          :height="200" 
          color="#ff0000"
          thickness="6"
          bg-color="#f5f5f5"
          @confirm="onConfirm2"
          @error="onError2"
        ></up-signature>
        
        <view class="preview" v-if="signatureImage2">
          <text>签名预览:</text>
          <image :src="signatureImage2" class="preview-image"></image>
          <up-button type="primary" size="small" @click="clearSignature2">清除签名</up-button>
        </view>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature1 = ref(null);
const signature2 = ref(null);
const signatureImage1 = ref('');
const signatureImage2 = ref('');

const onConfirm1 = (tempFilePath) => {
  signatureImage1.value = tempFilePath;
  console.log('签名图片路径1:', tempFilePath);
};

const onError1 = (err) => {
  console.error('签名导出错误1:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};

const clearSignature1 = () => {
  signatureImage1.value = '';
  signature1.value.clear();
};

const onConfirm2 = (tempFilePath) => {
  signatureImage2.value = tempFilePath;
  console.log('签名图片路径2:', tempFilePath);
};

const onError2 = (err) => {
  console.error('签名导出错误2:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};

const clearSignature2 = () => {
  signatureImage2.value = '';
  signature2.value.clear();
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/signature.md`</small>

</template>

<template #uniappx>

#### 基础用法

```vue
<template>
  <view>
    <up-signature 
        ref="signature1" 
        :width="700" 
        :height="200" 
        bg-color="#f5f5f5"
        :show-toolbar="false"
        @confirm="onConfirm1"
        @error="onError1"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature1 = ref(null);

const onConfirm1 = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError1 = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 自定义样式

```vue
<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      color="#ff0000"
      thickness="6"
      bg-color="#f5f5f0"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 隐藏工具栏

```vue
<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      bg-color="#ffffff"
      :show-toolbar="false"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
</script>
```

#### 完整示例

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <text class="u-page__item__title">基础签名示例</text>
      <view class="u-page__item__content">
        <up-signature 
          ref="signature1" 
          :width="300" 
          :height="200" 
          bg-color="#f5f5f5"
          :show-toolbar="false"
          @confirm="onConfirm1"
          @error="onError1"
        ></up-signature>
        
        <view class="preview" v-if="signatureImage1">
          <text>签名预览:</text>
          <image :src="signatureImage1" class="preview-image"></image>
          <up-button type="primary" size="small" @click="clearSignature1">清除签名</up-button>
        </view>
      </view>
    </view>
    
    <view class="u-page__item">
      <text class="u-page__item__title">自定义颜色和工具栏示例</text>
      <view class="u-page__item__content">
        <up-signature 
          ref="signature2" 
          :width="300" 
          :height="200" 
          color="#ff0000"
          thickness="6"
          bg-color="#f5f5f5"
          @confirm="onConfirm2"
          @error="onError2"
        ></up-signature>
        
        <view class="preview" v-if="signatureImage2">
          <text>签名预览:</text>
          <image :src="signatureImage2" class="preview-image"></image>
          <up-button type="primary" size="small" @click="clearSignature2">清除签名</up-button>
        </view>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const signature1 = ref(null);
const signature2 = ref(null);
const signatureImage1 = ref('');
const signatureImage2 = ref('');

const onConfirm1 = (tempFilePath) => {
  signatureImage1.value = tempFilePath;
  console.log('签名图片路径1:', tempFilePath);
};

const onError1 = (err) => {
  console.error('签名导出错误1:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};

const clearSignature1 = () => {
  signatureImage1.value = '';
  signature1.value.clear();
};

const onConfirm2 = (tempFilePath) => {
  signatureImage2.value = tempFilePath;
  console.log('签名图片路径2:', tempFilePath);
};

const onError2 = (err) => {
  console.error('签名导出错误2:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};

const clearSignature2 = () => {
  signatureImage2.value = '';
  signature2.value.clear();
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/signature.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `confirm` |
| `error` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPSignature` | `packages/ultra_ui/lib/src/widgets/up_signature.dart` |
| React Native · TypeScript | `UPSignature` | `src/components/signature` |
| Taro · React + TypeScript | `UPSignature` | `src/ultra-ui/components/up-signature` |
| uni-app · Vue 3 | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |
| uni-app-x · UTS / UVUE | `up-signature` | `uni_modules/uview-ultra/components/up-signature` |

