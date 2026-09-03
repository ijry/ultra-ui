---
title: Collapse 折叠面板
description: 可展开收起的内容面板，支持手风琴模式。
generated: true
---

# Collapse 折叠面板

可展开收起的内容面板，支持手风琴模式。

<PlatformBadges component="collapse" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 折叠面板

```typescript
import { UPCollapse, UPCollapseProps } from '@lingyun/ultra-ui-hos';

UPCollapse({ props: new UPCollapseProps({ modelValue: this.value, onValueChange: (value: UPCollapseValue): void => { this.value = value; }, onChange: (event: UPCollapseChangeEvent): void => { this.change(event); } }) }) {
  UPCollapseItem({ props: new UPCollapseItemProps({ title: '第一个面板', name: 'first', label: '多开模式' }) }) { Text('第一个面板内容').fontSize(14).fontColor('#606266') }
  UPCollapseItem({ props: new UPCollapseItemProps({ title: '第二个面板', name: 'second', label: '点击标题切换' }) }) { Text('第二个面板内容').fontSize(14).fontColor('#606266') }
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CollapseDemo.ets`</small>

</template>

<template #flutter>

#### 手风琴模式

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

#### 移除下划线

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/collapse_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CollapseDemo.tsx`</small>

</template>

<template #taro>

#### 基础手风琴

accordion，同时只展开一项，受控 value

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

#### 多项同时展开

非手风琴，可同时展开多项，受控 value

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

#### 自定义内容

children 支持任意节点，自定义时长

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

<small>示例来源 `ultra-ui-taro/src/pages/components/collapse/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

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

#### 控制面板的初始状态，以及是否可以操作

- 设置`u-collapse-item`的`name`参数，并在`u-collapse`中指定数组`value`可以让面板初始化时为打开状态
- 如果设置`u-collapse-item`的`disabled`参数，那么面板会保持被禁用状态

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

#### 手风琴模式

- 将`u-collapse`的`accordion`设置为`true`，这样可以开启手风琴模式

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

#### 自定义标题和内容

- 通过设置`slot`来自定义标题和内容

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/collapse.md`</small>

</template>

<template #uniappx>

#### 基本使用

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

#### 控制面板的初始状态，以及是否可以操作

- 设置`u-collapse-item`的`name`参数，并在`u-collapse`中指定数组`value`可以让面板初始化时为打开状态
- 如果设置`u-collapse-item`的`disabled`参数，那么面板会保持被禁用状态

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

#### 手风琴模式

- 将`u-collapse`的`accordion`设置为`true`，这样可以开启手风琴模式

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

#### 自定义标题和内容

- 通过设置`slot`来自定义标题和内容

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/collapse.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-collapse>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 当前展开面板的name，非手风琴模式：[&lt;string &#124; number&gt;]，手风琴模式：string &#124; number | `String / Number / Array / null` | `null` |
| `accordion` | 是否手风琴模式 | `Boolean` | `false` |
| `border` | 是否显示外边框 | `Boolean` | `true` |

#### 事件

| 事件名 |
| --- |
| `change` |
| `close` |
| `open` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-collapse-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `icon` |
| `right-icon` |
| `title` |
| `value` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCollapse` | `UltraUI/Sources/UltraUI/Components/UPCollapse.swift` |
| Android · Jetpack Compose | `UPCollapse` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCollapse.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCollapse` | `ultra-ui/src/main/ets/components/UPCollapse.ets` |
| Flutter · Dart | `UPCollapse` | `packages/ultra_ui/lib/src/widgets/up_collapse.dart` |
| React Native · TypeScript | `UPCollapse` | `src/components/collapse` |
| Taro · React + TypeScript | `UPCollapse` | `src/ultra-ui/components/up-collapse` |
| uni-app · Vue 3 | `up-collapse` | `uni_modules/uview-ultra/components/up-collapse` |
| uni-app-x · UTS / UVUE | `up-collapse` | `uni_modules/uview-ultra/components/up-collapse` |

