---
title: Short video
description: A full-screen, vertically swipeable short-video player.
generated: true
---

# Short video

A full-screen, vertically swipeable short-video player.

<PlatformBadges component="short-video" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPShortVideo } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPShortVideo } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-short-video 
    :tabs-list="tabsList"
    :video-list="videoList"
    :current-tab="currentTab"
    :current-video="currentVideo"
    @tabChange="onTabChange"
    @videoChange="onVideoChange"
    @like="onLike"
    @comment="onComment"
    @share="onShare"
    @collect="onCollect"
>
    <!-- 自定义菜单按钮 -->
    <template #menu>
        <view class="custom-menu">
            <up-icon name="grid" size="22px" color="#ddd"></up-icon>
        </view>
    </template>
    
    <!-- 自定义搜索按钮 -->
    <template #search>
        <view class="custom-search">
            <up-icon name="search" size="22px" color="#ddd"></up-icon>
        </view>
    </template>
    
    <template #tabbar> 
        <up-tabbar
            :fixed="true"
            :placeholder="true"
            :safeAreaInsetBottom="true"
            borderColor="rgba(255,255,255,0.25) !important"
            backgroundColor="rgba(255,255,255,0.05)"
        >
            <up-tabbar-item
                @click="goNext"
                text="首页"
                icon="home"
            >
            </up-tabbar-item>
            <up-tabbar-item
                text="放映厅"
                icon="photo"
            ></up-tabbar-item>
            <up-tabbar-item
                text="直播"
                icon="play-right"
            ></up-tabbar-item>
            <up-tabbar-item
                text="我的"
                icon="account"
            ></up-tabbar-item>
        </up-tabbar>
    </template>
</up-short-video>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/shortVideo/shortVideo.uvue`</small>

</template>

<template #uniappx>

```vue
<up-short-video 
    :tabs-list="tabsList"
    :video-list="videoList"
    :current-tab="currentTab"
    :current-video="currentVideo"
    @tabChange="onTabChange"
    @videoChange="onVideoChange"
    @like="onLike"
    @comment="onComment"
    @share="onShare"
    @collect="onCollect"
>
    <!-- 自定义菜单按钮 -->
    <template #menu>
        <view class="custom-menu">
            <up-icon name="grid" size="22px" color="#ddd"></up-icon>
        </view>
    </template>
    
    <!-- 自定义搜索按钮 -->
    <template #search>
        <view class="custom-search">
            <up-icon name="search" size="22px" color="#ddd"></up-icon>
        </view>
    </template>
    
    <template #tabbar> 
        <up-tabbar
            :fixed="true"
            :placeholder="true"
            :safeAreaInsetBottom="true"
            borderColor="rgba(255,255,255,0.25) !important"
            backgroundColor="rgba(255,255,255,0.05)"
        >
            <up-tabbar-item
                @click="goNext"
                text="首页"
                icon="home"
            >
            </up-tabbar-item>
            <up-tabbar-item
                text="放映厅"
                icon="photo"
            ></up-tabbar-item>
            <up-tabbar-item
                text="直播"
                icon="play-right"
            ></up-tabbar-item>
            <up-tabbar-item
                text="我的"
                icon="account"
            ></up-tabbar-item>
        </up-tabbar>
    </template>
</up-short-video>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/shortVideo/shortVideo.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `collect` |
| `comment` |
| `like` |
| `loadedMetadata` |
| `progressChange` |
| `progressChanging` |
| `share` |
| `tabChange` |
| `timeUpdate` |
| `videoChange` |
| `videoEnded` |
| `videoPause` |
| `videoPlay` |

### Slots

| Slot |
| --- |
| `actions` |
| `menu` |
| `search` |
| `tabbar` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPShortVideo` | `packages/ultra_ui/lib/src/widgets/up_short_video.dart` |
| React Native · TypeScript | `UPShortVideo` | `src/components/short-video` |
| Taro · React + TypeScript | `UPShortVideo` | `src/ultra-ui/components/up-short-video` |
| uni-app · Vue 3 | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |
| uni-app-x · UTS / UVUE | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |

