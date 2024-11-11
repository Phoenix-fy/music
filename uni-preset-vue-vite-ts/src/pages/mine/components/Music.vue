<script setup>
import { ref } from "vue"
import { useUserStore } from '@/store/user'

const store = useUserStore()
const tab = ref(['近期', '创建', '收藏', '专辑'])
const current = ref(0)

store.playlist

const onClickItem = (e) => {
  if (current.value != e.currentIndex) {
    current.value = e.currentIndex;
  }
}

const goPlaylistDetail = (id) => {
  // console.log(id)
  uni.navigateTo({
    url : `/pages/userPlaylistDetail/UserPlaylistDetail?id=${id}`
  })
}

</script>

<template>
  <view>
    <uni-segmented-control 
    :current="current" 
    :values="tab" 
    @clickItem="onClickItem" 
    styleType="text" 
    activeColor="#c20c0c"></uni-segmented-control>
    <view class="content">
      <view 
      v-show="current === 0" 
      class="list1"
      v-for="(item,index) in store.playlist" 
      :key="index"
      @click="goPlaylistDetail(item.id)">
        <image :src="item.coverImgUrl"></image>
        <view class="list-item">
          <view class="title">{{ item.name }}</view>
          <view class="list-des">
            <view>歌单</view>
            <view><text>{{ item.trackCount }}</text>首</view>
            <view class="nickname">{{ item.creator.nickname}}</view>
          </view>
        </view>
      </view>
      <view v-show="current === 1">
        选项卡2的内容
      </view>
      <view v-show="current === 2">
        选项卡3的内容
      </view>
      <view v-show="current === 3">
        选项卡4的内容
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
v-deep.segmented-control__text{
  color: #8c8f92;
}
.list1{
  display: flex;
  padding: 15rpx 20rpx;
  align-items: center;
  justify-content: flex-start;
  image{
    width: 100rpx;
    height: 100rpx;
    border-radius: 10rpx;
  }
  .list-item{
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
    color: #72777d;
    width: calc(100% - 150rpx);
    
    .list-des{
      display: flex;
      flex-direction: row;
      .nickname{
        overflow: hidden;       
        white-space: nowrap;    
        text-overflow: ellipsis;
      }
      view{
        font-size: 14px;
        margin: 10rpx 10rpx 0 0;
        color: #8e9195;
      }
    }
    .title{
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;       
      white-space: nowrap;    
      text-overflow: ellipsis;
    }
  }
}
</style>