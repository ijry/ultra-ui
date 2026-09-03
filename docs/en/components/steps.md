---
title: Steps
description: Shows progress through a flow, horizontally or vertically, with custom nodes.
generated: true
---

# Steps

Shows progress through a flow, horizontally or vertically, with custom nodes.

<PlatformBadges component="steps" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSteps
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

```typescript
import { UPSteps, UPStepsProps } from '@lingyun/ultra-ui-hos';

UPSteps({ props: new UPStepsProps({ current: this.current, contentBuilder: (): void => {} }) }) {
  UPStepsItem({ props: new UPStepsItemProps({ title: '提交', desc: '资料已提交', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '审核', desc: '审核中', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '完成', error: true, onClick: (index: number): void => { this.current = index; this.message = '点击错误步骤：' + String(index); } }) })
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/StepsDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSteps(
  current: 1,
  children: _orderItems(
    firstStyle: BoxDecoration(color: tokens.pageBgColor),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/steps_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSteps } from 'ultra-ui-rn';

<UPSteps current={current1}>
  <UPStepsItem desc="10:30" itemStyle={s.firstItem} title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
  <UPStepsItem desc="19:50" title="已签收" />
  <UPStepsItem desc="20:10" title="已拒收" />
  <UPStepsItem desc="23:20" title="已退回" />
</UPSteps>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/StepsDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSteps } from '@ultra-ui'

<UPSteps current={current} onClick={setCurrent}>
  <UPStepsItem title='买家下单' desc='2024-01-01' />
  <UPStepsItem title='商家发货' desc='2024-01-02' />
  <UPStepsItem title='买家签收' desc='2024-01-03' />
  <UPStepsItem title='完成' desc='2024-01-04' />
</UPSteps>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/steps/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-steps
    :current="1"
    dot
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/steps/steps.vue`</small>

</template>

<template #uniappx>

```vue
<up-steps :current="current1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/steps/steps.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-steps>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `direction` | 排列方向 | `String` | `'row'` |
| `current` | 设置第几个步骤 | `String / Number` | `0` |
| `activeColor` | 激活状态颜色 | `String` | `'#3c9cff'` |
| `inactiveColor` | 未激活状态颜色 | `String` | `'#969799'` |
| `activeIcon` | 激活状态的图标 | `String` | `''` |
| `inactiveIcon` | 未激活状态图标 | `String` | `''` |
| `dot` | 是否显示点类型 | `Boolean` | `false` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-steps-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 标题 | `String / Number` | `''` |
| `desc` | 描述文本 | `String / Number` | `''` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `error` | 当前步骤是否处于失败状态 | `Boolean` | `false` |
| `itemStyle` | 自定义样式 | `Object` | `—` |

#### Slots

| Slot |
| --- |
| `content` |
| `desc` |
| `icon` |
| `title` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSteps` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSteps` | `ultra-ui/src/main/ets/components/UPSteps.ets` |
| Flutter · Dart | `UPSteps` | `packages/ultra_ui/lib/src/widgets/up_steps.dart` |
| React Native · TypeScript | `UPSteps` | `src/components/steps` |
| Taro · React + TypeScript | `UPSteps` | `src/ultra-ui/components/up-steps` |
| uni-app · Vue 3 | `up-steps` | `src/uni_modules/uview-plus/components/u-steps` |
| uni-app-x · UTS / UVUE | `up-steps` | `uni_modules/uview-ultra/components/up-steps` |

