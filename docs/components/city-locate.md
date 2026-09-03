---
title: City locate 城市选择
description: 城市列表选择器，带索引与定位当前城市能力。
generated: true
---

# City locate 城市选择

城市列表选择器，带索引与定位当前城市能力。

<PlatformBadges component="city-locate" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCityLocate(
  key: const ValueKey('city-locate-page-basic'),
  indexList: const <String>['🔥', '所有城市'],
  cityList: _cityGroups,
  currentCity: _currentCity,
  locationHandler: _resolveLocation,
  onLocationSuccess: (result) {
    final city = '${result['locationCity'] ?? '南京'}';
    if (mounted) setState(() => _currentCity = city);
  },
  onSelectCity: (result) {
    final city = '${result['locationCity'] ?? ''}';
    if (mounted) setState(() => _selectedCity = city);
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/city_locate_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCityLocate } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCityLocate } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 自定义数据结构

```vue
<template>
  <up-city-locate 
    :cityList="customData"
    nameKey="cityName"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const customData = ref([
  [
    { cityName: '北京', value: 'beijing' },
    { cityName: '上海', value: 'shanghai' }
  ]
]);
</script>
```

#### 外部控制当前城市

```vue
<template>
  <up-city-locate 
    :currentCity="userCity"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const userCity = ref('北京');
</script>
```

#### 设置定位类型

```vue
<template>
  <up-city-locate 
    locationType="gcj02"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';
// 组件将使用 gcj02 定位类型
</script>
```

#### 监听定位结果

```vue
<template>
  <up-city-locate 
    @location-success="handleLocationResult"
  />
</template>
```

```vue
<script setup>
const handleLocationResult = (res) => {
  console.log('定位结果:', res);
};
</script>
```

## API

#### 如何获取用户选择的城市？

通过监听 `select-city` 事件获取用户选择的城市：

```vue
<script setup>
const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}
</script>
```

#### 如何自定义热门城市？

通过 `cityList` 属性传入第一个数组就是热门城市列表：

```vue
<script setup>
import { ref } from 'vue';

const cityList = ref([[
  { name: '北京', value: 'beijing' },
  { name: '上海', value: 'shanghai' },
  { name: '广州', value: 'guangzhou' }
]]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/cityLocate.md`</small>

</template>

<template #uniappx>

#### 自定义数据结构

```vue
<template>
  <up-city-locate 
    :cityList="customData"
    nameKey="cityName"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const customData = ref([
  [
    { cityName: '北京', value: 'beijing' },
    { cityName: '上海', value: 'shanghai' }
  ]
]);
</script>
```

#### 外部控制当前城市

```vue
<template>
  <up-city-locate 
    :currentCity="userCity"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const userCity = ref('北京');
</script>
```

#### 设置定位类型

```vue
<template>
  <up-city-locate 
    locationType="gcj02"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue';
// 组件将使用 gcj02 定位类型
</script>
```

#### 监听定位结果

```vue
<template>
  <up-city-locate 
    @location-success="handleLocationResult"
  />
</template>
```

```vue
<script setup>
const handleLocationResult = (res) => {
  console.log('定位结果:', res);
};
</script>
```

## API

#### 如何获取用户选择的城市？

通过监听 `select-city` 事件获取用户选择的城市：

```vue
<script setup>
const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}
</script>
```

#### 如何自定义热门城市？

通过 `cityList` 属性传入第一个数组就是热门城市列表：

```vue
<script setup>
import { ref } from 'vue';

const cityList = ref([[
  { name: '北京', value: 'beijing' },
  { name: '上海', value: 'shanghai' },
  { name: '广州', value: 'guangzhou' }
]]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/cityLocate.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `location-success` |
| `select-city` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCityLocate` | `packages/ultra_ui/lib/src/widgets/up_city_locate.dart` |
| React Native · TypeScript | `UPCityLocate` | `src/components/city-locate` |
| Taro · React + TypeScript | `UPCityLocate` | `src/ultra-ui/components/up-city-locate` |
| uni-app · Vue 3 | `up-city-locate` | `uni_modules/uview-ultra/components/up-city-locate` |
| uni-app-x · UTS / UVUE | `up-city-locate` | `uni_modules/uview-ultra/components/up-city-locate` |

