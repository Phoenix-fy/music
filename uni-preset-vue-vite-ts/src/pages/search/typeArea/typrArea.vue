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

const Back = () => {
    router.back()
}
typeArea()
</script>

<template>
<view class="typeArea">
    <view @click="Back" class="back"><uni-icons type="arrow-left" size="20"></uni-icons></view>
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
    flex-direction: column;
    .back{
        padding: 10rpx;
    }
    img{
        width: 160px;
        height: 280rpx;
    }
    .typeArea-item{
        display: flex;
        width: 700rpx;
        height: 280rpx;
        margin: 20rpx;
    }
    .typeArea-item-text{
        width: 400rpx;
        height: 140rpx;
        background-color: rgb(255, 251, 127);
        border-radius: 20rpx;
        margin: 20rpx;
        line-height: 140rpx;
        text-align: center;
        font-size: 12px;
    }
}
</style>