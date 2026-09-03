---
title: Read more 展开阅读更多
description: 超出指定高度时折叠内容并给出展开按钮。
generated: true
---

# Read more 展开阅读更多

超出指定高度时折叠内容并给出展开按钮。

<PlatformBadges component="read-more" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPReadMore
import net.lingyun.ultraui.android.components.UPReadMoreProps

DemoSection("展开阅读") { UPReadMore(UPReadMoreProps(showHeight = 48)) { BasicText("这是一段较长的内容，用于展示展开阅读组件在原生页面中的截断与展开行为。") }
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPReadMore(
  key: _readMoreKey,
  showHeight: 200,
  toggle: true,
  onOpen: (_) => setState(() => _openCount += 1),
  onClose: (_) => setState(() => _closeCount += 1),
  child: UPParse(
    content: _content,
    tagStyle: const <String, String>{
      'p': 'color: #606266; line-height: 24px;',
    },
    onLoad: _initReadMore,
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/read_more_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPReadMore } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 基础用法

内容超出 400px 时显示「展开阅读全文」

```tsx
import { UPReadMore } from '@ultra-ui'

<UPReadMore
  closeText='展开阅读全文'
  openText='收起'
  onOpen={(name) => console.log('read-more open', name)}
  onClose={(name) => console.log('read-more close', name)}
>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

#### 保留切换按钮

toggle 为 true，展开后仍可收起

```tsx
<UPReadMore toggle closeText='展开阅读全文' openText='收起' showHeight={120}>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

#### 自定义文案

closeText / openText / color

```tsx
<UPReadMore
  toggle
  closeText='查看更多'
  openText='收起详情'
  color='#3c9cff'
  showHeight={120}
>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

#### 短内容

未超过 showHeight 时不显示按钮

```tsx
<UPReadMore>
  <Text className='read-more-demo__text'>
    这是一段很短的内容，远小于 400px，因此不会显示展开按钮。
  </Text>
</UPReadMore>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/read-more/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过slot传入正文内容

```vue
<template>
	<up-read-more>
		<rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
</script>
```

#### 兼容性

由于一些微信小程序平台的渲染能力的问题，在解析up-parse组件内容时会比较耗时，导致`read-more`组件内部无法准确得知
内容的高度，而出现计算错误，这种情况下，我们需要借助`up-parse`组件的`@load`(内容多为文字时)或者`@ready`(内容多为图片时，可能会有较大延时)事件，通过`ref`
重新初始化`read-more`组件的高度，如下：

```vue
<template>
	<up-read-more ref="uReadMoreRef">
		<up-parse :content="content" @load="load"></up-parse>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
  
// 创建组件引用  
const uReadMoreRef = ref(null);  
  
// 定义方法  
function load() {  
    if (uReadMoreRef.value) {  
        uReadMoreRef.value.init();  
    }  
}  
  
// 如果需要在组件挂载后调用 load 方法，可以使用 onMounted 钩子  
onMounted(() => {  
    load();  
});  
</script>
```

#### 展开收起

配置`toggle`为`true`，展开后可以收起，否则展开后没有收起的按钮

```vue
<up-read-more :toggle="true">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### 配置展开高度

可以配置一个高度，单位rpx，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮

```vue
<up-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### 异步初始化

有时候需要展示的内容是从后端获取的，组件内部的`mounted`生命周期初始化时，请求尚未回来，会导致
内容的高度在初始化有误差。可以在请求完毕渲染后(指的是this.$nextTick)，通过`ref`调用组件的`init`方法，重新初始化

```vue
<template>
	<up-read-more ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const content = ref('');  
  
// 创建组件引用  
const uReadMoreRef = ref(null);  
  
// 模拟后端请求  
async function fetchData() {  
  return new Promise((resolve) => {  
    setTimeout(() => {  
      resolve(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
      苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
      无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
    }, 2000);  
  });  
}  
  
// 在组件挂载后调用  
onMounted(async () => {  
  const text = await fetchData();  
  content.value = text;  
    
  // 等待 DOM 更新  
  await nextTick();  
    
  // 调用子组件的 init 方法  
  if (uReadMoreRef.value) {  
    uReadMoreRef.value.init();  
  }  
});  
</script>
```

#### 自定义样式

此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整`shadowStyle`对象，此对象内部如下：

```json
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // nvue上不支持设置复杂的backgroundImage属性
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```

如果您不想要阴影，将`backgroundImage`设置为`none`即可，关于`paddingTop`和`marginTop`自行调整至合适数值即可。

```vue
<template>
	<up-read-more ref="uReadMore" :shadowStyle="shadowStyle" :showHeight="200">
		<rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const state = reactive({  
  content: '',  
  shadowStyle: {  
    backgroundImage: "none",  
    paddingTop: "0",  
    marginTop: "20rpx"  
  }  
});  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/readMore.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过slot传入正文内容

```vue
<template>
	<up-read-more>
		<rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
</script>
```

#### 兼容性

由于一些微信小程序平台的渲染能力的问题，在解析up-parse组件内容时会比较耗时，导致`read-more`组件内部无法准确得知
内容的高度，而出现计算错误，这种情况下，我们需要借助`up-parse`组件的`@load`(内容多为文字时)或者`@ready`(内容多为图片时，可能会有较大延时)事件，通过`ref`
重新初始化`read-more`组件的高度，如下：

```vue
<template>
	<up-read-more ref="uReadMoreRef">
		<up-parse :content="content" @load="load"></up-parse>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
  
// 创建组件引用  
const uReadMoreRef = ref(null);  
  
// 定义方法  
function load() {  
    if (uReadMoreRef.value) {  
        uReadMoreRef.value.init();  
    }  
}  
  
// 如果需要在组件挂载后调用 load 方法，可以使用 onMounted 钩子  
onMounted(() => {  
    load();  
});  
</script>
```

#### 展开收起

配置`toggle`为`true`，展开后可以收起，否则展开后没有收起的按钮

```vue
<up-read-more :toggle="true">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### 配置展开高度

可以配置一个高度，单位rpx，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮

```vue
<up-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### 异步初始化

有时候需要展示的内容是从后端获取的，组件内部的`mounted`生命周期初始化时，请求尚未回来，会导致
内容的高度在初始化有误差。可以在请求完毕渲染后(指的是this.$nextTick)，通过`ref`调用组件的`init`方法，重新初始化

```vue
<template>
	<up-read-more ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 创建响应式数据  
const content = ref('');  
  
// 创建组件引用  
const uReadMoreRef = ref(null);  
  
// 模拟后端请求  
async function fetchData() {  
  return new Promise((resolve) => {  
    setTimeout(() => {  
      resolve(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
      苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
      无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
    }, 2000);  
  });  
}  
  
// 在组件挂载后调用  
onMounted(async () => {  
  const text = await fetchData();  
  content.value = text;  
    
  // 等待 DOM 更新  
  await nextTick();  
    
  // 调用子组件的 init 方法  
  if (uReadMoreRef.value) {  
    uReadMoreRef.value.init();  
  }  
});  
</script>
```

#### 自定义样式

此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整`shadowStyle`对象，此对象内部如下：

```json
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // nvue上不支持设置复杂的backgroundImage属性
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```

如果您不想要阴影，将`backgroundImage`设置为`none`即可，关于`paddingTop`和`marginTop`自行调整至合适数值即可。

```vue
<template>
	<up-read-more ref="uReadMore" :shadowStyle="shadowStyle" :showHeight="200">
		<rich-text :nodes="content"></rich-text>
	</up-read-more>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const state = reactive({  
  content: '',  
  shadowStyle: {  
    backgroundImage: "none",  
    paddingTop: "0",  
    marginTop: "20rpx"  
  }  
});  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/readMore.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `showHeight` | 默认的显示占位高度 | `String / Number` | `400` |
| `toggle` | 展开后是否显示"收起"按钮 | `Boolean` | `false` |
| `closeText` | 关闭时的提示文字 | `String` | `t("up.readMore.expand")` |
| `openText` | 展开时的提示文字 | `String` | `t("up.readMore.fold")` |
| `color` | 提示的文字颜色 | `String` | `'#2979ff'` |
| `fontSize` | 提示文字的大小 | `String / Number` | `14` |
| `shadowStyle` | 是否显示阴影 此参数不能写在props/readMore.js中进行默认配置，因为使用了条件编译，在外部js中 uni无法准确识别当前是否处于nvue还是非nvue下 | `Object` | `—` |
| `textIndent` | 段落首行缩进的字符个数 | `String` | `'2em'` |
| `name` | open和close事件时，将此参数返回在回调参数中 | `String / Number` | `''` |

### 事件

| 事件名 |
| --- |
| `close` |
| `open` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `toggle` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPReadMore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPReadMore` | `packages/ultra_ui/lib/src/widgets/up_read_more.dart` |
| React Native · TypeScript | `UPReadMore` | `src/components/read-more` |
| Taro · React + TypeScript | `UPReadMore` | `src/ultra-ui/components/up-read-more` |
| uni-app · Vue 3 | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |
| uni-app-x · UTS / UVUE | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |

