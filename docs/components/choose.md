---
title: Choose 通用选择器
description: 数据驱动的通用选择器，一个组件覆盖单选、多选与搜索。
generated: true
---

# Choose 通用选择器

数据驱动的通用选择器，一个组件覆盖单选、多选与搜索。

<PlatformBadges component="choose" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/choose_page.dart`</small>

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

#### 基本使用

- 通过`options`设置选项数据，数据元素需要有`id`和`title`字段
- 通过`v-model`绑定当前选中项的索引值

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

通过设置`wrap`为`false`可使选项在一行内显示，超出部分可通过滚动查看。

```vue
<template>
  <up-choose v-model="value" :options="options" :wrap="false"></up-choose>
</template>
```

#### 自定义尺寸

通过`itemWidth`和`itemHeight`可以自定义选项的宽高。

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

结合`up-cate-tab`组件可以实现更复杂的交互场景，如快递上门时间预约。

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

通过插槽可以完全自定义选项的显示内容和样式。

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

通过设置`customClick`为`true`并监听`custom-click`事件可以实现自定义点击逻辑。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/choose.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`options`设置选项数据，数据元素需要有`id`和`title`字段
- 通过`v-model`绑定当前选中项的索引值

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

通过设置`wrap`为`false`可使选项在一行内显示，超出部分可通过滚动查看。

```vue
<template>
  <up-choose v-model="value" :options="options" :wrap="false"></up-choose>
</template>
```

#### 自定义尺寸

通过`itemWidth`和`itemHeight`可以自定义选项的宽高。

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

结合`up-cate-tab`组件可以实现更复杂的交互场景，如快递上门时间预约。

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

通过插槽可以完全自定义选项的显示内容和样式。

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

通过设置`customClick`为`true`并监听`custom-click`事件可以实现自定义点击逻辑。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/choose.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

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
| uni-app · Vue 3 | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |
| uni-app-x · UTS / UVUE | `up-choose` | `uni_modules/uview-ultra/components/up-choose` |

