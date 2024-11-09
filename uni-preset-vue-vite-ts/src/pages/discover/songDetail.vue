<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { rankSongApi, type tracks } from '../../services/index'
import { ref } from 'vue'
const list = ref<tracks[]>([])

const route = useRoute()
const songList = async() => {
    try{
        const res = await rankSongApi(route.query.id)
        // console.log(res.data.playlist)
        list.value = res.data.playlist
    }catch(e){
        console.log(e)
    }
}
songList()


</script>

<template>
  <navigator url="/pages/discover/music"><<---</navigator>
  <image :src="list.coverImgUrl"></image>
  <view class="playing">
    <!-- <uni-icons type="contact" size="30"></uni-icons> -->
    <text>播放全部({{ list.tracks.length }})</text>
    <text class="right">
        <uni-icons type="pulldown" size="30"></uni-icons>
        <uni-icons type="bars" size="30"></uni-icons>
    </text>
  </view>
  <view v-for="(item,index) in list.tracks" class="list">
    <view class="left">
        <text class="number">{{ index+1 }}</text> 
    </view>
    <view class="right">
        <view class="songs">{{ item.name }}</view>
        <view class="author">{{ item.ar[0].name}}</view>
    </view>
  </view>
</template>
 


<style lang="scss" scoped>
navigator {
    position: fixed;
    top:20rpx;
    left:30rpx;
    z-index:9;
    color:#fff;
}
image{
    width: 100%;
    height: 400rpx;
}
.playing{
    padding:15rpx 20rpx;
    text{
        color:#666;
    }
    .right{
        float:right;
    }
}
.list{
    padding:15rpx 20rpx;
    display: flex;

}
.number{
    color:red;
    padding:0 15rpx;
    line-height: 50.2rpx;
}
.songs{
    padding-left:20rpx;
    color:#666;
    font-family: '楷体';
}
.author{
    color:#ccc;
    font-size: 24rpx;
    padding-left:20rpx;
}
</style>
