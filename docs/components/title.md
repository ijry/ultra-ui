---
title: Title 标题
description: 统一的标题排版，提供多级字号与前缀装饰。
generated: true
---

# Title 标题

统一的标题排版，提供多级字号与前缀装饰。

<PlatformBadges component="title" show-missing />

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

### 标题

```kotlin
import net.lingyun.ultraui.android.components.UPTitle

UPTitle(text = "u-title 标题")
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTitle, UPTitleProps } from '@lingyun/ultra-ui-hos';

UPTitle({ props: new UPTitleProps({ title: '基础标题', subTitle: '默认主要色前缀' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/TitleDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTitle(
  key: ValueKey('title-page-default'),
  text: '默认标题',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/title_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTitle } from 'ultra-ui-rn';

<UPTitle>默认标题</UPTitle>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/TitleDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

带左 accent 条的标题

```tsx
import { UPTitle } from '@ultra-ui'

<UPTitle text='标题文字' />
```

### 副标题

sub 属性，显示一行更小的说明文字

```tsx
<UPTitle text='订单详情' sub='查看你本月的消费明细' />
```

### 右侧插槽

rightSlot 自动靠右，常用于放置操作按钮

```tsx
<UPTitle
  text='消息通知'
  sub='共 3 条未读'
  rightSlot={
    <UPButton size='mini' type='primary' text='全部已读' />
```

### 自定义 accent 条

prefixColor / prefixWidth / prefixHeight / prefix={false}

```tsx
<UPTitle text='红色强调' prefixColor='error' prefixWidth={6} prefixHeight={28} />
```

### 对齐方式

align：left / center / right

```tsx
<UPTitle text='左对齐（默认）' />
```

### 自定义内容

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

<small>示例来源 `ultra-ui-taro/src/pages/components/title/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-title>
    默认标题
</up-title>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/title/title.uvue`</small>

</template>

<template #uniappx>

```vue
<up-title>
    默认标题
</up-title>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/title/title.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 插槽

| 插槽名 |
| --- |
| `default` |
| `prefix` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPTitle` | `UltraUI/Sources/UltraUI/Components/UPTitle.swift` |
| Android · Jetpack Compose | `UPTitle` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTitle.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTitle` | `ultra-ui/src/main/ets/components/UPTitle.ets` |
| Flutter · Dart | `UPTitle` | `packages/ultra_ui/lib/src/widgets/up_title.dart` |
| React Native · TypeScript | `UPTitle` | `src/components/title` |
| Taro · React + TypeScript | `UPTitle` | `src/ultra-ui/components/up-title` |
| uni-app · Vue 3 | `up-title` | `uni_modules/uview-ultra/components/up-title` |
| uni-app-x · UTS / UVUE | `up-title` | `uni_modules/uview-ultra/components/up-title` |

