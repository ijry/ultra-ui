---
title: Float button
description: A floating action button that can fan out into several sub-actions.
generated: true
---

# Float button

A floating action button that can fan out into several sub-actions.

<PlatformBadges component="float-button" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### With sub-menus

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

#### Custom slot

```dart
UPFloatButton(
  isMenu: true,
  right: '150px',
  top: '30px',
  listSlot: _customMenu(),
  child: const UPIcon(
    name: 'plus',
    color: Colors.white,
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

#### Basic usage

```vue
<style lang='scss' scoped>
<template>
	<view>
        <up-float-button :isMenu="false" top="90px">
        </up-float-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const list = ref([
]);
</script>
```

#### With sub-menus

```vue
<style lang='scss' scoped>
<template>
	<view>
        <up-float-button :isMenu="true" top="220px"
          :list="list"  @item-click="itemClick">
        </up-float-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const list = ref([
    {key: 'plus', name: 'plus', color: '#fff', backgroundColor: 'red'},
    {key: 'order', name: 'order', color: '#fff', backgroundColor: 'green'}
]);

const itemClick = (e) => {
    console.log(e)
}
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/floatButton.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<style lang='scss' scoped>
<template>
	<view>
        <up-float-button :isMenu="false" top="90px">
        </up-float-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const list = ref([
]);
</script>
```

#### With sub-menus

```vue
<style lang='scss' scoped>
<template>
	<view>
        <up-float-button :isMenu="true" top="220px"
          :list="list"  @item-click="itemClick">
        </up-float-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const list = ref([
    {key: 'plus', name: 'plus', color: '#fff', backgroundColor: 'red'},
    {key: 'order', name: 'order', color: '#fff', backgroundColor: 'green'}
]);

const itemClick = (e) => {
    console.log(e)
}
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/floatButton.md`</small>

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

