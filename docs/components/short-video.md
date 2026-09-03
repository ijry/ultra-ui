---
title: Short video 短视频
description: 全屏上下滑动的短视频播放容器。
generated: true
---

# Short video 短视频

全屏上下滑动的短视频播放容器。

<PlatformBadges component="short-video" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPShortVideo } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPShortVideo } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

- 通过`tabsList`(设置顶部分类标签)，`videoList`(设置视频数据列表)，`currentTab`(当前选中的tab索引)，`currentVideo`(当前播放的视频索引)
- 通过各种事件监听实现交互功能，如`@tabChange`(标签切换)、`@videoChange`(视频切换)、`@like`(点赞)等

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

#### 自定义插槽示例

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/shortVideo.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`tabsList`(设置顶部分类标签)，`videoList`(设置视频数据列表)，`currentTab`(当前选中的tab索引)，`currentVideo`(当前播放的视频索引)
- 通过各种事件监听实现交互功能，如`@tabChange`(标签切换)、`@videoChange`(视频切换)、`@like`(点赞)等

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

#### 自定义插槽示例

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/shortVideo.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
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

### 插槽

| 插槽名 |
| --- |
| `actions` |
| `menu` |
| `search` |
| `tabbar` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPShortVideo` | `packages/ultra_ui/lib/src/widgets/up_short_video.dart` |
| React Native · TypeScript | `UPShortVideo` | `src/components/short-video` |
| Taro · React + TypeScript | `UPShortVideo` | `src/ultra-ui/components/up-short-video` |
| uni-app · Vue 3 | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |
| uni-app-x · UTS / UVUE | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |

