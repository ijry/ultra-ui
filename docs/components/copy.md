---
title: Copy 复制
description: 一键将文本写入系统剪贴板，并给出统一的成功反馈。
generated: true
---

# Copy 复制

一键将文本写入系统剪贴板，并给出统一的成功反馈。

<PlatformBadges component="copy" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCopy(
  key: const ValueKey('copy-page-text'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const Text('点击复制'),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/copy_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCopy } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCopy } from '@ultra-ui'

<UPCopy text={SNIPPET}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/copy/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-copy content="uview-plus is great !">
    <text>点击复制</text>
</up-copy>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/copy/copy.nvue`</small>

</template>

<template #uniappx>

```vue
<up-copy content="uview-plus is great !">
    <text>点击复制</text>
</up-copy>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/copy/copy.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | — | `String` | `—` |
| `alertStyle` | — | `String` | `—` |
| `notice` | — | `String` | `—` |

### 事件

| 事件名 |
| --- |
| `success` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCopy` | `packages/ultra_ui/lib/src/widgets/up_copy.dart` |
| React Native · TypeScript | `UPCopy` | `src/components/copy` |
| Taro · React + TypeScript | `UPCopy` | `src/ultra-ui/components/up-copy` |
| uni-app · Vue 3 | `up-copy` | `src/uni_modules/uview-plus/components/u-copy` |
| uni-app-x · UTS / UVUE | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |

