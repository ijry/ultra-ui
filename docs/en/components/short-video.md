---
title: Short video
description: A full-screen, vertically swipeable short-video player.
generated: true
---

# Short video

A full-screen, vertically swipeable short-video player.

<PlatformBadges component="short-video" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Basic usage

```vue
<template>
	<view class="page">
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
		</up-short-video>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const currentTab = ref(0);
const currentVideo = ref(0);

const tabsList = ref([
  { name: '推荐' },
  { name: '关注' },
  { name: '朋友' },
  { name: '本地' }
]);

const videoList = ref([
  {
    videoUrl: 'http://qn-o.jiangruyi.com/rjtsdl.MP4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar1.jpg',
      name: '创作者1',
      desc: '这是一段视频描述'
    },
    isLiked: false,
    likeCount: 128,
    commentCount: 25,
    shareCount: 12,
    collectCount: 8,
    isCollected: false
  },
  {
    videoUrl: 'http://qn-o.jiangruyi.com/shanghai.mp4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar2.jpg',
      name: '创作者2',
      desc: '记录美好生活'
    },
    isLiked: true,
    likeCount: 863,
    commentCount: 96,
    shareCount: 32,
    collectCount: 45,
    isCollected: true
  }
]);

const onTabChange = (index) => {
  console.log('切换tab到:', index);
  currentTab.value = index;
};

const onVideoChange = (index) => {
  console.log('切换视频到:', index);
  currentVideo.value = index;
};

const onLike = ({ item, index }) => {
  console.log('点赞视频:', index);
  // 更新点赞状态和数量
  videoList.value[index].isLiked = !videoList.value[index].isLiked;
  videoList.value[index].likeCount += videoList.value[index].isLiked ? 1 : -1;
};

const onComment = ({ item, index }) => {
  console.log('评论视频:', index);
  uni.showToast({
    title: '评论功能',
    icon: 'none'
  });
};

const onShare = ({ item, index }) => {
  console.log('分享视频:', index);
  uni.showToast({
    title: '分享功能',
    icon: 'none'
  });
};

const onCollect = ({ item, index }) => {
  console.log('收藏视频:', index);
  // 更新收藏状态和数量
  videoList.value[index].isCollected = !videoList.value[index].isCollected;
  videoList.value[index].collectCount += videoList.value[index].isCollected ? 1 : -1;
};
</script>
```

#### Custom slot

```vue
<template>
	<view class="page">
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
			
			<!-- 自定义操作按钮 -->
			<template #actions="{item, index}">
				<view class="custom-actions">
					<view class="action-item" @click="onLike({item, index})">
						<up-icon 
							:name="item.isLiked ? 'thumb-up-fill' : 'thumb-up'" 
							size="32px" 
							color="#eee"
						></up-icon>
						<text class="action-text">{{ item.likeCount }}</text>
					</view>
					<view class="action-item" @click="onComment({item, index})">
						<up-icon name="chat" size="32px" color="#eee"></up-icon>
						<text class="action-text">{{ item.commentCount }}</text>
					</view>
					<view class="action-item" @click="onShare({item, index})">
						<up-icon name="share" size="32px" color="#eee"></up-icon>
						<text class="action-text">{{ item.shareCount }}</text>
					</view>
					<view class="action-item" @click="onCollect({item, index})">
						<up-icon 
							:name="item.isCollected ? 'bookmark-fill' : 'bookmark'" 
							size="32px" 
							color="#eee"
						></up-icon>
						<text class="action-text">{{ item.collectCount }}</text>
					</view>
				</view>
			</template>
		</up-short-video>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const currentTab = ref(0);
const currentVideo = ref(0);

const tabsList = ref([
  { name: '推荐' },
  { name: '关注' },
  { name: '朋友' },
  { name: '本地' }
]);

const videoList = ref([
  {
    videoUrl: 'http://qn-o.jiangruyi.com/rjtsdl.MP4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar1.jpg',
      name: '创作者1',
      desc: '这是一段视频描述'
    },
    isLiked: false,
    likeCount: 128,
    commentCount: 25,
    shareCount: 12,
    collectCount: 8,
    isCollected: false
  },
  {
    videoUrl: 'http://qn-o.jiangruyi.com/shanghai.mp4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar2.jpg',
      name: '创作者2',
      desc: '记录美好生活'
    },
    isLiked: true,
    likeCount: 863,
    commentCount: 96,
    shareCount: 32,
    collectCount: 45,
    isCollected: true
  }
]);

const onTabChange = (index) => {
  console.log('切换tab到:', index);
  currentTab.value = index;
};

const onVideoChange = (index) => {
  console.log('切换视频到:', index);
  currentVideo.value = index;
};

const onLike = ({ item, index }) => {
  console.log('点赞视频:', index);
  // 更新点赞状态和数量
  videoList.value[index].isLiked = !videoList.value[index].isLiked;
  videoList.value[index].likeCount += videoList.value[index].isLiked ? 1 : -1;
};

const onComment = ({ item, index }) => {
  console.log('评论视频:', index);
  uni.showToast({
    title: '评论功能',
    icon: 'none'
  });
};

const onShare = ({ item, index }) => {
  console.log('分享视频:', index);
  uni.showToast({
    title: '分享功能',
    icon: 'none'
  });
};

const onCollect = ({ item, index }) => {
  console.log('收藏视频:', index);
  // 更新收藏状态和数量
  videoList.value[index].isCollected = !videoList.value[index].isCollected;
  videoList.value[index].collectCount += videoList.value[index].isCollected ? 1 : -1;
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/shortVideo.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view class="page">
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
		</up-short-video>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const currentTab = ref(0);
const currentVideo = ref(0);

const tabsList = ref([
  { name: '推荐' },
  { name: '关注' },
  { name: '朋友' },
  { name: '本地' }
]);

const videoList = ref([
  {
    videoUrl: 'http://qn-o.jiangruyi.com/rjtsdl.MP4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar1.jpg',
      name: '创作者1',
      desc: '这是一段视频描述'
    },
    isLiked: false,
    likeCount: 128,
    commentCount: 25,
    shareCount: 12,
    collectCount: 8,
    isCollected: false
  },
  {
    videoUrl: 'http://qn-o.jiangruyi.com/shanghai.mp4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar2.jpg',
      name: '创作者2',
      desc: '记录美好生活'
    },
    isLiked: true,
    likeCount: 863,
    commentCount: 96,
    shareCount: 32,
    collectCount: 45,
    isCollected: true
  }
]);

const onTabChange = (index) => {
  console.log('切换tab到:', index);
  currentTab.value = index;
};

const onVideoChange = (index) => {
  console.log('切换视频到:', index);
  currentVideo.value = index;
};

const onLike = ({ item, index }) => {
  console.log('点赞视频:', index);
  // 更新点赞状态和数量
  videoList.value[index].isLiked = !videoList.value[index].isLiked;
  videoList.value[index].likeCount += videoList.value[index].isLiked ? 1 : -1;
};

const onComment = ({ item, index }) => {
  console.log('评论视频:', index);
  uni.showToast({
    title: '评论功能',
    icon: 'none'
  });
};

const onShare = ({ item, index }) => {
  console.log('分享视频:', index);
  uni.showToast({
    title: '分享功能',
    icon: 'none'
  });
};

const onCollect = ({ item, index }) => {
  console.log('收藏视频:', index);
  // 更新收藏状态和数量
  videoList.value[index].isCollected = !videoList.value[index].isCollected;
  videoList.value[index].collectCount += videoList.value[index].isCollected ? 1 : -1;
};
</script>
```

#### Custom slot

```vue
<template>
	<view class="page">
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
			
			<!-- 自定义操作按钮 -->
			<template #actions="{item, index}">
				<view class="custom-actions">
					<view class="action-item" @click="onLike({item, index})">
						<up-icon 
							:name="item.isLiked ? 'thumb-up-fill' : 'thumb-up'" 
							size="32px" 
							color="#eee"
						></up-icon>
						<text class="action-text">{{ item.likeCount }}</text>
					</view>
					<view class="action-item" @click="onComment({item, index})">
						<up-icon name="chat" size="32px" color="#eee"></up-icon>
						<text class="action-text">{{ item.commentCount }}</text>
					</view>
					<view class="action-item" @click="onShare({item, index})">
						<up-icon name="share" size="32px" color="#eee"></up-icon>
						<text class="action-text">{{ item.shareCount }}</text>
					</view>
					<view class="action-item" @click="onCollect({item, index})">
						<up-icon 
							:name="item.isCollected ? 'bookmark-fill' : 'bookmark'" 
							size="32px" 
							color="#eee"
						></up-icon>
						<text class="action-text">{{ item.collectCount }}</text>
					</view>
				</view>
			</template>
		</up-short-video>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const currentTab = ref(0);
const currentVideo = ref(0);

const tabsList = ref([
  { name: '推荐' },
  { name: '关注' },
  { name: '朋友' },
  { name: '本地' }
]);

const videoList = ref([
  {
    videoUrl: 'http://qn-o.jiangruyi.com/rjtsdl.MP4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar1.jpg',
      name: '创作者1',
      desc: '这是一段视频描述'
    },
    isLiked: false,
    likeCount: 128,
    commentCount: 25,
    shareCount: 12,
    collectCount: 8,
    isCollected: false
  },
  {
    videoUrl: 'http://qn-o.jiangruyi.com/shanghai.mp4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar2.jpg',
      name: '创作者2',
      desc: '记录美好生活'
    },
    isLiked: true,
    likeCount: 863,
    commentCount: 96,
    shareCount: 32,
    collectCount: 45,
    isCollected: true
  }
]);

const onTabChange = (index) => {
  console.log('切换tab到:', index);
  currentTab.value = index;
};

const onVideoChange = (index) => {
  console.log('切换视频到:', index);
  currentVideo.value = index;
};

const onLike = ({ item, index }) => {
  console.log('点赞视频:', index);
  // 更新点赞状态和数量
  videoList.value[index].isLiked = !videoList.value[index].isLiked;
  videoList.value[index].likeCount += videoList.value[index].isLiked ? 1 : -1;
};

const onComment = ({ item, index }) => {
  console.log('评论视频:', index);
  uni.showToast({
    title: '评论功能',
    icon: 'none'
  });
};

const onShare = ({ item, index }) => {
  console.log('分享视频:', index);
  uni.showToast({
    title: '分享功能',
    icon: 'none'
  });
};

const onCollect = ({ item, index }) => {
  console.log('收藏视频:', index);
  // 更新收藏状态和数量
  videoList.value[index].isCollected = !videoList.value[index].isCollected;
  videoList.value[index].collectCount += videoList.value[index].isCollected ? 1 : -1;
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/shortVideo.md`</small>

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

