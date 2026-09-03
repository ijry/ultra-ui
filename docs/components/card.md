---
title: Card 卡片
description: 带头部、内容与底部三段结构的卡片容器。
generated: true
---

# Card 卡片

带头部、内容与底部三段结构的卡片容器。

<PlatformBadges component="card" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCard
import net.lingyun.ultraui.android.components.UPCardProps

UPCard(
    props = UPCardProps(title = "订单信息", subTitle = "今天 12:30", index = 1),
    onClick = { eventText = "卡片：点击 $it" },
) {
    Text("卡片主体内容", color = UPTheme.Content)
}
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 默认头部与本地缩略图

```typescript
import { UPCard, UPCardProps } from '@lingyun/ultra-ui-hos';

UPCard({ props: new UPCardProps({
    index: 'default-card',
    title: 'UltraUI 鸿蒙 NEXT',
    subTitle: '原生 ArkUI 卡片',
    thumb: '$rawfile:app_icon.png',
    thumbCircle: true,
    showHead: this.showHead,
    showFoot: false,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    onClick: (event: UPCardClickEvent): void => {
      this.selected(event, '通用点击');
    },
    onHeadClick: (event: UPCardClickEvent): void => {
      this.selected(event, '头部点击');
    },
    onBodyClick: (event: UPCardClickEvent): void => {
      this.selected(event, '主体点击');
    }
  })
}) {
  this.defaultBody()
}
```

#### 命名头部与底部 Builder

```typescript
UPCard({
  props: new UPCardProps({
    index: 2,
    showHead: this.showHead,
    showFoot: this.showFoot,
    onClick: (event: UPCardClickEvent): void => {
      this.selected(event, '通用点击');
    },
    onFootClick: (event: UPCardClickEvent): void => {
      this.selected(event, '底部点击');
    },
    headBuilder: this.customHead,
    footBuilder: this.customFoot
  })
}) {
  this.customBody()
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CardDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPCard(
  full: true,
  showHead: false,
  showFoot: false,
  body: Text(
    _baseText,
    style: TextStyle(
      fontSize: 14,
      fontWeight: FontWeight.w500,
      height: 1.8,
    ),
  ),
)
```

```dart
UPCard(
  full: true,
  title: _title,
  subTitle: _subTitle,
  thumb: _thumbVisible ? _thumbUrl : '',
  padding: _paddingValue,
  border: _borderVisible,
  showFoot: _bottomVisible,
  body: const _AdvancedCardBody(imageUrl: _thumbUrl),
  foot: const Padding(
    padding: EdgeInsets.symmetric(vertical: 2),
    child: UPIcon(
      name: 'chat-fill',
      size: 16,
      label: '30评论',
      labelSize: 13,
    ),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/card_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCard } from 'ultra-ui-rn';

<UPCard showHead={false}>
  <Text style={s.bodyText}>
    尊敬的客户您好，您有来自的开票。如果有疑问请联系您的客户经理。
  </Text>
</UPCard>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CardDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

title / subTitle / 主体 / footSlot

```tsx
import { UPCard } from '@ultra-ui'

<UPCard
  title='标题'
  subTitle='副标题'
  footSlot={<Text className='card-demo__foot'>2026-08-03</Text>}
>
  <Body />
</UPCard>
```

#### 无边框

border=false

```tsx
<UPCard title='无边框卡片' subTitle='border=false' border={false}>
  <Body text='去掉外层描边，适合放在浅色背景上。' />
</UPCard>
```

#### 通栏

full=true，与屏幕两侧不留空隙

```tsx
<UPCard full title='通栏卡片' subTitle='full'>
  <Body text='左右贴边显示，常用于列表项。' />
</UPCard>
```

#### 隐藏头部 / 底部

showHead、showFoot

```tsx
<UPCard showHead={false} footSlot={<Text className='card-demo__foot'>只有底部</Text>}>
  <Body text='showHead=false，卡片没有头部。' />
</UPCard>
```

#### 头尾分割线

headBorderBottom / footBorderTop

```tsx
<UPCard
  title='无分割线'
  subTitle='都为 false'
  headBorderBottom={false}
  footBorderTop={false}
  footSlot={<Text className='card-demo__foot'>底部内容</Text>}
>
  <Body text='头部下边框与底部上边框都被关闭。' />
</UPCard>
```

#### 标题样式

titleColor / titleSize / subTitleColor / subTitleSize

```tsx
<UPCard
  title='加大的标题'
  titleColor='#3c9cff'
  titleSize={18}
  subTitle='更小的副标题'
  subTitleColor='#f9ae3d'
  subTitleSize={11}
>
  <Body text='标题与副标题的颜色、字号均可单独配置。' />
</UPCard>
```

#### 间距与圆角

margin='20px 30px'、padding='20px'、borderRadius=16

```tsx
<UPCard
  title='自定义间距'
  margin='20px 30px'
  padding='20px'
  borderRadius={16}
>
  <Body text='margin 控制卡片与外部的距离，padding 控制头/体/尾的内边距。' />
</UPCard>
```

#### 分区内边距

paddingHead / paddingBody / paddingFoot 优先于 padding

```tsx
<UPCard
  title='分区内边距'
  paddingHead='10px 15px'
  paddingBody='24px 15px'
  paddingFoot='10px 15px'
  footSlot={<Text className='card-demo__foot'>底部内边距 10px 15px</Text>}
>
  <Body text='主体的内边距被单独放大到 24px。' />
</UPCard>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/card/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-card :showHead="false">
    <template #body>
        <view class="ts-14 tw5 lh-1-8" >
            尊敬的客户您好，您有来自的开票。如果有疑问请联系您的客户经理。
        </view>
    </template>
</up-card>
```

```vue
<up-card @click="click" @head-click="headClick" :title="title" :showFoot="bottomSlot"
    :sub-title="subTitle" subTitleSize="12px" :thumb="thumb" :padding="padding" :border="border">
    <template #body>
        <view>
            <view class="up-body-item up-flex up-flex-items-start up-border-bottom up-col-between up-p-t-0">
                <view class="up-body-item-title up-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
                <image class="image" src="https://uview-plus.jiangruyi.com/uview/ext/59c256f85a8c3757.jpg" mode="aspectFill"></image>
            </view>
            <view class="up-body-item up-flex up-row-between up-p-b-0">
                <view class="up-body-item-title up-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
                <image class="image" src="https://uview-plus.jiangruyi.com/uview/ext/59c256f85a8c3757.jpg" mode="aspectFill"></image>
            </view>
        </view>
    </template>
    <template #foot>
        <view>
            <up-icon name="chat-fill" size="16" color="" label="30评论"></up-icon>
        </view>
    </template>
</up-card>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/card/card.uvue`</small>

</template>

<template #uniappx>

```vue
<up-card :showHead="false">
    <template #body>
        <view class="ts-14 tw5 lh-1-8" >
            尊敬的客户您好，您有来自的开票。如果有疑问请联系您的客户经理。
        </view>
    </template>
</up-card>
```

```vue
<up-card @click="click" @head-click="headClick" :title="title" :showFoot="bottomSlot"
    :sub-title="subTitle" subTitleSize="12px" :thumb="thumb" :padding="padding" :border="border">
    <template #body>
        <view>
            <view class="up-body-item up-flex up-flex-items-start up-border-bottom up-col-between up-p-t-0">
                <view class="up-body-item-title up-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
                <image class="image" src="https://uview-plus.jiangruyi.com/uview/ext/59c256f85a8c3757.jpg" mode="aspectFill"></image>
            </view>
            <view class="up-body-item up-flex up-row-between up-p-b-0">
                <view class="up-body-item-title up-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
                <image class="image" src="https://uview-plus.jiangruyi.com/uview/ext/59c256f85a8c3757.jpg" mode="aspectFill"></image>
            </view>
        </view>
    </template>
    <template #foot>
        <view>
            <up-icon name="chat-fill" size="16" color="" label="30评论"></up-icon>
        </view>
    </template>
</up-card>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/card/card.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `full` | 与屏幕两侧是否留空隙 | `Boolean` | `—` |
| `title` | 标题 | `String` | `—` |
| `titleColor` | 标题颜色 | `String` | `—` |
| `titleSize` | 标题字体大小 | `Number / String` | `—` |
| `subTitle` | 副标题 | `String` | `—` |
| `subTitleColor` | 副标题颜色 | `String` | `—` |
| `subTitleSize` | 副标题字体大小 | `Number / String` | `—` |
| `border` | 是否显示外部边框，只对full=false时有效(卡片与边框有空隙时) | `Boolean` | `—` |
| `index` | 用于标识点击了第几个 | `Number / String / Object` | `—` |
| `margin` | 用于隔开上下左右的边距，带单位的写法，如："30px 30px"，"20px 20px 30px 30px" | `String` | `—` |
| `borderRadius` | card卡片的圆角 | `Number / String` | `—` |
| `headStyle` | 头部自定义样式，对象形式 | `Object` | `—` |
| `bodyStyle` | 主体自定义样式，对象形式 | `Object` | `—` |
| `footStyle` | 底部自定义样式，对象形式 | `Object` | `—` |
| `headBorderBottom` | 头部是否下边框 | `Boolean` | `—` |
| `footBorderTop` | 底部是否有上边框 | `Boolean` | `—` |
| `thumb` | 标题左边的缩略图 | `String` | `—` |
| `thumbWidth` | 缩略图宽高 | `String / Number` | `—` |
| `thumbCircle` | 缩略图是否为圆形 | `Boolean` | `—` |
| `padding` | 给head，body，foot的内边距 | `String / Number` | `—` |
| `paddingHead` | — | `String / Number` | `—` |
| `paddingBody` | — | `String / Number` | `—` |
| `paddingFoot` | — | `String / Number` | `—` |
| `showHead` | 是否显示头部 | `Boolean` | `—` |
| `showFoot` | 是否显示尾部 | `Boolean` | `—` |
| `boxShadow` | 卡片外围阴影，字符串形式 | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `body-click` |
| `click` |
| `foot-click` |
| `head-click` |

### 插槽

| 插槽名 |
| --- |
| `body` |
| `foot` |
| `head` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCard` | `UltraUI/Sources/UltraUI/Components/UPCard.swift` |
| Android · Jetpack Compose | `UPCard` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCard.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCard` | `ultra-ui/src/main/ets/components/UPCard.ets` |
| Flutter · Dart | `UPCard` | `packages/ultra_ui/lib/src/widgets/up_card.dart` |
| React Native · TypeScript | `UPCard` | `src/components/card` |
| Taro · React + TypeScript | `UPCard` | `src/ultra-ui/components/up-card` |
| uni-app · Vue 3 | `up-card` | `uni_modules/uview-ultra/components/up-card` |
| uni-app-x · UTS / UVUE | `up-card` | `uni_modules/uview-ultra/components/up-card` |

