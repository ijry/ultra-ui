---
title: Subsection
description: A segmented control for switching between a few options.
generated: true
---

# Subsection

A segmented control for switching between a few options.

<PlatformBadges component="subsection" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSubsection
import net.lingyun.ultraui.android.components.UPSubsectionProps

DemoSection("分段器") { UPSubsection(UPSubsectionProps(list = listOf("日", "周", "月"), current = subsection), onChange = { subsection = it })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSubsection, UPSubsectionProps } from '@lingyun/ultra-ui-hos';

UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onChange: (index: number): void => { this.message = 'button 选择：' + String(index); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SubsectionDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/subsection_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSubsection } from 'ultra-ui-rn';

<UPSubsection current={current1} list={list} mode="subsection" onChange={setCurrent1} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/SubsectionDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSubsection } from '@ultra-ui'

<UPSubsection list={SIMPLE_LIST} current={basic} onChange={setBasic} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/subsection/index.tsx`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/subsection/subsection.nvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/subsection/subsection.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `change` |
| `update:current` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSubsection` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSubsection` | `ultra-ui/src/main/ets/components/UPSubsection.ets` |
| Flutter · Dart | `UPSubsection` | `packages/ultra_ui/lib/src/widgets/up_subsection.dart` |
| React Native · TypeScript | `UPSubsection` | `src/components/subsection` |
| Taro · React + TypeScript | `UPSubsection` | `src/ultra-ui/components/up-subsection` |
| uni-app · Vue 3 | `up-subsection` | `src/uni_modules/uview-plus/components/u-subsection` |
| uni-app-x · UTS / UVUE | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |

