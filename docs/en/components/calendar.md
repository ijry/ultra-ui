---
title: Calendar
description: A calendar picker supporting single, multiple and range selection.
generated: true
---

# Calendar

A calendar picker supporting single, multiple and range selection.

<PlatformBadges component="calendar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCalendar
import net.lingyun.ultraui.android.components.UPCalendarProps

UPCalendar(UPCalendarProps(pageInline = true, defaultDate = "2026-08-20"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  defaultDate: '2026-08-11',
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  mode: 'multiple',
  defaultDate: const ['2026-08-11', '2026-08-12', '2026-08-13'],
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  mode: 'range',
  defaultDate: const ['2026-08-11'],
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  mode: 'range',
  color: '#f56c6c',
  defaultDate: const ['2026-08-11', '2026-08-15'],
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  mode: 'range',
  startText: '住店',
  endText: '离店',
  confirmDisabledText: '请选择离店日期',
  defaultDate: const ['2026-08-11'],
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  maxDate: '2026-08-21',
  defaultDate: '2026-08-11',
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  showLunar: true,
  defaultDate: '2026-08-11',
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

```dart
UPCalendar(
  key: common['key'] as Key,
  show: common['show'] as bool,
  minDate: '2026-08-01',
  maxDate: '2026-08-21',
  defaultDate: '2026-08-11',
  onConfirm: common['onConfirm'] as ValueChanged<List<DateTime>>,
  onClose: common['onClose'] as VoidCallback,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/calendar_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCalendar } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCalendar } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view>
		<up-calendar :show="show"></up-calendar>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
```

#### Month-switching mode

```vue
<up-calendar
	:show="show"
	defaultDate="2023-06-15"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

```vue
<up-calendar
	:show="show"
	mode="range"
	:defaultDate="['2023-06-15', '2023-06-20']"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

```vue
<up-calendar
	:show="show"
	mode="multiple"
	:defaultDate="['2023-06-15', '2023-07-15', '2024-06-15']"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

#### Single-row calendar

```vue
<up-calendar-strip
	v-model="date"
	:minDate="'2022-01-01'"
	:maxDate="'2026-12-31'"
></up-calendar-strip>
```

```js
const date = ref('2024-11-29')
```

```vue
<up-calendar-strip
	v-model="date"
	:minDate="'2024-01-01'"
	:maxDate="'2024-12-31'"
	:fullCalendarProps="{ showLunar: true }"
	@change="onDateChange"
	@monthChange="onMonthChange"
	@toggleFull="onToggleFull"
></up-calendar-strip>
```

```js
const date = ref('2024-11-29')

const onDateChange = (e) => {
	console.log(e.date, e.month, e.scene)
}
```

```vue
<up-calendar-strip
	v-model="date"
	:fullCalendar="false"
></up-calendar-strip>
```

#### Time selection

```vue
<up-calendar
	:show="show"
	enableTime
	timePrecision="second"
	defaultTime="09:30:00"
	@confirm="confirm"
></up-calendar>
```

#### Single date mode

```js
["2021-07-01"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('single');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Multiple date mode

```js
 ["2021-07-27", "2021-07-29", "2021-07-30"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('multiple');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Today button and highlight colour

```vue
<up-calendar
	:show="show"
	mode="range"
	todayColor="#f56c6c"
	@confirm="confirm"
></up-calendar>
```

#### Date range mode

```js
["2021-07-27", "2021-07-28", "2021-07-29", "2021-07-30", "2021-07-31"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('range');

const confirm = (e) => {
  console.log(e);
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/calendar.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
		<up-calendar :show="show"></up-calendar>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
```

#### Month-switching mode

```vue
<up-calendar
	:show="show"
	defaultDate="2023-06-15"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

```vue
<up-calendar
	:show="show"
	mode="range"
	:defaultDate="['2023-06-15', '2023-06-20']"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

```vue
<up-calendar
	:show="show"
	mode="multiple"
	:defaultDate="['2023-06-15', '2023-07-15', '2024-06-15']"
	minDate="2022-01-01"
	maxDate="2024-12-31"
	:monthNum="36"
	monthSwitch
	@confirm="confirm"
	@close="show = false"
></up-calendar>
```

#### Single date mode

```js
["2021-07-01"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('single');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Multiple date mode

```js
 ["2021-07-27", "2021-07-29", "2021-07-30"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('multiple');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Today button and highlight colour

```vue
<up-calendar
	:show="show"
	mode="range"
	todayColor="#f56c6c"
	@confirm="confirm"
></up-calendar>
```

#### Date range mode

```js
["2021-07-27", "2021-07-28", "2021-07-29", "2021-07-30", "2021-07-31"]
```

```vue
<template>
	<up-calendar :show="show" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('range');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Custom theme colour

```vue
<template>
	<up-calendar :show="show" 
    color="#f56c6c" :mode="mode" @confirm="confirm"></up-calendar>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const mode = ref('range');

const confirm = (e) => {
  console.log(e);
};
</script>
```

#### Custom wording

```vue
<template>
	<up-calendar 
        startText="住店"
        endText="离店"
        confirmDisabledText="请选择离店日期"
        :formatter="formatter"
        :show="show" 
        :mode="mode" 
        @confirm="confirm"
		ref="calendar"
	>
    </up-calendar>
</template>

<script setup>
import { ref } from 'vue';
import { onReady } from '@dcloudio/uni-app';

const show = ref(true);
const mode = ref('range');

const confirm = (e) => {
  console.log(e);
};

const formatter = (day) => {
  const d = new Date();
  let month = d.getMonth() + 1;
  const date = d.getDate();
  if (day.month == month && day.day == date + 3) {
    day.bottomInfo = '有优惠';
    day.dot = true;
  }
  return day;
};

const onReady = () => {
  // 如果需要兼容微信小程序的话，需要用此写法
  $refs.calendar.setFormatter(formatter);
};
</script>

<style lang="scss" scoped>
	.title{
		color: $up-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/calendar.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-calendar>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 日历顶部标题 | `String` | `'日期选择'` |
| `showTitle` | 是否显示标题 | `Boolean` | `true` |
| `showSubtitle` | 是否显示副标题 | `Boolean` | `true` |
| `mode` | 日期类型选择，single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围 | `String` | `'single'` |
| `startText` | mode=range时，第一个日期底部的提示文字 | `String` | `'开始'` |
| `endText` | mode=range时，最后一个日期底部的提示文字 | `String` | `'结束'` |
| `customList` | 自定义列表 | `Array` | `[]` |
| `color` | 主题色，对底部按钮和选中日期有效 | `String` | `'#3c9cff'` |
| `minDate` | 最小的可选日期 | `String / Number` | `0` |
| `maxDate` | 最大可选日期 | `String / Number` | `0` |
| `defaultDate` | 默认选中的日期，mode为multiple或range是必须为数组格式 | `Array / String / Date` | `null` |
| `maxCount` | mode=multiple时，最多可选多少个日期 | `String / Number` | `Number.MAX_SAFE_INTEGER` |
| `rowHeight` | 日期行高 | `String / Number` | `56` |
| `formatter` | 日期格式化函数 | `Function` | `null` |
| `showLunar` | 是否显示农历 | `Boolean` | `false` |
| `showMark` | 是否显示月份背景色 | `Boolean` | `true` |
| `confirmText` | 确定按钮的文字 | `String` | `'确定'` |
| `confirmDisabledText` | 确认按钮处于禁用状态时的文字 | `String` | `'确定'` |
| `show` | 是否显示日历弹窗 | `Boolean` | `false` |
| `overlay` | 是否显示遮罩 | `Boolean` | `true` |
| `duration` | 动画时长，单位ms | `String / Number` | `300` |
| `overlayStyle` | 自定义遮罩的样式 | `Object / String` | `{}` |
| `overlayOpacity` | 遮罩的透明度，0-1之间 | `Number / String` | `0.5` |
| `zIndex` | 层级 | `String / Number` | `10075` |
| `safeAreaInsetBottom` | 是否为iPhoneX留出底部安全距离 | `Boolean` | `true` |
| `safeAreaInsetTop` | 是否留出顶部安全距离（状态栏高度） | `Boolean` | `false` |
| `bgColor` | 弹窗背景色，设置为transparent可去除白色背景 | `String` | `''` |
| `closeable` | 是否显示关闭图标，未设置时普通弹层显示，pageInline 模式隐藏 | `Boolean / String` | `''` |
| `closeIconPos` | 自定义关闭图标位置 | `String` | `'top-right'` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭日历 | `Boolean` | `false` |
| `zoom` | mode=center 时是否开启缩放动画，透传给 up-popup | `Boolean` | `true` |
| `readonly` | 是否为只读状态，只读状态下禁止选择日期 | `Boolean` | `false` |
| `showConfirm` | 是否展示确认按钮 | `Boolean` | `true` |
| `maxRange` | 日期区间最多可选天数，默认无限制，mode = range时有效 | `Number / String` | `Number.MAX_SAFE_INTEGER` |
| `rangePrompt` | 范围选择超过最多可选天数时的提示文案，mode = range时有效 | `String` | `''` |
| `showRangePrompt` | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效 | `Boolean` | `true` |
| `allowSameDay` | 是否允许日期范围的起止时间为同一天，mode = range时有效 | `Boolean` | `false` |
| `rangeResultMode` | 区间模式下确认返回值格式，all-返回区间内所有日期，boundary-仅返回起止日期 | `String` | `'all'` |
| `enableTime` | 是否开启时分秒选择 | `Boolean` | `false` |
| `timePrecision` | 时间精度：hour-仅时，minute-时分，second-时分秒 | `String` | `'minute'` |
| `defaultTime` | 默认时间，格式支持 HH / HH:mm / HH:mm:ss | `String` | `''` |
| `round` | 圆角值 | `Boolean / String / Number` | `0` |
| `monthNum` | 最多展示月份数量 | `Number / String` | `3` |
| `monthSwitch` | 是否启用非滚动的单月切换模式 | `Boolean` | `false` |
| `showToday` | 是否显示今天按钮 | `Boolean` | `true` |
| `todayColor` | 今天日期的独立高亮颜色，默认跟随主题色 | `String` | `''` |
| `weekText` | 星期文案（周一到周日） | `Array` | `[ t('up.week.one'), t('up.week.two'), t('up.w…` |
| `forbidDays` | 禁用日期，格式为 YYYY-MM-DD | `Array` | `[]` |
| `forbidDaysToast` | 点击禁用日期时的提示 | `String` | `t('up.calendar.disabled')` |
| `monthFormat` | 月份标题格式，遵循 dayjs format | `String` | `''` |
| `pageInline` | 是否以内联模式渲染，主要用于 up-calendar-strip 内嵌完整月历 | `Boolean` | `false` |

#### Events

| Event |
| --- |
| `close` |
| `closed` |
| `confirm` |

#### Slots

| Slot |
| --- |
| `footer` |

### `<up-calendar-strip>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | — | `String / Number / Date / null` | `null` |
| `minDate` | — | `String / Number` | `0` |
| `maxDate` | — | `String / Number` | `0` |
| `color` | — | `String` | `'#3c9cff'` |
| `weekText` | — | `Array` | `[ t('up.week.one'), t('up.week.two'), t('up.w…` |
| `fullCalendar` | — | `Boolean` | `true` |
| `fullCalendarProps` | — | `Object` | `{}` |
| `fullMonthNum` | — | `String / Number` | `24` |
| `pullDownThreshold` | — | `String / Number` | `40` |
| `collapseAfterSelect` | — | `Boolean` | `true` |
| `readonly` | — | `Boolean` | `false` |
| `showToday` | — | `Boolean` | `true` |
| `monthFormat` | — | `String` | `''` |
| `expandHint` | — | `String` | `'下拉展开月历'` |
| `collapseHint` | — | `String` | `'上拉收起月历'` |

#### Events

| Event |
| --- |
| `change` |
| `confirm` |
| `monthChange` |
| `toggleFull` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPCalendar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCalendarComponents.kt` |
| Flutter · Dart | `UPCalendar` | `packages/ultra_ui/lib/src/widgets/up_calendar.dart` |
| React Native · TypeScript | `UPCalendar` | `src/components/calendar` |
| Taro · React + TypeScript | `UPCalendar` | `src/ultra-ui/components/up-calendar` |
| uni-app · Vue 3 | `up-calendar` | `uni_modules/uview-ultra/components/up-calendar` |
| uni-app-x · UTS / UVUE | `up-calendar` | `uni_modules/uview-ultra/components/up-calendar` |

