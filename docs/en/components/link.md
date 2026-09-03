---
title: Link
description: Opens an external URL or copies it to the clipboard, smoothing over platform gaps.
generated: true
---

# Link

Opens an external URL or copies it to the clipboard, smoothing over platform gaps.

<PlatformBadges component="link" show-missing />

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

```typescript
UPLink({ props: new UPLinkProps({
  text: '无下划线链接',
  href: '/pages/no-underline',
  underLine: false,
  color: 'success',
  onTap: (event: UPLinkClickEvent): void => {
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

```dart
UPLink(
  text: text,
  color: color,
  underLine: underLine,
  onClick: () => UPToast.show(context, message: url),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/link_page.dart`</small>

</template>

<template #reactnative>

#### 显示下划线

```tsx
import { UPLink } from 'ultra-ui-rn';

<UPLink
  href="https://uview-plus.jiangruyi.com/"
  underLine
  text="Go to uview-plus doc"
/>
```

#### 自定义颜色

```tsx
<UPLink
  href="https://uview-plus.jiangruyi.com/"
  lineColor="#19be6b"
  color="#19be6b"
  text="打开uview-plus文档"
/>
```

#### 自定义链接内容

```tsx
<UPLink href="https://uniapp.dcloud.io/" text="打开uni-app文档" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/LinkDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

text 为文字，href 为跳转链接

```tsx
import { UPLink } from '@ultra-ui'

<UPLink text='点击复制 uview-plus 官网地址' href={HREF} />
```

#### 下划线

underLine 属性

```tsx
<UPLink text='没有下划线' href={HREF} />
```

#### 颜色

color 支持主题 token 与任意 CSS 颜色

```tsx
<UPLink text='#3c9cff 默认色' href={HREF} />
```

#### 字体大小

fontSize 数字按 px 语义，也可带单位

```tsx
<UPLink text='字号 12' href={HREF} fontSize={12} />
```

#### 复制提示语

mpTips 自定义复制成功后的 toast 文案

```tsx
<UPLink text='使用默认提示' href={HREF} underLine />
```

#### 行内混排

作为段落中的一部分使用

```tsx
<UPLink text='《用户服务协议》' href={HREF} fontSize={14} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/link/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" @click="click"></up-link>
</template>
```

```vue
<script setup>  
// 直接定义方法  
function click() {  
  console.log('click');  
}  
</script>
```

#### 下划线

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" :under-line="true"></up-link>
</template>
```

#### 自定义颜色

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" color="#19be6b" line-color="#19be6b"></up-link>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/link.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" @click="click"></up-link>
</template>
```

```vue
<script setup>  
// 直接定义方法  
function click() {  
  console.log('click');  
}  
</script>
```

#### 下划线

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" :under-line="true"></up-link>
</template>
```

#### 自定义颜色

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" color="#19be6b" line-color="#19be6b"></up-link>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/link.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `color` | 文字颜色 | `String` | `color['up-primary']` |
| `fontSize` | 字体大小，单位px | `String / Number` | `15` |
| `underLine` | 是否显示下划线 | `Boolean` | `false` |
| `href` | 要跳转的链接 | `String` | `''` |
| `mpTips` | 小程序中复制到粘贴板的提示语 | `String` | `'链接已复制，请在浏览器打开'` |
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
| uni-app · Vue 3 | `up-link` | `uni_modules/uview-ultra/components/up-link` |
| uni-app-x · UTS / UVUE | `up-link` | `uni_modules/uview-ultra/components/up-link` |

