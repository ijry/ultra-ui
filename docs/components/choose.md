---
title: Choose 通用选择器
description: 数据驱动的通用选择器，一个组件覆盖单选、多选与搜索。
generated: true
---

# Choose 通用选择器

数据驱动的通用选择器，一个组件覆盖单选、多选与搜索。

<PlatformBadges component="choose" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPChoose(
  key: const ValueKey('choose-page-basic'),
  options: _options1,
  value: _value1,
  onChange: (value) =>
      setState(() => _value1 = value is int ? value : 0),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/choose_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPChoose } from 'ultra-ui-rn';

<UPChoose modelValue={value1} onUpdateModelValue={setValue1} options={options1} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/ChooseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPChoose } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/choose/choose.nvue`</small>

</template>

<template #uniappx>

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/choose/choose.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `options` | — | `Array` | `—` |
| `modelValue` | — | `Number / String / Array` | `—` |
| `type` | — | `String` | `—` |
| `itemWidth` | — | `String` | `—` |
| `itemHeight` | — | `String` | `—` |
| `itemPadding` | — | `String` | `—` |
| `labelName` | — | `String` | `—` |
| `valueName` | — | `String` | `—` |
| `customClick` | — | `Boolean` | `—` |
| `wrap` | 是否换行 | `Boolean` | `—` |

### 事件

| 事件名 |
| --- |
| `custom-click` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPChoose` | `packages/ultra_ui/lib/src/widgets/up_choose.dart` |
| React Native · TypeScript | `UPChoose` | `src/components/choose` |
| Taro · React + TypeScript | `UPChoose` | `src/ultra-ui/components/up-choose` |
| uni-app · Vue 3 | `up-choose` | `src/uni_modules/uview-plus/components/u-choose` |
| uni-app-x · UTS / UVUE | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |

