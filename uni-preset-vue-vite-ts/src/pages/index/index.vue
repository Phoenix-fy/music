<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi, type BannerItem } from '../../services/index'

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
  <view class="content">
  </view>
</template>

<style lang="scss">
.title{
  width: 200px;
  height: 40px;
  background-color: aqua;
}
input{
  border: 1px solid #ccc;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
