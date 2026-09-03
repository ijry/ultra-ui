---
title: Tabbar
description: A bottom tab bar with badges, a raised centre item and safe-area handling.
generated: true
---

# Tabbar

A bottom tab bar with badges, a raised centre item and safe-area handling.

<PlatformBadges component="tabbar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/tabbar2_page.dart`</small>

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

```tsx
<UPTabbar
  fixed={false}
  onChange={setValue2}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value2}
>
  <UPTabbarItem dot icon="home" text="首页" />
  <UPTabbarItem badge="3" icon="photo" text="放映厅" />
  <UPTabbarItem icon="play-right" text="直播" />
  <UPTabbarItem icon="account" text="我的" />
</UPTabbar>
```

```tsx
<UPTabbar
  fixed={false}
  onChange={setValue3}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value3}
>
  <UPTabbarItem icon="home" name="home" text="首页" />
  <UPTabbarItem icon="photo" name="photo" text="放映厅" />
  <UPTabbarItem icon="play-right" name="play-right" text="直播" />
  <UPTabbarItem icon="account" name="account" text="我的" />
</UPTabbar>
```

```tsx
<UPTabbar
  activeColor="#d81e06"
  fixed={false}
  onChange={setValue4}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value4}
>
  <UPTabbarItem
    activeIconNode={<Image source={{ uri: BELL_ACTIVE }} style={s.slotIcon} />}
    inactiveIconNode={<Image source={{ uri: BELL }} style={s.slotIcon} />}
    text="首页"
  />
  <UPTabbarItem icon="photo" text="放映厅" />
  <UPTabbarItem icon="play-right" text="直播" />
  <UPTabbarItem icon="account" text="我的" />
</UPTabbar>
```

```tsx
<UPTabbar
  fixed={false}
  onChange={change5}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value5}
>
  <UPTabbarItem icon="home" text="首页" />
  <UPTabbarItem icon="photo" text="放映厅" />
  <UPTabbarItem icon="play-right" text="直播" />
  <UPTabbarItem icon="account" text="我的" />
</UPTabbar>
```

```tsx
<UPTabbar
  border={false}
  fixed={false}
  onChange={setValue7}
  placeholder={false}
  safeAreaInsetBottom={false}
  value={value7}
>
  <UPTabbarItem icon="home" text="首页" />
  <UPTabbarItem icon="photo" text="放映厅" />
  <UPTabbarItem icon="play-right" text="直播" />
  <UPTabbarItem icon="account" text="我的" />
</UPTabbar>
```

```tsx
<UPTabbar
  activeBackgroundColor="rgba(59, 130, 246, 0.10)"
  animationType="scale"
  fixed={false}
  onChange={setValue8}
  placeholder={false}
  safeAreaInsetBottom={false}
  styleType="pill"
  value={value8}
>
  {STYLE_ITEMS.map((item) => (
    <UPTabbarItem icon={item.icon} key={item.text} text={item.text} />
  ))}
</UPTabbar>
```

```tsx
<UPTabbar
  animationType="lift"
  fixed={false}
  onChange={setValue9}
  placeholder={false}
  safeAreaInsetBottom={false}
  styleType="lift"
  textMode="active"
  value={value9}
>
  {STYLE_ITEMS.map((item) => (
    <UPTabbarItem icon={item.icon} key={item.text} text={item.text} />
  ))}
</UPTabbar>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/TabbarDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPTabbar } from '@ultra-ui'

<UPTabbar {...INLINE} value={basic} onChange={setBasic}>
  {renderItems(basic)}
</UPTabbar>
```

#### activeIcon / inactiveIcon

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

#### Badge

```tsx
<UPTabbar {...INLINE} value={badge} onChange={setBadge}>
  <UPTabbarItem name='home' text='首页' icon='home' />
  <UPTabbarItem name='cart' text='购物车' icon='bag' badge={5} />
  <UPTabbarItem name='chat' text='消息' icon='chat' badge={128} />
  <UPTabbarItem name='mine' text='我的' icon='account' dot />
</UPTabbar>
```

#### Custom colour

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

#### Background colour of the selected item

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

#### Text display mode

```tsx
<UPTabbar {...INLINE} value={textMode} textMode='active' onChange={setTextMode}>
  {renderItems(textMode)}
</UPTabbar>
```

#### Raised centre button

```tsx
<UPTabbar {...INLINE} value={mid} onChange={setMid}>
  <UPTabbarItem name='home' text='首页' icon='home' />
  <UPTabbarItem name='cart' text='购物车' icon='bag' />
  <UPTabbarItem
    name='publish'
    mode='midButton'
    text='发布'
    icon='plus'
    midButtonBgColor='#ffffff'
    midButtonIconColor='#3c9cff'
    midButtonIconSize={26}
  />
  <UPTabbarItem name='chat' text='消息' icon='chat' />
  <UPTabbarItem name='mine' text='我的' icon='account' />
</UPTabbar>
```

#### Overall style

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

<small>Snippet from `ultra-ui-taro/src/pages/components/tabbar/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<up-tabbar
	:value="value1"
	@change="change1"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" @click="click1" ></up-tabbar-item>
</up-tabbar>
<!-- js -->
value1: 0,
click1(e) {
	console.log('click1', e);
}
```

#### Showing a badge

```vue
<up-tabbar
	:value="value2"
	:placeholder="false"
	@change="name => value2 = name"
	:fixed="false"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" dot ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" badge="3"></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value2: 1,
```

#### Matching by name

```vue
<up-tabbar
:placeholder="false"
:value="value3"
@change="name => value3 = name"
:fixed="false"
:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" name="home"></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" name="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" name="play-right"></up-tabbar-item>
	<up-tabbar-item text="我的" name="account" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value3: 'play-right',
```

#### Custom icon and colour

```vue
<up-tabbar
	:value="value4"
	@change="name => value4 = name"
	:fixed="false"
	:placeholder="false"
	activeColor="#d81e06"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页">
		<template #active-icon>
			<image
				class="u-page__item__slot-icon"
				src="https://cdn.uviewui.com/uview/common/bell-selected.png"
			></image>
		</template>
		<template #inactive-icon>
			<image
				class="u-page__item__slot-icon"
				src="https://cdn.uviewui.com/uview/common/bell.png"
			></image>
		</template>
	</up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value4: 0,
```

#### Two-state animated icon

```vue
<up-tabbar
	:value="value8"
	@change="name => value8 = name"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
	styleType="pill"
	animationType="scale"
	activeBackgroundColor="rgba(60, 156, 255, 0.12)"
>
	<up-tabbar-item text="首页" icon="home" activeIcon="home-fill"></up-tabbar-item>
	<up-tabbar-item text="分类" icon="grid" activeIcon="grid-fill"></up-tabbar-item>
	<up-tabbar-item text="消息" icon="chat" activeIcon="chat-fill"></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" activeIcon="account-fill"></up-tabbar-item>
</up-tabbar>
<!-- data -->
value8: 0,
```

#### The recommended icon setup

```vue
<up-tabbar
	:value="valueMain"
	@change="name => valueMain = name"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
	styleType="convex"
	animationType="scale"
>
	<up-tabbar-item text="首页" icon="/static/uview/tabbar/home.png" activeIcon="/static/uview/tabbar/home-active.png"></up-tabbar-item>
	<up-tabbar-item text="发现" icon="/static/uview/tabbar/discover.png" activeIcon="/static/uview/tabbar/discover-active.png"></up-tabbar-item>
	<up-tabbar-item text="发布" icon="/static/uview/tabbar/publish.png" activeIcon="/static/uview/tabbar/publish-active.png" mode="midButton"></up-tabbar-item>
	<up-tabbar-item text="消息" icon="/static/uview/tabbar/message.png" activeIcon="/static/uview/tabbar/message-active.png"></up-tabbar-item>
	<up-tabbar-item text="我的" icon="/static/uview/tabbar/profile.png" activeIcon="/static/uview/tabbar/profile-active.png"></up-tabbar-item>
</up-tabbar>
```

#### Several styles

```vue
<up-tabbar
	:value="value9"
	@change="name => value9 = name"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
	styleType="lift"
	animationType="lift"
	textMode="active"
>
	<up-tabbar-item text="首页" icon="home" activeIcon="home-fill"></up-tabbar-item>
	<up-tabbar-item text="图片" icon="photo" activeIcon="photo-fill"></up-tabbar-item>
	<up-tabbar-item text="视频" icon="play-right" activeIcon="play-right-fill"></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" activeIcon="account-fill"></up-tabbar-item>
</up-tabbar>
<!-- data -->
value9: 1,
```

#### Selection animation

```vue
<up-tabbar
	:value="value10"
	@change="name => value10 = name"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
	styleType="card"
	animationType="pulse"
	activeBackgroundColor="rgba(255, 107, 107, 0.12)"
>
	<up-tabbar-item text="收藏" icon="star" activeIcon="star-fill"></up-tabbar-item>
	<up-tabbar-item text="喜欢" icon="heart" activeIcon="heart-fill"></up-tabbar-item>
	<up-tabbar-item text="消息" icon="chat" activeIcon="chat-fill"></up-tabbar-item>
	<up-tabbar-item text="地图" icon="map" activeIcon="map-fill"></up-tabbar-item>
</up-tabbar>
<!-- data -->
value10: 0,
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/tabbar.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<up-tabbar
	:value="value1"
	@change="change1"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" @click="click1" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" @click="click1" ></up-tabbar-item>
</up-tabbar>
<!-- js -->
value1: 0,
click1(e) {
	console.log('click1', e);
}
```

#### Showing a badge

```vue
<up-tabbar
	:value="value2"
	:placeholder="false"
	@change="name => value2 = name"
	:fixed="false"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" dot ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" badge="3"></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value2: 1,
```

#### Matching by name

```vue
<up-tabbar
:placeholder="false"
:value="value3"
@change="name => value3 = name"
:fixed="false"
:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" name="home"></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" name="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" name="play-right"></up-tabbar-item>
	<up-tabbar-item text="我的" name="account" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value3: 'play-right',
```

#### Custom icon and colour

```vue
<up-tabbar
	:value="value4"
	@change="name => value4 = name"
	:fixed="false"
	:placeholder="false"
	activeColor="#d81e06"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页">
		<template #active-icon>
			<image
				class="u-page__item__slot-icon"
				src="https://cdn.uviewui.com/uview/common/bell-selected.png"
			></image>
		</template>
		<template #inactive-icon>
			<image
				class="u-page__item__slot-icon"
				src="https://cdn.uviewui.com/uview/common/bell.png"
			></image>
		</template>
	</up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value4: 0,
```

#### Intercepting the switch (tap the second tab)

```vue
<up-tabbar
	:value="value5"
	:fixed="false"
	@change="change5"
	:safeAreaInsetBottom="false"
	:placeholder="false"
>
	<up-tabbar-item text="首页" icon="home" ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value5: 0,
<!-- js -->
change5(name) {
	if (name === 1) return uni.$u.toast('请您先登录')
	else this.value5 = name
},
```

#### Border

```vue
<up-tabbar
	:value="value7"
	:placeholder="false"
	:border="false"
	@change="name => value7 = name"
	:fixed="false"
	:safeAreaInsetBottom="false"
>
	<up-tabbar-item text="首页" icon="home" ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value7: 3
```

#### Pinned to the bottom of the screen

```vue
<up-tabbar
	:value="value6"
	@change="name => value6 = name"
	:fixed="true"
	:placeholder="true"
	:safeAreaInsetBottom="true"
>
	<up-tabbar-item text="首页" icon="home" ></up-tabbar-item>
	<up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>
	<up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>
	<up-tabbar-item text="我的" icon="account" ></up-tabbar-item>
</up-tabbar>
<!-- data -->
value6: 0,
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/tabbar.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-tabbar>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `change` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-tabbar-item>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `change` |
| `click` |

#### Slots

| Slot |
| --- |
| `active-icon` |
| `inactive-icon` |
| `text` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTabbar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabbarComponents.kt` |
| Flutter · Dart | `UPTabbar` | `packages/ultra_ui/lib/src/widgets/up_tabbar.dart` |
| React Native · TypeScript | `UPTabbar` | `src/components/tabbar` |
| Taro · React + TypeScript | `UPTabbar` | `src/ultra-ui/components/up-tabbar` |
| uni-app · Vue 3 | `up-tabbar` | `uni_modules/uview-ultra/components/up-tabbar` |
| uni-app-x · UTS / UVUE | `up-tabbar` | `uni_modules/uview-ultra/components/up-tabbar` |

