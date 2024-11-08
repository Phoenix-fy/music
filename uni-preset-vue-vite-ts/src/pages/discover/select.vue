<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getBannerApi, type BannerItem } from '../../services/index'
import { topPlaylistApi, type playItem } from '../../services/index'
import { topListApi } from '../../services/index'


const rankList = ref<playItem[]>([])
const router = useRouter() 
const banner = ref<BannerItem[]>([])
const topList = ref<playItem[]>([])

const rank = async() => {
  try{
    const res = await topListApi()
    console.log(res.data.list)
    rankList.value = res.data.list
  }catch(e){
    console.log(e)
  }
}
rank()
const getBanner = async () => {
  try {
    const res = await getBannerApi()
    // console.log(res.data)
    banner.value = res.data.banners
  } catch(e) {
    console.log(e)
  }
}
getBanner()
const toplist = async () => {
  try {
    const res = await topPlaylistApi()
    // console.log(res.data.playlists)
    topList.value = res.data.playlists

  } catch(e) {
    console.log(e)
  }
}
toplist()
const goSongDetail = (id:number) => {
    console.log(id)
    router.push(`/pages/discover/songDetail?id=${id}`)  
}
</script>

<template>
    <swiper class="swiper-wrap" indicator-dots="true" autoplay="true" circular="true">
        <swiper-item class="item" v-for="item in banner"><image :src="item.imageUrl" mode="widthFix" alt=""/></swiper-item>
    </swiper>

    <view>云村新鲜事</view>
    <scroll-view scroll-x="true" class="play" >
        <view v-for="(item,index) in topList">
            <image :src="item.coverImgUrl" alt=""/>
            <text>{{ item.name }}</text>
        </view>
    </scroll-view>
    <view>甄选歌单</view>
    <scroll-view scroll-x="true" class="play" >
        <view v-for="(item,index) in topList">
            <image :src="item.coverImgUrl" alt=""/>
            <text>{{ item.name }}</text>
        </view>
    </scroll-view>
    <!-- 排行榜 -->
    <view @click="router.push('/pages/discover/rank')">排行榜></view>
    <view>
        <scroll-view scroll-x="true" class="top" >
        <view v-for="(item,index) in rankList">
            <image :src="item.coverImgUrl" alt="" @click="goSongDetail(item.id)"/>
            <text>{{ item.name }}</text>
        </view>
    </scroll-view>
    </view>
    
</template>
  
<style lang="scss" scoped>
.swiper-wrap{
    width: 100%;
    height:256rpx;
    padding:22rpx 0;
}
.item{
    width: 100%;
    height:256rpx;
    overflow: hidden;
    image{
        width: 100%;
        height: 256rpx;
        overflow: hidden;
        border-radius: 16rpx;
    }
}
.play{
    width: 100%;
    height:220rpx;
    white-space: nowrap;

    view{
        width:150rpx;
        height: 220rpx;
        display: inline-block;
        vertical-align: top;
        padding:0 20rpx;
        image{
            width: 150rpx;
            height: 150rpx;
            vertical-align: top;
        }
        text{
            width: 100%;
            height: 70rpx;
            font-size:20rpx;
            overflow: hidden;
            text-overflow:ellipsis ;
            display: block;
            white-space: nowrap;
        }
    }
}

.top{
    width: 100%;
    height:220rpx;
    white-space: nowrap;

    view{
        width:150rpx;
        height: 220rpx;
        display: inline-block;
        vertical-align: top;
        padding:0 20rpx;
        image{
            width: 150rpx;
            height: 150rpx;
            vertical-align: top;
        }
        text{
            width: 100%;
            height: 70rpx;
            font-size:20rpx;
            overflow: hidden;
            text-overflow:ellipsis ;
            display: block;
            white-space: nowrap;
            text-align: center;
        }
    }
}

</style>
