---
title: City locate
description: A city list picker with an index bar and current-location support.
generated: true
---

# City locate

A city list picker with an index bar and current-location support.

<PlatformBadges component="city-locate" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/city_locate_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCityLocate } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCityLocate } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
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

#### 如何获取用户选择的城市？

```vue
<script setup>
const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}
</script>
```

#### 如何自定义热门城市？

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/cityLocate.md`</small>

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

#### 如何获取用户选择的城市？

```vue
<script setup>
const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}
</script>
```

#### 如何自定义热门城市？

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/cityLocate.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `location-success` |
| `select-city` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCityLocate` | `packages/ultra_ui/lib/src/widgets/up_city_locate.dart` |
| React Native · TypeScript | `UPCityLocate` | `src/components/city-locate` |
| Taro · React + TypeScript | `UPCityLocate` | `src/ultra-ui/components/up-city-locate` |
| uni-app · Vue 3 | `up-city-locate` | `uni_modules/uview-ultra/components/up-city-locate` |
| uni-app-x · UTS / UVUE | `up-city-locate` | `uni_modules/uview-ultra/components/up-city-locate` |

