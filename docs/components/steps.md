---
title: Steps 步骤条
description: 展示流程进度，支持横向、纵向与自定义节点。
generated: true
---

# Steps 步骤条

展示流程进度，支持横向、纵向与自定义节点。

<PlatformBadges component="steps" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSteps
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

```typescript
import { UPSteps, UPStepsProps } from '@lingyun/ultra-ui-hos';

UPSteps({ props: new UPStepsProps({ current: this.current, contentBuilder: (): void => {} }) }) {
  UPStepsItem({ props: new UPStepsItemProps({ title: '提交', desc: '资料已提交', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '审核', desc: '审核中', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '完成', error: true, onClick: (index: number): void => { this.current = index; this.message = '点击错误步骤：' + String(index); } }) })
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/StepsDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSteps(
  current: 1,
  children: _orderItems(
    firstStyle: BoxDecoration(color: tokens.pageBgColor),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/steps_page.dart`</small>

</template>

<template #reactnative>

### 基础演示

```tsx
import { UPSteps } from 'ultra-ui-rn';

<UPSteps current={current1}>
  <UPStepsItem desc="10:30" itemStyle={s.firstItem} title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
  <UPStepsItem desc="19:50" title="已签收" />
  <UPStepsItem desc="20:10" title="已拒收" />
  <UPStepsItem desc="23:20" title="已退回" />
</UPSteps>
```

### 显示点类型

```tsx
<UPSteps current={1} dot>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

### 错误状态

```tsx
<UPSteps current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" error title="仓库着火" />
  <UPStepsItem desc="11:40" title="破产清算" />
</UPSteps>
```

### 自定义图标

```tsx
<UPSteps activeIcon="checkmark" current={1} inactiveIcon="arrow-right">
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

### 自定义插槽

```tsx
<UPSteps current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" iconNode={<Text style={s.slotIcon}>运</Text>} title="运输中" />
</UPSteps>
```

### 自定义颜色

```tsx
<UPSteps activeColor="#3c9cff" current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

### 竖向展示

```tsx
<UPSteps current={1} direction="column">
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/StepsDemo.tsx`</small>

</template>

<template #taro>

### 圆点模式

dot，以圆点代替数字

```tsx
import { UPSteps } from '@ultra-ui'

<UPSteps current={1} dot activeColor='#19be6b'>
  <UPStepsItem title='待付款' />
  <UPStepsItem title='待发货' />
  <UPStepsItem title='待收货' />
  <UPStepsItem title='已完成' />
</UPSteps>
```

### 自定义图标

activeIcon / inactiveIcon

```tsx
<UPSteps current={1} activeIcon='checkmark-circle-fill' inactiveIcon='more-circle'>
  <UPStepsItem title='基础' />
  <UPStepsItem title='进阶' />
  <UPStepsItem title='高级' />
</UPSteps>
```

### 纵向 + 自定义内容

content 插槽

```tsx
<UPSteps direction='column' current={1}>
  <UPStepsItem title='阶段一' content={<View className='steps-demo__card'>自定义卡片内容 A</View>} />
  <UPStepsItem title='阶段二' content={<View className='steps-demo__card'>自定义卡片内容 B</View>} />
  <UPStepsItem title='阶段三' content={<View className='steps-demo__card'>自定义卡片内容 C</View>} />
</UPSteps>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/steps/index.tsx`</small>

</template>

<template #uniapp>

### 基础演示

```vue
<up-steps :current="current1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 显示点类型

```vue
<up-steps
    :current="1"
    dot
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 错误状态

```vue
<up-steps :current="1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        error
        title="仓库着火"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="破产清算"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 自定义图标

```vue
<up-steps
    :current="1"
    activeIcon="checkmark"
    inactiveIcon="arrow-right"
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 自定义插槽

```vue
<up-steps :current="1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
        <template v-slot:icon>
            <text class="slot-icon">运</text>
        </template>
    </up-steps-item>
</up-steps>
```

### 自定义颜色

```vue
<up-steps :current="1" activeColor="#3c9cff">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 竖向展示

```vue
<up-steps
    :current="1"
    direction="column"
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/steps/steps.uvue`</small>

</template>

<template #uniappx>

### 基础演示

```vue
<up-steps :current="current1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 显示点类型

```vue
<up-steps
    :current="1"
    dot
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 错误状态

```vue
<up-steps :current="1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        error
        title="仓库着火"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="破产清算"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 自定义图标

```vue
<up-steps
    :current="1"
    activeIcon="checkmark"
    inactiveIcon="arrow-right"
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 自定义插槽

```vue
<up-steps :current="1">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
        <template v-slot:icon>
            <text class="slot-icon">运</text>
        </template>
    </up-steps-item>
</up-steps>
```

### 自定义颜色

```vue
<up-steps :current="1" activeColor="#3c9cff">
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

### 竖向展示

```vue
<up-steps
    :current="1"
    direction="column"
>
    <up-steps-item
        title="已下单"
        desc="10:30"
    >
    </up-steps-item>
    <up-steps-item
        title="已出库"
        desc="10:35"
    >
    </up-steps-item>
    <up-steps-item
        title="运输中"
        desc="11:40"
    >
    </up-steps-item>
</up-steps>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/steps/steps.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-steps>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` | 排列方向 | `String` | `'row'` |
| `current` | 设置第几个步骤 | `String / Number` | `0` |
| `activeColor` | 激活状态颜色 | `String` | `'#3c9cff'` |
| `inactiveColor` | 未激活状态颜色 | `String` | `'#969799'` |
| `activeIcon` | 激活状态的图标 | `String` | `''` |
| `inactiveIcon` | 未激活状态图标 | `String` | `''` |
| `dot` | 是否显示点类型 | `Boolean` | `false` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-steps-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题 | `String / Number` | `''` |
| `desc` | 描述文本 | `String / Number` | `''` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `error` | 当前步骤是否处于失败状态 | `Boolean` | `false` |
| `itemStyle` | 自定义样式 | `Object` | `—` |

#### 插槽

| 插槽名 |
| --- |
| `content` |
| `desc` |
| `icon` |
| `title` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSteps` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSteps` | `ultra-ui/src/main/ets/components/UPSteps.ets` |
| Flutter · Dart | `UPSteps` | `packages/ultra_ui/lib/src/widgets/up_steps.dart` |
| React Native · TypeScript | `UPSteps` | `src/components/steps` |
| Taro · React + TypeScript | `UPSteps` | `src/ultra-ui/components/up-steps` |
| uni-app · Vue 3 | `up-steps` | `uni_modules/uview-ultra/components/up-steps` |
| uni-app-x · UTS / UVUE | `up-steps` | `uni_modules/uview-ultra/components/up-steps` |

