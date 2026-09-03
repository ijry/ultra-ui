---
title: Tabbar 底部导航栏
description: 底部标签栏，支持徽标、凸起中间项与安全区适配。
generated: true
---

# Tabbar 底部导航栏

底部标签栏，支持徽标、凸起中间项与安全区适配。

<PlatformBadges component="tabbar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTabbar
import net.lingyun.ultraui.android.components.UPTabbarProps

UPTabbar(
    props = UPTabbarProps(value = tabbarValue, fixed = false, placeholder = false),
    onUpdateValue = { tabbarValue = it },
) {
    UPTabbarItem(UPTabbarItemProps(name = "home", icon = "home", text = "首页"))
    UPTabbarItem(UPTabbarItemProps(name = "message", icon = "chat", text = "消息", badge = 3))
    UPTabbarItem(UPTabbarItemProps(name = "mine", icon = "account", text = "我的"))
}
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

### 固定在底部(固定在屏幕最下方)

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTabbar(
  value: value,
  fixed: fixed,
  placeholder: placeholder,
  safeAreaInsetBottom: safeAreaInsetBottom,
  border: border,
  activeColor: activeColor,
  inactiveColor: inactiveColor,
  styleType: styleType,
  animationType: animationType,
  textMode: textMode,
  activeBackgroundColor: activeBackgroundColor,
  children: children,
  onChange: onChange,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/tabbar2_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTabbar } from 'ultra-ui-rn';

<UPTabbar
  fixed={false}
  onChange={(name) => { setValue1(name); log(`change1 ${String(name)}`); }}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value1}
>
  <UPTabbarItem icon="home" onClick={() => log('click1')} text="首页" />
  <UPTabbarItem icon="photo" onClick={() => log('click1')} text="放映厅" />
  <UPTabbarItem icon="play-right" onClick={() => log('click1')} text="直播" />
  <UPTabbarItem icon="account" onClick={() => log('click1')} text="我的" />
</UPTabbar>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/TabbarDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

UPTabbar 的 value 与 UPTabbarItem 的 name 匹配；onChange 回传被点击项的 name

```tsx
import { UPTabbar } from '@ultra-ui'

<UPTabbar {...INLINE} value={basic} onChange={setBasic}>
  {renderItems(basic)}
</UPTabbar>
```

### activeIcon / inactiveIcon

子项自带选中态图标，无需外部判断

```tsx
<UPTabbar {...INLINE} value={basic} onChange={setBasic}>
  {ITEMS.map((item) => (
    <UPTabbarItem
      key={item.name}
      name={item.name}
      text={item.text}
      inactiveIcon={item.icon}
      activeIcon={item.activeIcon}
    />
  ))}
</UPTabbar>
```

### 徽标

badge 数字角标 / dot 圆点

```tsx
<UPTabbar {...INLINE} value={badge} onChange={setBadge}>
  <UPTabbarItem name='home' text='首页' icon='home' />
  <UPTabbarItem name='cart' text='购物车' icon='bag' badge={5} />
  <UPTabbarItem name='chat' text='消息' icon='chat' badge={128} />
  <UPTabbarItem name='mine' text='我的' icon='account' dot />
</UPTabbar>
```

### 自定义颜色

activeColor / inactiveColor / backgroundColor / border

```tsx
<UPTabbar
  {...INLINE}
  value={color}
  activeColor='#f56c6c'
  inactiveColor='#c0c4cc'
  backgroundColor='#fff8f8'
  border={false}
  onChange={setColor}
>
  {renderItems(color)}
</UPTabbar>
```

### 选中项背景色

activeBackgroundColor / inactiveBackgroundColor + itemShape

```tsx
<UPTabbar
  {...INLINE}
  value={shape}
  itemShape='round'
  activeColor='#ffffff'
  activeBackgroundColor='#3c9cff'
  inactiveBackgroundColor='#f4f4f5'
  onChange={setShape}
>
  {renderItems(shape)}
</UPTabbar>
```

### 整体风格

styleType 共 9 种

```tsx
<UPTabbar
  {...INLINE}
  styleType={type}
  value={styleValue[type] ?? 'home'}
  onChange={(name) => setStyleValue((prev) => ({ ...prev, [type]: name }))}
>
  {renderItems(styleValue[type] ?? 'home')}
</UPTabbar>
```

### 选中动画

animationType + iconScale，点上面的按钮切换动画类型后再点标签

```tsx
<UPTabbar
  {...INLINE}
  value={animation}
  animationType={animationType}
  iconScale={1.3}
  onChange={setAnimation}
>
  {renderItems(animation)}
</UPTabbar>
```

### 不设置 name

子项未设置 name 时，以自身在 Tabbar 中的序号作为标识

```tsx
<UPTabbar {...INLINE} value={noName} onChange={setNoName}>
  <UPTabbarItem text='第一项' icon='home' />
  <UPTabbarItem text='第二项' icon='bag' />
  <UPTabbarItem text='第三项' icon='account' />
</UPTabbar>
```

### 自定义图标插槽

activeIconSlot / inactiveIconSlot / textSlot

```tsx
<UPTabbar {...INLINE} value={basic} onChange={setBasic}>
  <UPTabbarItem
    name='home'
    text='首页'
    activeIconSlot={<UPIcon name='home-fill' size={24} color='#7232dd' />}
    inactiveIconSlot={<UPIcon name='home' size={24} color='#c0c4cc' />}
  />
  <UPTabbarItem
    name='cart'
    icon='bag'
    textSlot={<Text className='tabbar-demo__slot-text'>购物车</Text>}
  />
  <UPTabbarItem name='mine' text='我的' icon='account' />
</UPTabbar>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/tabbar/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-tabbar
    :value="value2"
    :placeholder="false"
    @change="(name: string | number | null) => {value2 = name}"
    :fixed="false"
    :safeAreaInsetBottom="false"
>
    <up-tabbar-item
        text="首页"
        icon="home"
        dot
    ></up-tabbar-item>
    <up-tabbar-item
        text="放映厅"
        icon="photo"
        badge="3"
    ></up-tabbar-item>
    <up-tabbar-item
        text="直播"
        icon="play-right"
    ></up-tabbar-item>
    <up-tabbar-item
        text="我的"
        icon="account"
    ></up-tabbar-item>
</up-tabbar>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/tabbar/tabbar.uvue`</small>

</template>

<template #uniappx>

```vue
<up-tabbar
    :value="value2"
    :placeholder="false"
    @change="(name: string | number | null) => {value2 = name}"
    :fixed="false"
    :safeAreaInsetBottom="false"
>
    <up-tabbar-item
        text="首页"
        icon="home"
        dot
    ></up-tabbar-item>
    <up-tabbar-item
        text="放映厅"
        icon="photo"
        badge="3"
    ></up-tabbar-item>
    <up-tabbar-item
        text="直播"
        icon="play-right"
    ></up-tabbar-item>
    <up-tabbar-item
        text="我的"
        icon="account"
    ></up-tabbar-item>
</up-tabbar>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/tabbar/tabbar.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-tabbar>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 当前匹配项的name | `String / Number` | `null` |
| `safeAreaInsetBottom` | 是否为iPhoneX留出底部安全距离 | `Boolean` | `true` |
| `border` | 是否显示上方边框 | `Boolean` | `true` |
| `borderColor` | 上方边框颜色 | `String` | `''` |
| `zIndex` | 元素层级z-index | `String / Number` | `1` |
| `activeColor` | 选中标签的颜色 | `String` | `'#1989fa'` |
| `inactiveColor` | 未选中标签的颜色 | `String` | `'#7d7e80'` |
| `fixed` | 是否固定在底部 | `Boolean` | `true` |
| `placeholder` | fixed定位固定在底部时，是否生成一个等高元素防止塌陷 | `Boolean` | `true` |
| `backgroundColor` | 背景色 | `String` | `''` |

#### 事件

| 事件名 |
| --- |
| `change` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-tabbar-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | item标签的名称，作为与u-tabbar的value参数匹配的标识符 | `String / Number` | `—` |
| `icon` | uview-plus内置图标或者绝对路径的图片 | `String` | `—` |
| `badge` | 右上角的角标提示信息 | `String / Number` | `—` |
| `dot` | 是否显示圆点，将会覆盖badge参数 | `Boolean` | `—` |
| `text` | 描述文本 | `String` | `—` |
| `badgeStyle` | 控制徽标的位置，对象或者字符串形式，可以设置top和right属性 | `Object / String` | `—` |
| `mode` | 模式，默认普通模式，midButton中间按钮模式 | `String` | `—` |
| `midButtonBgColor` | 中间按钮背景色 | `String` | `—` |
| `midButtonIconColor` | 中间按钮图标颜色 | `String` | `—` |
| `midButtonIconSize` | 中间按钮图标大小 | `String / Number` | `—` |
| `midButtonBoxShadow` | 中间按钮阴影 | `String` | `—` |
| `midButtonInnerBoxShadow` | 中间按钮内层阴影 | `String` | `—` |
| `midButtonOffsetY` | 中间按钮垂直偏移（负值为上移） | `String / Number` | `—` |

#### 事件

| 事件名 |
| --- |
| `change` |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `active-icon` |
| `inactive-icon` |
| `text` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTabbar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabbarComponents.kt` |
| Flutter · Dart | `UPTabbar` | `packages/ultra_ui/lib/src/widgets/up_tabbar.dart` |
| React Native · TypeScript | `UPTabbar` | `src/components/tabbar` |
| Taro · React + TypeScript | `UPTabbar` | `src/ultra-ui/components/up-tabbar` |
| uni-app · Vue 3 | `up-tabbar` | `uni_modules/uview-ultra/components/up-tabbar` |
| uni-app-x · UTS / UVUE | `up-tabbar` | `uni_modules/uview-ultra/components/up-tabbar` |

