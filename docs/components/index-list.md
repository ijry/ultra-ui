---
title: Index list 索引列表
description: 带右侧字母索引的长列表，滚动时自动吸顶分组标题。
generated: true
---

# Index list 索引列表

带右侧字母索引的长列表，滚动时自动吸顶分组标题。

<PlatformBadges component="index-list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPIndexList
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

```typescript
import { UPIndexList, UPIndexListProps } from '@lingyun/ultra-ui-hos';

UPIndexList({ props: new UPIndexListProps({
  indexList: this.indexes,
  current: this.current,
  sticky: true,
  showSidebar: true,
  customStyle: { height: 300 },
  onSelect: (event: UPIndexListSelectEvent): void => { this.message = '选择：' + String(event.value); },
  onChange: (event: UPIndexListSelectEvent): void => { this.message = '变化：' + String(event.value); },
  onCurrentChange: (value: UPRawValue): void => { this.current = value; }
}) }) {
  this.groups()
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/IndexListDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPIndexList(
  indexList: indexListLetters,
  header: _header(),
  children: _items(),
  footer: _footer(),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/index_list2_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPIndexList } from 'ultra-ui-rn';

<UPIndexList indexList={indexList}>
  {/* header slot */}
  <View style={s.list}>
    <View style={s.listItem}>
      <UPAvatar fontSize={26} icon="man-add-fill" randomBgColor shape="square" size={35} />
      <Text style={s.listItemUserName}>新的朋友</Text>
    </View>
    <UPLine />
    <View style={s.listItem}>
      <UPAvatar fontSize={26} icon="tags-fill" randomBgColor shape="square" size={35} />
      <Text style={s.listItemUserName}>标签</Text>
    </View>
    <UPLine />
    <View style={s.listItem}>
      <UPAvatar fontSize={26} icon="chrome-circle-fill" randomBgColor shape="square" size={35} />
      <Text style={s.listItemUserName}>朋友圈</Text>
    </View>
    <UPLine />
    <View style={s.listItem}>
      <UPAvatar fontSize={26} icon="qq-fill" randomBgColor shape="square" size={35} />
      <Text style={s.listItemUserName}>QQ</Text>
    </View>
    <UPLine />
  </View>

  {indexList.map((letter, index) => (
    <UPIndexItem key={index}>
      <UPIndexAnchor text={letter} />
      <View style={s.list}>
        {itemArr[index].map((item1, index1) => (
          <View key={index1}>
            <View style={s.listItem}>
              <Image source={{ uri: item1.url }} style={s.listItemAvatar} />
              <Text style={s.listItemUserName}>{item1.name}</Text>
            </View>
            <UPLine />
          </View>
        ))}
      </View>
    </UPIndexItem>
  ))}

  {/* footer slot */}
  <View>
    <Text style={s.listFooter}>共305位好友</Text>
  </View>
</UPIndexList>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/IndexListDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

右侧字母栏点击滚动定位，锚点吸顶（sticky）

```tsx
import { UPIndexList } from '@ultra-ui'

<UPIndexList
  height='70vh'
  activeColor='#3c9cff'
  inactiveColor='#606266'
  onSelect={(letter) => setSelected(letter)}
>
  {ALPHABET.map((letter) => (
    <View key={letter}>
      <UPIndexAnchor index={letter} />
      {namesFor(letter).map((name, index) => (
        <UPIndexItem
          key={index}
          onClick={() => console.log('index-item clicked:', name)}
        >
          <View className='up-index-item__cell'>{name}</View>
        </UPIndexItem>
      ))}
    </View>
  ))}
</UPIndexList>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/index-list/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

外层包裹一个`index-list`组件，锚点通过`index-anchor`组件传入，自定义列表内容通过`index-item`嵌套使用
- nvue需要将`index-anchor`写在`index-item`的外部
- 非nvue需要将`index-anchor`嵌套在`index-item`的内部
- 可以通过`index-list`参数自定义索引字符列表
- 需要监听页面的onPageScroll事件，将当前滚动条高度传入`index-list`组件

```vue
<template>
	<up-index-list :index-list="indexList">
		<template v-for="(item, index) in itemArr">
			<!-- #ifdef APP-NVUE -->
			<up-index-anchor :text="indexList[index]"></up-index-anchor>
			<!-- #endif -->
			<up-index-item>
				<!-- #ifndef APP-NVUE -->
				<up-index-anchor :text="indexList[index]"></up-index-anchor>
				<!-- #endif -->
				<view class="list-cell" v-for="(cell, index) in item">
					{{cell}}
				</view>
			</up-index-item>
		</template>
	</up-index-list>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const indexList = ref(["A", "B", "C"]);  
const itemArr = ref([  
  ['列表A1', '列表A2', '列表A3'],  
  ['列表B1', '列表B2', '列表B3'],  
  ['列表C1', '列表C2', '列表C3']  
]);  
</script>
```

```vue
<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/indexList.md`</small>

</template>

<template #uniappx>

#### 基本使用

外层包裹一个`index-list`组件，锚点通过`index-anchor`组件传入，自定义列表内容通过`index-item`嵌套使用
- nvue需要将`index-anchor`写在`index-item`的外部
- 非nvue需要将`index-anchor`嵌套在`index-item`的内部
- 可以通过`index-list`参数自定义索引字符列表
- 需要监听页面的onPageScroll事件，将当前滚动条高度传入`index-list`组件

```vue
<template>
	<up-index-list :index-list="indexList">
		<template v-for="(item, index) in itemArr">
			<!-- #ifdef APP-NVUE -->
			<up-index-anchor :text="indexList[index]"></up-index-anchor>
			<!-- #endif -->
			<up-index-item>
				<!-- #ifndef APP-NVUE -->
				<up-index-anchor :text="indexList[index]"></up-index-anchor>
				<!-- #endif -->
				<view class="list-cell" v-for="(cell, index) in item">
					{{cell}}
				</view>
			</up-index-item>
		</template>
	</up-index-list>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const indexList = ref(["A", "B", "C"]);  
const itemArr = ref([  
  ['列表A1', '列表A2', '列表A3'],  
  ['列表B1', '列表B2', '列表B3'],  
  ['列表C1', '列表C2', '列表C3']  
]);  
</script>
```

```vue
<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/indexList.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-index-list>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `inactiveColor` | 右边锚点非激活的颜色 | `String` | `—` |
| `activeColor` | 右边锚点激活的颜色 | `String` | `—` |
| `indexList` | 索引字符列表，数组形式 | `Array` | `—` |
| `sticky` | 是否开启锚点自动吸顶 | `Boolean` | `—` |
| `customNavHeight` | 自定义导航栏的高度 | `String / Number` | `—` |
| `safeBottomFix` | 是否开启底部安全距离适配 | `Boolean` | `—` |
| `itemMargin` | 自定义下边距 | `String` | `—` |

#### 事件

| 事件名 |
| --- |
| `select` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `footer` |
| `header` |

### `<up-index-anchor>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 列表锚点文本内容 | `String / Number` | `—` |
| `color` | 列表锚点文字颜色 | `String` | `—` |
| `size` | 列表锚点文字大小，单位默认px | `String / Number` | `—` |
| `bgColor` | 列表锚点背景颜色 | `String` | `—` |
| `height` | 列表锚点高度，单位默认px | `String / Number` | `—` |

### `<up-index-item>`

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPIndexList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPIndexList` | `ultra-ui/src/main/ets/components/UPIndexList.ets` |
| Flutter · Dart | `UPIndexList` | `packages/ultra_ui/lib/src/widgets/up_index_list.dart` |
| React Native · TypeScript | `UPIndexList` | `src/components/index-list` |
| Taro · React + TypeScript | `UPIndexList` | `src/ultra-ui/components/up-index-list` |
| uni-app · Vue 3 | `up-index-list` | `uni_modules/uview-ultra/components/up-index-list` |
| uni-app-x · UTS / UVUE | `up-index-list` | `uni_modules/uview-ultra/components/up-index-list` |

