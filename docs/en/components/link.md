---
title: Link
description: Opens an external URL or copies it to the clipboard, smoothing over platform gaps.
generated: true
---

# Link

Opens an external URL or copies it to the clipboard, smoothing over platform gaps.

<PlatformBadges component="link" show-missing />

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
import net.lingyun.ultraui.android.components.UPLink
import net.lingyun.ultraui.android.components.UPLinkProps

UPLink(
    props = UPLinkProps(text = "打开链接", href = "https://example.com", color = "#2979ff"),
    onOpen = { eventText = "链接：$it" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LinkDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLink(text: '禁用链接', color: '#909399')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/link_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/LinkDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPLink } from '@ultra-ui'

<UPLink text='点击复制 uview-plus 官网地址' href={HREF} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/link/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-link
    href="https://uview-plus.jiangruyi.com/"
    text="打开uview-plus文档"
    @click="click"
></up-link>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/link/link.nvue`</small>

</template>

<template #uniappx>

```vue
<up-link
    href="https://uviewui.com/"
    text="打开uView UI文档"
    @click="click"
></up-link>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/link/link.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `color` | 文字颜色 | `String` | `color['u-primary']` |
| `fontSize` | 字体大小，单位px | `String / Number` | `15` |
| `underLine` | 是否显示下划线 | `Boolean` | `false` |
| `href` | 要跳转的链接 | `String` | `''` |
| `mpTips` | 小程序中复制到粘贴板的提示语 | `String` | `t("up.link.copyed")` |
| `lineColor` | 下划线颜色 | `String` | `''` |
| `text` | 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色 | `String` | `''` |

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLink` | `UltraUI/Sources/UltraUI/Components/UPLink.swift` |
| Android · Jetpack Compose | `UPLink` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLink.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLink` | `ultra-ui/src/main/ets/components/UPLink.ets` |
| Flutter · Dart | `UPLink` | `packages/ultra_ui/lib/src/widgets/up_link.dart` |
| React Native · TypeScript | `UPLink` | `src/components/link` |
| Taro · React + TypeScript | `UPLink` | `src/ultra-ui/components/up-link` |
| uni-app · Vue 3 | `up-link` | `src/uni_modules/uview-plus/components/u-link` |
| uni-app-x · UTS / UVUE | `up-link` | `uni_modules/uview-ultra/components/up-link` |

