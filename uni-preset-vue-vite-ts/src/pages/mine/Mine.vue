<script lang="ts" setup>
import { useUserStore } from "@/store/user"
import { userPlaylistApi } from '@/services/index'
import { ref, watchEffect } from "vue"
import UserBar from "../../components/userBar/UserBar.vue"
import Music from "./components/Music.vue"
import Dynamic from "./components/Dynamic.vue"
import Podcast from "./components/Podcast.vue"

const store = useUserStore()
const showLeft = ref(false)
const curIndex = ref(0)
const tab = ref(['音乐', '播客', '动态'])

store.getAccount()
store.profile
// store.getUserDetail()

const goSearch = () => {
  uni.switchTab({
    url: '/pages/search/search'
  })
}

</script>

<template>
  <!-- Userbar抽屉组件-->
  <UserBar v-model:show="showLeft"></UserBar>

  <!-- 主页面 -->
  <view class="gologin">
    <view class="userInfo" :style="{
        backgroundImage: `url(${store.profile?.backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10rpx)'
      }">
    </view> 
    <!-- 头部 -->
    <view class="head">
      <view class="header">
        <uni-icons type="bars" color="#fff" size="30" @click="showLeft = true"></uni-icons>
        <text>{{ store.profile?.nickname }}</text>
        <uni-icons type="search" size="30" color="#fff" @click="goSearch"></uni-icons>
      </view>
      <view class="userList">
        <image :src="store.profile?.avatarUrl" class="img"></image>
        <view class="title">{{ store.profile?.nickname }}</view>
        <text class="signature">{{ store.profile?.signature }}</text>
        <view class="leve">
          <view><text class="cont">{{ store.profile?.follows }}</text>关注</view>
          <view><text class="cont">{{ store.profile?.followeds }}</text>粉丝</view>
          <view><text class="cont">Lv.{{ store.profile?.level }}</text>等级</view>
          <view><text class="cont">{{ store.profile?.listenSongs }}首</text>歌曲</view>
        </view>
        <view class="set">
          <view class="setcon"><uni-icons type="paperclip" size="20" color="#ccc"></uni-icons>最近</view>
          <view class="setcon"><uni-icons type="folder-add" size="20" color="#ccc"></uni-icons>本地</view>
          <view class="setcon"><uni-icons type="upload" size="20" color="#ccc"></uni-icons>网盘</view>
          <view class="setcon"><uni-icons type="shop" size="20" color="#ccc"></uni-icons>装扮</view>
          <view class="setcon seticon"><uni-icons type="settings" size="20" color="#ccc"></uni-icons></view>
        </view>
      </view>
    </view>
    
    <!-- tab切换部分 -->
    <view class="tabtop">
      <view 
      v-for="(item, index) in tab" 
      :key="index"   
      @click="curIndex=index"
      :class="{ active: curIndex === index }"
      >{{ item }}</view>
    </view>  
    <view class="tabcon">
      <Music v-if="curIndex === 0"/>
      <Podcast v-if="curIndex === 1 "/>
      <Dynamic v-if=" curIndex === 2 "/>
    </view>

    <!-- 去登录 -->
    <view class="btn" v-show="!store.profile">
      <view class="userImg"></view>
      <navigator url="/pages/login/login">
        <button>去登录</button>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.gologin{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  .userInfo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600rpx;
    z-index: 1;
    background-color: antiquewhite;
  }
}
.head{
  position: relative;
  height: 600rpx;
  z-index: 2;
  .header{
    height: 100rpx;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    justify-content: space-between;
    padding: 0 40rpx;
    background-color: rgba(#fff , .10);
    flex:1;
  }
  .userList{
    box-sizing: border-box;
    color: #dbd8d8;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40rpx;
    font-size: 13px;
    .img{
      height: 120rpx;
      width: 120rpx;
      border:2rpx solid #ccc;
      border-radius: 50%;
    }
    .title{
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin-top: 20rpx;
    }
    .signature{
      margin-top: 10rpx;
    }
  }
  .leve{
    display: flex;
    margin-top: 10rpx;
    view{
      padding: 0 10rpx;
      .cont{
        font-size: 16px;
        color: #fff;
        padding: 0 5rpx;
      }
    }
  }
}
.set{
  margin-top: 40rpx;
  display: flex;
  font-size: 14px;
  // vertical-align:auto;
  .setcon{
    // vertical-align: middle;
    width: 120rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    margin: 0 10rpx;
    border-radius: 20rpx;
    background-color: rgba(#797777, .3);
    .uni-icons{
      vertical-align:middle;
    }
  }
  .seticon{
    width: 80rpx;
  }
}


// tab
.tabtop{
  display: flex;
  height: 120rpx;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  padding: 0 25rpx;
  color: #8c8f92;
  font-weight: 700;

}
.tabcon{
  padding: 0 20rpx;
}
.active{
  color: #c20c0c;
  border-bottom: 6rpx solid #c20c0c;
}

</style>