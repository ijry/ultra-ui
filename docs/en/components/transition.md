---
title: Transition
description: Fade, zoom and slide presets for element enter and leave.
generated: true
---

# Transition

Fade, zoom and slide presets for element enter and leave.

<PlatformBadges component="transition" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTransition(
  show: _show,
  mode: _mode,
  child: Container(
    key: const ValueKey('transition-preview'),
    width: 120,
    height: 120,
    color: const Color(0xFF1989FA),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/transition_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTransition } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### Basic usage

```tsx
import { UPTransition } from '@ultra-ui'

<UPTransition show={baseShow}>
  <View className='transition-demo__box'>Hello</View>
</UPTransition>
```

#### Animation modes

```tsx
<UPTransition show={modeShow} mode={mode} duration={400}>
  <View className='transition-demo__box'>{mode}</View>
</UPTransition>
```

#### Duration

```tsx
<UPTransition show={durationShow} mode='fade-zoom' duration={200}>
  <View className='transition-demo__box'>200ms</View>
</UPTransition>
```

#### Transition function

```tsx
<UPTransition
  show={timingShow}
  mode='slide-left'
  duration={800}
  timingFunction={timing}
>
  <View className='transition-demo__box'>{timing}</View>
</UPTransition>
```

#### Lifecycle

```tsx
<UPTransition
  show={lifecycleShow}
  mode='zoom'
  duration={500}
  onBeforeEnter={() => pushLog('beforeEnter')}
  onEnter={() => pushLog('enter')}
  onAfterEnter={() => pushLog('afterEnter')}
  onBeforeLeave={() => pushLog('beforeLeave')}
  onLeave={() => pushLog('leave')}
  onAfterLeave={() => pushLog('afterLeave')}
  onClick={() => toast.show({ message: '点击了动画内容' })}
>
  <View className='transition-demo__box'>点我</View>
</UPTransition>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/transition/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
    <up-transition :show="show">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### Animation modes

```vue
<template>
    <up-transition :show="show" mode="zoom-in">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/transition.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
    <up-transition :show="show">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

#### Animation modes

```vue
<template>
    <up-transition :show="show" mode="zoom-in">
        <view class="transition"></view>
    </up-transition>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/transition.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否展示组件 | `Boolean` | `—` |
| `mode` | 使用的动画模式 | `String` | `—` |
| `duration` | 动画的执行时间，单位ms | `String / Number` | `—` |
| `timingFunction` | 使用的动画过渡函数 | `String` | `—` |

### Events

| Event |
| --- |
| `afterEnter` |
| `afterLeave` |
| `beforeEnter` |
| `beforeLeave` |
| `click` |
| `enter` |
| `leave` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPTransition` | `UltraUI/Sources/UltraUI/Components/UPTransition.swift` |
| Flutter · Dart | `UPTransition` | `packages/ultra_ui/lib/src/widgets/up_transition.dart` |
| React Native · TypeScript | `UPTransition` | `src/components/transition` |
| Taro · React + TypeScript | `UPTransition` | `src/ultra-ui/components/up-transition` |
| uni-app · Vue 3 | `up-transition` | `uni_modules/uview-ultra/components/up-transition` |
| uni-app-x · UTS / UVUE | `up-transition` | `uni_modules/uview-ultra/components/up-transition` |

