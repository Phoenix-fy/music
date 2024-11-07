<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi, type BannerItem } from '@/services/index'

const banner = ref<BannerItem[]>([])

    const getBanner = async () => {
  try {
    const res = await getBannerApi()
    console.log(res.data)
    banner.value = res.data.banners
  } catch(e) {
    console.log(e)
  }
}
getBanner()

</script>

<template>

</template>

<style lang="scss" scoped>

</style>