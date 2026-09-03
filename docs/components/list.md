---
title: List 长列表
description: 为长列表做了回收优化的容器，配合 list-item 使用。
generated: true
---

# List 长列表

为长列表做了回收优化的容器，配合 list-item 使用。

<PlatformBadges component="list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPList
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

#### 原生 ListItem 分组

```typescript
import { UPList, UPListProps } from '@lingyun/ultra-ui-hos';

UPList({ props: new UPListProps({ height: 130, scrollIntoView: 'second' }) }) {
  this.groupedItems()
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ListItemDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPList(
  height: 500,
  customStyle: const BoxDecoration(color: Colors.red),
  children: List<Widget>.generate(
    7,
    (_) => const UPListItem(
      child: UPImage(
        src: 'assets/uview/test/list-item.jpg',
        width: '100%',
        height: 160,
      ),
    ),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/test_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPList } from 'ultra-ui-rn';

<UPList onScrollToLower={loadmore}>
  {indexList.map((item, index) => (
    <UPListItem key={index}>
      <UPCell
        iconNode={
          <UPAvatar customStyle={s.avatar} shape="square" size="35" src={item.url} />
        }
        title={`列表长度-${index + 1}`}
      />
    </UPListItem>
  ))}
</UPList>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/ListDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

列表容器 + 列表项（标题与说明）

```tsx
import { UPList } from '@ultra-ui'

<UPList>
  <UPListItem title='选项一' />
  <UPListItem title='选项二' note='这是一段说明文字' />
  <UPListItem title='选项三' note='较长的说明文字会被截断处理展示两行' />
</UPList>
```

#### 带图标 / 头像

左侧 thumb 缩略图或 icon 图标

```tsx
<UPList>
  <UPListItem title='头像列表项' note='使用 thumb 展示方形头像' thumb='https://uview-plus.jiangruyi.com/github/logo.png' />
  <UPListItem title='图标列表项' note='使用内置 icon' icon='photo' />
  <UPListItem title='必填项' note='标题前带红色星号' required icon='star' />
</UPList>
```

#### 右侧内容与点击

value 文本、箭头、可点击反馈

```tsx
<UPList>
  <UPListItem title='收货地址' value='未设置' isLink onClick={() => toast.show({ message: '点击了收货地址', type: 'primary' })} />
  <UPListItem title='我的优惠券' value='3 张' isLink />
  <UPListItem title='客服中心' note='点击跳转页面' isLink />
  <UPListItem title='禁用项' value='不可点击' disabled isLink />
  <UPListItem title='自定右图标' value='>' rightIcon='arrow-right' clickable />
</UPList>
```

#### 分组吸顶

UPList sticky + UPListItem group，滚动时分组头吸顶

```tsx
<UPList sticky height='520rpx'>
  {groups.map((group) => (
    <View key={group.name}>
      <UPListItem group={`分组 ${group.name}`} title={`分组 ${group.name} 首行`} />
      {group.items.map((item) => (
        <UPListItem key={item} title={item} note={`来自分组 ${group.name}`} isLink />
      ))}
    </View>
  ))}
</UPList>
```

#### 滚动与锚点

scrollIntoView 定位到指定 anchor

```tsx
<UPList
  height='420rpx'
  scrollIntoView='item-3'
  scrollWithAnimation
>
  <UPListItem anchor='item-1' title='锚点 item-1' note='anchor="item-1"' />
  <UPListItem anchor='item-2' title='锚点 item-2' note='anchor="item-2"' />
  <UPListItem anchor='item-3' title='锚点 item-3' note='初始滚动到这里' />
  <UPListItem anchor='item-4' title='锚点 item-4' note='anchor="item-4"' />
  <UPListItem anchor='item-5' title='锚点 item-5' note='anchor="item-5"' />
  <UPListItem anchor='item-6' title='锚点 item-6' note='anchor="item-6"' />
</UPList>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/list/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-list
    @scrolltolower="scrolltolower"
>
    <up-list-item
        v-for="(item, index) in indexList"
        :key="index"
    >
        <up-cell
            :title="`列表长度-${index + 1}`"
        >
            <template #icon>
                <up-avatar
                    shape="square"
                    size="35"
                    :src="item.url"
                    customStyle="margin: -3px 5px -3px 0"
                ></up-avatar>
            </template>
        </up-cell>
    </up-list-item>
</up-list>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/list/list.uvue`</small>

</template>

<template #uniappx>

```vue
<up-list
    @scrolltolower="scrolltolower"
>
    <up-list-item
        v-for="(item, index) in indexList"
        :key="index"
    >
        <up-cell
            :title="`列表长度-${index + 1}`"
        >
            <template #icon>
                <up-avatar
                    shape="square"
                    size="35"
                    :src="item.url"
                    customStyle="margin: -3px 5px -3px 0"
                ></up-avatar>
            </template>
        </up-cell>
    </up-list-item>
</up-list>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/list/list.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-list>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `showScrollbar` | 控制是否出现滚动条，仅nvue有效 | `Boolean` | `false` |
| `lowerThreshold` | 距底部多少时触发scrolltolower事件 | `String / Number` | `50` |
| `upperThreshold` | 距顶部多少时触发scrolltoupper事件，非nvue有效 | `String / Number` | `0` |
| `scrollTop` | 设置竖向滚动条位置 | `String / Number` | `0` |
| `offsetAccuracy` | 控制 onscroll 事件触发的频率，仅nvue有效 | `String / Number` | `10` |
| `enableFlex` | 启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效 | `Boolean` | `false` |
| `pagingEnabled` | 是否按分页模式显示List，默认值false | `Boolean` | `false` |
| `scrollable` | 是否允许List滚动 | `Boolean` | `true` |
| `scrollIntoView` | 值应为某子元素id（id不能以数字开头） | `String` | `''` |
| `scrollWithAnimation` | 在设置滚动条位置时使用动画过渡 | `Boolean` | `false` |
| `enableBackToTop` | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效 | `Boolean` | `false` |
| `height` | 列表的高度 | `String / Number` | `0` |
| `width` | 列表宽度 | `String / Number` | `0` |
| `preLoadScreen` | 列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度 | `String / Number` | `1` |
| `refresherEnabled` | 开启自定义下拉刷新 | `Boolean` | `—` |
| `refresherThreshold` | 设置自定义下拉刷新阈值 | `Number` | `—` |
| `refresherDefaultStyle` | 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 | `String` | `—` |
| `refresherBackground` | 设置自定义下拉刷新区域背景颜色 | `String` | `—` |
| `refresherTriggered` | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | `Boolean` | `—` |

#### 事件

| 事件名 |
| --- |
| `refresherabort` |
| `refresherpulling` |
| `refresherrefresh` |
| `refresherrestore` |
| `scroll` |
| `scroll-to-lower` |
| `scroll-to-upper` |
| `scrolltolower` |
| `scrolltoupper` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-list-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `anchor` | 用于滚动到指定item | `String / Number` | `''` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPList` | `ultra-ui/src/main/ets/components/UPList.ets` |
| Flutter · Dart | `UPList` | `packages/ultra_ui/lib/src/widgets/up_list.dart` |
| React Native · TypeScript | `UPList` | `src/components/list` |
| Taro · React + TypeScript | `UPList` | `src/ultra-ui/components/up-list` |
| uni-app · Vue 3 | `up-list` | `uni_modules/uview-ultra/components/up-list` |
| uni-app-x · UTS / UVUE | `up-list` | `uni_modules/uview-ultra/components/up-list` |

