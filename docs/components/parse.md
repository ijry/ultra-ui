---
title: Rich text 富文本解析
description: 把 HTML 字符串解析为各端原生节点渲染。
generated: true
---

# Rich text 富文本解析

把 HTML 字符串解析为各端原生节点渲染。

<PlatformBadges component="parse" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPParse(
  content: parseSourceContent,
  domain: _domain,
  lazyLoad: true,
  scrollTable: true,
  selectable: true,
  useAnchor: true,
  imageSourceResolver: _offlineImageSource,
  onLinkTap: (href) => _handleSourceLink(context, href),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/parse_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPParse } from 'ultra-ui-rn';

<UPParse content={HTML_CONTENT} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/ParseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPParse } from '@ultra-ui'

<UPParse content={basicHtml} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/parse/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-parse container-style="padding: 20px" :content="content" domain="https://6874-html-foe72-1259071903.tcb.qcloud.la/demo" lazy-load scroll-table selectable use-anchor :tag-style="tagStyle" @load="load" @ready="ready" @imgTap="imgTap" @linkTap="linkTap" />
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/parse/parse.nvue`</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `containerStyle` | — | `String` | `—` |
| `copyLink` | — | `Boolean` | `true` |
| `errorImg` | — | `String` | `''` |
| `lazyLoad` | — | `Boolean` | `false` |
| `loadingImg` | — | `String` | `''` |
| `pauseVideo` | — | `Boolean` | `true` |
| `previewImg` | — | `Boolean` | `true` |
| `setTitle` | — | `Boolean` | `true` |
| `showImgMenu` | — | `Boolean` | `true` |
| `tagStyle` | — | `Object` | `—` |
| `useAnchor` | — | `Boolean` | `—` |

### 事件

| 事件名 |
| --- |
| `click` |
| `error` |
| `imgtap` |
| `linktap` |
| `load` |
| `play` |
| `ready` |
| `tap` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPParse` | `packages/ultra_ui/lib/src/widgets/up_parse.dart` |
| React Native · TypeScript | `UPParse` | `src/components/parse` |
| Taro · React + TypeScript | `UPParse` | `src/ultra-ui/components/up-parse` |
| uni-app · Vue 3 | `up-parse` | `src/uni_modules/uview-plus/components/u-parse` |
| uni-app-x · UTS / UVUE | `up-parse` | `uni_modules/uview-ultra/components/up-parse` |

