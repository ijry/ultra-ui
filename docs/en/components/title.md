---
title: Title
description: Consistent heading typography with several levels and an optional prefix accent.
generated: true
---

# Title

Consistent heading typography with several levels and an optional prefix accent.

<PlatformBadges component="title" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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
import net.lingyun.ultraui.android.components.UPTitle

UPTitle(text = "u-title 标题")
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTitle, UPTitleProps } from '@lingyun/ultra-ui-hos';

UPTitle({ props: new UPTitleProps({ title: '基础标题', subTitle: '默认主要色前缀' }) })
```

```typescript
UPTitle({ props: new UPTitleProps({ title: '成功状态', subTitle: 'type 控制前缀颜色', type: 'success' }) })
```

```typescript
UPTitle({ props: new UPTitleProps({ title: '居中标题', subTitle: '隐藏前缀并居中', prefix: false, align: 'center', color: 'primary' }) })
```

```typescript
UPTitle({ props: new UPTitleProps({ title: '自定义尺寸', subTitle: '更大字号与警告色前缀', type: 'warning', size: 20 }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TitleDemo.ets`</small>

</template>

<template #flutter>

#### 默认

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTitle(
  key: ValueKey('title-page-default'),
  text: '默认标题',
)
```

#### 自定义前缀

```dart
UPTitle(
  key: ValueKey('title-page-prefix'),
  prefix: UPIcon(name: 'level', color: 'red', size: 16),
  text: '等级3',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/title_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTitle } from 'ultra-ui-rn';

<UPTitle>默认标题</UPTitle>
```

```tsx
<UPTitle prefix={<UPIcon color="red" name="level" size="16px" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/TitleDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

带左 accent 条的标题

```tsx
import { UPTitle } from '@ultra-ui'

<UPTitle text='标题文字' />
```

#### 副标题

sub 属性，显示一行更小的说明文字

```tsx
<UPTitle text='订单详情' sub='查看你本月的消费明细' />
```

#### 右侧插槽

rightSlot 自动靠右，常用于放置操作按钮

```tsx
<UPTitle
  text='消息通知'
  sub='共 3 条未读'
  rightSlot={
    <UPButton size='mini' type='primary' text='全部已读' />
```

#### 自定义 accent 条

prefixColor / prefixWidth / prefixHeight / prefix={false}

```tsx
<UPTitle text='红色强调' prefixColor='error' prefixWidth={6} prefixHeight={28} />
```

#### 对齐方式

align：left / center / right

```tsx
<UPTitle text='左对齐（默认）' />
```

#### 自定义内容

textSlot / subSlot / children 组合

```tsx
<UPTitle
  prefixColor='success'
  textSlot={<View className='title-demo__custom'>自定义标题节点</View>}
/>
</DemoRow>
<DemoRow label='children'>
<UPTitle prefixColor='info'>
  <View className='title-demo__custom'>children 渲染的位置</View>
</UPTitle>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/title/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<u-title>这里是标题</u-title>
```

#### 自定义前缀

```vue
<u-title>
  <template #prefix>
    <view class="custom-prefix">◆</view>
  </template>
  带自定义前缀的标题
</u-title>
```

#### 组合使用

```vue
<u-title class="custom-title">
  <u-icon name="bell" size="18"></u-icon>
  带图标的标题
</u-title>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/title.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<up-title>这里是标题</up-title>
```

#### 自定义前缀

```vue
<up-title>
  <template #prefix>
    <view class="custom-prefix">◆</view>
  </template>
  带自定义前缀的标题
</up-title>
```

#### 组合使用

```vue
<up-title class="custom-title">
  <up-icon name="bell" size="18"></up-icon>
  带图标的标题
</up-title>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/title.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Slots

| Slot |
| --- |
| `default` |
| `prefix` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPTitle` | `UltraUI/Sources/UltraUI/Components/UPTitle.swift` |
| Android · Jetpack Compose | `UPTitle` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTitle.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTitle` | `ultra-ui/src/main/ets/components/UPTitle.ets` |
| Flutter · Dart | `UPTitle` | `packages/ultra_ui/lib/src/widgets/up_title.dart` |
| React Native · TypeScript | `UPTitle` | `src/components/title` |
| Taro · React + TypeScript | `UPTitle` | `src/ultra-ui/components/up-title` |
| uni-app · Vue 3 | `up-title` | `uni_modules/uview-ultra/components/up-title` |
| uni-app-x · UTS / UVUE | `up-title` | `uni_modules/uview-ultra/components/up-title` |

