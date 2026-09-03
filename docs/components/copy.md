---
title: Copy 复制
description: 一键将文本写入系统剪贴板，并给出统一的成功反馈。
generated: true
---

# Copy 复制

一键将文本写入系统剪贴板，并给出统一的成功反馈。

<PlatformBadges component="copy" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 点击文字复制

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCopy(
  key: const ValueKey('copy-page-text'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const Text('点击复制'),
)
```

#### 点击按钮复制

```dart
UPCopy(
  key: const ValueKey('copy-page-button'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const IgnorePointer(
    child: UPButton(
      type: 'primary',
      text: '点击复制',
    ),
  ),
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

#### 基础用法

点击整块区域把 text 复制到剪贴板

```tsx
import { UPCopy } from '@ultra-ui'

<UPCopy text={SNIPPET}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

#### 自定义图标

size / color 控制复制图标

```tsx
<UPCopy text={SNIPPET} size={20} color='primary'>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

#### 隐藏图标

icon=false 只保留文案

```tsx
<UPCopy text={SNIPPET} icon={false}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/copy/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`content`设置要复制的文字内容
- 通过`alertStyle`设置提示样式

```vue
<template>
	<view>
		<up-copy content="uview-plus is great !">
            <text>点击复制</text>
        </up-copy>
        <up-copy content="uview-plus is great !">
            <up-button type="primary">点击复制</up-button>
        </up-copy>
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/copy.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`content`设置要复制的文字内容
- 通过`alertStyle`设置提示样式

```vue
<template>
	<view>
		<up-copy content="uview-ultra is great !">
            <text>点击复制</text>
        </up-copy>
        <up-copy content="uview-ultra is great !">
            <up-button type="primary">点击复制</up-button>
        </up-copy>
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/copy.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

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
| uni-app · Vue 3 | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |
| uni-app-x · UTS / UVUE | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |

