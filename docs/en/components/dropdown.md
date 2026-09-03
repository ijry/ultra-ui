---
title: Dropdown
description: A filter menu dropping from a nav area, for sorting and filtering lists.
generated: true
---

# Dropdown

A filter menu dropping from a nav area, for sorting and filtering lists.

<PlatformBadges component="dropdown" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

### 下拉菜单

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPDropdown, UPDropdownProps } from '@lingyun/ultra-ui-hos';

UPDropdown({ props: new UPDropdownProps({ openIndex: this.openIndex, onOpenChange: (index: number): void => { this.openIndex = index; } }) }) {
  UPDropdownItem({ props: new UPDropdownItemProps({ title: '状态：' + this.selected, options: this.options, value: this.selected === '已完成' ? 'done' : 'all', onValueChange: (value): void => { this.selected = String(value) === 'done' ? '已完成' : '全部'; } }) })
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/DropdownDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/dropdown_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDropdown } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPDropdown } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/dropdown/dropdown.uvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/dropdown/dropdown.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-dropdown>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `close` |
| `open` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-dropdown-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | 当前选中项的value值 | `Number / String / Array` | `—` |
| `value` | 当前选中项的value值 | `Number / String / Array` | `—` |
| `title` | 菜单项标题 | `String / Number` | `—` |
| `options` | 选项数据，如果传入了默认slot，此参数无效 | `Array` | `—` |
| `disabled` | 是否禁用此菜单项 | `Boolean` | `—` |
| `height` | 下拉弹窗的高度 | `Number / String` | `—` |
| `closeOnClickOverlay` | 点击遮罩是否可以收起弹窗 | `Boolean` | `—` |

#### Events

| Event |
| --- |
| `change` |
| `input` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPDropdown` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDropdown.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPDropdown` | `ultra-ui/src/main/ets/components/UPDropdown.ets` |
| Flutter · Dart | `UPDropdown` | `packages/ultra_ui/lib/src/widgets/up_dropdown.dart` |
| React Native · TypeScript | `UPDropdown` | `src/components/dropdown` |
| Taro · React + TypeScript | `UPDropdown` | `src/ultra-ui/components/up-dropdown` |
| uni-app · Vue 3 | `up-dropdown` | `uni_modules/uview-ultra/components/up-dropdown` |
| uni-app-x · UTS / UVUE | `up-dropdown` | `uni_modules/uview-ultra/components/up-dropdown` |

