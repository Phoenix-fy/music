<script setup>
import { ref } from 'vue'
import { getSearchApi } from '@/services/search';
const searchList = ref('')
const getSearch = async () => {
  try {
    const res = await getSearchApi()
    console.log(res.data.result.songs)
    searchList.value = res.data.result.songs
  } catch(e) {
    console.log(e)
  }
}
getSearch()
</script>

<template>
<view class="list">
  <view class="list-item" v-for="item in searchList" :key="item.id">
    <view class="list-item-text">{{item.album.name}}</view>
    <img :src="item.artists[0].img1v1Url" alt="">
  </view>
</view>
</template>

<style lang="scss">
</style>