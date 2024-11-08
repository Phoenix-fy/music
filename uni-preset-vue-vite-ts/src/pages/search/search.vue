<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getSearchDetailApi, getHotListApi } from '@/services/search';

import searchDetail from './scarchDetail/searchDetail.vue'

const router = useRouter()
const search = ref('')
const rend = ref('')
const list = ref([])
const childRef = ref(null)
const listDetail = ref('')

const getSearchDetail = async () => {
  try {
    const res = await getSearchDetailApi('hot')
    console.log(res.data.result.hots)
    rend.value = res.data.result.hots
  } catch(e) {
    console.log(e)
  }
}
const getHotList = async () => {
  try {
    const res = await getHotListApi('toplist/detail')
    console.log(res.data.list)
    list.value = res.data.list
  } catch(e) {
    console.log(e)
  }
}

const Looking = () => {
  if (childRef.value) {
    childRef.value.getSearch();
  }
}

const ListDetail = async (id) => {
  try {
    console.log(id)
    const res = await getHotListApi(`playlist/detail?id=${id}`)
    console.log(res.data)
    listDetail.value = res.data.playlist.tracks
    return 1
  } catch(e) {
    console.log(e)
  }
}

const ToSinger = () => {
  router.push({
    path: '/pages/search/singer/Singer'
  })
}
const ToTypeArea = () => {
  router.push({
    path: '/pages/search/typeArea/typrArea'
  })
}

getHotList()
getSearchDetail()
const Back = () => {
  router.back()
}

</script>

<template>
<view class="Search">
  <view class="scarchTop">
    <view class="top">
<<<<<<< HEAD
      <view class="back" @click="Back"><</view>
      <input type="text" placeholder="请输入搜索内容" v-model="search" />
      <view class="Sear">搜索</view>
=======
        <view class="back" @click="Back"><uni-icons type="left" size="30"></uni-icons></view>
        <input type="text" placeholder="请输入搜索内容" v-model="search" />
        <view class="Sear" @click="Looking">搜索</view>
>>>>>>> 5034aff2db8cc2ad2d42016dadfbe728de38ef98
    </view>
    <view class="type">
      <view class="type-item">
        <view class="type-item-text" @click="ToSinger">歌手</view>
      </view>
      <view class="type-item">
        <view class="type-item-text">曲风</view>
      </view>
      <view class="type-item">
        <view class="type-item-text" @click="ToTypeArea">专区</view>
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
    <scroll-view scroll-x class="like">
      <view v-for="item in rend">{{ item.first }}</view>
    </scroll-view>
    

    <view  class="swiperBox">

      <view class="ac">

      <view v-for="item in list" :key="item.name" class="sBox">
        <img :src="item.coverImgUrl" alt="">
        <view v-if="ListDetail(item.id)">
          <text v-for="arr in listDetail">{{ arr.name }}</text>
        </view>
      </view>

    </view>

    </view>
    

  </view>
</view>







<scroll-view scroll-y class="searchDetail" v-if="search.length">
  <searchDetail :search="search" ref="childRef" />
</scroll-view>



</template>

<style lang="scss">
body{
    padding-bottom: 80rpx;
    background-color: #f7f9fc;
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
    height: 100rpx;
    display: flex;
    align-items: center;
    input{
        height: 60rpx;
        width: 580rpx;
        border: 1rpx solid #ccc;
        border-radius: 40rpx;
        text-indent: 40rpx;
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
            font-size: 16px;
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
}
.like{
  z-index: -1;
  width: 100%;
  height: 40rpx;
  white-space: nowrap;
  overflow-x: auto;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  view{
    display: inline-block;
    height: 40rpx;
    font-size: 20rpx;
    padding: 0 20rpx;
    border-radius: 30%;
    text-align: center;
    line-height: 40rpx;
    margin: 0 10rpx;
    background-color: #ffffff;
  }
}
.swiperBox{
  z-index: -1;
  flex: 1;
  display: flex;
  padding-bottom: 90rpx;
  width: 100vw;
  overflow-x: auto;
  .sBox{
    width: 400rpx;
    height: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    img{
      width: 100rpx;
      height: 100rpx;
    }
  }
  .ac{
    display: flex;
  }
}
</style>