---
title: Swipe action 滑动操作
description: 左滑或右滑露出操作按钮，常用于列表项删除。
generated: true
---

# Swipe action 滑动操作

左滑或右滑露出操作按钮，常用于列表项删除。

<PlatformBadges component="swipe-action" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/swipe_action_page.dart`</small>

</template>

<template #reactnative>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/SwipeActionDemo.tsx`</small>

</template>

<template #taro>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/swipe-action/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-swipe-action>
    <up-swipe-action-item
        v-if="show1"
        :closeOnClick="false"
        v-model:show="swshow1"
        v-model:scrolling="swipeScrolling"
        :options="options1"
        @click="click"
    >
        <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
                <text class="swipe-action__content__text">基础使用</text>
            </view>
        </view>
    </up-swipe-action-item>
</up-swipe-action>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/swipeAction/swipeAction.nvue`</small>

</template>

<template #uniappx>

```vue
<up-swipe-action>
    <up-swipe-action-item
        v-if="show1"
        :show="true"
        v-model:scrolling="swipeScrolling"
        :options="options1"
        @click="click"
    >
        <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
                <text class="swipe-action__content__text">基础使用</text>
            </view>
        </view>
    </up-swipe-action-item>
</up-swipe-action>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/swipeAction/swipeAction.uvue`</small>

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
| `scrolling` | 是否正在横向滑动，用于外部通过v-model:scrolling暂停页面或容器滚动 | `Boolean` | `—` |
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
| uni-app · Vue 3 | `up-swipe-action` | `src/uni_modules/uview-plus/components/u-swipe-action` |
| uni-app-x · UTS / UVUE | `up-swipe-action` | `uni_modules/uview-ultra/components/up-swipe-action` |

