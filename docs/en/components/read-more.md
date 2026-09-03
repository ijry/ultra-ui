---
title: Read more
description: Collapses content past a height threshold and offers an expand button.
generated: true
---

# Read more

Collapses content past a height threshold and offers an expand button.

<PlatformBadges component="read-more" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPReadMore
import net.lingyun.ultraui.android.components.UPReadMoreProps

DemoSection("展开阅读") { UPReadMore(UPReadMoreProps(showHeight = 48)) { BasicText("这是一段较长的内容，用于展示展开阅读组件在原生页面中的截断与展开行为。") }
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### Basic usage

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/read_more_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPReadMore } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### Basic usage

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

#### Keeping the toggle button

```tsx
<UPReadMore toggle closeText='展开阅读全文' openText='收起' showHeight={120}>
  <Text className='read-more-demo__text'>{LONG_TEXT}</Text>
</UPReadMore>
```

#### Custom wording

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

#### Short content

```tsx
<UPReadMore>
  <Text className='read-more-demo__text'>
    这是一段很短的内容，远小于 400px，因此不会显示展开按钮。
  </Text>
</UPReadMore>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/read-more/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

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

#### Compatibility

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

#### Expand and collapse

```vue
<up-read-more :toggle="true">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### Expanded height

```vue
<up-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### Asynchronous initialisation

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

#### Custom styling

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/readMore.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Compatibility

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

#### Expand and collapse

```vue
<up-read-more :toggle="true">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### Expanded height

```vue
<up-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</up-read-more>
```

#### Asynchronous initialisation

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

#### Custom styling

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/readMore.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `close` |
| `open` |

### Slots

| Slot |
| --- |
| `default` |
| `toggle` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPReadMore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPReadMore` | `packages/ultra_ui/lib/src/widgets/up_read_more.dart` |
| React Native · TypeScript | `UPReadMore` | `src/components/read-more` |
| Taro · React + TypeScript | `UPReadMore` | `src/ultra-ui/components/up-read-more` |
| uni-app · Vue 3 | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |
| uni-app-x · UTS / UVUE | `up-read-more` | `uni_modules/uview-ultra/components/up-read-more` |

