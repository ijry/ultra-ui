---
title: Choose
description: A data-driven picker covering single select, multi select and search in one.
generated: true
---

# Choose

A data-driven picker covering single select, multi select and search in one.

<PlatformBadges component="choose" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### 基本使用

```vue
<template>
  <up-choose v-model="value" :options="options"></up-choose>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'},
  {id: 4, title: '选项4'},
  {id: 5, title: '选项5'},
  {id: 6, title: '选项6'}
])
</script>
```

#### 不换行显示

```vue
<template>
  <up-choose v-model="value" :options="options" :wrap="false"></up-choose>
</template>
```

#### 自定义尺寸

```vue
<template>
  <up-choose 
    v-model="value" 
    :options="options" 
    item-width="250rpx" 
    item-height="220rpx">
  </up-choose>
</template>
```

#### 快递上门时间预约

```vue
<template>
  <up-cate-tab height="300px" :tab-list="deliveryOptions" v-model:current="deliveryCurrent">
    <template v-slot:itemList="{item}">
      <view class="delivery-time-container">
        <view class="item-title">
          <text>{{item.name}}</text>
        </view>
        <view class="item-container">
          <up-choose 
            v-model="item.selectedIndex" 
            :options="item.times" 
            item-width="460rpx" 
            item-height="60rpx"
            @change="onDeliveryTimeChange">
          </up-choose>
        </view>
      </view>
    </template>
  </up-cate-tab>
</template>
```

#### 自定义选项插槽

```vue
<template>
  <up-choose v-model="value" :options="options">
    <template v-slot="slotProps">
      <view class="custom-option">
        <text>{{ slotProps.item.title }}</text>
      </view>
    </template>
  </up-choose>
</template>
```

#### 自定义点击事件

```vue
<template>
  <up-choose 
    v-model="value" 
    :options="options" 
    :custom-click="true"
    @custom-click="onCustomClick">
  </up-choose>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'}
])

function onCustomClick(index) {
  console.log('自定义点击事件，选中索引：', index)
  // 在这里实现自定义逻辑
}
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/choose.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
  <up-choose v-model="value" :options="options"></up-choose>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'},
  {id: 4, title: '选项4'},
  {id: 5, title: '选项5'},
  {id: 6, title: '选项6'}
])
</script>
```

#### 不换行显示

```vue
<template>
  <up-choose v-model="value" :options="options" :wrap="false"></up-choose>
</template>
```

#### 自定义尺寸

```vue
<template>
  <up-choose 
    v-model="value" 
    :options="options" 
    item-width="250rpx" 
    item-height="220rpx">
  </up-choose>
</template>
```

#### 快递上门时间预约

```vue
<template>
  <up-cate-tab height="300px" :tab-list="deliveryOptions" v-model:current="deliveryCurrent">
    <template v-slot:itemList="{item}">
      <view class="delivery-time-container">
        <view class="item-title">
          <text>{{item.name}}</text>
        </view>
        <view class="item-container">
          <up-choose 
            v-model="item.selectedIndex" 
            :options="item.times" 
            item-width="460rpx" 
            item-height="60rpx"
            @change="onDeliveryTimeChange">
          </up-choose>
        </view>
      </view>
    </template>
  </up-cate-tab>
</template>
```

#### 自定义选项插槽

```vue
<template>
  <up-choose v-model="value" :options="options">
    <template v-slot="slotProps">
      <view class="custom-option">
        <text>{{ slotProps.item.title }}</text>
      </view>
    </template>
  </up-choose>
</template>
```

#### 自定义点击事件

```vue
<template>
  <up-choose 
    v-model="value" 
    :options="options" 
    :custom-click="true"
    @custom-click="onCustomClick">
  </up-choose>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'}
])

function onCustomClick(index) {
  console.log('自定义点击事件，选中索引：', index)
  // 在这里实现自定义逻辑
}
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/choose.md`</small>

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

