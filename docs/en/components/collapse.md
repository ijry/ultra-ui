---
title: Collapse
description: Expandable panels, with an optional accordion mode.
generated: true
---

# Collapse

Expandable panels, with an optional accordion mode.

<PlatformBadges component="collapse" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Collapse panel

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

#### Accordion mode

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCollapse(
  accordion: true,
  children: <Widget>[
    UPCollapseItem(
      title: '文档指南',
      child: Text(_docsContent),
    ),
    UPCollapseItem(
      title: '组件全面',
      child: Text(_componentsContent),
    ),
    UPCollapseItem(
      title: '众多利器',
      child: Text(_toolsContent),
    ),
  ],
)
```

#### Removing the underline

```dart
UPCollapse(
  accordion: true,
  border: false,
  children: <Widget>[
    UPCollapseItem(
      title: '文档指南',
      child: Text(_docsContent),
    ),
    UPCollapseItem(
      title: '组件全面',
      child: Text(_componentsContent),
    ),
    UPCollapseItem(
      title: '众多利器',
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

```tsx
<UPCollapse value={['2']}>
  <UPCollapseItem title="文档指南">
    <Text style={s.content}>{DOCS}</Text>
  </UPCollapseItem>
  <UPCollapseItem disabled title="组件全面">
    <Text style={s.content}>{COMPONENTS}</Text>
  </UPCollapseItem>
  <UPCollapseItem name="2" title="众多利器">
    <Text style={s.content}>{TOOLS}</Text>
  </UPCollapseItem>
</UPCollapse>
```

```tsx
<UPCollapse accordion>
  <UPCollapseItem title="文档指南">
    <Text style={s.content}>{DOCS}</Text>
  </UPCollapseItem>
  <UPCollapseItem title="组件全面">
    <Text style={s.content}>{COMPONENTS}</Text>
  </UPCollapseItem>
  <UPCollapseItem title="众多利器">
    <Text style={s.content}>{TOOLS}</Text>
  </UPCollapseItem>
</UPCollapse>
```

```tsx
<UPCollapse accordion border={false}>
  <UPCollapseItem title="文档指南">
    <Text style={s.content}>{DOCS}</Text>
  </UPCollapseItem>
  <UPCollapseItem title="组件全面">
    <Text style={s.content}>{COMPONENTS}</Text>
  </UPCollapseItem>
  <UPCollapseItem title="众多利器">
    <Text style={s.content}>{TOOLS}</Text>
  </UPCollapseItem>
</UPCollapse>
```

```tsx
<UPCollapse accordion>
  <UPCollapseItem titleNode={<Text style={s.slotTitle}>文档指南</Text>}>
    <Text style={s.content}>{DOCS}</Text>
  </UPCollapseItem>
  <UPCollapseItem iconNode={<UPIcon name="tags-fill" size={20} />} title="组件全面">
    <Text style={s.content}>{COMPONENTS}</Text>
  </UPCollapseItem>
  <UPCollapseItem
    icon="tags-fill"
    rightIconNode={<Text style={s.slotTitle}>10</Text>}
    title="众多利器"
  >
    <Text style={s.content}>{TOOLS}</Text>
  </UPCollapseItem>
</UPCollapse>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/CollapseDemo.tsx`</small>

</template>

<template #taro>

#### Basic accordion

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

#### Several panels open at once

```tsx
<UPCollapse value={multiValue}>
  <UPCollapseItem name='1' title='关于我们' icon='info-circle'>
    ultra-ui 是 uview-plus 的 Taro + React 复刻版，全端兼容。
  </UPCollapseItem>
  <UPCollapseItem name='2' title='服务协议' icon='order'>
    本服务协议约定了平台与用户之间的权利与义务。
  </UPCollapseItem>
  <UPCollapseItem name='3' title='隐私政策' icon='lock'>
    我们严格保护用户隐私，未经授权绝不向第三方提供个人信息。
  </UPCollapseItem>
</UPCollapse>
```

#### Custom content

```tsx
<UPCollapse border={false}>
  <UPCollapseItem name='1' title='收货地址' value='上海市' duration={500}>
    <View className='collapse-demo__card'>
      <View className='collapse-demo__row'>收货人：张三　138****8888</View>
      <View className='collapse-demo__row'>上海市浦东新区世纪大道 100 号</View>
    </View>
  </UPCollapseItem>
  <UPCollapseItem name='2' title='发票信息' value='电子发票'>
    <View className='collapse-demo__card'>
      <View className='collapse-demo__row'>抬头：个人</View>
      <View className='collapse-demo__row'>类型：电子普通发票</View>
    </View>
  </UPCollapseItem>
</UPCollapse>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/collapse/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
  <up-collapse
    @change="change"
    @close="close"
    @open="open"
  >
    <up-collapse-item
      title="文档指南"
      name="Docs guide"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item
      title="组件全面"
      name="Variety components"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item
      title="众多利器"
      name="Numerous tools"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>
```

```vue
<script setup>  
// 定义 open 方法  
const open = (e) => {  
  // console.log('open', e)  
};  
  
// 定义 close 方法  
const close = (e) => {  
  // console.log('close', e)  
};  
  
// 定义 change 方法  
const change = (e) => {  
  // console.log('change', e)  
};  
</script>
```

#### Initial state and whether it can be operated

```vue
<template>
  <up-collapse
    :value="['2']"
  >
    <up-collapse-item
      title="文档指南"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item
      disabled
      title="组件全面"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item
      name="2"
      title="众多利器"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>
```

```vue
<script setup>  
// 定义 open 方法  
const open = (e) => {  
  // console.log('open', e)  
};  
  
// 定义 close 方法  
const close = (e) => {  
  // console.log('close', e)  
};  
  
// 定义 change 方法  
const change = (e) => {  
  // console.log('change', e)  
};  
</script>
```

#### Accordion mode

```vue
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">手风琴模式</text>
        <up-collapse
                accordion
        >
            <up-collapse-item
                    title="文档指南"
            >
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </up-collapse-item>
            <up-collapse-item
                    title="组件全面"
            >
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </up-collapse-item>
            <up-collapse-item
                    title="众多利器"
            >
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </up-collapse-item>
        </up-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $u-tips-color;
                 background-color: $u-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $u-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $u-tips-color;
        font-size: 14px;
    }
</style>
```

#### Custom title and content

```vue
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">自定义标题和内容</text>
        <up-collapse
                accordion
        >
            <up-collapse-item
            >
                <template #title>
                  <text class="u-page__item__title__slot-title">文档指南</text>
                </template>
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </up-collapse-item>
            <up-collapse-item
                    title="组件全面"
            >
                <up-icon name="tags-fill" size="20" slot="icon"></up-icon>
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </up-collapse-item>
            <up-collapse-item
                    title="众多利器"
            >
                <template #value>
                  <text class="u-page__item__title__slot-title">自定义内容</text>
                </template>
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </up-collapse-item>
        </up-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $u-tips-color;
                 background-color: $u-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $u-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $u-tips-color;
        font-size: 14px;
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/collapse.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
  <up-collapse
    @change="change"
    @close="close"
    @open="open"
  >
    <up-collapse-item
      title="文档指南"
      name="Docs guide"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item
      title="组件全面"
      name="Variety components"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item
      title="众多利器"
      name="Numerous tools"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>
```

```vue
<script setup>  
// 定义 open 方法  
const open = (e) => {  
  // console.log('open', e)  
};  
  
// 定义 close 方法  
const close = (e) => {  
  // console.log('close', e)  
};  
  
// 定义 change 方法  
const change = (e) => {  
  // console.log('change', e)  
};  
</script>
```

#### Initial state and whether it can be operated

```vue
<template>
  <up-collapse
    :value="['2']"
  >
    <up-collapse-item
      title="文档指南"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item
      disabled
      title="组件全面"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item
      name="2"
      title="众多利器"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>
```

```vue
<script setup>  
// 定义 open 方法  
const open = (e) => {  
  // console.log('open', e)  
};  
  
// 定义 close 方法  
const close = (e) => {  
  // console.log('close', e)  
};  
  
// 定义 change 方法  
const change = (e) => {  
  // console.log('change', e)  
};  
</script>
```

#### Accordion mode

```vue
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">手风琴模式</text>
        <up-collapse
                accordion
        >
            <up-collapse-item
                    title="文档指南"
            >
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </up-collapse-item>
            <up-collapse-item
                    title="组件全面"
            >
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </up-collapse-item>
            <up-collapse-item
                    title="众多利器"
            >
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </up-collapse-item>
        </up-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $up-tips-color;
                 background-color: $up-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $up-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $up-tips-color;
        font-size: 14px;
    }
</style>
```

#### Custom title and content

```vue
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">自定义标题和内容</text>
        <up-collapse
                accordion
        >
            <up-collapse-item
            >
                <template #title>
                  <text class="u-page__item__title__slot-title">文档指南</text>
                </template>
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </up-collapse-item>
            <up-collapse-item
                    title="组件全面"
            >
                <up-icon name="tags-fill" size="20" slot="icon"></up-icon>
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </up-collapse-item>
            <up-collapse-item
                    title="众多利器"
            >
                <template #value>
                  <text class="u-page__item__title__slot-title">自定义内容</text>
                </template>
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </up-collapse-item>
        </up-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $up-tips-color;
                 background-color: $up-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $up-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $up-tips-color;
        font-size: 14px;
    }
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/collapse.md`</small>

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
| uni-app · Vue 3 | `up-collapse` | `uni_modules/uview-ultra/components/up-collapse` |
| uni-app-x · UTS / UVUE | `up-collapse` | `uni_modules/uview-ultra/components/up-collapse` |

