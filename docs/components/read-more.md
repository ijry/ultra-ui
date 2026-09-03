---
title: Read more 展开阅读更多
description: 超出指定高度时折叠内容并给出展开按钮。
generated: true
---

# Read more 展开阅读更多

超出指定高度时折叠内容并给出展开按钮。

<PlatformBadges component="read-more" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPReadMore
import net.lingyun.ultraui.android.components.UPReadMoreProps

DemoSection("展开阅读") { UPReadMore(UPReadMoreProps(showHeight = 48)) { BasicText("这是一段较长的内容，用于展示展开阅读组件在原生页面中的截断与展开行为。") }
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPReadMore(
  key: _readMoreKey,
  showHeight: 200,
  toggle: true,
  onOpen: (_) => setState(() => _openCount += 1),
  onClose: (_) => setState(() => _closeCount += 1),
  child: UPParse(
    content: _content,
    tagStyle: const <String, String>{
      'p': 'color: #606266; line-height: 24px;',
    },
    onLoad: _initReadMore,
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/read_more_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPReadMore } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

### 基础用法

内容超出 400px 时显示「展开阅读全文」

```tsx
import { UPReadMore } from '@ultra-ui'

<UPReadMore
  closeText='展开阅读全文'
  openText='收起'
  onOpen={(name) => console.log('read-more open', name)}
  onClose={(name) => console.log('read-more close', name)}
>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

### 保留切换按钮

toggle 为 true，展开后仍可收起

```tsx
<UPReadMore toggle closeText='展开阅读全文' openText='收起' showHeight={120}>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

### 自定义文案

closeText / openText / color

```tsx
<UPReadMore
  toggle
  closeText='查看更多'
  openText='收起详情'
  color='#3c9cff'
  showHeight={120}
>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

### 短内容

未超过 showHeight 时不显示按钮

```tsx
<UPReadMore>
  <Text className='read-more-demo__text'>
    这是一段很短的内容，远小于 400px，因此不会显示展开按钮。
  </Text>
</UPReadMore>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/read-more/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-read-more
    ref="uReadMore"
    :showHeight="showHeight"
    toggle
    @open="open"
    @close="close"
>
    <rich-text :nodes="content"></rich-text>
    <!-- <up-parse
        :content="content"
        @load="load"
        :tag-style="tagStyle"
    ></up-parse> -->
</up-read-more>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/readMore/readMore.uvue`</small>

</template>

<template #uniappx>

```vue
<up-read-more
    ref="uReadMore"
    :showHeight="showHeight"
    toggle
    @open="open"
    @close="close"
>
    <rich-text :nodes="content"></rich-text>
    <!-- <up-parse
        :content="content"
        @load="load"
        :tag-style="tagStyle"
    ></up-parse> -->
</up-read-more>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/readMore/readMore.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `showHeight` | 默认的显示占位高度 | `String / Number` | `400` |
| `toggle` | 展开后是否显示"收起"按钮 | `Boolean` | `false` |
| `closeText` | 关闭时的提示文字 | `String` | `t("up.readMore.expand")` |
| `openText` | 展开时的提示文字 | `String` | `t("up.readMore.fold")` |
| `color` | 提示的文字颜色 | `String` | `'#2979ff'` |
| `fontSize` | 提示文字的大小 | `String / Number` | `14` |
| `shadowStyle` | 是否显示阴影 此参数不能写在props/readMore.js中进行默认配置，因为使用了条件编译，在外部js中 uni无法准确识别当前是否处于nvue还是非nvue下 | `Object` | `—` |
| `textIndent` | 段落首行缩进的字符个数 | `String` | `'2em'` |
| `name` | open和close事件时，将此参数返回在回调参数中 | `String / Number` | `''` |

### 事件

| 事件名 |
| --- |
| `close` |
| `open` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `toggle` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPReadMore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPReadMore` | `packages/ultra_ui/lib/src/widgets/up_read_more.dart` |
| React Native · TypeScript | `UPReadMore` | `src/components/read-more` |
| Taro · React + TypeScript | `UPReadMore` | `src/ultra-ui/components/up-read-more` |
| uni-app · Vue 3 | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |
| uni-app-x · UTS / UVUE | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |

