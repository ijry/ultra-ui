---
title: Swiper 轮播图
description: 图片或自定义内容的轮播容器，内置多种指示器样式。
generated: true
---

# Swiper 轮播图

图片或自定义内容的轮播容器，内置多种指示器样式。

<PlatformBadges component="swiper" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSwiper
import net.lingyun.ultraui.android.components.UPSwiperProps

DemoSection("轮播图") { UPSwiper(UPSwiperProps(list = listOf("第一页", "第二页"), indicator = true))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSwiper(
  key: const ValueKey('swiper-page-basic'),
  list: _swiperImages,
  autoplay: false,
  onChange: _onChange,
  onClick: _onClick,
)
```

#### 纵向滑动

```dart
UPSwiper(
  key: ValueKey('swiper-page-vertical'),
  list: _swiperImages,
  vertical: true,
  indicator: true,
  indicatorMode: 'dot',
  autoplay: false,
  height: 200,
)
```

#### 带标题

```dart
UPSwiper(
  key: ValueKey('swiper-page-title'),
  list: _swiperTitles,
  keyName: 'image',
  showTitle: true,
  autoplay: false,
  circular: true,
)
```

#### 带指示器

```dart
UPSwiper(
  key: ValueKey('swiper-page-indicator'),
  list: _swiperImages,
  indicator: true,
  circular: true,
  autoplay: false,
)
```

#### 加载中

```dart
UPSwiper(
  key: ValueKey('swiper-page-loading'),
  list: _swiperImages,
  loading: true,
  autoplay: false,
)
```

#### 嵌入视频

```dart
UPSwiper(
  key: ValueKey('swiper-page-video'),
  list: _swiperVideos,
  keyName: 'url',
  autoplay: false,
)
```

#### 自定义内容

```dart
UPSwiper(
  key: ValueKey('swiper-page-custom'),
  list: _swiperTitles,
  keyName: 'image',
  showTitle: true,
  autoplay: false,
  circular: true,
  itemBuilder: _customItemBuilder,
)
```

#### 自定义指示器

```dart
UPSwiper(
  key: const ValueKey('swiper-page-custom-indicator'),
  list: _swiperImages,
  autoplay: false,
  onChange: _onCustomChange,
  indicatorSlot: Container(
    key: const ValueKey('swiper-page-custom-indicator-slot'),
    padding:
        const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
    decoration: BoxDecoration(
      color: const Color(0x59000000),
      borderRadius: BorderRadius.circular(20),
    ),
    child: UPSwiperIndicator(
      length: _swiperImages.length,
      current: _customCurrent,
      indicatorMode: 'dot',
    ),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/swiper_page.dart`</small>

</template>

<template #reactnative>

#### 纵向滑动

```tsx
import { UPSwiper } from 'ultra-ui-rn';

<UPSwiper
  autoplay={false}
  height="200"
  indicator
  indicatorMode="dot"
  list={list1}
  vertical
/>
```

#### 带标题

```tsx
<UPSwiper autoplay={false} circular keyName="image" list={list2} showTitle />
```

#### 带指示器

```tsx
<UPSwiper circular indicator indicatorMode="line" list={list3} />
```

#### 加载中

```tsx
<UPSwiper list={list3} loading />
```

#### 嵌入视频

```tsx
<UPSwiper autoplay={false} keyName="url" list={list4} />
```

#### 卡片式

```tsx
<UPSwiper
  autoplay={false}
  circular
  list={list3}
  nextMargin="30"
  previousMargin="30"
  radius="5"
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/SwiperDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

list 传图片地址数组，默认自动播放

```tsx
import { UPSwiper } from '@ultra-ui'

<UPSwiper list={LIST} />
```

#### 指示器

indicator 开启，indicatorMode：line / dot

```tsx
<UPSwiper list={LIST} indicator indicatorMode='line' />
```

#### 指示器颜色与位置

indicatorActiveColor / indicatorInactiveColor / indicatorStyle

```tsx
<UPSwiper
  list={LIST}
  indicator
  indicatorMode='dot'
  indicatorActiveColor='#3c9cff'
  indicatorInactiveColor='rgba(255, 255, 255, 0.6)'
  indicatorStyle={{ bottom: '20px', right: '20px', left: 'auto' }}
/>
```

#### 高度与圆角

height 控制高度，radius 控制圆角

```tsx
<UPSwiper list={LIST} height={180} radius={16} indicator />
```

#### 背景色

bgColor 为图片未加载出来时的底色

```tsx
<UPSwiper list={LIST} bgColor='#1f2937' height={110} />
```

#### 左右留白

previousMargin / nextMargin 露出前后项，非当前项自动缩放

```tsx
<UPSwiper
  list={LIST}
  circular
  previousMargin={30}
  nextMargin={30}
  height={150}
  radius={8}
/>
```

#### 纵向滚动

vertical 为 true 时上下切换

```tsx
<UPSwiper list={LIST} vertical circular indicator height={150} />
```

#### 标题

showTitle 需要 list 元素带 title 字段

```tsx
<UPSwiper list={TITLE_LIST} showTitle circular height={160} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/swiper/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：

```vue
<template>
    <up-swiper
            :list="list1"
            @change="change"
            @click="click"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式数组  
const list1 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
]);  
</script>
```

#### 带标题

添加`showTitle`属性以展示标题，此时`list`的参数应为一个对象：例如：
<br/>
（请注意：您期望使用对象作为参数时，需要配置`u-swiper`组件的`keyName`参数为`您当前对象的图片key`值）如：`keyName="image"`

```vue
<template>
    <up-swiper
            :list="list2"
            keyName="image"
            showTitle
            :autoplay="false"
            circular
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const list2 = reactive([  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
    },  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
    },  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
    },  
]);  
</script>
```

#### 带指示器

通过`indicator`属性添加指示器，例如：

```vue
<template>
    <up-swiper
            :list="list3"
            indicator
            indicatorMode="line"
            circular
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式引用  
const list3 = ref([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

#### 加载中

通过添加`loading`属性达到加载中的状态，例如：
<br/>
您也可以动态的来控制加载状态，比如：`:loading='loading'`

```vue
<template>
    <up-swiper
            :list="list3"
            loading
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式引用  
const list3 = ref([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

#### 插槽自定义内容

通过`list`参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：

```vue
<template>
    <up-swiper
            :list="list1"
            @change="change"
            @click="click"
    >
      <template v-slot:default="{item}">
        <image :src=item></image>
      </template>
    </up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式数组  
const list1 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
]);  
</script>
```

#### 嵌入视频

我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置`poster`指定视频封面，案例如下：

```vue
<template>
    <up-swiper
            :list="list4"
            keyName="url"
            :autoplay="false"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const list4 = reactive([  
    {  
        url: 'https://cdn.uviewui.com/uview/resources/video.mp4',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
        poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
        // 注意：这里看起来有个错误，url 应该是一个视频或图片的URL，但这里却给了一个图片URL  
        // 如果这是一个视频对象，你需要确保 url 是正确的视频文件URL  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
        // 同样，这里看起来 url 应该是一个视频或图片的URL，但给的是一个图片URL  
        // 需要根据实际需求修正这个值  
    },  
]);  
</script>
```

#### 指定类型

默认会根据链接自动判断`swiper-item`类型，但是在极端情况下可能会不准确，所以我们提供了指定`item`的类型，通过设置`type`为`video`或`image`即可：

```vue
<template>
    <up-swiper
            :list="list4"
            keyName="url"
            :autoplay="false"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list4 = reactive([  
    {  
        url: 'https://cdn.uviewui.com/uview/resources/video.mp4',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
        poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
        type: 'video'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
        type: 'image'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
        // 注意：这里缺少 type 属性，你可能需要添加它以便在模板中区分视频和图片  
        // 例如：type: 'image'  
    }  
]);  
</script>
```

#### 自定义指示器

如您需要以指示点或数字形式来自定义指示器，请参考如下案例：

```vue
<template>
    <view class="u-demo-block">
        <text class="u-demo-block__title">自定义指示器</text>
        <up-swiper
                :list="list5"
                @change="e => current = e.current"
                :autoplay="false"
        >
            <template #indicator>
                <view
                    class="indicator"
                >
                    <view
                            class="indicator__dot"
                            v-for="(item, index) in list5"
                            :key="index"
                            :class="[index === current && 'indicator__dot--active']"
                    >
                    </view>
                </view>
            </template>
        </up-swiper>
        <up-gap
                bgColor="transparent"
                height="15"
        ></up-gap>
        <up-swiper
                :list="list6"
                @change="e => currentNum = e.current"
                :autoplay="false"
                indicatorStyle="right: 20px"
        >
            <template #indicator>
                <view
                    class="indicator-num"
                >
                    <text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
                </view>
            </template>
        </up-swiper>
    </view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list5 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
  
const list6 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

```vue
<style lang="scss">
    .indicator {
        @include flex(row);
        justify-content: center;

        &__dot {
             height: 6px;
             width: 6px;
             border-radius: 100px;
             background-color: rgba(255, 255, 255, 0.35);
             margin: 0 5px;
             transition: background-color 0.3s;
    
            &--active {
                 background-color: #ffffff;
             }
        }
    }

    .indicator-num {
        padding: 2px 0;
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 100px;
        width: 35px;
        @include flex;
        justify-content: center;

        &__text {
             color: #FFFFFF;
             font-size: 12px;
         }
    }
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/swiper.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：

```vue
<template>
    <up-swiper
            :list="list1"
            @change="change"
            @click="click"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式数组  
const list1 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
]);  
</script>
```

#### 纵向滑动

设置 `vertical` 可开启纵向轮播，行为与原生 `swiper` 的 `vertical` 一致，默认横向：

```vue
<template>
    <up-swiper
            :list="list1"
            vertical
            indicator
            indicatorMode="dot"
            :autoplay="false"
            height="200"
    ></up-swiper>
</template>
```

#### 带标题

添加`showTitle`属性以展示标题，此时`list`的参数应为一个对象：例如：
<br/>
（请注意：您期望使用对象作为参数时，需要配置`u-swiper`组件的`keyName`参数为`您当前对象的图片key`值）如：`keyName="image"`

```vue
<template>
    <up-swiper
            :list="list2"
            keyName="image"
            showTitle
            :autoplay="false"
            circular
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const list2 = reactive([  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
    },  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
    },  
    {  
        image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
    },  
]);  
</script>
```

#### 带指示器

通过`indicator`属性添加指示器，例如：

```vue
<template>
    <up-swiper
            :list="list3"
            indicator
            indicatorMode="line"
            circular
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式引用  
const list3 = ref([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

#### 加载中

通过添加`loading`属性达到加载中的状态，例如：
<br/>
您也可以动态的来控制加载状态，比如：`:loading='loading'`

```vue
<template>
    <up-swiper
            :list="list3"
            loading
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式引用  
const list3 = ref([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

#### 嵌入视频

我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置`poster`指定视频封面，案例如下：

```vue
<template>
    <up-swiper
            :list="list4"
            keyName="url"
            :autoplay="false"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const list4 = reactive([  
    {  
        url: 'https://cdn.uviewui.com/uview/resources/video.mp4',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
        poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
        // 注意：这里看起来有个错误，url 应该是一个视频或图片的URL，但这里却给了一个图片URL  
        // 如果这是一个视频对象，你需要确保 url 是正确的视频文件URL  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
        // 同样，这里看起来 url 应该是一个视频或图片的URL，但给的是一个图片URL  
        // 需要根据实际需求修正这个值  
    },  
]);  
</script>
```

#### 指定类型

默认会根据链接自动判断`swiper-item`类型，但是在极端情况下可能会不准确，所以我们提供了指定`item`的类型，通过设置`type`为`video`或`image`即可：

```vue
<template>
    <up-swiper
            :list="list4"
            keyName="url"
            :autoplay="false"
    ></up-swiper>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list4 = reactive([  
    {  
        url: 'https://cdn.uviewui.com/uview/resources/video.mp4',  
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',  
        poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
        type: 'video'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
        title: '身无彩凤双飞翼，心有灵犀一点通',  
        type: 'image'  
    },  
    {  
        url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',  
        // 注意：这里缺少 type 属性，你可能需要添加它以便在模板中区分视频和图片  
        // 例如：type: 'image'  
    }  
]);  
</script>
```

#### 自定义指示器

如您需要以指示点或数字形式来自定义指示器，请参考如下案例：

```vue
<template>
    <view class="u-demo-block">
        <text class="u-demo-block__title">自定义指示器</text>
        <up-swiper
                :list="list5"
                @change="e => current = e.current"
                :autoplay="false"
        >
            <template #indicator>
                <view
                    class="indicator"
                >
                    <view
                            class="indicator__dot"
                            v-for="(item, index) in list5"
                            :key="index"
                            :class="[index === current && 'indicator__dot--active']"
                    >
                    </view>
                </view>
            </template>
        </up-swiper>
        <up-gap
                bgColor="transparent"
                height="15"
        ></up-gap>
        <up-swiper
                :list="list6"
                @change="e => currentNum = e.current"
                :autoplay="false"
                indicatorStyle="right: 20px"
        >
            <template #indicator>
                <view
                    class="indicator-num"
                >
                    <text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
                </view>
            </template>
        </up-swiper>
    </view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list5 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
  
const list6 = reactive([  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
]);  
</script>
```

```vue
<style lang="scss">
    .indicator {
        @include flex(row);
        justify-content: center;

        &__dot {
             height: 6px;
             width: 6px;
             border-radius: 100px;
             background-color: rgba(255, 255, 255, 0.35);
             margin: 0 5px;
             transition: background-color 0.3s;
    
            &--active {
                 background-color: #ffffff;
             }
        }
    }

    .indicator-num {
        padding: 2px 0;
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 100px;
        width: 35px;
        @include flex;
        justify-content: center;

        &__text {
             color: #FFFFFF;
             font-size: 12px;
         }
    }
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/swiper.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-swiper>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `list` | 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名 | `Array` | `[]` |
| `indicator` | 是否显示面板指示器 | `Boolean` | `false` |
| `indicatorActiveColor` | 指示器非激活颜色 | `String` | `'#FFFFFF'` |
| `indicatorInactiveColor` | 指示器的激活颜色 | `String` | `'rgba(255, 255, 255, 0.35)'` |
| `indicatorStyle` | 指示器样式，可通过bottom，left，right进行定位 | `String / Object` | `''` |
| `indicatorMode` | 指示器模式，line-线型，dot-点型 | `String` | `'line'` |
| `autoplay` | 是否自动切换 | `Boolean` | `true` |
| `current` | 当前所在滑块的 index | `String / Number` | `0` |
| `currentItemId` | 当前所在滑块的 item-id ，不能与 current 被同时指定 | `String` | `''` |
| `interval` | 滑块自动切换时间间隔 | `String / Number` | `3000` |
| `duration` | 滑块切换过程所需时间 | `String / Number` | `300` |
| `circular` | 播放到末尾后是否重新回到开头 | `Boolean` | `false` |
| `vertical` | 滑动方向是否为纵向 | `Boolean` | `false` |
| `previousMargin` | 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持 | `String / Number` | `0` |
| `nextMargin` | 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持 | `String / Number` | `0` |
| `acceleration` | 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持 | `Boolean` | `false` |
| `displayMultipleItems` | 同时显示的滑块数量，nvue、支付宝小程序不支持 | `Number` | `1` |
| `easingFunction` | 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic 只对微信小程序有效 | `String` | `'default'` |
| `keyName` | list数组中指定对象的目标属性名 | `String` | `'url'` |
| `imgMode` | 图片的裁剪模式 | `String` | `'aspectFill'` |
| `height` | 组件高度 | `String / Number` | `130` |
| `bgColor` | 背景颜色 | `String` | `'#f3f4f6'` |
| `radius` | 组件圆角，数值或带单位的字符串 | `String / Number` | `4` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `showTitle` | 是否显示标题，要求数组对象中有title属性 | `Boolean` | `false` |

#### 事件

| 事件名 |
| --- |
| `change` |
| `click` |
| `update:current` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `indicator` |

### `<up-swiper-indicator>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `length` | 轮播的长度 | `String / Number` | `0` |
| `current` | 当前处于活动状态的轮播的索引 | `String / Number` | `0` |
| `indicatorActiveColor` | 指示器非激活颜色 | `String` | `''` |
| `indicatorInactiveColor` | 指示器的激活颜色 | `String` | `''` |
| `indicatorMode` | 指示器模式，line-线型，dot-点型 | `String` | `'line'` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSwiper` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPSwiper` | `packages/ultra_ui/lib/src/widgets/up_swiper.dart` |
| React Native · TypeScript | `UPSwiper` | `src/components/swiper` |
| Taro · React + TypeScript | `UPSwiper` | `src/ultra-ui/components/up-swiper` |
| uni-app · Vue 3 | `up-swiper` | `uni_modules/uview-ultra/components/up-swiper` |
| uni-app-x · UTS / UVUE | `up-swiper` | `uni_modules/uview-ultra/components/up-swiper` |

