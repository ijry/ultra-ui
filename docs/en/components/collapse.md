---
title: Collapse
description: Expandable panels, with an optional accordion mode.
generated: true
---

# Collapse

Expandable panels, with an optional accordion mode.

<PlatformBadges component="collapse" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCollapse
import net.lingyun.ultraui.android.components.UPCollapseProps

UPCollapse(
    props = UPCollapseProps(modelValue = collapseValue, accordion = true),
    onUpdateModelValue = {
        collapseValue = it
        eventText = "折叠面板：更新 $it"
    },
    onChange = { eventText = "折叠面板：状态 $it" },
) {
    UPCollapseItem(UPCollapseItemProps(name = "one", title = "第一项")) {
        Text("第一项内容", color = UPTheme.Content)
    }
    UPCollapseItem(UPCollapseItemProps(name = "two", title = "第二项")) {
        Text("第二项内容", color = UPTheme.Content)
    }
}
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCollapse, UPCollapseProps } from '@lingyun/ultra-ui-hos';

UPCollapse({ props: new UPCollapseProps({ modelValue: this.value, onValueChange: (value: UPCollapseValue): void => { this.value = value; }, onChange: (event: UPCollapseChangeEvent): void => { this.change(event); } }) }) {
  UPCollapseItem({ props: new UPCollapseItemProps({ title: '第一个面板', name: 'first', label: '多开模式' }) }) { Text('第一个面板内容').fontSize(14).fontColor('#606266') }
  UPCollapseItem({ props: new UPCollapseItemProps({ title: '第二个面板', name: 'second', label: '点击标题切换' }) }) { Text('第二个面板内容').fontSize(14).fontColor('#606266') }
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CollapseDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCollapse(
  value: _basicValue,
  onUpdateValue: _updateBasicValue,
  onChange: _recordChange,
  children: const <Widget>[
    UPCollapseItem(
      title: '文档指南',
      name: 'Docs guide',
      child: Text(_docsContent),
    ),
    UPCollapseItem(
      title: '组件全面',
      name: 'Variety components',
      child: Text(_componentsContent),
    ),
    UPCollapseItem(
      title: '众多利器',
      name: 'Numerous tools',
      showRight: false,
      child: Text(_toolsContent),
    ),
  ],
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/collapse_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCollapse } from 'ultra-ui-rn';

<UPCollapse
  onChange={(items) => log('change', items)}
  onClose={(name) => log('close', name)}
  onOpen={(name) => log('open', name)}
>
  <UPCollapseItem name="Docs guide" title="文档指南">
    <Text style={s.content}>{DOCS}</Text>
  </UPCollapseItem>
  <UPCollapseItem name="Variety components" title="组件全面">
    <Text style={s.content}>{COMPONENTS}</Text>
  </UPCollapseItem>
  <UPCollapseItem name="Numerous tools" showRight={false} title="众多利器">
    <Text style={s.content}>{TOOLS}</Text>
  </UPCollapseItem>
</UPCollapse>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CollapseDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCollapse } from '@ultra-ui'

<UPCollapse
  accordion
  value={accordionValue}
  onChange={(items) => console.log('accordion onChange', items)}
>
  <UPCollapseItem name='1' title='有赞微商城' value='免费版'>
    有赞微商城是面向全行业、全场景的电商 SaaS 产品，帮助商家在线上开店、经营私域。
  </UPCollapseItem>
  <UPCollapseItem name='2' title='有赞零售' label='新零售解决方案'>
    覆盖门店收银、会员、商品、库存等全链路，助力线下零售数字化升级。
  </UPCollapseItem>
  <UPCollapseItem name='3' title='有赞客' disabled>
    该功能暂未对当前账号开放（disabled 演示）。
  </UPCollapseItem>
</UPCollapse>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/collapse/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-collapse @change="change" @close="close" @open="open">
    <up-collapse-item title="文档指南" name="Docs guide">
        <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item title="组件全面" name="Variety components">
        <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item title="众多利器" name="Numerous tools" :showRight="false">
        <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
</up-collapse>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/collapse/collapse.nvue`</small>

</template>

<template #uniappx>

```vue
<up-collapse @change="change" @close="close" @open="open">
    <up-collapse-item title="文档指南" name="Docs guide">
        <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item title="组件全面" name="Variety components">
        <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item title="众多利器" name="Numerous tools" :showRight="false">
        <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
</up-collapse>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/collapse/collapse.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-collapse>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | 当前展开面板的name，非手风琴模式：[&lt;string &#124; number&gt;]，手风琴模式：string &#124; number | `String / Number / Array / null` | `null` |
| `accordion` | 是否手风琴模式 | `Boolean` | `false` |
| `border` | 是否显示外边框 | `Boolean` | `true` |

#### Events

| Event |
| --- |
| `change` |
| `close` |
| `open` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-collapse-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 标题 | `String` | `''` |
| `titleStyle` | 标题的样式 | `Object / String` | `{}` |
| `value` | 标题右侧内容 | `String` | `''` |
| `label` | 标题下方的描述信息 | `String` | `''` |
| `disabled` | 是否禁用折叠面板 | `Boolean` | `false` |
| `isLink` | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `true` |
| `clickable` | 是否开启点击反馈 | `Boolean` | `true` |
| `border` | 是否显示内边框 | `Boolean` | `true` |
| `align` | 标题的对齐方式 | `String` | `'left'` |
| `name` | 唯一标识符 | `String / Number` | `''` |
| `icon` | 标题左侧图片，可为绝对路径的图片或内置图标 | `String` | `''` |
| `duration` | 面板展开收起的过渡时间，单位ms | `Number` | `300` |
| `showRight` | 显示右侧图标 | `Boolean` | `true` |
| `iconStyle` | 左侧图标样式 | `Object / String` | `{}` |
| `rightIconStyle` | 右侧箭头图标的样式 | `Object / String` | `{}` |
| `cellCustomStyle` | — | `Object / String` | `{}` |
| `cellCustomClass` | — | `String` | `''` |

#### Slots

| Slot |
| --- |
| `default` |
| `icon` |
| `right-icon` |
| `title` |
| `value` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPCollapse` | `UltraUI/Sources/UltraUI/Components/UPCollapse.swift` |
| Android · Jetpack Compose | `UPCollapse` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCollapse.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCollapse` | `ultra-ui/src/main/ets/components/UPCollapse.ets` |
| Flutter · Dart | `UPCollapse` | `packages/ultra_ui/lib/src/widgets/up_collapse.dart` |
| React Native · TypeScript | `UPCollapse` | `src/components/collapse` |
| Taro · React + TypeScript | `UPCollapse` | `src/ultra-ui/components/up-collapse` |
| uni-app · Vue 3 | `up-collapse` | `src/uni_modules/uview-plus/components/u-collapse` |
| uni-app-x · UTS / UVUE | `up-collapse` | `uni_modules/uview-ultra/components/up-collapse` |

