---
title: Action sheet 操作菜单
description: 从底部弹起的操作列表，支持标题、描述与危险操作样式。
generated: true
---

# Action sheet 操作菜单

从底部弹起的操作列表，支持标题、描述与危险操作样式。

<PlatformBadges component="action-sheet" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

### 操作菜单

```kotlin
import net.lingyun.ultraui.android.components.UPActionSheet
import net.lingyun.ultraui.android.components.UPActionSheetProps

UPActionSheet(
    props = UPActionSheetProps(
        show = actionSheetVisible,
        title = "选择操作",
        actions = listOf(
            mapOf("name" to "拍照"),
            mapOf("name" to "从相册选择"),
        ),
        cancelText = "取消",
    ),
    onUpdateShow = {
        actionSheetVisible = it
        eventText = "操作菜单：${if (it) "打开" else "关闭"}"
    },
    onSelect = { eventText = "操作菜单：选择 ${it.toString()}" },
    onCancel = { eventText = "操作菜单：取消" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPActionSheet, UPActionSheetProps } from '@lingyun/ultra-ui-hos';

UPActionSheet({ props: new UPActionSheetProps({
  show: this.show, title: '本地操作', description: '禁用项和加载项不会触发选择', actions: this.actions, round: 12,
  onShowChange: (show: boolean): void => { this.show = show; },
  onSelect: (event: UPActionSheetSelectEvent): void => { this.message = '已选择第 ' + String(event.index + 1) + ' 项'; },
  onCancel: (): void => { this.message = '已取消'; }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ActionSheetDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPActionSheet(
  show: true,
  actions: preset == 0
      ? _normalActions
      : preset == 1
          ? _statusActions
          : preset == 4
              ? const <Map<String, dynamic>>[]
              : _standardActions,
  closeOnClickOverlay: preset != 0,
  cancelText: preset == 2 ? '取消' : '',
  description: preset == 3 ? '这是一段描述文本,字号偏小,颜色偏淡' : '',
  title: preset == 4 ? '标题位置' : '',
  round: preset == 4 ? 10 : 0,
  onClose: _close,
  onUpdateShow: (show) {
    if (!show) _close();
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/action_sheet_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPActionSheet } from 'ultra-ui-rn';

<UPActionSheet
  actions={actions0}
  closeOnClickOverlay={false}
  onClose={close}
  onSelect={select}
  show={active === 0}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/ActionSheetDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPActionSheet } from '@ultra-ui'

<UPActionSheet
  show={current === 'base'}
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/action-sheet/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-action-sheet
    :show="show0"
    @close="close"
    @select="select"
    :actions="actions0"
    :closeOnClickOverlay="false"
>
</up-action-sheet>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/actionSheet/actionSheet.uvue`</small>

</template>

<template #uniappx>

```vue
<up-action-sheet
    :show="show0"
    @close="close"
    @select="select"
    :actions="actions0"
    :closeOnClickOverlay="false"
>
</up-action-sheet>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/actionSheet/actionSheet.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-action-sheet>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 操作菜单是否展示 （默认false） | `Boolean` | `false` |
| `title` | 标题 | `String` | `''` |
| `description` | 选项上方的描述信息 | `String` | `''` |
| `actions` | 数据 | `Array` | `[]` |
| `cancelText` | 取消按钮的文字，不为空时显示按钮 | `String` | `''` |
| `closeOnClickAction` | 点击某个菜单项时是否关闭弹窗 | `Boolean` | `true` |
| `safeAreaInsetBottom` | 处理底部安全区（默认true） | `Boolean` | `true` |
| `openType` | 小程序的打开方式 | `String` | `''` |
| `closeOnClickOverlay` | 点击遮罩是否允许关闭 (默认true) | `Boolean` | `true` |
| `round` | 圆角值 | `Boolean / String / Number` | `0` |
| `wrapMaxHeight` | 选项区域最大高度 | `String` | `'600px'` |

#### 事件

| 事件名 |
| --- |
| `close` |
| `closed` |
| `contact` |
| `error` |
| `getphonenumber` |
| `getuserinfo` |
| `launchapp` |
| `opensetting` |
| `select` |
| `update:show` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-action-sheet-data>`

#### 插槽

| 插槽名 |
| --- |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPActionSheet` | `UltraUI/Sources/UltraUI/Components/UPActionSheet.swift` |
| Android · Jetpack Compose | `UPActionSheet` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPActionSheet.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPActionSheet` | `ultra-ui/src/main/ets/components/UPActionSheet.ets` |
| Flutter · Dart | `UPActionSheet` | `packages/ultra_ui/lib/src/widgets/up_action_sheet.dart` |
| React Native · TypeScript | `UPActionSheet` | `src/components/action-sheet` |
| Taro · React + TypeScript | `UPActionSheet` | `src/ultra-ui/components/up-action-sheet` |
| uni-app · Vue 3 | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |
| uni-app-x · UTS / UVUE | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |

