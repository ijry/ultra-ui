---
title: City locate 城市选择
description: 城市列表选择器，带索引与定位当前城市能力。
generated: true
---

# City locate 城市选择

城市列表选择器，带索引与定位当前城市能力。

<PlatformBadges component="city-locate" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

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

```vue
<up-city-locate
    :currentCity="currentCity"
    locationType="wgs84"
    :indexList="indexList"
    :hotCity="hotCity"
    :cityList="cityList"
    @location-success="locationSuccess"
    @select-city="selectCity">
</up-city-locate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/cityLocate/cityLocate.nvue`</small>

</template>

<template #uniappx>

```vue
<up-city-locate
  :currentCity="currentCity"
  locationType="wgs84"
  :indexList="indexList"
  :cityList="cityList"
  @location-success="locationSuccess"
  @select-city="selectCity">
</up-city-locate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/cityLocate/cityLocate.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `indexList` | — | `Array` | `—` |
| `cityList` | — | `Array` | `—` |
| `locationType` | — | `String` | `—` |
| `currentCity` | — | `String` | `—` |
| `nameKey` | — | `String` | `—` |

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
| uni-app · Vue 3 | `up-city-locate` | `src/uni_modules/uview-plus/components/u-city-locate` |
| uni-app-x · UTS / UVUE | `up-city-locate` | `uni_modules/uview-ultra/components/up-city-locate` |

