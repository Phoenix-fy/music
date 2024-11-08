<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getNewMusicApi, type personalizedItem } from '@/services/index'
const NewMusic = ref<personalizedItem[]>([])

const getNewMusic = async () => {
    try{
        const res = await getNewMusicApi()
        console.log(res.data.result)
        NewMusic.value = res.data.result
    }catch(e){
        console.log(e)
    }
}
getNewMusic()
</script>

<template>
    <view>
    <view class="loveHand">
        猜你喜欢的 "华语" 好歌 <text class="loveMf">免费听</text>
    </view>
    <view class="loveList" >
        <view class="loveEvery" v-for="item in NewMusic" key="item.id"><img :src="item.picUrl" alt=""><view><view class="songName">{{ item.name }}</view><view class="songer">{{ item.song.album.name }}</view></view></view>   
    </view>
    </view>
</template>


<style lang="scss" scoped>
.loveHand{
    font-size: 30rpx;
    color: #333;
    font-weight: 900;
    .loveMf{
    font-size: 15rpx;
    color: #666;
    font-weight: 400;
    background-color: #F6DCD9;
    margin-left: 5rpx;
    border-radius: 5rpx;
    }
}
.loveList{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    padding: 5rpx;
    height: 330rpx;
    margin-top: 20rpx;
    overflow-x: hidden;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
   .loveEvery{
        margin-top: 10rpx;
        display: flex;
        align-items: center;
        white-space: nowrap;
        margin-left: 20rpx;
        width: 300rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        img{
            width: 100rpx;
            height: 100rpx;
            border-radius: 10rpx;
            object-fit: contain;
        }
        view{
            margin-left: 10rpx;
            display: flex;
            flex-direction: column;
        }
       .songName{
            font-size: 30rpx;
            color: #333;
        }
       .songer{
            font-size: 15rpx;
            color: #666;
        }
   }

}
   

</style>