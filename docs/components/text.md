---
title: Text 文本
description: 对文本做了主题、省略、脱敏与格式化封装，适合手机号、金额、日期等场景。
generated: true
---

# Text 文本

对文本做了主题、省略、脱敏与格式化封装，适合手机号、金额、日期等场景。

<PlatformBadges component="text" show-missing />

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
import net.lingyun.ultraui.android.components.UPText
import net.lingyun.ultraui.android.components.UPTextProps

UPText(
    props = UPTextProps(text = "可点击文本", type = "primary", bold = true),
    onClick = { eventText = "文本：点击" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/TextDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPText(text: '我用十年青春,赴你最后之约')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/text_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPText } from 'ultra-ui-rn';

<UPText text="主色" type="primary" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/TextDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPText } from '@ultra-ui'

<UPText text='行到水穷处，坐看云起时' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/text/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-text
    text="我用十年青春,赴你最后之约"
    @click="test">
</up-text>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/text/text.nvue`</small>

</template>

<template #uniappx>

```vue
<up-text
    text="我用十年青春,赴你最后之约"
    @click="test">
</up-text>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/text/text.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPText` | `UltraUI/Sources/UltraUI/Components/UPText.swift` |
| Android · Jetpack Compose | `UPText` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPText.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPText` | `ultra-ui/src/main/ets/components/UPText.ets` |
| Flutter · Dart | `UPText` | `packages/ultra_ui/lib/src/widgets/up_text.dart` |
| React Native · TypeScript | `UPText` | `src/components/text` |
| Taro · React + TypeScript | `UPText` | `src/ultra-ui/components/up-text` |
| uni-app · Vue 3 | `up-text` | `src/uni_modules/uview-plus/components/u-text` |
| uni-app-x · UTS / UVUE | `up-text` | `uni_modules/uview-ultra/components/up-text` |

