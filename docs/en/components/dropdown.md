---
title: Dropdown
description: A filter menu dropping from a nav area, for sorting and filtering lists.
generated: true
---

# Dropdown

A filter menu dropping from a nav area, for sorting and filtering lists.

<PlatformBadges component="dropdown" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

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

#### Dropdown menu

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

<UPDropdown
  activeColor={activeColor}
  borderBottom={borderBottom}
  closeOnClickMask={mask}
  ref={dropdown}
>
  <UPDropdownItem
    onChange={change}
    onUpdateModelValue={setValue1}
    options={options1}
    title="距离"
    value={value1}
  />
  <UPDropdownItem
    onChange={change}
    onUpdateModelValue={setValue2}
    options={options2}
    title="温度"
    value={value2}
  />
  <UPDropdownItem title="属性">
    <View style={s.slotContent}>
      <View style={s.itemBox}>
        {list.map((item, index) => (
          <Pressable
            key={item.label}
            onPress={() => tagClick(index)}
            style={[s.item, item.active ? s.itemActive : null]}
          >
            <Text style={item.active ? s.itemTextActive : s.itemText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
      <UPButton onClick={() => dropdown.current?.close()} text="确定" type="primary" />
    </View>
  </UPDropdownItem>
</UPDropdown>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/DropdownDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPDropdown } from '@ultra-ui'

<UPDropdown closeOnClickMask borderBottom>
  <UPDropdownItem
    title='综合'
    options={SORT_OPTIONS}
    value={sort}
    onChange={(value) => setSort(String(value))}
  />
  <UPDropdownItem
    title='分类'
    options={[
      { label: '全部', value: 'all' },
      { label: '数码', value: 'digital' },
      { label: '服饰', value: 'clothes' },
      { label: '食品', value: 'food' },
    ]}
    value={category}
    onChange={(value) => setCategory(String(value))}
  />
  <UPDropdownItem title='筛选'>
    <View className='dropdown-demo__filter'>
      <View
        className={`dropdown-demo__chip${filterOn ? ' dropdown-demo__chip--on' : ''}`}
        hoverClass='up-hover'
        onClick={() => setFilterOn((prev) => !prev)}
      >
        {filterOn ? '仅看有货' : '仅看有货'}
      </View>
      <View className='dropdown-demo__hint'>
        当前筛选：{filterOn ? '仅看有货' : '全部商品'}
      </View>
    </View>
  </UPDropdownItem>
  <UPDropdownItem title='禁用' disabled options={SORT_OPTIONS} />
</UPDropdown>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/dropdown/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view class="">
		<up-dropdown>
			<up-dropdown-item v-model="value1" title="距离" :options="options1"></up-dropdown-item>
			<up-dropdown-item v-model="value2" title="温度" :options="options2"></up-dropdown-item>
		</up-dropdown>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const value1 = ref(1);
const value2 = ref(2);

const options1 = ref([
  {
    label: '默认排序',
    value: 1,
  },
  {
    label: '距离优先',
    value: 2,
  },
  {
    label: '价格优先',
    value: 3,
  }
]);

const options2 = ref([
  {
    label: '去冰',
    value: 1,
  },
  {
    label: '加冰',
    value: 2,
  },
]);
</script>
```

#### Default tab behaviour

```vue
<script setup>
import { ref } from 'vue';

const options = ref([
  {
    label: '蜀道难',
    value: 1
  },
  {
    label: '难以上青天',
    value: 2
  }
]);
</script>
```

#### Custom tab behaviour

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef">
			<up-dropdown-item title="属性">
				<view class="slot-content">
					<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">其他自定义内容</view>
					<up-button type="primary" @click="closeDropdown">确定</up-button>
				</view>
			</up-dropdown-item>
		</up-dropdown>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const uDropdownRef = ref(null);

const closeDropdown = () => {
  uDropdownRef.value.close();
};
</script>
```

#### Scrollable tab content

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef">
			<up-dropdown-item title="属性">
				<view class="slot-content" style="background-color: #FFFFFF;">
					<scroll-view scroll-y="true" style="height: 200rpx;">
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">无言独上西楼</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">月如钩</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">寂寞梧桐深院锁清秋</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">剪不断</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">理还乱</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">是离愁</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">别是一般滋味在心头</view>
					</scroll-view>
					<up-button type="primary" @click="closeDropdown">确定</up-button>
				</view>
			</up-dropdown-item>
		</up-dropdown>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const uDropdownRef = ref(null);

const closeDropdown = () => {
  uDropdownRef.value.close();
};
</script>
```

#### Keeping a menu item highlighted

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef" @open="open" @close="close">
			<up-dropdown-item v-model="value1" title="距离" :options="options1" @change="change"></up-dropdown-item>
			<up-dropdown-item v-model="value2" title="温度" :options="options2"></up-dropdown-item>
		</up-dropdown>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const value1 = ref(1);
const value2 = ref(2);
const uDropdownRef = ref(null);

const options1 = ref([
  {
    label: '默认排序',
    value: 1,
  },
  {
    label: '距离优先',
    value: 2,
  }
]);

const options2 = ref([
  {
    label: '去冰',
    value: 1,
  },
  {
    label: '加冰',
    value: 2,
  },
]);

const open = (index) => {
  // 展开某个下来菜单时，先关闭原来的其他菜单的高亮
  // 同时内部会自动给当前展开项进行高亮
  uDropdownRef.value.highlight();
};

const close = (index) => {
  // 关闭的时候，给当前项加上高亮
  // 当然，您也可以通过监听dropdown-item的@change事件进行处理
  uDropdownRef.value.highlight(index);
};

const change = () => {
  // 更多的细节，如有需要请自行根据业务逻辑进行处理
  // uDropdownRef.value.highlight(xxx);
};
</script>
```

#### Compatibility

```vue
<up-dropdown class="up-dropdown"></up-dropdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/dropdown.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view class="">
		<up-dropdown>
			<up-dropdown-item v-model="value1" title="距离" :options="options1"></up-dropdown-item>
			<up-dropdown-item v-model="value2" title="温度" :options="options2"></up-dropdown-item>
		</up-dropdown>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
			}
		},
	}
</script>
```

#### Default tab behaviour

```js
let options = [
	{
		label: '蜀道难',
		value: 1
	},
	{
		label: '难以上青天',
		value: 2
	}
]
```

#### Custom tab behaviour

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef">
			<up-dropdown-item title="属性">
				<view class="slot-content">
					<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">其他自定义内容</view>
					<up-button type="primary" @click="closeDropdown">确定</up-button>
				</view>
			</up-dropdown-item>
		</up-dropdown>
	</view>
</template>

<script>
	export default {
		methods: {
			closeDropdown() {
				this.$refs.uDropdownRef.close();
			}
		}
	}
</script>
```

#### Scrollable tab content

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef">
			<up-dropdown-item title="属性">
				<view class="slot-content" style="background-color: #FFFFFF;">
					<scroll-view scroll-y="true" style="height: 200rpx;">
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">无言独上西楼</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">月如钩</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">寂寞梧桐深院锁清秋</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">剪不断</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">理还乱</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">是离愁</view>
						<view class="up-text-center up-content-color up-m-t-20 up-m-b-20">别是一般滋味在心头</view>
					</scroll-view>
					<up-button type="primary" @click="closeDropdown">确定</up-button>
				</view>
			</up-dropdown-item>
		</up-dropdown>
	</view>
</template>

<script>
	export default {
		methods: {
			closeDropdown() {
				this.$refs.uDropdownRef.close();
			}
		}
	}
</script>
```

#### Keeping a menu item highlighted

```vue
<template>
	<view class="">
		<up-dropdown ref="uDropdownRef" @open="open" @close="close">
			<up-dropdown-item v-model="value1" title="距离" :options="options1" @change="change"></up-dropdown-item>
			<up-dropdown-item v-model="value2" title="温度" :options="options2"></up-dropdown-item>
		</up-dropdown>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
			}
		},
		methods: {
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdownRef.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdownRef.highlight(index);
			},
			change() {
				// 更多的细节，如有需要请自行根据业务逻辑进行处理
				// this.$refs.uDropdownRef.highlight(xxx);
			}
		}
	}
</script>
```

#### Compatibility

```vue
<up-dropdown class="up-dropdown"></up-dropdown>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/dropdown.md`</small>

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

