<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['show'])
const emits = defineEmits(['update:show'])
const userDrawer = ref(null)

watchEffect(() => {
  if (props.show) {
    userDrawer.value?.open()
  } else {
    userDrawer.value?.close()
  }
})

const change = (e: boolean) => {
  if (!e) {
    emits('update:show', false)
  }
}
</script>

<template>
  <view>
		<uni-drawer ref="userDrawer" mode="left" :mask-click="true" @change="change" :width="300">
			<scroll-view style="height: 100%;" scroll-y="true">
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<style lang="scss" scoped>

</style>