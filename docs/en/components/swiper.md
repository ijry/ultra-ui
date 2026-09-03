---
title: Swiper
description: A carousel for images or custom content, with several indicator styles.
generated: true
---

# Swiper

A carousel for images or custom content, with several indicator styles.

<PlatformBadges component="swiper" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSwiper
import net.lingyun.ultraui.android.components.UPSwiperProps

DemoSection("轮播图") { UPSwiper(UPSwiperProps(list = listOf("第一页", "第二页"), indicator = true))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### Basic features

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

#### Vertical swiping

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

#### With a title

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

#### With indicators

```dart
UPSwiper(
  key: ValueKey('swiper-page-indicator'),
  list: _swiperImages,
  indicator: true,
  circular: true,
  autoplay: false,
)
```

#### Loading

```dart
UPSwiper(
  key: ValueKey('swiper-page-loading'),
  list: _swiperImages,
  loading: true,
  autoplay: false,
)
```

#### Embedded video

```dart
UPSwiper(
  key: ValueKey('swiper-page-video'),
  list: _swiperVideos,
  keyName: 'url',
  autoplay: false,
)
```

#### Custom content

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

#### Custom indicator

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/swiper_page.dart`</small>

</template>

<template #reactnative>

#### Vertical swiping

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

#### With a title

```tsx
<UPSwiper autoplay={false} circular keyName="image" list={list2} showTitle />
```

#### With indicators

```tsx
<UPSwiper circular indicator indicatorMode="line" list={list3} />
```

#### Loading

```tsx
<UPSwiper list={list3} loading />
```

#### Embedded video

```tsx
<UPSwiper autoplay={false} keyName="url" list={list4} />
```

#### Card style

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

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/SwiperDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPSwiper } from '@ultra-ui'

<UPSwiper list={LIST} />
```

#### Indicator

```tsx
<UPSwiper list={LIST} indicator indicatorMode='line' />
```

#### Indicator colour and position

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

#### Height and corner radius

```tsx
<UPSwiper list={LIST} height={180} radius={16} indicator />
```

#### Background colour

```tsx
<UPSwiper list={LIST} bgColor='#1f2937' height={110} />
```

#### Horizontal padding

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

#### Vertical scrolling

```tsx
<UPSwiper list={LIST} vertical circular indicator height={150} />
```

#### Title

```tsx
<UPSwiper list={TITLE_LIST} showTitle circular height={160} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/swiper/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

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

#### With a title

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

#### With indicators

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

#### Loading

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

#### Custom slot content

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

#### Embedded video

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

#### Choosing the type

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

#### Custom indicator

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/swiper.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Vertical swiping

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

#### With a title

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

#### With indicators

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

#### Loading

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

#### Embedded video

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

#### Choosing the type

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

#### Custom indicator

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/swiper.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-swiper>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `default` |
| `indicator` |

### `<up-swiper-indicator>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `length` | 轮播的长度 | `String / Number` | `0` |
| `current` | 当前处于活动状态的轮播的索引 | `String / Number` | `0` |
| `indicatorActiveColor` | 指示器非激活颜色 | `String` | `''` |
| `indicatorInactiveColor` | 指示器的激活颜色 | `String` | `''` |
| `indicatorMode` | 指示器模式，line-线型，dot-点型 | `String` | `'line'` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSwiper` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPSwiper` | `packages/ultra_ui/lib/src/widgets/up_swiper.dart` |
| React Native · TypeScript | `UPSwiper` | `src/components/swiper` |
| Taro · React + TypeScript | `UPSwiper` | `src/ultra-ui/components/up-swiper` |
| uni-app · Vue 3 | `up-swiper` | `uni_modules/uview-ultra/components/up-swiper` |
| uni-app-x · UTS / UVUE | `up-swiper` | `uni_modules/uview-ultra/components/up-swiper` |

