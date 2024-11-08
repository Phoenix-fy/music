<script lang="ts" setup>
  import { ref } from 'vue'
  import choose from '../discover/select.vue'
  import rank from '../discover/rank.vue'

  const arr = ref([
    '精选','排行榜','VIP','歌单','助眠','欧美','专注','经典','R&B','原创','粤语','说唱'
  ]) 
  const curIndex = ref(0)
</script>
<template>

  <scroll-view scroll-x="true" class="head">
    <view  v-for="(item,index) in arr" :key="item" @click="curIndex = index" :class="{ active : curIndex === index }">{{item}}</view>
  </scroll-view>
  <view class="content1">
    <choose v-if="curIndex === 0"/>
    <rank  v-if="curIndex === 1"/>
  </view>
</template>

<style lang="scss" scoped>
scroll-view{
  width: 100%;
  height:70rpx;
  line-height: 70rpx;
  white-space: nowrap;
  padding:10px 0;
}
.head view{
  padding:0 36rpx;
  margin:0 12rpx;
  color:#666;
}
.active{
    color:#000;
    background: #ccc;
    border-radius: 40rpx;
  }
uni-view{
  display: inline-block;
}
.content1{
  width:100%;
  height: 100%;
  overflow: auto;
}
</style>
