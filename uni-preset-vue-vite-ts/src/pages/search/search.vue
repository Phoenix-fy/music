<script setup>
import { ref } from 'vue'
import searchDetail from './scarchDetail/searchDetail.vue'

const search = ref('')
</script>

<template>
<view class="Search">
    <view class="scarchTop">
    <view class="top">
        <view class="back"><</view>
        <input type="text" placeholder="请输入搜索内容" v-model="search" />
        <view class="Sear">搜索</view>
    </view>
    <view class="type">
      <view class="type-item">
        <view class="type-item-text">歌手</view>
      </view>
      <view class="type-item">
        <view class="type-item-text">曲风</view>
      </view>
      <view class="type-item">
        <view class="type-item-text">专区</view>
      </view>
      <view class="type-item">
        <view class="type-item-text">识曲</view>
      </view>
    </view>
  </view>
  <view class="Swiper">
    <view class="guess">
      <view class="guess-text"><text class="qq">猜你喜欢</text> <text class="ring">刷新</text></view>
    </view>
    <view class="like">
      <text></text>
    </view>
  </view>
</view>
<view class="searchDetail" v-if="search.length">
  <searchDetail/>
</view>


</template>

<style lang="scss">
body{
    padding-bottom: 80rpx;
}
.Search {
    margin: 0;
    padding: 0;
    width: 100vb;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.scarchTop {
  width: 100vb;
  height: 180rpx;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  background-color: #fff;
  .top{
    width: 100%;
    height: 80rpx;
    display: flex;
    input{
        height: 50rpx;
        width: 580rpx;
        border: 1rpx solid #ccc;
        border-radius: 40rpx;
        text-indent: 40rpx;
        margin-top: 15rpx;
    }
    .Sear{
        margin: 0;
        padding: 0;
        width: 100rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 16px;
    }
    .back{
        width: 80rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        }
  }
.type{
    width: 100vb;
    height: 100rpx;
    display: flex;
    flex-wrap: wrap;
   .type-item{
    margin-top: 30rpx;
        width: 184rpx;
        height: 40rpx;
        text-align: center;
        line-height: 40rpx;
        &:not(:last-child){
            border-right: 1px solid #ccc;
        }
   }
}

}
.Swiper{
    flex: 1;
    margin-top: 180rpx;
    display: flex;
    flex-direction: column;
    .guess{
        display: flex;
        .qq{
            margin-left: 20rpx;
            font-size: 18px;
            font-weight: 700;
        }
        .ring{
            margin-left: 500rpx;
        }
    }
}
.searchDetail{
  position: absolute;
  top: 80rpx;
  width: 100vb;
  height: 100%;
  background-color: #f7f9fc;
  z-index: 9;
}

</style>