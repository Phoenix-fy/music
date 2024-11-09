<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getBannerApi, type BannerItem } from '@/services/index'
import { topPlaylistApi, type playItem } from '@/services/index'
import { topListApi } from '@/services/index'



const rankList = ref<playItem[]>([])
const router = useRouter() 
const banner = ref<BannerItem[]>([])
const topList = ref<playItem[]>([])

const rank = async() => {
  try{
    const res = await topListApi()
    // console.log(res.data.list)
    rankList.value = res.data.list
  }catch(e){
    console.log(e)
  }
}
rank()
const goSongDetail = (id:number) => {
    console.log(id)
    router.push(`/pages/discover/songDetail?id=${id}`)  
}
</script>

<template>
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

<style scoped lang="scss">
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
            border-radius: 10rpx;
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