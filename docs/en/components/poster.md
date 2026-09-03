---
title: Poster
description: Composites text and images into a shareable poster.
generated: true
---

# Poster

Composites text and images into a shareable poster.

<PlatformBadges component="poster" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基础示例

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPoster(
  key: _poster,
  json: _posterConfig,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/poster_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPoster } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### 基础用法

view 色块 + text 多行截断 + qrcode 二维码

```tsx
import { UPPoster } from '@ultra-ui'

<UPPoster ref={basicRef} json={basicJson} />
```

#### 渐变与圆角

linear-gradient 背景、圆角卡片、圆角图片裁剪

```tsx
<UPPoster ref={gradientRef} json={gradientJson} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/poster/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: '#fff'
  },
  views: [
    {
      type: 'text',
      text: '夏日清凉特惠',
      css: {
        position: 'absolute',
        color: '#fff',
        left: '50rpx',
        top: '100rpx',
        fontSize: '40rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'image',
      src: 'https://example.com/product.png',
      css: {
        position: 'absolute',
        left: '150rpx',
        top: '250rpx',
        width: '450rpx',
        height: '450rpx'
      }
    },
    {
      type: 'text',
      text: '立即抢购',
      css: {
        position: 'absolute',
        color: '#ff6600',
        left: '300rpx',
        top: '750rpx',
        fontSize: '36rpx',
        fontWeight: 'bold'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

#### 自定义背景图海报

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: 'https://example.com/background.jpg'
  },
  views: [
    {
      type: 'text',
      text: '夏日清凉特惠',
      css: {
        position: 'absolute',
        color: '#fff',
        left: '50rpx',
        top: '100rpx',
        fontSize: '40rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'image',
      src: 'https://example.com/product.png',
      css: {
        position: 'absolute',
        left: '150rpx',
        top: '250rpx',
        width: '450rpx',
        height: '450rpx'
      }
    },
    {
      type: 'text',
      text: '立即抢购',
      css: {
        position: 'absolute',
        color: '#ff6600',
        left: '300rpx',
        top: '750rpx',
        fontSize: '36rpx',
        fontWeight: 'bold'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

#### 渐变背景海报

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: 'linear-gradient(45deg, #ff9a9e, #fecfef)'
  },
  views: [
    {
      type: 'view',
      css: {
        position: 'absolute',
        left: '60rpx',
        top: '150rpx',
        width: '630rpx',
        height: '700rpx',
        background: 'rgba(255, 255, 255, 0.9)',
        radius: '20rpx'
      }
    },
    {
      type: 'text',
      text: '限时优惠',
      css: {
        position: 'absolute',
        color: '#ff4d4f',
        left: '250rpx',
        top: '200rpx',
        fontSize: '48rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      text: '全场商品5折起',
      css: {
        position: 'absolute',
        color: '#666',
        left: '200rpx',
        top: '300rpx',
        fontSize: '36rpx'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/poster.md`</small>

</template>

<template #uniappx>

#### 基础用法

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: '#fff'
  },
  views: [
    {
      type: 'text',
      text: '夏日清凉特惠',
      css: {
        position: 'absolute',
        color: '#fff',
        left: '50rpx',
        top: '100rpx',
        fontSize: '40rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'image',
      src: 'https://example.com/product.png',
      css: {
        position: 'absolute',
        left: '150rpx',
        top: '250rpx',
        width: '450rpx',
        height: '450rpx'
      }
    },
    {
      type: 'text',
      text: '立即抢购',
      css: {
        position: 'absolute',
        color: '#ff6600',
        left: '300rpx',
        top: '750rpx',
        fontSize: '36rpx',
        fontWeight: 'bold'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

#### 自定义背景图海报

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: 'https://example.com/background.jpg'
  },
  views: [
    {
      type: 'text',
      text: '夏日清凉特惠',
      css: {
        position: 'absolute',
        color: '#fff',
        left: '50rpx',
        top: '100rpx',
        fontSize: '40rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'image',
      src: 'https://example.com/product.png',
      css: {
        position: 'absolute',
        left: '150rpx',
        top: '250rpx',
        width: '450rpx',
        height: '450rpx'
      }
    },
    {
      type: 'text',
      text: '立即抢购',
      css: {
        position: 'absolute',
        color: '#ff6600',
        left: '300rpx',
        top: '750rpx',
        fontSize: '36rpx',
        fontWeight: 'bold'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

#### 渐变背景海报

```vue
<template>
  <view class="u-page">
    <view class="u-page__item">
      <up-button type="primary" shape="circle" @click="generatePoster">生成海报</up-button>
      
      <!-- 海报预览区域 -->
      <view class="poster-preview" v-if="posterImageUrl">
        <image :src="posterImageUrl" class="poster-image" mode="widthFix"></image>
      </view>

      <!-- 海报组件 -->
      <up-poster 
        ref="poster" 
        :json="posterConfig"
      ></up-poster>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const poster = ref(null);
const posterImageUrl = ref('');

const posterConfig = ref({
  css: {
    width: '750rpx',
    height: '1000rpx',
    background: 'linear-gradient(45deg, #ff9a9e, #fecfef)'
  },
  views: [
    {
      type: 'view',
      css: {
        position: 'absolute',
        left: '60rpx',
        top: '150rpx',
        width: '630rpx',
        height: '700rpx',
        background: 'rgba(255, 255, 255, 0.9)',
        radius: '20rpx'
      }
    },
    {
      type: 'text',
      text: '限时优惠',
      css: {
        position: 'absolute',
        color: '#ff4d4f',
        left: '250rpx',
        top: '200rpx',
        fontSize: '48rpx',
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      text: '全场商品5折起',
      css: {
        position: 'absolute',
        color: '#666',
        left: '200rpx',
        top: '300rpx',
        fontSize: '36rpx'
      }
    }
  ]
});

const generatePoster = async () => {
  try {
    uni.showLoading({ title: '海报生成中...' });
    const result = await poster.value.exportImage();
    posterImageUrl.value = result.path;
    uni.hideLoading();
    uni.showToast({ title: '海报生成成功', icon: 'success' });
  } catch (error) {
    uni.hideLoading();
    uni.showToast({ title: '海报生成失败', icon: 'none' });
  }
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/poster.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPPoster` | `packages/ultra_ui/lib/src/widgets/up_poster.dart` |
| React Native · TypeScript | `UPPoster` | `src/components/poster` |
| Taro · React + TypeScript | `UPPoster` | `src/ultra-ui/components/up-poster` |
| uni-app · Vue 3 | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |
| uni-app-x · UTS / UVUE | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |

