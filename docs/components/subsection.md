---
title: Subsection 分段器
description: 两到多个选项之间的分段切换控件。
generated: true
---

# Subsection 分段器

两到多个选项之间的分段切换控件。

<PlatformBadges component="subsection" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSubsection
import net.lingyun.ultraui.android.components.UPSubsectionProps

DemoSection("分段器") { UPSubsection(UPSubsectionProps(list = listOf("日", "周", "月"), current = subsection), onChange = { subsection = it })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSubsection, UPSubsectionProps } from '@lingyun/ultra-ui-hos';

UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onChange: (index: number): void => { this.message = 'button 选择：' + String(index); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SubsectionDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

subsection: UPSubsection(
  key: const ValueKey('subsection-page-basic'),
  list: _items,
  mode: 'subsection',
  current: _basicIndex,
  onChange: _setBasic,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/subsection_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSubsection } from 'ultra-ui-rn';

<UPSubsection current={current1} list={list} mode="subsection" onChange={setCurrent1} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/SubsectionDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSubsection } from '@ultra-ui'

<UPSubsection list={SIMPLE_LIST} current={basic} onChange={setBasic} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/subsection/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current1"
    @change="change1"
></up-subsection>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/subsection/subsection.nvue`</small>

</template>

<template #uniappx>

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current1"
    @change="change1"
></up-subsection>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/subsection/subsection.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `list` | tab的数据 | `Array` | `[]` |
| `current` | 当前活动的tab的index | `String / Number` | `0` |
| `activeColor` | 激活的颜色 | `String` | `'#3c9cff'` |
| `inactiveColor` | 未激活的颜色 | `String` | `'#303133'` |
| `mode` | 模式选择，mode=button为按钮形式，mode=subsection时为分段模式 | `String` | `'button'` |
| `fontSize` | 字体大小 | `String / Number` | `12` |
| `bold` | 激活tab的字体是否加粗 | `Boolean` | `true` |
| `bgColor` | mode = button时，组件背景颜色 | `String` | `'#eeeeef'` |
| `keyName` | 从list元素对象中读取的键名 | `String` | `'name'` |
| `activeColorKeyName` | 从`list`元素对象中读取激活时的颜色  如果存在字段 优先级大于 activeColor | `String` | `'activeColorKey'` |
| `inactiveColorKeyName` | 从`list`元素对象中读取未激活时的颜色 如果存在字段 优先级大于 inactiveColor | `String` | `'inactiveColorKey'` |
| `disabled` | 是否禁用 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `change` |
| `update:current` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSubsection` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSubsection` | `ultra-ui/src/main/ets/components/UPSubsection.ets` |
| Flutter · Dart | `UPSubsection` | `packages/ultra_ui/lib/src/widgets/up_subsection.dart` |
| React Native · TypeScript | `UPSubsection` | `src/components/subsection` |
| Taro · React + TypeScript | `UPSubsection` | `src/ultra-ui/components/up-subsection` |
| uni-app · Vue 3 | `up-subsection` | `src/uni_modules/uview-plus/components/u-subsection` |
| uni-app-x · UTS / UVUE | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |

