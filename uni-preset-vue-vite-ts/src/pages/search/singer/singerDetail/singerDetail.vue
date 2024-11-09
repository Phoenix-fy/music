<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHotListApi } from '@/services/search'

const list = ref([])
const getSingerDetail = async (name) => {
    try {
    const res = await getHotListApi(name)
    console.log(res.data)
    list.value = res.data.songs
  } catch(e) {
    console.log(e)
  }
}

const Back = () => {
  uni.navigateBack()
}
onLoad((Option) => {
  console.log(Option.id)
  getSingerDetail(`artist/top/song?id=${Option.id}`)
})

</script>

<template>
    <view @click="Back" class="back"><uni-icons type="arrow-left" size="20"></uni-icons></view>
    <view class="si">热歌50曲</view>
        <view class="singerDetail">
            <view class="singerDetail-item" v-for="item in list" :key="item.id">
                <img :src="item.al.picUrl" alt="">
                <view class="singerDetail-item-text">{{item.name}}</view>
            </view>
        </view>
</template>

<style lang="scss" scoped>
.si{
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 50rpx;
    color: #e74032;
    font-family: "楷体";
}
.singerDetail-item{
    display: flex;
    padding: 20rpx;
}
.singerDetail-item-text{
    margin-left: 20rpx;
}
.back{
    padding: 20rpx;
}
img{
    width: 200rpx;
    height: 200rpx;
}
</style>