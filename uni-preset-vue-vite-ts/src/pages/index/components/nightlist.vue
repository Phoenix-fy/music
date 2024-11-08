<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getpersonalizedApi, type personalizedItem } from '@/services/index'

const personalized = ref<personalizedItem[]>([])

    const getpersonalized = async () => {
  try {
    const res = await getpersonalizedApi()
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
    <view class="handNig">推荐歌单></view>
    <view class="box">
    <view class="listN" v-for="item in getRandomItems(personalized)" :key="item.id"><view><img :src="item.picUrl" alt=""><view>{{ item.name }}</view></view></view>
    </view>
</template>

<style lang="scss" scoped>
.handNig {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rpx;
  font-size: 24rpx;
  font-weight: bold;
  color: #333;
}

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