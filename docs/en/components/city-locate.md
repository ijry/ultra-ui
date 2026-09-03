---
title: City locate
description: A city list picker with an index bar and current-location support.
generated: true
---

# City locate

A city list picker with an index bar and current-location support.

<PlatformBadges component="city-locate" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cityLocate/cityLocate.uvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cityLocate/cityLocate.uvue`</small>

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

