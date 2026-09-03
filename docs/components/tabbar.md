---
title: Tabbar 底部导航栏
description: 底部标签栏，支持徽标、凸起中间项与安全区适配。
generated: true
---

# Tabbar 底部导航栏

底部标签栏，支持徽标、凸起中间项与安全区适配。

<PlatformBadges component="tabbar" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/TabbarDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

UPTabbar 的 value 与 UPTabbarItem 的 name 匹配；onChange 回传被点击项的 name

```tsx
import { UPTabbar } from '@ultra-ui'

<UPTabbar {...INLINE} value={basic} onChange={setBasic}>
  {renderItems(basic)}
</UPTabbar>
```

#### activeIcon / inactiveIcon

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

#### 徽标

badge 数字角标 / dot 圆点

```tsx
<UPTabbar {...INLINE} value={badge} onChange={setBadge}>
  <UPTabbarItem name='home' text='首页' icon='home' />
  <UPTabbarItem name='cart' text='购物车' icon='bag' badge={5} />
  <UPTabbarItem name='chat' text='消息' icon='chat' badge={128} />
  <UPTabbarItem name='mine' text='我的' icon='account' dot />
</UPTabbar>
```

#### 自定义颜色

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

#### 选中项背景色

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

#### 文字显示模式

textMode='active' 时未选中项文字弱化

```tsx
<UPTabbar {...INLINE} value={textMode} textMode='active' onChange={setTextMode}>
  {renderItems(textMode)}
</UPTabbar>
```

#### 中间凸起按钮

子项 mode='midButton'

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

#### 整体风格

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

<small>示例来源 `ultra-ui-taro/src/pages/components/tabbar/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

推荐您使用list数组遍历循环，案例使用基础方式构建，请根据`click`事件回调进行后续逻辑操作。

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

#### 显示徽标

使用`dot`属性添加--小点--类型徽标，使用`badge`属性添加--数字--类型徽标。您也可以使用`:badge='badge'`动态设置徽标数量，
这在消息盒子的展示中是比较好用的功能，

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

#### 匹配标签的名称

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

#### 自定义图标/颜色

如您需要自定义图标/颜色，在`up-tabbar-item`标签中使用插槽`active-icon`和`inactive-icon`来定义图标和颜色

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

#### 双态动态图标

如果您不想使用插槽，也可以直接给 `up-tabbar-item` 配置 `activeIcon` 和 `inactiveIcon`。
未配置 `inactiveIcon` 时，会回退到 `icon`；未配置 `activeIcon` 时，选中态也会继续使用 `icon`。

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

#### 推荐图标方案

如果您的 tabbar 需要更强的产品感，建议按下面顺序选择图标方案：

- `本地图标资源`
  - 视觉最好，适合首页、主导航、发布型底栏
- `内置字体图标`
  - 接入最快，适合工具类页面和后台页面
- `iconfont 扩展图标库`
  - 适合企业项目统一替换整套图标

对于 `首页 / 发现 / 发布 / 消息 / 我的` 这类主导航，推荐优先使用本地 `PNG/SVG` 两态资源。

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

如果您要统一替换整套字体图标，可以结合 `custom-prefix` 使用，详细步骤见 CustomIcon 扩展自定义图标库。

#### 多风格模式

`up-tabbar` 现在支持多种内置风格预设，用于覆盖工具类、内容类、卡片类和中间凸起等常见场景。

当前支持：

- `default`：默认风格，保持与原有视觉接近
- `minimal`：极简风格，强调颜色变化
- `pill`：胶囊风格，选中项带圆角背景
- `lift`：上浮风格，选中项轻微抬起
- `card`：卡片风格，层次更明显
- `underline`：下划线风格，适合内容导航
- `dot`：圆点风格，反馈更轻量
- `glow`：发光风格，选中项更突出
- `convex`：凸起风格，适合配合中间按钮使用

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

#### 选中态动画

通过 `animationType` 可以给激活项增加轻量反馈动画，目前支持：

- `none`：无动画
- `scale`：缩放反馈
- `lift`：上浮反馈
- `swing`：轻微摆动
- `pulse`：脉冲反馈

建议优先将动画与 `pill`、`lift`、`card`、`glow` 等风格组合使用，视觉效果更完整。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/tabbar.md`</small>

</template>

<template #uniappx>

#### 基本使用

推荐您使用list数组遍历循环，案例使用基础方式构建，请根据`click`事件回调进行后续逻辑操作。

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

#### 显示徽标

使用`dot`属性添加--小点--类型徽标，使用`badge`属性添加--数字--类型徽标。您也可以使用`:badge='badge'`动态设置徽标数量，
这在消息盒子的展示中是比较好用的功能，

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

#### 匹配标签的名称

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

#### 自定义图标/颜色

如您需要自定义图标/颜色，在`up-tabbar-item`标签中使用插槽`active-icon`和`inactive-icon`来定义图标和颜色

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

#### 拦截切换事件(点击第二个标签)

在切换事件中，处理拦截事件或者您其他js操作逻辑。

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

#### 边框

组件默认带了顶部边框，如果不需要，配置`border`为`false`即可。

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

#### 固定在底部(固定在屏幕最下方)

与原生效果无异，但您可以按照api配置您需要的其他配置，如徽标，边框等

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/tabbar.md`</small>

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

