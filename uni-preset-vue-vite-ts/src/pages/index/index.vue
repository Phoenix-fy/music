<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi, type BannerItem } from '../../services/index'
import swper from '@/pages/index/components/swper.vue'
import handlist from "../index/components/handlist.vue";
import nightlist from "../index/components/nightlist.vue";


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
  <view>
    <swper />
  </view>
 
  <view class="list">
   <view>
    <handlist/>
  </view>
    <view><nightlist  /></view>
  </view>
  
</template>

<style lang="scss">
body{
  display: flex;

  .list{
    flex: 1;
    height: 100vh;
    width: 100vw;
    padding: 20rpx;
  }
}


</style>
