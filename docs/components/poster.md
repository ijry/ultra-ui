---
title: Poster 海报生成
description: 将图文合成为一张可保存分享的海报图片。
generated: true
---

# Poster 海报生成

将图文合成为一张可保存分享的海报图片。

<PlatformBadges component="poster" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/poster_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPoster } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-taro/src/pages/components/poster/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

通过配置 `json` 属性来定义海报内容和样式。

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

通过设置 `background` 为图片链接，可以创建自定义背景图的海报。

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

支持线性渐变和径向渐变背景。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/poster.md`</small>

</template>

<template #uniappx>

#### 基础用法

通过配置 `json` 属性来定义海报内容和样式。

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

通过设置 `background` 为图片链接，可以创建自定义背景图的海报。

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

支持线性渐变和径向渐变背景。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/poster.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPPoster` | `packages/ultra_ui/lib/src/widgets/up_poster.dart` |
| React Native · TypeScript | `UPPoster` | `src/components/poster` |
| Taro · React + TypeScript | `UPPoster` | `src/ultra-ui/components/up-poster` |
| uni-app · Vue 3 | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |
| uni-app-x · UTS / UVUE | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |

