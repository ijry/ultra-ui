---
title: Card
description: A card container with head, body and foot sections.
generated: true
---

# Card

A card container with head, body and foot sections.

<PlatformBadges component="card" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CardDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/card_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CardDemo.tsx`</small>

</template>

<template #taro>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/card/index.tsx`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/card/card.vue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/card/card.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `full` | 与屏幕两侧是否留空隙 | `Boolean` | `false` |
| `title` | 标题 | `String` | `''` |
| `titleColor` | 标题颜色 | `String` | `'#303133'` |
| `titleSize` | 标题字体大小 | `Number / String` | `'15px'` |
| `subTitle` | 副标题 | `String` | `''` |
| `subTitleColor` | 副标题颜色 | `String` | `'#909399'` |
| `subTitleSize` | 副标题字体大小 | `Number / String` | `'13px'` |
| `border` | 是否显示外部边框，只对full=false时有效(卡片与边框有空隙时) | `Boolean` | `true` |
| `index` | 用于标识点击了第几个 | `Number / String / Object` | `''` |
| `margin` | 用于隔开上下左右的边距，带单位的写法，如："30px 30px"，"20px 20px 30px 30px" | `String` | `'15px'` |
| `borderRadius` | card卡片的圆角 | `Number / String` | `'8px'` |
| `headStyle` | 头部自定义样式，对象形式 | `Object` | `{}` |
| `bodyStyle` | 主体自定义样式，对象形式 | `Object` | `{}` |
| `footStyle` | 底部自定义样式，对象形式 | `Object` | `{}` |
| `headBorderBottom` | 头部是否下边框 | `Boolean` | `true` |
| `footBorderTop` | 底部是否有上边框 | `Boolean` | `true` |
| `thumb` | 标题左边的缩略图 | `String` | `''` |
| `thumbWidth` | 缩略图宽高 | `String / Number` | `'30px'` |
| `thumbCircle` | 缩略图是否为圆形 | `Boolean` | `false` |
| `padding` | 给head，body，foot的内边距 | `String / Number` | `'15px'` |
| `paddingHead` | — | `String / Number` | `''` |
| `paddingBody` | — | `String / Number` | `''` |
| `paddingFoot` | — | `String / Number` | `''` |
| `showHead` | 是否显示头部 | `Boolean` | `true` |
| `showFoot` | 是否显示尾部 | `Boolean` | `true` |
| `boxShadow` | 卡片外围阴影，字符串形式 | `String` | `'none'` |

### Events

| Event |
| --- |
| `body-click` |
| `click` |
| `foot-click` |
| `head-click` |

### Slots

| Slot |
| --- |
| `body` |
| `foot` |
| `head` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCard` | `UltraUI/Sources/UltraUI/Components/UPCard.swift` |
| Android · Jetpack Compose | `UPCard` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCard.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCard` | `ultra-ui/src/main/ets/components/UPCard.ets` |
| Flutter · Dart | `UPCard` | `packages/ultra_ui/lib/src/widgets/up_card.dart` |
| React Native · TypeScript | `UPCard` | `src/components/card` |
| Taro · React + TypeScript | `UPCard` | `src/ultra-ui/components/up-card` |
| uni-app · Vue 3 | `up-card` | `src/uni_modules/uview-plus/components/u-card` |
| uni-app-x · UTS / UVUE | `up-card` | `uni_modules/uview-ultra/components/up-card` |

