<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const greeting = ref('')
  const navIcons = [
    {
      "id": -1,
      "name": "每日推荐",
      "iconUrl": "https://p1.music.126.net/BLSQqEQ_RFiwtxNC_Fqkug==/109951168558291458.jpg",
      "url": "/pages/index/components/handlist/everyday"
    },
    {
      "id": -6,
      "name": "私人雷达",
      "iconUrl": "https://p2.music.126.net/7CnYo9BO2CMlzY-LjWMDdA==/109951168122680459.jpg",
      "url": "/pages/index/components/handlist/Myradar"
    },
    {
      "id": -2,
      "name": "热歌榜",
      "iconUrl": "https://p1.music.126.net/zbX7RdZKMGXsj3GUP6N5UA==/109951167764853283.jpg",
      "url": "",
    },
    {
      "id": -3,
      "name": "私人漫游",
      "iconUrl": "https://p2.music.126.net/t_C5HCLqjftIFKsBpmlL4g==/109951167848160367.jpg",
      "url": ""
    },
    {
      "id": 1025001,
      "name": "相似歌曲",
      "iconUrl": "https://p1.music.126.net/Msieltd4l3izmxWZx5FTaQ==/109951164132442422.jpg",
      "url": ""
    },
  ]
  const link = (url) => {
    if (!url) return
    uni.navigateTo({
	  url
  })
  }

  const updateGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.value = '早上好';
  } else if (hour >= 12 && hour < 18) {
    greeting.value = '下午好';
  } else {
    greeting.value = '晚上好';
  }
};

// 初始调用
updateGreeting();

// 定时器，每分钟更新一次时间
const timer = setInterval(updateGreeting, 60000);

onMounted(() => {
  // 组件挂载后，每分钟更新时间
  timer;
});

onUnmounted(() => {
  // 组件卸载时，清除定时器
  clearInterval(timer);
});
</script>

<template>
   <h3 class="handEr">{{ greeting }}</h3> 
  <view class="listM">
    <view v-for="item in navIcons" :key="item.id" class="list-item">
      <img :src="item.iconUrl"  @click="link(item.url)"></img>
      <view class="list-name">
        {{item.name}}
      </view>
    </view>
</view>
</template>


<style lang="scss" scoped>
.handEr{
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}
  .listM{
    width: 100vw;
    height: 300rpx;
    display: flex;
    flex-direction: row;
    overflow-x: hidden; 
    overflow-x: auto;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
      img{
      width: 200rpx;
      height: auto;
      background: #f0f0f0;
      border-radius: 10rpx;
      margin: 0 8rpx; 
      }
      .list-name {
      font-size: 12px;
      margin-top: 16rpx;
      text-align: center;
    }
  }
  
</style>