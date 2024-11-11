<script setup>
import { ref, onUpdated, watch } from 'vue'

import { getHotListApi } from '@/services/search'

const props = defineProps(['songid'])
let songid = props.songid
const songdetail = ref([])
const flag = ref(false)
const innerAudioContext = uni.createInnerAudioContext()

const Songdetail = async (songid) => {
    try {
    const res = await getHotListApi(`song/detail?ids=${songid}`)
    console.log(res.data.songs)
    songdetail.value = res.data.songs[0]
  } catch(e) {
    console.log(e)
  }
}
const songS = async (src) => {
    if (innerAudioContext) {
  try {
    innerAudioContext.pause();
    innerAudioContext.destroy()
    innerAudioContext = null
  } catch (e) {
    //TODO handle the exception
  }
}
    try {
    const res = await getHotListApi(`song/url/v1?id=${src}&level=exhigh`)
    console.log(res.data.data[0].url)
    innerAudioContext.autoplay = true;
    innerAudioContext.play()
    innerAudioContext.src = res.data.data[0].url
    innerAudioContext.onPlay(() => {
    console.log('开始播放');
    })
    innerAudioContext.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
    });
  } catch(e) {
    console.log(e)
  }
}
const Stop = () => {
    if(flag.value){
        innerAudioContext.stop()
    }else{
        innerAudioContext.play()
    }
    flag.value =!flag.value
}


watch(() => {
  songid = props.songid
  songS(songid)
  Songdetail(songid)
})
</script>

<template>
    <view class="musicLine">
    <img :src="songdetail.al.picUrl" alt="">
    <text class="songName">{{ songdetail.name }} -</text>
    <text class="singerName">{{ songdetail.ar[0].name }}</text>
    <button @click="Stop">暂停播放</button>
    </view>
</template>

<style lang="scss" scoped>
.musicLine{
    height: 120rpx;
    width: 100%;
    display: flex;
    background-image: url('https://wx2.sinaimg.cn/orj360/005Nnt9Kly8hqy54y9b5sj30rs15o0zv.jpg');
    background-position: center;
}

img{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    margin: 10rpx;
}
.songName{
    color: aliceblue;
    font-size: 38rpx;
    padding: 0 20rpx;
    line-height: 120rpx;
}
.singerName{
    color: #fe9872;
    line-height: 128rpx;
}
button{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    line-height: 80rpx;
    margin-top: 20rpx;
}
</style>