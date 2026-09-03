---
title: Keyboard 键盘
description: 自定义键盘，提供数字、身份证与车牌号三种布局。
generated: true
---

# Keyboard 键盘

自定义键盘，提供数字、身份证与车牌号三种布局。

<PlatformBadges component="keyboard" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPKeyboard(
  mode: _mode,
  dotDisabled: _dotDisabled,
  random: _random,
  show: true,
  onClose: _closeKeyboard,
  onCancel: _closeKeyboard,
  onConfirm: _closeKeyboard,
  onUpdateShow: (show) {
    if (!show) _closeKeyboard();
  },
  onChange: _appendInput,
  onBackspace: _backspace,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/keyboard_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPKeyboard } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 打乱顺序

random 打乱字母排列

```tsx
import { UPKeyboard } from '@ultra-ui'

<UPKeyboard mode='letter' random onChange={append} onBackspace={backspace} />
```

#### 安全区

safe 显示底部安全区占位

```tsx
<UPKeyboard mode='letter' safe onChange={append} onBackspace={backspace} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/keyboard/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`mode`参数定义键盘的类型，`show`绑定一个值为布尔值的变量控制键盘的弹出与收起：
- mode = car  (默认值)为汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"
- mode = number为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"
- mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"

```vue
<template>
	<view>
		<up-keyboard ref="uKeyboard" mode="car" :show="show"></up-keyboard>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
```

#### 隐藏键盘"."符号

- 通过`dotDisabled`参数配置是否显示键盘"."符号，默认为`false`，只在"mode = number"时生效

```vue
<up-keyboard mode="number" :dotDisabled="true"></up-keyboard>
```

#### 是否打乱按键的顺序

如果配置`random`参数为`true`的话，**每次**打开键盘，按键的顺序都是随机的，该功能默认是关闭的

```vue
<up-keyboard ref="uKeyboard" mode="number" :random="true" :show="show"></up-keyboard>
```

#### 如何控制键盘的打开和关闭？

```vue
<template>
	<up-keyboard mode="number" :show="show"></up-keyboard>
</template>

<script setup>
import { ref } from 'vue';
import { onReady, onLoad } from '@dcloud/uniapp';

const show = ref(false);

onReady(() => {
  // 如果想一进入页面就打开键盘，请在此生命周期调用
  show.value = true;
});

onLoad(() => {
  // 不应在此调用，因为此时up-keyboard组件尚未创建完成
  // show.value = true;
});
</script>
```

#### 如何监听键盘按键被点击？

- 输入值是通过组件的`change`事件实现的，组件内部每个按键被点击的时候，组件就会发出一个`change`事件，回调参数为点击的按键的值。  
- 通过`backspace`事件监听键盘退格键的点击，通过修改父组件的值实现退格的效果，见下方示例

注意：点击退格键(也即删除键)不会触发`change`事件

```vue
<template>
	<up-keyboard mode="number" @change="valChange" @backspace="backspace" :show="show"></up-keyboard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(''); // 输入框的值
const show = ref(false); // 是否显示键盘

const valChange = (val) => {
  // 将每次按键的值拼接到value变量中，注意+=写法
  value.value += val;
  console.log(value.value);
};

const backspace = () => {
  // 删除value的最后一个字符
  if (value.value.length) {
    value.value = value.value.substr(0, value.value.length - 1);
  }
  console.log(value.value);
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/keyboard.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`mode`参数定义键盘的类型，`show`绑定一个值为布尔值的变量控制键盘的弹出与收起：
- mode = car  (默认值)为汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"
- mode = number为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"
- mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"

```vue
<template>
	<view>
		<up-keyboard ref="uKeyboard" mode="car" :show="show"></up-keyboard>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
```

#### 隐藏键盘"."符号

- 通过`dotDisabled`参数配置是否显示键盘"."符号，默认为`false`，只在"mode = number"时生效

```vue
<up-keyboard mode="number" :dotDisabled="true"></up-keyboard>
```

#### 是否打乱按键的顺序

如果配置`random`参数为`true`的话，**每次**打开键盘，按键的顺序都是随机的，该功能默认是关闭的

```vue
<up-keyboard ref="uKeyboard" mode="number" :random="true" :show="show"></up-keyboard>
```

#### 如何控制键盘的打开和关闭？

```vue
<template>
	<up-keyboard mode="number" :show="show"></up-keyboard>
</template>

<script setup>
import { ref } from 'vue';
import { onReady, onLoad } from '@dcloud/uniapp';

const show = ref(false);

onReady(() => {
  // 如果想一进入页面就打开键盘，请在此生命周期调用
  show.value = true;
});

onLoad(() => {
  // 不应在此调用，因为此时up-keyboard组件尚未创建完成
  // show.value = true;
});
</script>
```

#### 如何监听键盘按键被点击？

- 输入值是通过组件的`change`事件实现的，组件内部每个按键被点击的时候，组件就会发出一个`change`事件，回调参数为点击的按键的值。  
- 通过`backspace`事件监听键盘退格键的点击，通过修改父组件的值实现退格的效果，见下方示例

注意：点击退格键(也即删除键)不会触发`change`事件

```vue
<template>
	<up-keyboard mode="number" @change="valChange" @backspace="backspace" :show="show"></up-keyboard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(''); // 输入框的值
const show = ref(false); // 是否显示键盘

const valChange = (val) => {
  // 将每次按键的值拼接到value变量中，注意+=写法
  value.value += val;
  console.log(value.value);
};

const backspace = () => {
  // 删除value的最后一个字符
  if (value.value.length) {
    value.value = value.value.substr(0, value.value.length - 1);
  }
  console.log(value.value);
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/keyboard.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-keyboard>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘 | `String` | `'number'` |
| `dotDisabled` | 是否显示键盘的"."符号 | `Boolean` | `false` |
| `tooltip` | 是否显示顶部工具条 | `Boolean` | `true` |
| `showTips` | 是否显示工具条中间的提示 | `Boolean` | `true` |
| `tips` | 工具条中间的提示文字 | `String` | `''` |
| `showCancel` | 是否显示工具条左边的"取消"按钮 | `Boolean` | `true` |
| `showConfirm` | 是否显示工具条右边的"完成"按钮 | `Boolean` | `true` |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |
| `safeAreaInsetBottom` | 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距 | `Boolean` | `true` |
| `closeOnClickOverlay` | 是否允许通过点击遮罩关闭键盘 | `Boolean` | `true` |
| `show` | 控制键盘的弹出与收起 | `Boolean` | `false` |
| `overlay` | 是否显示遮罩，某些时候数字键盘时，用户希望看到自己的数值，所以可能不想要遮罩 | `Boolean` | `true` |
| `zIndex` | z-index值 | `String / Number` | `10075` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确定'` |
| `autoChange` | 输入一个中文后，是否自动切换到英文 | `Boolean` | `false` |

#### 事件

| 事件名 |
| --- |
| `backspace` |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-car-keyboard>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |
| `autoChange` | 输入一个中文后，是否自动切换到英文 | `Boolean` | `—` |

#### 事件

| 事件名 |
| --- |
| `backspace` |
| `change` |

### `<up-number-keyboard>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 键盘的类型，number-数字键盘，card-身份证键盘 | `String` | `'number'` |
| `dotDisabled` | 是否显示键盘的"."符号 | `Boolean` | `false` |
| `random` | 是否打乱键盘按键的顺序 | `Boolean` | `false` |

#### 事件

| 事件名 |
| --- |
| `backspace` |
| `change` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPKeyboard` | `packages/ultra_ui/lib/src/widgets/up_keyboard.dart` |
| React Native · TypeScript | `UPKeyboard` | `src/components/keyboard` |
| Taro · React + TypeScript | `UPKeyboard` | `src/ultra-ui/components/up-keyboard` |
| uni-app · Vue 3 | `up-keyboard` | `uni_modules/uview-ultra/components/up-keyboard` |
| uni-app-x · UTS / UVUE | `up-keyboard` | `uni_modules/uview-ultra/components/up-keyboard` |

