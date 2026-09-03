---
title: Float button 悬浮按钮
description: 悬浮在页面之上的操作按钮，可展开为多个子操作。
generated: true
---

# Float button 悬浮按钮

悬浮在页面之上的操作按钮，可展开为多个子操作。

<PlatformBadges component="float-button" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 带子菜单模式

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

#### 自定义插槽

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/float_button_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPFloatButton } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPFloatButton } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-float-button :isMenu="false" top="90px">
</up-float-button>
```

```vue
<up-float-button :isMenu="true" top="220px" @item-click="itemClick"
 :list="[
   {key: 'plus', name: 'plus', color: '#fff', backgroundColor: 'red'},
   {key: 'order', name: 'order', color: '#fff', backgroundColor: 'green'}
 ]">
</up-float-button>
```

```vue
<up-float-button top="''" bottom="250px" :isMenu="true">
   <template #list>
      <view style="display: flex ;justify-content: center;align-items: center;margin: 5px 0px;background-color: blueviolet;border-radius: 50%; width: 50px;height:50px;">
           <up-icon
               name="arrow-left"
               color='#fff'
               size="19"
           ></up-icon>
       </view>
       <view style="display: flex ;justify-content: center;align-items: center;margin: 5px 0px;background-color: chocolate;border-radius: 50%; width: 50px;height:50px;">
           <up-icon
               name="arrow-left"
               color='#fff'
               size="19"
           ></up-icon>
       </view>
   </template>
</up-float-button>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/floatButton/floatButton.uvue`</small>

</template>

<template #uniappx>

```vue
<up-float-button :isMenu="false" top="90px">
</up-float-button>
```

```vue
<up-float-button :isMenu="true" top="220px" @item-click="itemClick"
 :list="[
   {key: 'plus', name: 'plus', color: '#fff', backgroundColor: 'red'},
   {key: 'order', name: 'order', color: '#fff', backgroundColor: 'green'}
 ]">
</up-float-button>
```

```vue
<up-float-button top="''" bottom="250px" :isMenu="true">
   <template #list>
      <view style="display: flex ;justify-content: center;align-items: center;margin: 5px 0px;background-color: blueviolet;border-radius: 50%; width: 50px;height:50px;">
           <up-icon
               name="arrow-left"
               color='#fff'
               size="19"
           ></up-icon>
       </view>
       <view style="display: flex ;justify-content: center;align-items: center;margin: 5px 0px;background-color: chocolate;border-radius: 50%; width: 50px;height:50px;">
           <up-icon
               name="arrow-left"
               color='#fff'
               size="19"
           ></up-icon>
       </view>
   </template>
</up-float-button>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/floatButton/floatButton.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `click` |
| `item-click` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `list` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPFloatButton` | `packages/ultra_ui/lib/src/widgets/up_float_button.dart` |
| React Native · TypeScript | `UPFloatButton` | `src/components/float-button` |
| Taro · React + TypeScript | `UPFloatButton` | `src/ultra-ui/components/up-float-button` |
| uni-app · Vue 3 | `up-float-button` | `uni_modules/uview-ultra/components/up-float-button` |
| uni-app-x · UTS / UVUE | `up-float-button` | `uni_modules/uview-ultra/components/up-float-button` |

