<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getHotListApi } from '@/services/search';

const router = useRouter()
const list = ref([])

const typeArea = async () => {
  try {
    const res = await getHotListApi('top/playlist/highquality?limit=20')
    console.log(res.data)
    list.value = res.data.playlists
  } catch(e) {
    console.log(e)
  }
}
typeArea()
</script>

<template>
<view class="typeArea">
  <scroll-view scroll-y >
    <view class="typeArea-item" v-for="item in list" :key="item.id">
        <img :src="item.coverImgUrl" alt="">
        <view class="typeArea-item-text">{{item.name}}</view>
    </view>
  </scroll-view>
</view>
</template>

<style lang="scss" scoped>
.typeArea{
    width: 100vb;
    height: 100vh;
    display: flex;
    img{
        width: 120px;
        height: 80rpx;
    }
    .typeArea-item{
        width: 300rpx;
        height: 140rpx;
    }
    .typeArea-item-text{
        width: 300rpx;
        height: 140rpx;
        background-color: aquamarine;
        border-radius: 20rpx;
        margin: 20rpx;
    }
}
</style>