---
title: Subsection 分段器
description: 两到多个选项之间的分段切换控件。
generated: true
---

# Subsection 分段器

两到多个选项之间的分段切换控件。

<PlatformBadges component="subsection" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSubsection
import net.lingyun.ultraui.android.components.UPSubsectionProps

DemoSection("分段器") { UPSubsection(UPSubsectionProps(list = listOf("日", "周", "月"), current = subsection), onChange = { subsection = it })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSubsection, UPSubsectionProps } from '@lingyun/ultra-ui-hos';

UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onChange: (index: number): void => { this.message = 'button 选择：' + String(index); } }) })
```

```typescript
UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, mode: 'subsection', bold: false, onChange: (index: number): void => { this.message = 'subsection 选择：' + String(index); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SubsectionDemo.ets`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

subsection: UPSubsection(
  key: const ValueKey('subsection-page-basic'),
  list: _items,
  mode: 'subsection',
  current: _basicIndex,
  onChange: _setBasic,
)
```

#### 按钮模式

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-button'),
  list: _items,
  mode: 'button',
  current: _buttonIndex,
  onChange: _setButton,
)
```

#### 更换主题

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-theme'),
  list: _items,
  mode: 'subsection',
  current: _themeIndex,
  activeColor: '#f56c6c',
  onChange: _setTheme,
)
```

#### 默认位置

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-default'),
  list: _items,
  mode: 'button',
  current: _defaultIndex,
  activeColor: '#f9ae3d',
  onChange: _setDefault,
)
```

#### 按钮模式通过list自定义颜色

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-custom-colors'),
  list: _customItems,
  mode: 'button',
  current: _customIndex,
  activeColorKeyName: 'textColor',
  onChange: _setCustom,
)
```

#### 禁用

```dart
UPSubsection(
  key: const ValueKey('subsection-page-disabled-button'),
  list: _customItems,
  mode: 'button',
  disabled: true,
  activeColorKeyName: 'textColor',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/subsection_page.dart`</small>

</template>

<template #reactnative>

#### 基础使用

```tsx
import { UPSubsection } from 'ultra-ui-rn';

<UPSubsection current={current1} list={list} mode="subsection" onChange={setCurrent1} />
```

#### 按钮模式

```tsx
<UPSubsection current={current2} list={list} mode="button" onChange={setCurrent2} />
```

#### 更换主题

```tsx
<UPSubsection
  activeColor="#f56c6c"
  current={current3}
  list={list}
  mode="subsection"
  onChange={setCurrent3}
/>
```

#### 默认位置

```tsx
<UPSubsection
  activeColor="#f9ae3d"
  current={current4}
  list={list}
  mode="button"
  onChange={setCurrent4}
/>
```

#### 按钮模式通过list自定义颜色

```tsx
<UPSubsection
  activeColorKeyName="textColor"
  current={current5}
  list={list3}
  mode="button"
  onChange={setCurrent5}
/>
```

#### 禁用

```tsx
<UPSubsection
  activeColorKeyName="textColor"
  current={current5}
  disabled
  list={list3}
  mode="button"
  onChange={setCurrent5}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/SubsectionDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

mode 默认为 'button'，list 可直接传字符串数组

```tsx
import { UPSubsection } from '@ultra-ui'

<UPSubsection list={SIMPLE_LIST} current={basic} onChange={setBasic} />
```

#### 自定义颜色

activeColor / inactiveColor

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={color}
  activeColor='#f56c6c'
  inactiveColor='#909399'
  onChange={setColor}
/>
```

#### 背景颜色

bgColor，仅 button 模式生效

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={bg}
  bgColor='#e1f3d8'
  activeColor='#5ac725'
  onChange={setBg}
/>
```

#### 字体大小

fontSize，默认 12

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={font}
  fontSize={12}
  onChange={setFont}
/>
```

#### 激活项加粗

bold 默认为 true，可关闭

```tsx
<UPSubsection list={SIMPLE_LIST} current={bold} bold onChange={setBold} />
```

#### 自定义读取字段

keyName='title'

```tsx
<UPSubsection
  list={KEY_NAME_LIST}
  keyName='title'
  current={keyName}
  onChange={setKeyName}
/>
```

#### 逐项配色

元素上的 activeColorKey / inactiveColorKey 字段优先级更高

```tsx
<UPSubsection
  list={COLOR_KEY_LIST}
  current={colorKey}
  onChange={setColorKey}
/>
```

#### 项数自适应

滑块宽度按 list 长度等分

```tsx
<UPSubsection list={TWO_LIST} current={two} onChange={setTwo} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/subsection/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current1"
    @change="change1"
></up-subsection>
```

#### 按钮模式

```vue
<up-subsection
    :list="list"
    mode="button"
    :current="current2"
    @change="change2"
></up-subsection>
```

#### 更换主题

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current3"
    activeColor="#f56c6c"
    @change="change3"
></up-subsection>
```

#### 默认位置

```vue
<up-subsection
    :list="list"
    mode="button"
    :current="current4"
    activeColor="#f9ae3d"
    @change="change4"
></up-subsection>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/subsection/subsection.uvue`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current1"
    @change="change1"
></up-subsection>
```

#### 按钮模式

```vue
<up-subsection
    :list="list"
    mode="button"
    :current="current2"
    @change="change2"
></up-subsection>
```

#### 更换主题

```vue
<up-subsection
    :list="list"
    mode="subsection"
    :current="current3"
    activeColor="#f56c6c"
    @change="change3"
></up-subsection>
```

#### 默认位置

```vue
<up-subsection
    :list="list"
    mode="button"
    :current="current4"
    activeColor="#f9ae3d"
    @change="change4"
></up-subsection>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/subsection/subsection.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `list` | tab的数据 | `Array` | `[]` |
| `current` | 当前活动的tab的index | `String / Number` | `0` |
| `activeColor` | 激活的颜色 | `String` | `'var(--up-primary, #3c9cff)'` |
| `inactiveColor` | 未激活的颜色 | `String` | `'var(--up-content-color, #606266)'` |
| `mode` | 模式选择，mode=button为按钮形式，mode=subsection时为分段模式 | `String` | `'button'` |
| `fontSize` | 字体大小 | `String / Number` | `12` |
| `bold` | 激活tab的字体是否加粗 | `Boolean` | `true` |
| `bgColor` | mode = button时，组件背景颜色 | `String` | `'var(--up-hover-bg-color, #eeeeef)'` |
| `keyName` | 从list元素对象中读取的键名 | `String` | `'name'` |
| `activeColorKeyName` | 从list元素对象中读取激活时的颜色  如果存在字段 优先级大于 activeColor | `String` | `'activeColorKey'` |
| `inactiveColorKeyName` | 从list元素对象中读取未激活时的颜色 如果存在字段 优先级大于 inactiveColor | `String` | `'inactiveColorKey'` |
| `disabled` | 是否禁用 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `change` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSubsection` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSubsection` | `ultra-ui/src/main/ets/components/UPSubsection.ets` |
| Flutter · Dart | `UPSubsection` | `packages/ultra_ui/lib/src/widgets/up_subsection.dart` |
| React Native · TypeScript | `UPSubsection` | `src/components/subsection` |
| Taro · React + TypeScript | `UPSubsection` | `src/ultra-ui/components/up-subsection` |
| uni-app · Vue 3 | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |
| uni-app-x · UTS / UVUE | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |

