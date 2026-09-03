---
title: Choose
description: A data-driven picker covering single select, multi select and search in one.
generated: true
---

# Choose

A data-driven picker covering single select, multi select and search in one.

<PlatformBadges component="choose" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

#### 基本用法

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

#### 不换行显示

```dart
UPChoose(
  key: const ValueKey('choose-page-nowrap'),
  options: _options2,
  value: _value2,
  wrap: false,
  onChange: (value) =>
      setState(() => _value2 = value is int ? value : 0),
)
```

#### 时间选择

```dart
UPChoose(
  key: const ValueKey('choose-page-time'),
  options: _options3,
  value: _value5,
  itemWidth: '340rpx',
  itemHeight: '70rpx',
  onChange: (value) =>
      setState(() => _value5 = value is int ? value : 0),
)
```

#### 快递上门时间预约

```dart
UPChoose(
  options: times is List ? times : const <Object>[],
  value: map['selectedIndex'],
  itemWidth: '460rpx',
  itemHeight: '60rpx',
  onChange: (value) => setState(() {
    _deliveryOptions[index]['selectedIndex'] =
        value is int ? value : 0;
  }),
)
```

#### 自定义尺寸

```dart
UPChoose(
  key: const ValueKey('choose-page-custom-size'),
  options: _options4,
  value: _value5,
  wrap: false,
  itemWidth: '250rpx',
  itemHeight: '220rpx',
  onChange: (value) =>
      setState(() => _value5 = value is int ? value : 0),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/choose_page.dart`</small>

</template>

<template #reactnative>

#### 基本用法

```tsx
import { UPChoose } from 'ultra-ui-rn';

<UPChoose modelValue={value1} onUpdateModelValue={setValue1} options={options1} />
```

#### 不换行显示

```tsx
<UPChoose
  modelValue={value2}
  onUpdateModelValue={setValue2}
  options={options2}
  wrap={false}
/>
```

#### 时间选择

```tsx
<UPChoose
  itemHeight="35px"
  itemWidth="170px"
  modelValue={value5}
  onUpdateModelValue={setValue5}
  options={options3}
/>
```

#### 自定义尺寸

```tsx
<UPChoose
  itemHeight="110px"
  itemWidth="125px"
  modelValue={value5}
  onUpdateModelValue={setValue5}
  options={options4}
  wrap={false}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/ChooseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPChoose } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### 基本用法

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

#### 不换行显示

```vue
<up-choose v-model="value2" :options="options2" :wrap="false"></up-choose>
```

#### 时间选择

```vue
<up-choose v-model="value5" :options="options3" itemWidth="340rpx" itemHeight="70rpx"></up-choose>
```

#### 快递上门时间预约

```vue
<up-choose 
    :modelValue="getDeliverySelectedIndex(item)"
    :options="getDeliveryTimes(item)"
    item-width="460rpx" 
    item-height="60rpx"
    @update:modelValue="updateDeliverySelectedIndex(item, $event)">
</up-choose>
```

#### 自定义尺寸

```vue
<up-choose v-model="value5" :options="options4" :wrap="false" itemWidth="250rpx" itemHeight="220rpx"></up-choose>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/choose/choose.uvue`</small>

</template>

<template #uniappx>

#### 基本用法

```vue
<up-choose v-model="value1" :options="options1"></up-choose>
```

#### 不换行显示

```vue
<up-choose v-model="value2" :options="options2" :wrap="false"></up-choose>
```

#### 时间选择

```vue
<up-choose v-model="value5" :options="options3" itemWidth="340rpx" itemHeight="70rpx"></up-choose>
```

#### 快递上门时间预约

```vue
<up-choose 
    :modelValue="getDeliverySelectedIndex(item)"
    :options="getDeliveryTimes(item)"
    item-width="460rpx" 
    item-height="60rpx"
    @update:modelValue="updateDeliverySelectedIndex(item, $event)">
</up-choose>
```

#### 自定义尺寸

```vue
<up-choose v-model="value5" :options="options4" :wrap="false" itemWidth="250rpx" itemHeight="220rpx"></up-choose>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/choose/choose.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `custom-click` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPChoose` | `packages/ultra_ui/lib/src/widgets/up_choose.dart` |
| React Native · TypeScript | `UPChoose` | `src/components/choose` |
| Taro · React + TypeScript | `UPChoose` | `src/ultra-ui/components/up-choose` |
| uni-app · Vue 3 | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |
| uni-app-x · UTS / UVUE | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |

