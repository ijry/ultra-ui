---
title: Count down 倒计时
description: 毫秒级倒计时，支持自定义时间格式与插槽渲染。
generated: true
---

# Count down 倒计时

毫秒级倒计时，支持自定义时间格式与插槽渲染。

<PlatformBadges component="count-down" show-missing />

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

```kotlin
import net.lingyun.ultraui.android.components.UPCountDown
import net.lingyun.ultraui.android.components.UPCountDownProps

DemoSection("倒计时") { UPCountDown(UPCountDownProps(time = 61000, autoStart = false))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCountDown(
  time: _longTime,
  format: 'HH:mm:ss',
  autoStart: true,
  millisecond: true,
  onFinish: _finish,
)
```

### 自定义格式

```dart
UPCountDown(
  time: _longTime,
  format: 'DD:HH:mm:ss',
  autoStart: true,
  millisecond: true,
  onChange: _setFormatData,
)
```

### 毫秒级渲染

```dart
const UPCountDown(
  time: _longTime,
  format: 'HH:mm:ss:SSS',
  autoStart: true,
  millisecond: true,
)
```

### 自定义样式

```dart
UPCountDown(
  time: _longTime,
  format: 'HH:mm:ss',
  autoStart: true,
  millisecond: true,
  onChange: _setStyleData,
)
```

### 手动控制

```dart
UPCountDown(
  key: _manualKey,
  time: 3 * 1000,
  format: 'ss:SSS',
  autoStart: false,
  millisecond: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/count_down_page.dart`</small>

</template>

<template #reactnative>

### 自定义格式

```tsx
import { UPCountDown } from 'ultra-ui-rn';

<UPCountDown autoStart format="DD:HH:mm:ss" millisecond time={TIME}>
  {(timeData) => (
    <View style={s.time}>
      <Text style={s.timeItem}>{timeData.days}&nbsp;天</Text>
      <Text style={s.timeItem}>
        {timeData.hours > 10 ? timeData.hours : `0${timeData.hours}`}&nbsp;时
      </Text>
      <Text style={s.timeItem}>{timeData.minutes}&nbsp;分</Text>
      <Text style={s.timeItem}>{timeData.seconds}&nbsp;秒</Text>
    </View>
  )}
</UPCountDown>
```

### 毫秒级渲染

```tsx
<UPCountDown autoStart format="HH:mm:ss:SSS" millisecond time={TIME} />
```

### 自定义样式

```tsx
<UPCountDown autoStart format="HH:mm:ss" millisecond time={TIME}>
  {(timeData) => (
    <View style={s.time}>
      <View style={s.timeCustom}>
        <Text style={s.timeCustomItem}>
          {timeData.hours > 10 ? timeData.hours : `0${timeData.hours}`}
        </Text>
      </View>
      <Text style={s.timeDoc}>:</Text>
      <View style={s.timeCustom}>
        <Text style={s.timeCustomItem}>{timeData.minutes}</Text>
      </View>
      <Text style={s.timeDoc}>:</Text>
      <View style={s.timeCustom}>
        <Text style={s.timeCustomItem}>{timeData.seconds}</Text>
      </View>
    </View>
  )}
</UPCountDown>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CountDownDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

time 设置总时长，autoStart 自动开始

```tsx
import { UPCountDown } from '@ultra-ui'

<UPCountDown time={60 * 60 * 1000} format='HH:mm:ss' />
```

### 显示毫秒

millisecond 开启毫秒级刷新

```tsx
<UPCountDown time={30 * 1000} format='ss:SSS' millisecond />
```

### 命令式控制

通过 ref 调用 start / pause / reset

```tsx
<UPCountDown ref={ref} time={10 * 1000} autoStart={false} onChange={setTimeData} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/count-down/index.tsx`</small>

</template>

<template #uniapp>

### 基础用法

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss"
    autoStart
    millisecond
    @finish="finish"
>
</up-count-down>
```

### 自定义格式

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="DD:HH:mm:ss"
    autoStart
    millisecond
    @change="onChange"
>
    <view class="time">
        <text class="time__item">{{ timeData['days'] }}&nbsp;天</text>
        <text class="time__item">{{ timeData['hours'] }}&nbsp;时</text>
        <text class="time__item">{{ timeData['minutes'] }}&nbsp;分</text>
        <text class="time__item">{{ timeData['seconds'] }}&nbsp;秒</text>
    </view>
</up-count-down>
```

### 毫秒级渲染

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss:SSS"
    autoStart
    millisecond
>
</up-count-down>
```

### 自定义样式

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss"
    autoStart
    millisecond
    @change="onChange"
>
    <view class="time">
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['hours'] }}</text>
        </view>
        <text class="time__doc">:</text>
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['minutes'] }}</text>
        </view>
        <text class="time__doc">:</text>
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['seconds'] }}</text>
        </view>
    </view>
</up-count-down>
```

### 手动控制

```vue
<up-count-down
    ref="countDownRef"
    :time="3* 1000"
    format="ss:SSS"
    :autoStart="false"
    millisecond
>
</up-count-down>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/countDown/countDown.uvue`</small>

</template>

<template #uniappx>

### 基础用法

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss"
    autoStart
    millisecond
    @finish="finish"
>
</up-count-down>
```

### 自定义格式

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="DD:HH:mm:ss"
    autoStart
    millisecond
    @change="onChange"
>
    <view class="time">
        <text class="time__item">{{ timeData['days'] }}&nbsp;天</text>
        <text class="time__item">{{ timeData['hours'] }}&nbsp;时</text>
        <text class="time__item">{{ timeData['minutes'] }}&nbsp;分</text>
        <text class="time__item">{{ timeData['seconds'] }}&nbsp;秒</text>
    </view>
</up-count-down>
```

### 毫秒级渲染

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss:SSS"
    autoStart
    millisecond
>
</up-count-down>
```

### 自定义样式

```vue
<up-count-down
    :time="30 * 60 * 60 * 1000"
    format="HH:mm:ss"
    autoStart
    millisecond
    @change="onChange"
>
    <view class="time">
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['hours'] }}</text>
        </view>
        <text class="time__doc">:</text>
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['minutes'] }}</text>
        </view>
        <text class="time__doc">:</text>
        <view class="time__custom">
            <text class="time__custom__item">{{ timeData['seconds'] }}</text>
        </view>
    </view>
</up-count-down>
```

### 手动控制

```vue
<up-count-down
    ref="countDownRef"
    :time="3* 1000"
    format="ss:SSS"
    :autoStart="false"
    millisecond
>
</up-count-down>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/countDown/countDown.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `time` | 倒计时时长，单位ms | `String / Number` | `0` |
| `format` | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | `String` | `'HH:mm:ss'` |
| `autoStart` | 是否自动开始倒计时 | `Boolean` | `true` |
| `millisecond` | 是否展示毫秒倒计时 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `change` |
| `finish` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCountDown` | `UltraUI/Sources/UltraUI/Components/UPCountDown.swift` |
| Android · Jetpack Compose | `UPCountDown` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPCountDown` | `packages/ultra_ui/lib/src/widgets/up_count_down.dart` |
| React Native · TypeScript | `UPCountDown` | `src/components/count-down` |
| Taro · React + TypeScript | `UPCountDown` | `src/ultra-ui/components/up-count-down` |
| uni-app · Vue 3 | `up-count-down` | `uni_modules/uview-ultra/components/up-count-down` |
| uni-app-x · UTS / UVUE | `up-count-down` | `uni_modules/uview-ultra/components/up-count-down` |

