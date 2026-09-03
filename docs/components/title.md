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

```tsx
import { UPTitle } from '@ultra-ui'

<UPTitle text='标题文字' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/title/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-title>
    默认标题
</up-title>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/title/title.nvue`</small>

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
| uni-app · Vue 3 | `up-title` | `src/uni_modules/uview-plus/components/u-title` |
| uni-app-x · UTS / UVUE | `up-title` | `uni_modules/uview-ultra/components/up-title` |

