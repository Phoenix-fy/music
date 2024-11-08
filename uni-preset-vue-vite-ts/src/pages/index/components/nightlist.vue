<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getpersonalizedApi, type personalizedItem } from '@/services/index'

const personalized = ref<personalizedItem[]>([])

    const getpersonalized = async () => {
  try {
    const res = await getpersonalizedApi()
    console.log(res.data.result)
    personalized.value = res.data.result
  } catch(e) {
    console.log(e)
  }
}
const getRandomItems = (items: personalizedItem[]) => {
const shuffled = items.sort(() => 0.5 - Math.random()) 
return shuffled.slice(0, 6) 
}

onMounted(() => {
  getpersonalized()
})

</script>

<template>
    <view class="hand">推荐歌单></view>
    <view class="box">
    <view class="listN" v-for="item in getRandomItems(personalized)" :key="item.id"><text><img :src="item.picUrl" alt=""><view>{{ item.name }}</view></text></view>
    </view>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: row; 
  width: 100vw;
  padding: 5rpx; 
  overflow-x: hidden; 
  overflow-x: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .listN {
    display: flex;
    margin-right: 15rpx;
    flex-direction: column; 
    height: 300rpx; 

    img {
      width: auto; 
      height: 180rpx; 
      border-radius: 10rpx;
      margin-bottom: 10rpx; 
      object-fit: contain; 
    }

    view {
      font-size: 20rpx; 
      color: #333; 
    }
  }
}
</style>