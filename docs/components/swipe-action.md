---
title: Swipe action 滑动操作
description: 左滑或右滑露出操作按钮，常用于列表项删除。
generated: true
---

# Swipe action 滑动操作

左滑或右滑露出操作按钮，常用于列表项删除。

<PlatformBadges component="swipe-action" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSwipeAction
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #flutter>

#### 演示案例

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

#### 按钮组

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

#### 带图标

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

#### 组合使用

```dart
UPSwipeAction(
  children: <Widget>[
    _combinationRow('禁用状态', disabled: true),
    _combinationRow('正常状态'),
    _combinationRow('自动关闭', closeOnClick: true),
  ],
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/swipe_action_page.dart`</small>

</template>

<template #reactnative>

#### 演示案例

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

#### 按钮组

```tsx
<UPSwipeAction>
  <UPSwipeActionItem closeOnClick options={options2}>
    <View style={s.row}>
      <Text style={s.rowText}>两个按钮并列</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### 带图标

```tsx
<UPSwipeAction>
  <UPSwipeActionItem options={options3}>
    <View style={s.row}>
      <Text style={s.rowText}>自定义图标</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

#### 组合使用

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

#### 自定义按钮形状

```tsx
<UPSwipeAction>
  <UPSwipeActionItem options={options5}>
    <View style={s.row}>
      <Text style={s.rowText}>圆形按钮</Text>
    </View>
  </UPSwipeActionItem>
</UPSwipeAction>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/SwipeActionDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

向左滑动行露出操作按钮，最多同时展开一行

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

#### 多行列表

每行独立，展开一行会自动收起其它行

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

#### 禁用滑动

disabled 时不可滑动展开

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

<small>示例来源 `ultra-ui-taro/src/pages/components/swipe-action/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过slot传入内部内容即可，可以将`v-for`的"index"索引值传递给`index`参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)  
- 内部的按钮通过`options`参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，**请勿配置宽高等属性**。

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

#### 防止页面或容器滚动

`up-swipe-action-item` 内部会在横向滑动时尽量阻止默认滚动，但部分平台或外层 `scroll-view` 仍可能继续滚动。可以通过 `v-model:scrolling` 接收横向滑动状态，并在外层主动暂停滚动。

页面滚动可配合 `page-meta`：

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

外层是 `scroll-view` 时，直接控制 `scroll-y`：

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

`scrolling` 仅表示正在横向滑动手势中，手势结束、取消、关闭或组件禁用时会自动恢复为 `false`，菜单保持打开不会持续锁定滚动。

#### 多个按钮并列

- 通过添加`options`的值，达到多个并列的效果

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

#### 组合使用

- 通过增设`options`的`options`达成组合效果

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/swipeAction.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过slot传入内部内容即可，可以将`v-for`的"index"索引值传递给`index`参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)  
- 内部的按钮通过`options`参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，**请勿配置宽高等属性**。

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

#### 防止页面或容器滚动

`up-swipe-action-item` 内部会在横向滑动时尽量阻止默认滚动，但部分平台或外层 `scroll-view` 仍可能继续滚动。可以通过 `v-model:scrolling` 接收横向滑动状态，并在外层主动暂停滚动。

页面滚动可配合 `page-meta`：

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

外层是 `scroll-view` 时，直接控制 `scroll-y`：

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

`scrolling` 仅表示正在横向滑动手势中，手势结束、取消、关闭或组件禁用时会自动恢复为 `false`，菜单保持打开不会持续锁定滚动。

#### 多个按钮并列

- 通过添加`options`的值，达到多个并列的效果

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

#### 组合使用

- 通过增设`options`的`options`达成组合效果

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/swipeAction.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-swipe-action>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `autoClose` | 是否自动关闭其他swipe按钮组 | `Boolean` | `true` |
| `opendItem` | 是否存在打开的按钮组 | `Boolean` | `—` |

#### 事件

| 事件名 |
| --- |
| `opendItem:update` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-swipe-action-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
| --- |
| `click` |
| `scrolling` |
| `update:scrolling` |
| `update:show` |

#### 插槽

| 插槽名 |
| --- |
| `button` |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSwipeAction` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPSwipeAction` | `packages/ultra_ui/lib/src/widgets/up_swipe_action.dart` |
| React Native · TypeScript | `UPSwipeAction` | `src/components/swipe-action` |
| Taro · React + TypeScript | `UPSwipeAction` | `src/ultra-ui/components/up-swipe-action` |
| uni-app · Vue 3 | `up-swipe-action` | `uni_modules/uview-ultra/components/up-swipe-action` |
| uni-app-x · UTS / UVUE | `up-swipe-action` | `uni_modules/uview-ultra/components/up-swipe-action` |

