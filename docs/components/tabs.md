---
title: Tabs 标签选项卡
description: 横向标签页，支持滚动、徽标与自定义滑块。
generated: true
---

# Tabs 标签选项卡

横向标签页，支持滚动、徽标与自定义滑块。

<PlatformBadges component="tabs" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTabs
import net.lingyun.ultraui.android.components.UPTabsProps

DemoSection("标签页") { UPTabs(UPTabsProps(list = listOf("全部", "待支付", "已完成"), current = tab), onChange = { tab = it })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTabs, UPTabsProps } from '@lingyun/ultra-ui-hos';

UPTabs({ props: new UPTabsProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onClick: (event: UPTabsClickEvent): void => { this.message = '点击：' + String(event.item.name); }, onChange: (event: UPTabsClickEvent): void => { this.change(event); }, onLongPress: (event: UPTabsClickEvent): void => { this.message = '长按：' + String(event.item.name); } }) })
```

```typescript
UPTabs({ props: new UPTabsProps({ list: this.list.slice(0, 3), current: 1, scrollable: false, shapeMode: 'capsule', lineColor: '#67c23a' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/TabsDemo.ets`</small>

</template>

<template #flutter>

#### 基础演示

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTabs(
  key: const ValueKey('tabs-page-basic'),
  list: _baseTabs,
  current: _current,
  onChange: _selectTab,
)
```

#### 粘性布局

```dart
UPTabs(list: _baseTabs)
```

#### 显示徽标

```dart
UPTabs(list: _badgeTabs)
```

#### 禁止滚动

```dart
UPTabs(
  list: _nonScrollableTabs,
  scrollable: false,
)
```

#### 禁用菜单

```dart
UPTabs(
  key: ValueKey('tabs-page-disabled'),
  list: _disabledTabs,
)
```

#### 自定义样式

```dart
UPTabs(
  list: _baseTabs,
  lineWidth: 30,
  lineColor: '#f56c6c',
  activeStyle: <String, dynamic>{
    'color': '#303133',
    'fontWeight': 'bold',
  },
  inactiveStyle: <String, dynamic>{
    'color': '#606266',
  },
  itemStyle: <String, dynamic>{
    'height': '34px',
  },
)
```

#### 右侧自定义插槽

```dart
const UPTabs(
  list: _baseTabs,
  right: UPIcon(name: 'list', size: 21),
)
```

#### 胶囊模式

```dart
UPTabs(
  list: _shapeTabs,
  scrollable: false,
  shapeMode: 'capsule',
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/tabs_page.dart`</small>

</template>

<template #reactnative>

#### 基础演示

```tsx
import { UPTabs } from 'ultra-ui-rn';

<UPTabs current={3} list={list1} onClick={click} />
```

#### 粘性布局

```tsx
<UPTabs list={list1} />
```

#### 显示徽标

```tsx
<UPTabs list={list2} />
```

#### 禁止滚动

```tsx
<UPTabs list={list6} scrollable={false} />
```

#### 禁用菜单

```tsx
<UPTabs list={list3} />
```

#### 自定义样式

```tsx
<UPTabs
  activeStyle={ACTIVE_STYLE}
  inactiveStyle={INACTIVE_STYLE}
  itemStyle={s.itemStyle}
  lineColor="#f56c6c"
  lineWidth="30"
  list={list4}
/>
```

#### 滑块设置背景图

```tsx
<UPTabs
  activeStyle={ACTIVE_STYLE}
  inactiveStyle={INACTIVE_STYLE}
  itemStyle={s.itemStyle}
  lineHeight="7"
  lineWidth="20"
  list={list4}
/>
```

#### 胶囊模式

```tsx
<UPTabs list={listShape} scrollable={false} shapeMode="capsule" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/TabsDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

scrollable={false} 时所有标签等分容器宽度

```tsx
import { UPTabs } from '@ultra-ui'

<UPTabs
  list={FEW_LIST}
  current={few}
  scrollable={false}
  onChange={handleChange(setFew)}
/>
```

#### 横向滚动

scrollable 默认为 true，标签超出后横向滚动，选中项自动滚到中间

```tsx
<UPTabs list={MANY_LIST} current={many} onChange={handleChange(setMany)} />
```

#### 自定义读取字段

keyName='label'，从元素的 label 字段取文字

```tsx
<UPTabs
  list={KEY_NAME_LIST}
  keyName='label'
  current={keyName}
  scrollable={false}
  onChange={handleChange(setKeyName)}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/tabs/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过设置`scrollable`(默认为`true`)，配置tabs组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为`false`，5个标签以上，建议可以左右拖动。  
- tabs标签的切换，需要绑定`current`值，在`change`事件回调中可以得到`index`，将其赋值给`current`即可，也可以使用v-model:current自动双向绑定。

具体的标签，通过`list`参数配置，该参数要求为数组，元素为对象，对象要有`name`属性，见示例：

:::tip 说明
`scrollable`参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置`scrollable`为`false`，因为它默认为`true`。
:::

```vue
<template>
    <up-tabs :list="list1" @click="click"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
  
// 定义方法  
function click(item) {  
    console.log('item', item);  
}  
</script>
```

#### 粘性布局

通过加上`up-sticky`来使tabs滑动浮动在最顶部。

```vue
<template>
  <up-sticky bgColor="#fff">
    <up-tabs :list="list1"></up-tabs>
  </up-sticky>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);
</script>
```

#### 显示徽标

可以通过在列表对象中加入`badge`来设置徽标。

```vue
<template>
    <up-tabs :list="list2"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list2 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影', badge: { value: 5 } },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 禁用

可以通过在列表对象中加入`disabled = true`来设置禁用。

```vue
<template>
    <up-tabs :list="list2"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list2 = reactive([  
    { name: '关注', disabled: true },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影', badge: { value: 5 } },  
    { name: '科技', disabled: true },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 自定义样式

通过使用`activeStyle`、`inactiveStyle`、`itemStyle`来设置tabs的样式。

```vue
<template>
    <up-tabs
        :list="list4"
        lineWidth="30"
        lineColor="#f56c6c"
        :activeStyle="{
            color: '#303133',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }"
        :inactiveStyle="{
            color: '#606266',
            transform: 'scale(1)'
        }"
        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </up-tabs>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
  
const list4 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 滑块设置背景图

通过使用`lineColor`来设置滑块背景图。

```vue
<template>
    <up-tabs
    :list="list4"
    lineWidth="20"
    lineHeight="7"
    :lineColor="`url(${lineBg}) 100% 100%`"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
  
// 响应式数据  
const list4 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### Tab内容自定义插槽

```vue
<up-tabs :list="list1" keyName="name">
    <template #content="{item, keyName, index}">
        {{item[keyName]}}
    </template>
</up-tabs>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数组  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 右侧自定义插槽

```vue
<template>
    <up-tabs :list="list1">
        <template #right>
            <view
                style="padding-left: 4px;"
                @tap="$u.toast('插槽被点击')"
            >
                <up-icon
                        name="list"
                        size="21"
                        bold
                ></up-icon>
            </view>
        </template>
    </up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数组  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/tabs.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过设置`scrollable`(默认为`true`)，配置tabs组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为`false`，5个标签以上，建议可以左右拖动。  
- tabs标签的切换，需要绑定`current`值，在`change`事件回调中可以得到`index`，将其赋值给`current`即可，也可以使用v-model:current自动双向绑定。

具体的标签，通过`list`参数配置，该参数要求为数组，元素为对象，对象要有`name`属性，见示例：

:::tip 说明
`scrollable`参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置`scrollable`为`false`，因为它默认为`true`。
:::

```vue
<template>
    <up-tabs :list="list1" @click="click"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
  
// 定义方法  
function click(item) {  
    console.log('item', item);  
}  
</script>
```

#### 粘性布局

通过加上`up-sticky`来使tabs滑动浮动在最顶部。

```vue
<template>
  <up-sticky bgColor="#fff">
    <up-tabs :list="list1"></up-tabs>
  </up-sticky>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);
</script>
```

#### 显示徽标

可以通过在列表对象中加入`badge`来设置徽标。

```vue
<template>
    <up-tabs :list="list2"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list2 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影', badge: { value: 5 } },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 禁用

可以通过在列表对象中加入`disabled = true`来设置禁用。

```vue
<template>
    <up-tabs :list="list2"></up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数据  
const list2 = reactive([  
    { name: '关注', disabled: true },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影', badge: { value: 5 } },  
    { name: '科技', disabled: true },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 自定义样式

通过使用`activeStyle`、`inactiveStyle`、`itemStyle`来设置tabs的样式。

```vue
<template>
    <up-tabs
        :list="list4"
        lineWidth="30"
        lineColor="#f56c6c"
        :activeStyle="{
            color: '#303133',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }"
        :inactiveStyle="{
            color: '#606266',
            transform: 'scale(1)'
        }"
        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </up-tabs>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
  
const list4 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 滑块设置背景图

通过使用`lineColor`来设置滑块背景图。

```vue
<template>
    <up-tabs
    :list="list4"
    lineWidth="20"
    lineHeight="7"
    :lineColor="`url(${lineBg}) 100% 100%`"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
  
// 响应式数据  
const list4 = reactive([  
    { name: '关注' },  
    { name: '推荐', badge: { isDot: true } },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

#### 右侧自定义插槽

```vue
<template>
    <up-tabs :list="list1">
        <template #right>
            <view
                style="padding-left: 4px;"
                @tap="$u.toast('插槽被点击')"
            >
                <up-icon
                        name="list"
                        size="21"
                        bold
                ></up-icon>
            </view>
        </template>
    </up-tabs>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
// 创建响应式数组  
const list1 = reactive([  
    { name: '关注' },  
    { name: '推荐' },  
    { name: '电影' },  
    { name: '科技' },  
    { name: '音乐' },  
    { name: '美食' },  
    { name: '文化' },  
    { name: '财经' },  
    { name: '手工' }  
]);  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/tabs.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-tabs>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `duration` | 滑块的移动过渡时间，单位ms | `Number` | `300` |
| `list` | tabs标签数组 | `Array` | `[]` |
| `lineColor` | 滑块颜色 | `String` | `''` |
| `activeStyle` | 菜单选择中时的样式 | `String / Object` | `{ color: '#303133' }` |
| `inactiveStyle` | 菜单非选中时的样式 | `String / Object` | `{ color: '#606266' }` |
| `lineWidth` | 滑块长度 | `String / Number` | `20` |
| `lineHeight` | 滑块高度 | `String / Number` | `3` |
| `lineBgSize` | 滑块背景显示大小，当滑块背景设置为图片时使用 | `String` | `'cover'` |
| `itemStyle` | 菜单item的样式 | `String / Object` | `{ height: '44px' }` |
| `scrollable` | 菜单是否可滚动 | `Boolean` | `true` |
| `current` | 当前选中标签的索引 | `Number / String` | `0` |
| `keyName` | 默认读取的键名 | `String` | `'name'` |
| `iconStyle` | 左侧图标样式 | `String / Object` | `{}` |
| `shapeMode` | 形态模式，可选：capsule/card/pill-arrow/tag | `String` | `''` |

#### 事件

| 事件名 |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### 插槽

| 插槽名 |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |

### `<up-tabs-item>`

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-tabs-pro>`

#### 事件

| 事件名 |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### 插槽

| 插槽名 |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |
| `tab` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTabs` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTabs` | `ultra-ui/src/main/ets/components/UPTabs.ets` |
| Flutter · Dart | `UPTabs` | `packages/ultra_ui/lib/src/widgets/up_tabs.dart` |
| React Native · TypeScript | `UPTabs` | `src/components/tabs` |
| Taro · React + TypeScript | `UPTabs` | `src/ultra-ui/components/up-tabs` |
| uni-app · Vue 3 | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |
| uni-app-x · UTS / UVUE | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |

