---
title: Dropdown 下拉菜单
description: 从导航区域展开的筛选菜单，常用于列表页排序与过滤。
generated: true
---

# Dropdown 下拉菜单

从导航区域展开的筛选菜单，常用于列表页排序与过滤。

<PlatformBadges component="dropdown" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPDropdown
import net.lingyun.ultraui.android.components.UPDropdownProps

UPDropdown(
    props = UPDropdownProps(),
    onOpen = { eventText = "下拉菜单：打开" },
    onClose = { eventText = "下拉菜单：关闭" },
) {
    UPDropdownItem(
        props = UPDropdownItemProps(
            title = "状态",
            options = listOf(
                mapOf("label" to "全部", "value" to "all"),
                mapOf("label" to "已完成", "value" to "done"),
            ),
            modelValue = dropdownValue,
        ),
        onUpdateModelValue = {
            dropdownValue = it
            eventText = "下拉菜单：选择 $it"
        },
    )
}
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPDropdown, UPDropdownProps } from '@lingyun/ultra-ui-hos';

UPDropdown({ props: new UPDropdownProps({ openIndex: this.openIndex, onOpenChange: (index: number): void => { this.openIndex = index; } }) }) {
  UPDropdownItem({ props: new UPDropdownItemProps({ title: '状态：' + this.selected, options: this.options, value: this.selected === '已完成' ? 'done' : 'all', onValueChange: (value): void => { this.selected = String(value) === 'done' ? '已完成' : '全部'; } }) })
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/DropdownDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPDropdown(
  key: _dropdownKey,
  activeColor: _activeColor,
  borderBottom: _borderBottom,
  closeOnClickMask: _closeOnClickMask,
  children: <UPDropdownItem>[
    UPDropdownItem(
      title: '距离',
      value: _distanceValue,
      options: _distanceOptions,
      onUpdateValue: (value) {
        setState(() => _distanceValue = value);
      },
    ),
    UPDropdownItem(
      title: '温度',
      value: _temperatureValue,
      options: _temperatureOptions,
      onUpdateValue: (value) {
        setState(() => _temperatureValue = value);
      },
    ),
    UPDropdownItem(title: '属性', child: _buildAttributeMenu()),
  ],
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/dropdown_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDropdown } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPDropdown } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

```vue
<up-dropdown :close-on-click-mask="mask" ref="uDropdownRef"
    :activeColor="activeColor" :borderBottom="borderBottom">
    <up-dropdown-item @change="change" v-model="value1" title="距离" :options="options1"></up-dropdown-item>
    <up-dropdown-item @change="change" v-model="value2" title="温度" :options="options2"></up-dropdown-item>
    <up-dropdown-item title="属性">
        <view class="slot-content">
            <view class="item-box">
                <view class="item" :class="[item.active ? 'active' : '']"
                    @tap="tagClick(index)" v-for="(item, index) in list" :key="index">
                    {{item.label}}
                </view>
            </view>
            <up-button type="primary" @click="closeDropdown">确定</up-button>
        </view>
    </up-dropdown-item>
</up-dropdown>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsB/dropdown/dropdown.nvue`</small>

</template>

<template #uniappx>

```vue
<up-dropdown :close-on-click-mask="mask" ref="upDropdownRef"
    :activeColor="activeColor" :borderBottom="borderBottom">
    <up-dropdown-item @change="change" v-model="value1" title="距离" :options="options1"></up-dropdown-item>
    <up-dropdown-item @change="change" v-model="value2" title="温度" :options="options2"></up-dropdown-item>
    <up-dropdown-item title="属性">
        <view class="slot-content">
            <view class="item-box">
                <view class="item" :class="[item['active'] as Boolean ? 'active' : '']"
                    @tap="tagClick(index)"
                    v-for="(item, index) in list" :key="index">
                    {{item['label']}}
                </view>
            </view>
            <up-button type="primary" @click="closeDropdown">确定</up-button>
        </view>
    </up-dropdown-item>
</up-dropdown>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/dropdown/dropdown.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-dropdown>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `activeColor` | 菜单标题和选项的激活态颜色 | `String` | `—` |
| `inactiveColor` | 菜单标题和选项的未激活态颜色 | `String` | `—` |
| `closeOnClickMask` | 点击遮罩是否关闭菜单 | `Boolean` | `—` |
| `closeOnClickSelf` | 点击当前激活项标题是否关闭菜单 | `Boolean` | `—` |
| `duration` | 过渡时间 | `Number / String` | `—` |
| `height` | 标题菜单的高度 | `Number / String` | `—` |
| `borderBottom` | 是否显示下边框 | `Boolean` | `—` |
| `titleSize` | 标题的字体大小 | `Number / String` | `—` |
| `borderRadius` | 下拉出来的内容部分的圆角值 | `Number / String` | `—` |
| `menuIcon` | 菜单右侧的icon图标 | `String` | `—` |
| `menuIconSize` | 菜单右侧图标的大小 | `Number / String` | `—` |

#### 事件

| 事件名 |
| --- |
| `close` |
| `open` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-dropdown-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中项的value值 | `Number / String / Array` | `—` |
| `value` | 当前选中项的value值 | `Number / String / Array` | `—` |
| `title` | 菜单项标题 | `String / Number` | `—` |
| `options` | 选项数据，如果传入了默认slot，此参数无效 | `Array` | `—` |
| `disabled` | 是否禁用此菜单项 | `Boolean` | `—` |
| `height` | 下拉弹窗的高度 | `Number / String` | `—` |
| `closeOnClickOverlay` | 点击遮罩是否可以收起弹窗 | `Boolean` | `—` |

#### 事件

| 事件名 |
| --- |
| `change` |
| `input` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPDropdown` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDropdown.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPDropdown` | `ultra-ui/src/main/ets/components/UPDropdown.ets` |
| Flutter · Dart | `UPDropdown` | `packages/ultra_ui/lib/src/widgets/up_dropdown.dart` |
| React Native · TypeScript | `UPDropdown` | `src/components/dropdown` |
| Taro · React + TypeScript | `UPDropdown` | `src/ultra-ui/components/up-dropdown` |
| uni-app · Vue 3 | `up-dropdown` | `src/uni_modules/uview-plus/components/u-dropdown` |
| uni-app-x · UTS / UVUE | `up-dropdown` | `uni_modules/uview-ultra/components/up-dropdown` |

