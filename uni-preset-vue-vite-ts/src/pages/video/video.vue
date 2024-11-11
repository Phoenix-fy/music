<script lang="ts" setup>
import { ref, watchEffect,watch,computed } from 'vue'
import { useVideoStore } from '../../store/video'
import { useRoute } from 'vue-router'
import { singleApi, vedioApi } from '../../services/index';
const useAudio = useVideoStore()
const route = useRoute()

const song = ref([])
const imgUrl = ref('')

console.log(route.query.id)
// 格式化播放时间
const formatTime = (time) => {
    const m= Math.floor(time / 60)
    const s = (parseInt(time % 60)>=10 ? parseInt(time % 60) : '0'+parseInt(time % 60))
    return `${m}:${s}`
}
const singleList = async() => {
    try{
        const res = await singleApi(route.query.id)
        song.value = res.data.songs
        imgUrl.value = song.value[0].al.picUrl
        // console.log(song.value[0].al.picUrl)
        console.log(res.data.songs[0])
    }catch(e){
        console.log(e)
    }
}

// const playBtnSrc = computed (() => {
//     return useAudio.isPlay? '../discover/png/bofang.png' : '../discover/png/zanting.png'
// })
watch(() => route.query.id, async (newId) => {
    await singleList()
})
singleList()
watchEffect(() => {
    const progressValue = useAudio.currentTime/useAudio.duration * 100
    useAudio.progress = progressValue
})
</script>

<template>
    <!-- 背景 -->
    <view class="bg">
        <view class="blur-image" :style="{ backgroundImage: `url(${imgUrl})` }"></view>
    </view>
    <view class="song-circle">
          <view class="circle">
            <image class="nobg" 
            :src="imgUrl" 
            :isplay="useAudio.isPlay"
            mode="widthFix"></image>
          </view>
    </view>
    <!-- 歌手 -->
    <view class="list">
        <view class="author">
            <view class="songn">{{ song[0].name }}</view>
            <text v-for="item in song[0].ar" class="name">{{ item.name }}/</text>
        </view>
        <view class="icons-bar">
        <uni-icons type="heart" size="30" color="#ffffff"></uni-icons>
        <uni-icons type="chat" size="30" color="#ffffff"></uni-icons>
      </view>

    </view>
    <!-- 进度条 -->
    <view class="progress">
        <view class="time">
          {{formatTime(useAudio.currentTime)}}
        </view>
        <slider
          :value="useAudio.progress"
          @change="e => useAudio.changeCurrent(e.detail.value)"
          activeColor="#10AEFF"
          backgroundColor="#ffffff"
          block-color="#ffffff"
          block-size="10"
        >
        </slider>
        <view class="time">
          {{formatTime(useAudio.duration)}}
        </view>
      </view>
      <!-- 播放 -->
      <view class="play-bar">
        <!-- <uni-icons class="icon" v-else type="loop" color="#ffffff" @click="useAudio.isRandom = true"></uni-icons> -->
         <!-- 上一曲 -->
        <uni-icons class="icon" type="arrow-left" size="30" color="#ffffff"></uni-icons>
        <!-- 播放按钮 -->
        <image class="icon nobg" @click="useAudio.playSong(route.query.id)" src="../../static/png/zanting.png" v-if="useAudio.isPlay === true"></image>
        <image class="icon nobg" @click="useAudio.playSong(route.query.id)" src="../../static/png/bofang.png" v-if="useAudio.isPlay === false"></image>
        <!-- 下一曲 -->
        <uni-icons class="icon" size="30" type="arrow-right" color="#ffffff"></uni-icons>
        <uni-icons class="icon" size="30" type="list" color="#ffffff"></uni-icons>
      </view>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
  }
}
.blur-image {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.5);
  filter: blur(30px);
}

.song-circle {
    height:600rpx;
    padding: 120rpx;
    position: relative;
    box-sizing: border-box;
    top:180rpx;
      image {
      width: 360rpx;
      height: 360rpx!important;
      border-radius: 50%;
      border:80rpx solid #000;
      animation: spin 10s linear infinite;
    }
  }
  //引入动画
  @keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
  }
  // 暂停时，动画停止 
  .nobg[isplay='false'] {
  animation-play-state: paused;
    }  
  .list{
    width: 100%;
    position: relative;
    top:270rpx;
    color:#fff;
    display: flex;
    justify-content: space-between;
    .songn{
        padding-left:35rpx;
        font-size:32rpx;
        font-family: '楷体';
    }
    .name {
        font-size: 22rpx;
        padding-left:35rpx;
    }
  }
  .icons-bar{
    padding-right: 25rpx;
  }
  .progress {
  position: relative;
  top:280rpx;  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rpx;
  color: #ffffff;
  .time {
    width: 80rpx;
    text-align: center;
  }
  slider {
    flex: 1;
  }
}

.play-bar {
  position: relative;
  top:320rpx;  
  display: flex;
  justify-content: space-around;
  padding: 0 20rpx;
  .icon {
    width: 80rpx;
    height: 80rpx;
    font-size: 80rpx !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
