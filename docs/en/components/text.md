---
title: Text
description: Text with theming, truncation, masking and formatting for phone numbers, money and dates.
generated: true
---

# Text

Text with theming, truncation, masking and formatting for phone numbers, money and dates.

<PlatformBadges component="text" show-missing />

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
import net.lingyun.ultraui.android.components.UPText
import net.lingyun.ultraui.android.components.UPTextProps

UPText(
    props = UPTextProps(text = "可点击文本", type = "primary", bold = true),
    onClick = { eventText = "文本：点击" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPText, UPTextProps } from '@lingyun/ultra-ui-hos';

UPText({ props: new UPTextProps({
  text: '128.00',
  mode: 'price',
  prefixIcon: 'rmb',
  bold: true,
  color: 'primary',
  onClick: (event: UPTextClickEvent): void => { this.clicked(event); }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TextDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPText(text: '我用十年青春,赴你最后之约')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/text_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPText } from 'ultra-ui-rn';

<UPText text="主色" type="primary" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/TextDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPText } from '@ultra-ui'

<UPText text='行到水穷处，坐看云起时' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/text/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-text
    text="我用十年青春,赴你最后之约"
    @click="test">
</up-text>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/text/text.nvue`</small>

</template>

<template #uniappx>

```vue
<up-text
    text="我用十年青春,赴你最后之约"
    @click="test">
</up-text>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/text/text.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | 主题颜色 | `String` | `''` |
| `show` | 是否显示 | `Boolean` | `true` |
| `text` | 显示的值 | `String / Number` | `''` |
| `prefixIcon` | 前置图标 | `String` | `''` |
| `suffixIcon` | 后置图标 | `String` | `''` |
| `mode` | 文本处理的匹配模式 text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接 | `String` | `''` |
| `href` | mode=link下，配置的链接 | `String` | `''` |
| `format` | 格式化规则 | `String / Function` | `''` |
| `call` | mode=phone时，点击文本是否拨打电话 | `Boolean` | `false` |
| `openType` | 小程序的打开方式 | `String` | `''` |
| `bold` | 是否粗体，默认normal | `Boolean` | `false` |
| `block` | 是否块状 | `Boolean` | `false` |
| `lines` | 文本显示的行数，如果设置，超出此行数，将会显示省略号 | `String / Number` | `''` |
| `color` | 文本颜色 | `String` | `''` |
| `size` | 字体大小 | `String / Number` | `15` |
| `iconStyle` | 图标的样式 | `Object / String` | `{ fontSize: '15px' }` |
| `decoration` | 文字装饰，下划线，中划线等，可选值 none&#124;underline&#124;line-through | `—` | `'none'` |
| `margin` | 外边距，对象、字符串，数值形式均可 | `Object / String / Number` | `0` |
| `lineHeight` | 文本行高 | `String / Number` | `''` |
| `align` | 文本对齐方式，可选值left&#124;center&#124;right | `String` | `'left'` |
| `wordWrap` | 文字换行，可选值break-word&#124;normal&#124;anywhere | `String` | `'normal'` |
| `flex1` | 占满剩余空间 | `Boolean` | `false` |

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPText` | `UltraUI/Sources/UltraUI/Components/UPText.swift` |
| Android · Jetpack Compose | `UPText` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPText.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPText` | `ultra-ui/src/main/ets/components/UPText.ets` |
| Flutter · Dart | `UPText` | `packages/ultra_ui/lib/src/widgets/up_text.dart` |
| React Native · TypeScript | `UPText` | `src/components/text` |
| Taro · React + TypeScript | `UPText` | `src/ultra-ui/components/up-text` |
| uni-app · Vue 3 | `up-text` | `src/uni_modules/uview-plus/components/u-text` |
| uni-app-x · UTS / UVUE | `up-text` | `uni_modules/uview-ultra/components/up-text` |

