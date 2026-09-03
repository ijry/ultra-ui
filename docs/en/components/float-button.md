---
title: Float button
description: A floating action button that can fan out into several sub-actions.
generated: true
---

# Float button

A floating action button that can fan out into several sub-actions.

<PlatformBadges component="float-button" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPFloatButton(
  key: const ValueKey('float-button-page-menu'),
  isMenu: true,
  list: _menuItems,
  child: const KeyedSubtree(
    key: ValueKey('float-button-page-menu-trigger'),
    child: UPIcon(
      name: 'plus',
      color: Colors.white,
    ),
  ),
  onItemClick: (item, _) => setState(
    () => _menuMessage = '菜单点击：${item['key']}',
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/float_button_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPFloatButton } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPFloatButton } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-float-button :isMenu="false" top="90px">
</up-float-button>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/floatButton/floatButton.uvue`</small>

</template>

<template #uniappx>

```vue
<up-float-button :isMenu="false" top="90px">
</up-float-button>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/floatButton/floatButton.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `click` |
| `item-click` |

### Slots

| Slot |
| --- |
| `default` |
| `list` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPFloatButton` | `packages/ultra_ui/lib/src/widgets/up_float_button.dart` |
| React Native · TypeScript | `UPFloatButton` | `src/components/float-button` |
| Taro · React + TypeScript | `UPFloatButton` | `src/ultra-ui/components/up-float-button` |
| uni-app · Vue 3 | `up-float-button` | `uni_modules/uview-ultra/components/up-float-button` |
| uni-app-x · UTS / UVUE | `up-float-button` | `uni_modules/uview-ultra/components/up-float-button` |

