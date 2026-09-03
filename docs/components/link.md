---
title: Link 超链接
description: 点击后跳转外部链接或复制到剪贴板，自动处理各端差异。
generated: true
---

# Link 超链接

点击后跳转外部链接或复制到剪贴板，自动处理各端差异。

<PlatformBadges component="link" show-missing />

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
import net.lingyun.ultraui.android.components.UPLink
import net.lingyun.ultraui.android.components.UPLinkProps

UPLink(
    props = UPLinkProps(text = "打开链接", href = "https://example.com", color = "#2979ff"),
    onOpen = { eventText = "链接：$it" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLink, UPLinkProps } from '@lingyun/ultra-ui-hos';

UPLink({ props: new UPLinkProps({
  text: '查看组件文档',
  href: '/pages/components/link',
  onClick: (event: UPLinkClickEvent): void => {
    this.select(event);
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LinkDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLink(text: '禁用链接', color: '#909399')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/link_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLink } from 'ultra-ui-rn';

<UPLink
  href="https://uview-plus.jiangruyi.com/"
  underLine
  text="Go to uview-plus doc"
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/LinkDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPLink } from '@ultra-ui'

<UPLink text='点击复制 uview-plus 官网地址' href={HREF} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/link/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-link
    href="https://uview-plus.jiangruyi.com/"
    text="打开uview-plus文档"
    @click="click"
></up-link>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/link/link.nvue`</small>

</template>

<template #uniappx>

```vue
<up-link
    href="https://uviewui.com/"
    text="打开uView UI文档"
    @click="click"
></up-link>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/link/link.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 文字颜色 | `String` | `color['u-primary']` |
| `fontSize` | 字体大小，单位px | `String / Number` | `15` |
| `underLine` | 是否显示下划线 | `Boolean` | `false` |
| `href` | 要跳转的链接 | `String` | `''` |
| `mpTips` | 小程序中复制到粘贴板的提示语 | `String` | `t("up.link.copyed")` |
| `lineColor` | 下划线颜色 | `String` | `''` |
| `text` | 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色 | `String` | `''` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLink` | `UltraUI/Sources/UltraUI/Components/UPLink.swift` |
| Android · Jetpack Compose | `UPLink` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLink.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLink` | `ultra-ui/src/main/ets/components/UPLink.ets` |
| Flutter · Dart | `UPLink` | `packages/ultra_ui/lib/src/widgets/up_link.dart` |
| React Native · TypeScript | `UPLink` | `src/components/link` |
| Taro · React + TypeScript | `UPLink` | `src/ultra-ui/components/up-link` |
| uni-app · Vue 3 | `up-link` | `src/uni_modules/uview-plus/components/u-link` |
| uni-app-x · UTS / UVUE | `up-link` | `uni_modules/uview-ultra/components/up-link` |

