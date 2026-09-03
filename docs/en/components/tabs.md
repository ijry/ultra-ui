---
title: Tabs
description: Horizontal tabs with scrolling, badges and a customisable indicator.
generated: true
---

# Tabs

Horizontal tabs with scrolling, badges and a customisable indicator.

<PlatformBadges component="tabs" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTabs
import net.lingyun.ultraui.android.components.UPTabsProps

DemoSection("标签页") { UPTabs(UPTabsProps(list = listOf("全部", "待支付", "已完成"), current = tab), onChange = { tab = it })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTabs, UPTabsProps } from '@lingyun/ultra-ui-hos';

UPTabs({ props: new UPTabsProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onClick: (event: UPTabsClickEvent): void => { this.message = '点击：' + String(event.item.name); }, onChange: (event: UPTabsClickEvent): void => { this.change(event); }, onLongPress: (event: UPTabsClickEvent): void => { this.message = '长按：' + String(event.item.name); } }) })
```

```typescript
UPTabs({ props: new UPTabsProps({ list: this.list.slice(0, 3), current: 1, scrollable: false, shapeMode: 'capsule', lineColor: '#67c23a' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TabsDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/tabs_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/TabsDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/tabs/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/tabs.md`</small>

</template>

<template #uniappx>

#### 基本使用

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/tabs.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-tabs>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |

### `<up-tabs-item>`

#### Slots

| Slot |
| --- |
| `default` |

### `<up-tabs-pro>`

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |
| `tab` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTabs` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTabs` | `ultra-ui/src/main/ets/components/UPTabs.ets` |
| Flutter · Dart | `UPTabs` | `packages/ultra_ui/lib/src/widgets/up_tabs.dart` |
| React Native · TypeScript | `UPTabs` | `src/components/tabs` |
| Taro · React + TypeScript | `UPTabs` | `src/ultra-ui/components/up-tabs` |
| uni-app · Vue 3 | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |
| uni-app-x · UTS / UVUE | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |

