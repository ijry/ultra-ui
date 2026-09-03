---
title: Swipe action
description: Swipe a row to reveal action buttons, typically delete.
generated: true
---

# Swipe action

Swipe a row to reveal action buttons, typically delete.

<PlatformBadges component="swipe-action" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSwipeAction
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #flutter>

#### Worked example

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSwipeAction(
  children: <Widget>[
    UPSwipeActionItem(
      closeOnClick: false,
      options: const <Map<String, dynamic>>[
        <String, dynamic>{
          'text': '删除',
          'style': <String, dynamic>{
            'backgroundColor': '#f56c6c',
          },
        },
      ],
      onClick: (_) => _confirmDelete(),
      child: const _SwipeRow('基础使用'),
    ),
  ],
)
```

#### Button group

```dart
UPSwipeAction(
  children: <Widget>[
    UPSwipeActionItem(
      options: const <Map<String, dynamic>>[
        <String, dynamic>{
          'text': '收藏',
          'style': <String, dynamic>{
            'backgroundColor': '#3c9cff',
          },
        },
        <String, dynamic>{
          'text': '删除',
          'style': <String, dynamic>{
            'backgroundColor': '#f56c6c',
          },
        },
      ],
      child: const _SwipeRow('两个按钮并列'),
    ),
  ],
)
```

#### With an icon

```dart
UPSwipeAction(
  children: <Widget>[
    UPSwipeActionItem(
      options: const <Map<String, dynamic>>[
        <String, dynamic>{
          'text': '收藏',
          'icon': 'star-fill',
          'iconSize': '20',
          'style': <String, dynamic>{
            'backgroundColor': '#f9ae3d',
          },
        },
      ],
      child: const _SwipeRow('自定义图标'),
    ),
  ],
)
```

#### Combined usage

```dart
UPSwipeAction(
  children: <Widget>[
    _combinationRow('禁用状态', disabled: true),
    _combinationRow('正常状态'),
    _combinationRow('自动关闭', closeOnClick: true),
  ],
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/swipe_action_page.dart`</small>

</template>

<template #reactnative>

#### Worked example

```tsx
import { UPSwipeAction } from 'ultra-ui-rn';

<UPSwipeAction>
  {show1 ? (
    <UPSwipeActionItem
      closeOnClick={false}
      onClick={click}
      onUpdateShow={setSwshow1}
      options={options1}
      show={swshow1}
    >
      <View style={s.row}>
        <Text style={s.rowText}>基础使用</Text>
      </View>
    </UPSwipeActionItem>
  ) : null}
</UPSwipeAction>
```

#### Button group

```tsx
<UPSwipeAction>
  <UPSwipeActionItem closeOnClick options={options2}>
    <View style={s.row}>
      <Text style={s.rowText}>两个按钮并列</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### With an icon

```tsx
<UPSwipeAction>
  <UPSwipeActionItem options={options3}>
    <View style={s.row}>
      <Text style={s.rowText}>自定义图标</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### Combined usage

```tsx
<UPSwipeAction>
  {options4.map((item) => (
    <UPSwipeActionItem disabled={item.disabled} key={item.text} options={item.options}>
      <View style={s.row}>
        <Text style={s.rowText}>{item.text}</Text>
      </View>
    </UPSwipeActionItem>
  ))}
</UPSwipeAction>
```

#### Custom button shape

```tsx
<UPSwipeAction>
  <UPSwipeActionItem options={options5}>
    <View style={s.row}>
      <Text style={s.rowText}>圆形按钮</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/SwipeActionDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPSwipeAction } from '@ultra-ui'

<UPSwipeAction closeOnClickAction>
  <UPSwipeActionItem
    options={[
      { text: '收藏', style: { backgroundColor: '#3c9cff' }, onSelect: () => console.log('收藏') },
      { text: '删除', style: { backgroundColor: '#f56c6c' }, onSelect: () => console.log('删除') },
    ]}
  >
    <View className='swipe-action-demo__row'>
      <Text className='swipe-action-demo__title'>可滑动的行（收藏 / 删除）</Text>
      <Text className='swipe-action-demo__sub'>向左滑动试试</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### Multi-line list

```tsx
<UPSwipeAction>
  <UPSwipeActionItem
    options={[{ text: '删除', style: { backgroundColor: '#f56c6c' }, onSelect: () => console.log('删除 A') }]}
  >
    <View className='swipe-action-demo__row'>
      <Text className='swipe-action-demo__title'>消息 A</Text>
    </View>
  </UPSwipeActionItem>
  <UPSwipeActionItem
    options={[{ text: '删除', style: { backgroundColor: '#f56c6c' }, onSelect: () => console.log('删除 B') }]}
  >
    <View className='swipe-action-demo__row'>
      <Text className='swipe-action-demo__title'>消息 B</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### Swiping disabled

```tsx
<UPSwipeAction>
  <UPSwipeActionItem
    disabled
    options={[{ text: '删除', style: { backgroundColor: '#f56c6c' } }]}
  >
    <View className='swipe-action-demo__row'>
      <Text className='swipe-action-demo__title'>禁用滑动的行</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/swipe-action/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item
          v-model:show="show"
          :options="options1"
        >
          <view class="swipe-action up-border-top up-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">基础使用</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const show = ref(false)
// 使用 reactive 创建响应式对象  
const options1 = reactive([{  
    text: '删除'  
}]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

#### Preventing the page from scrolling

```vue
<template>
  <page-meta :page-style="swipeScrolling ? 'overflow:hidden;' : ''" />
  <up-swipe-action>
    <up-swipe-action-item
      v-model:scrolling="swipeScrolling"
      :options="options1"
    >
      <view class="swipe-action up-border-top up-border-bottom">
        <view class="swipe-action__content">
          <text class="swipe-action__content__text">左滑时页面不滚动</text>
        </view>
      </view>
    </up-swipe-action-item>
  </up-swipe-action>
</template>
```

```vue
<template>
  <scroll-view :scroll-y="!swipeScrolling">
    <up-swipe-action>
      <up-swipe-action-item
        v-model:scrolling="swipeScrolling"
        :options="options1"
      >
        <view class="swipe-action up-border-top up-border-bottom">
          <view class="swipe-action__content">
            <text class="swipe-action__content__text">左滑时容器不滚动</text>
          </view>
        </view>
      </up-swipe-action-item>
    </up-swipe-action>
  </scroll-view>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const swipeScrolling = ref(false)
</script>
```

#### Several buttons side by side

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item :options="options2">
          <view class="swipe-action up-border-top up-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">两个按钮并列</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const options2 = reactive([  
  {  
    text: '收藏',  
    style: {  
      backgroundColor: '#3c9cff'  
    }  
  },  
  {  
    text: '删除',  
    style: {  
      backgroundColor: '#f56c6c'  
    }  
  }  
]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

#### Combined usage

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item
          :options="item.options"
          v-for="(item, index) in options4"
          :disabled="item.disabled"
          :key="index"
        >
          <view
            class="swipe-action up-border-top"
            :class="[index === options4.length - 1 && 'up-border-bottom']"
          >
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">{{ item.text }}</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const options4 = reactive([  
  {  
    text: '禁用状态',  
    disabled: true,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }, {  
    text: '正常状态',  
    disabled: false,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }, {  
    text: '自动关闭',  
    disabled: false,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }  
]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/swipeAction.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item
          v-model:show="show"
          :options="options1"
        >
          <view class="swipe-action up-border-top up-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">基础使用</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const show = ref(false)
// 使用 reactive 创建响应式对象  
const options1 = reactive([{  
    text: '删除'  
}]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $up-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

#### Preventing the page from scrolling

```vue
<template>
  <page-meta :page-style="swipeScrolling ? 'overflow:hidden;' : ''" />
  <up-swipe-action>
    <up-swipe-action-item
      v-model:scrolling="swipeScrolling"
      :options="options1"
    >
      <view class="swipe-action up-border-top up-border-bottom">
        <view class="swipe-action__content">
          <text class="swipe-action__content__text">左滑时页面不滚动</text>
        </view>
      </view>
    </up-swipe-action-item>
  </up-swipe-action>
</template>
```

```vue
<template>
  <scroll-view :scroll-y="!swipeScrolling">
    <up-swipe-action>
      <up-swipe-action-item
        v-model:scrolling="swipeScrolling"
        :options="options1"
      >
        <view class="swipe-action up-border-top up-border-bottom">
          <view class="swipe-action__content">
            <text class="swipe-action__content__text">左滑时容器不滚动</text>
          </view>
        </view>
      </up-swipe-action-item>
    </up-swipe-action>
  </scroll-view>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const swipeScrolling = ref(false)
</script>
```

#### Several buttons side by side

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item :options="options2">
          <view class="swipe-action up-border-top up-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">两个按钮并列</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const options2 = reactive([  
  {  
    text: '收藏',  
    style: {  
      backgroundColor: '#3c9cff'  
    }  
  },  
  {  
    text: '删除',  
    style: {  
      backgroundColor: '#f56c6c'  
    }  
  }  
]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $up-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

#### Combined usage

```vue
<template>
	<view>
      <up-swipe-action>
        <up-swipe-action-item
          :options="item.options"
          v-for="(item, index) in options4"
          :disabled="item.disabled"
          :key="index"
        >
          <view
            class="swipe-action up-border-top"
            :class="[index === options4.length - 1 && 'up-border-bottom']"
          >
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">{{ item.text }}</text>
            </view>
          </view>
        </up-swipe-action-item>
      </up-swipe-action>
	</view>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 使用 reactive 创建响应式对象数组  
const options4 = reactive([  
  {  
    text: '禁用状态',  
    disabled: true,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }, {  
    text: '正常状态',  
    disabled: false,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }, {  
    text: '自动关闭',  
    disabled: false,  
    options: [{  
      text: '置顶',  
      style: {  
        backgroundColor: '#3c9cff',  
      }  
    }, {  
      text: '取消',  
      style: {  
        backgroundColor: '#f9ae3d',  
      }  
    }],  
  }  
]);  
</script>
```

```vue
<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $up-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/swipeAction.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-swipe-action>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `autoClose` | 是否自动关闭其他swipe按钮组 | `Boolean` | `true` |
| `opendItem` | 是否存在打开的按钮组 | `Boolean` | `—` |

#### Events

| Event |
| --- |
| `opendItem:update` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-swipe-action-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 控制打开或者关闭 | `Boolean` | `—` |
| `closeOnClick` | — | `Boolean` | `—` |
| `name` | 标识符，如果是v-for，可用index索引值 | `String / Number` | `—` |
| `disabled` | 是否禁用 | `Boolean` | `—` |
| `autoClose` | 是否自动关闭其他swipe按钮组 | `Boolean` | `—` |
| `scrolling` | 是否正在横向滑动，可用于 v-model:scrolling 暂停外部滚动 | `Boolean` | `—` |
| `threshold` | 滑动距离阈值，只有大于此值，才被认为是要打开菜单 | `Number` | `—` |
| `options` | 右侧按钮内容 | `Array` | `—` |
| `duration` | 动画过渡时间，单位ms | `String / Number` | `—` |

#### Events

| Event |
| --- |
| `click` |
| `scrolling` |
| `update:scrolling` |
| `update:show` |

#### Slots

| Slot |
| --- |
| `button` |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSwipeAction` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPSwipeAction` | `packages/ultra_ui/lib/src/widgets/up_swipe_action.dart` |
| React Native · TypeScript | `UPSwipeAction` | `src/components/swipe-action` |
| Taro · React + TypeScript | `UPSwipeAction` | `src/ultra-ui/components/up-swipe-action` |
| uni-app · Vue 3 | `up-swipe-action` | `uni_modules/uview-ultra/components/up-swipe-action` |
| uni-app-x · UTS / UVUE | `up-swipe-action` | `uni_modules/uview-ultra/components/up-swipe-action` |

