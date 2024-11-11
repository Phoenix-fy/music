<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { userPlaylistDetail } from '@/services/index'

const route = useRoute()
const playlist = ref([])
const tracks = ref([])

const getPlaylistDetail = async () => {
  try {
    const res = await userPlaylistDetail((route.query.id))
    console.log(res.data)
    playlist.value = res.data.playlist
    tracks.value = res.data.playlist.tracks
  } catch(e) {
    console.log(e)
  }
}
getPlaylistDetail()

const goMine = () => {
  uni.switchTab({
    url: '/pages/mine/Mine'
  })
}
</script>

<template>
  <view class="nav-bar">
    <uni-icons type="left" size="25" color="#fff" class="back-button" @click="goMine"></uni-icons>
    <text class="nav-title">歌单</text>
  </view>
  <view class="header">
    <view class="bg" :style="{ backgroundImage: `url('https://p1.music.126.net/9-rm4PUkKuL-lD1Rgg6SDw==/109951165434984508.jpg')` }">
      <view class="after"></view>
    </view>
    <view class="header-content">
      <view class="info">
        <image :src="playlist?.coverImgUrl" mode="widthFix"></image>
        <view class="header-right">
          <view class="title">{{ playlist?.name }}</view>
          <view class="creator">
            <image :src="playlist.creator?.avatarUrl" mode="widthFix"></image>
            <view class="nickname">
              {{ playlist.creator?.nickname }}
            </view>
          </view>
        </view>
      </view>
      <view class="desc">
        {{ playlist.description ? playlist.description : '编辑信息'}}
      </view>
      <view class="btns">
        <view class="btn">
          <uni-icons type="redo-filled" size="20" color="#ffffff"></uni-icons>
          500 次分享
        </view>
        <view class="btn">
          <uni-icons type="chat-filled" size="20" color="#ffffff"></uni-icons>
          150 条评论
        </view>
        <view class="btn">
          <uni-icons type="folder-add-filled" size="20" color="#ffffff"></uni-icons>
          1,000 次收藏
        </view>
      </view>
    </view>
  </view>
  <view class="song-list">
    <uni-list :border="true">
      <uni-list-item clickable>
        <template v-slot:header>
          <mIcon type="bofang2" color="#c84341" :size="26"></mIcon>
        </template>
        <template v-slot:body>
          <view class="play-all">播放全部({{ tracks.length }})</view>
        </template>
      </uni-list-item>
      <uni-list-item
        v-for="(item, index) in tracks"
        :key="index"
        :title="item.name + '' + index"
        :note="item.ar && item.ar.length > 0 ? item.ar[0].name : '未知艺术家'"
        ellipsis="1"
        showArrow
        clickable
      >
        <template v-slot:header>
          <view class="no">
            {{ index + 1 }}
          </view>
        </template>
        <template v-slot:footer>
          <view class="right-text">把回忆拼好给你</view>
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<style lang="scss" scoped>
.nav-bar {
    width: 100%;
    height: 100rpx;
    background-color: #c20c0c;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
}

.back-button {
    font-size: 24px;
}

.nav-title {
    flex: 1;
    text-align: center;
    font-size: 18px;
}

.header {
  padding: 30rpx;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  margin-top: 100rpx;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(20px);
  transform: scale(1.5);
  .after {
    height: 100%;
    background: rgba(0,0,0,.25);
  }
}

.header-content {
  position: relative;
}

.info {
  display: flex;
  image {
    width: 240rpx;
    height: 240rpx;
    border-radius: 20rpx;
  }
}

.header-right {
  flex: 1;
  overflow: hidden;
  margin-left: 30rpx;
  .title {
    font-weight: bold;
    margin-top: 40rpx;
  }
}

.creator {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  image {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 16rpx;
    flex: 1;
    overflow: hidden;
    font-size: 12px;
  }
}
.desc {
  font-size: 12px;
  margin: 20rpx 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.btns {
  display: flex;
  .btn {
    flex: 1;
    margin-right: 30rpx;
    height: 70rpx;
    border-radius: 40rpx;
    background: rgba(255, 255, 255, 0.2);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.song-list {
  .no {
    width: 80rpx;
    text-align: center;
    line-height: 80rpx;
    font-weight: bold;
  }
}
.play-all {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 20rpx;
}
.right-text {
  font-size: 12px;
  line-height: 80rpx;
  color: #c84341;
}
</style>