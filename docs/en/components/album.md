---
title: Album
description: A grid of images with full-screen preview on tap.
generated: true
---

# Album

A grid of images with full-screen preview on tap.

<PlatformBadges component="album" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

```dart
album: const UPAlbum(
  key: ValueKey('album-page-multiple'),
  urls: _urls2,
  maxCount: 9,
)
```

```dart
album: UPAlbum(
  urls: _urls2,
  multipleSize: 68,
  onAlbumWidth: _setAlbumWidth,
)
```

```dart
album: const UPAlbum(
  urls: _urls3,
  rowCount: 2,
  maxCount: 4,
  multipleMode: 'scaleToFill',
)
```

```dart
album: const UPAlbum(
  urls: _urls4,
  rowCount: 2,
  maxCount: 4,
  multipleSize: 50,
)
```

```dart
album: const UPAlbum(
  urls: _urls2,
  radius: 10,
)
```

```dart
album: const UPAlbum(
  urls: _urls2,
  shape: 'circle',
)
```

```dart
album: const UPAlbum(
  urls: _urls2,
  maxCount: 9,
  autoWrap: true,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/album_page.dart`</small>

</template>

<template #reactnative>

#### 多图模式

```tsx
import { UPAlbum } from 'ultra-ui-rn';

<UPAlbum urls={urls2} />
```

#### 图文对齐

```tsx
<UPAlbum multipleSize="68" onAlbumWidth={setAlbumWidth} urls={urls2} />
```

#### 更改裁剪模式

```tsx
<UPAlbum maxCount="4" multipleMode="scaleToFill" rowCount="2" urls={urls3} />
```

#### 更改图片大小

```tsx
<UPAlbum maxCount="4" multipleSize="50" rowCount="2" urls={urls4} />
```

#### 自定义圆角

```tsx
<UPAlbum radius="10" urls={urls2} />
```

#### 自定义形状

```tsx
<UPAlbum shape="circle" urls={urls2} />
```

#### 自适应自动换行

```tsx
<UPAlbum autoWrap maxCount={9} urls={urls2} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/AlbumDemo.tsx`</small>

</template>

<template #taro>

#### 自定义列数

rowCount 控制每行数量；autoWrap 自适应换行

```tsx
import { UPAlbum } from '@ultra-ui'

<UPAlbum urls={urls1} rowCount={4} />
```

#### 更多遮罩 (showMore)

urls 数量超过 maxCount 时，末位显示「+N」

```tsx
<UPAlbum urls={urls2} maxCount={9} />
```

#### 对象数组 (keyName)

urls 为对象数组时，用 keyName 指定图片字段

```tsx
<UPAlbum urls={urls3} keyName='url' />
```

#### 单图与形状

单图按原始比例展示；shape / radius 控制圆角

```tsx
<UPAlbum urls={[singleUrl]} />
```

#### albumWidth 事件

相册渲染宽度（px）：

```tsx
<UPAlbum urls={urls1} onAlbumWidth={setWidth} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/album/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">多图模式</text>
            <view class="u-demo-block__content">
                <view class="album">
                    <view class="album__avatar">
                        <image
                            src="/static/uview/common/logo.png"
                            mode=""
                            style="width: 32px;height: 32px;"
                        ></image>
                    </view>
                    <view class="album__content">
                        <up-text
                                text="uview-plus UI"
                                type="primary"
                                bold
                                size="17"
                        ></up-text>
                        <up-text
                                margin="0 0 8px 0"
                                text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
                        ></up-text>
                        <up-album :urls="urls1" keyName="src2"></up-album>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const albumWidth = ref(0);  
const urls1 = ref([{  
    src2: 'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg',  
}]);  
</script>
```

```vue
<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

#### 多图模式

```vue
<template>
  <view class="u-page">
    <view class="u-demo-block">
      <text class="u-demo-block__title">多图模式</text>
      <view class="u-demo-block__content">
        <view class="album">
          <view class="album__avatar">
            <image
              src="/static/uview/common/logo.png"
              mode=""
              style="width: 32px;height: 32px;"
            ></image>
          </view>
          <view class="album__content">
            <up-text
              text="uview-plus UI"
              type="primary"
              bold
              size="17"
            ></up-text>
            <up-text
              margin="0 0 8px 0"
              text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
            ></up-text>
            <up-album :urls="urls2"></up-album>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const albumWidth = ref(0);  
const urls2 = ref([  
    'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/2.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/3.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/4.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/5.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/6.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/7.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/8.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/9.jpg',  
    'https://uview-plus.jiangruyi.com/uview-plus/album/10.jpg',  
]);  
</script>
```

```vue
<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/album.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">多图模式</text>
            <view class="u-demo-block__content">
                <view class="album">
                    <view class="album__avatar">
                        <image
                            src="/static/uview/common/logo.png"
                            mode=""
                            style="width: 32px;height: 32px;"
                        ></image>
                    </view>
                    <view class="album__content">
                        <up-text
                                text="uview-ultra UI"
                                type="primary"
                                bold
                                size="17"
                        ></up-text>
                        <up-text
                                margin="0 0 8px 0"
                                text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
                        ></up-text>
                        <up-album :urls="urls1" keyName="src2"></up-album>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const albumWidth = ref(0);  
const urls1 = ref([{  
    src2: 'https://uview-ultra.jiangruyi.com/uview-ultra/album/1.jpg',  
}]);  
</script>
```

```vue
<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $up-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

#### 多图模式

```vue
<template>
  <view class="u-page">
    <view class="u-demo-block">
      <text class="u-demo-block__title">多图模式</text>
      <view class="u-demo-block__content">
        <view class="album">
          <view class="album__avatar">
            <image
              src="/static/uview/common/logo.png"
              mode=""
              style="width: 32px;height: 32px;"
            ></image>
          </view>
          <view class="album__content">
            <up-text
              text="uview-ultra UI"
              type="primary"
              bold
              size="17"
            ></up-text>
            <up-text
              margin="0 0 8px 0"
              text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
            ></up-text>
            <up-album :urls="urls2"></up-album>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const albumWidth = ref(0);  
const urls2 = ref([  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/1.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/2.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/3.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/4.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/5.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/6.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/7.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/8.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/9.jpg',  
    'https://uview-ultra.jiangruyi.com/uview-ultra/album/10.jpg',  
]);  
</script>
```

```vue
<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $up-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/album.md`</small>

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
| uni-app · Vue 3 | `up-album` | `uni_modules/uview-ultra/components/up-album` |
| uni-app-x · UTS / UVUE | `up-album` | `uni_modules/uview-ultra/components/up-album` |

