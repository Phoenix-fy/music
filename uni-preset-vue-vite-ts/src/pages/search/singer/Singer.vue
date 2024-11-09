<script setup>
import { ref } from 'vue'
import { getHotListApi } from '@/services/search'

const list = ref([])


const Singer = async (detail) => {
    try {
    const res = await getHotListApi(detail)
    console.log(res.data)
    list.value = res.data.artists
  } catch(e) {
    console.log(e)
  }
}
Singer('artist/list?type=-1')

const ToSingerDetail = (id) => {
    uni.navigateTo({
	url: `/pages/search/singer/singerDetail/singerDetail?id=${id}`
})
}
const Back = () => {
    uni.navigateBack()
}

</script>

<template>
    <view class="Singer">
        <view class="Top">
        <view @click="Back" class="top"><uni-icons type="arrow-left" size="20"></uni-icons><text class="lei">歌手分类</text></view>
        <view class="LL">
			<view class="L"> <text class="type" @click="Singer('artist/list?area=7')">华语</text>  <text class="type" @click="Singer('artist/list?area=96')">欧美</text>  <text class="type" @click="Singer('artist/list?area=8')">日本</text>  <text class="type" @click="Singer('artist/list?area=16')">韩国</text>  <text class="type" @click="Singer('artist/list?area=0')">其他</text> </view>
            <view class="L"> <text class="type" @click="Singer('artist/list?type=1')">男</text>  <text class="type" @click="Singer('artist/list?type=2')">女</text>  <text class="type" @click="Singer('artist/list?type=3')">乐队</text> </view>
		</view>
        </view>

        <view class="list">
            <scroll-view scroll-y>
                <view class="list-item" v-for="item in list" :key="item.id" @click="ToSingerDetail(item.id)">
                    <view class="list-item-text">
                        <view class="list-item-text2"><img :src="item.picUrl" alt=""></view>
                        <view class="list-item-text1">{{item.name}}</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
    
    
</template>

<style lang="scss" scoped>
.Singer{
    width: 100vb;
    height: 180rpx;
    display: flex;
    flex-direction: column;
    .Top{
        width: 100vb;
        height: 180rpx;
        display: flex;
        flex-direction: column;
        position: fixed;
        background-color: #fff;
        z-index: 9;
    }
    .top{
        margin: 20rpx 20rpx;
        .lei{
            margin-left: 20rpx;
        }
        .LL{
            width: 100%;
            height: 60rpx;
            display: flex;
            flex-direction: column;
        }
        .L{
            width: 100%;
            height: 30rpx;
            display: flex;
            justify-content: space-between;
            gap: 20rpx;
        }
        .type{
            margin-left: 20rpx;
            width: 120rpx;
            height: 30rpx;
        }
    }
    .list{
        flex: 1;
        padding-top: 180rpx;
        z-index: -1;
        .list-item-text{
            display: flex;
            padding: 10rpx 20rpx;
            .list-item-text1{
                line-height: 100rpx;
                margin-left: 30rpx;
            }
        }
        img{
            width: 100rpx;
            height: 100rpx;
            border-radius: 50rpx;
        }
    }
}
</style>