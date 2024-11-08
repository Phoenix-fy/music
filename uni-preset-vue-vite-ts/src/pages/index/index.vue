<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi, type BannerItem } from '../../services/index'
import swper from '@/pages/index/components/swper.vue'
import handlist from "../index/components/handlist.vue";
import nightlist from "../index/components/nightlist.vue";
import lovely from './components/lovely.vue';
import Charts from './components/Charts.vue';



const banner = ref<BannerItem[]>([])

const getBanner = async () => {
  try {
    const res = await getBannerApi()
    banner.value = res.data.banners
  } catch(e) {
    console.log(e)
  }
}
getBanner()
</script>

<template>
  <view class="hander">
    <swper />
  </view>
  <view class="list">
  <view><handlist/></view>
  <view><nightlist/></view>
  <view><lovely/></view>
  <view><Charts/></view>
  </view>
</template>

<style lang="scss">
body{
  display: flex;

  .hander{
    position: fixed; 
    top: 0; 
    left: 0;
    z-index: 1000;
    background: white;
  }
  .list{
    margin-top: 100rpx;
    flex: 1;
    height: 100vh;
    width: 100vw;
    padding: 20rpx;
  }
}


</style>
