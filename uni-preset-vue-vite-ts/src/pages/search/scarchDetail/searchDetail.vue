<script setup>
import { ref, watch} from 'vue'
import { getSearchApi, getSearchDetailApi } from '@/services/search';
const props = defineProps(['search'])

const searchList = ref('')
const search = props.search
const getSearch = async () => {
  try {
    const res = await getSearchApi(search)
    console.log(res.data.result.songs)
    searchList.value = res.data.result.songs
  } catch(e) {
    console.log(e)
  }
}
// const getSearchDetail = async () => {
//   try {
//     const res = await getSearchDetailApi()
//     console.log(res.data)
//   } catch(e) {
//     console.log(e)
//   }
// }
// getSearchDetail()
watch(props.search, () => {
  console.log(props.search)
  getSearch(props.search)
},{immediate: true})
</script>

<template>
    <view>{{ search }}</view>
<view class="list">
  <view class="list-item" v-for="item in searchList" :key="item.id">
    <img :src="item.al.picUrl" alt="">
    <view class="list-item-text">
        {{item.al.name}}
    <view class="ar"><view v-for="arr in item.ar">{{ arr.name }}</view></view>
    </view>
    
  </view>
</view>
</template>

<style lang="scss">
.list{
    display: flex;
    flex-direction: column;
    .list-item{
        min-height: 200rpx;
        width: 100%;
        display: flex;
        .list-item-text{
            width: 100%;
            margin-top: 10rpx;
            color: #adb1b9;
        }
        img{
          width: 200rpx;
          height: 200rpx;
        }
        .ar{
            display: flex;
            color: #1aad19;
            view{
              margin-right: 10rpx;
            }
            }
    }
}
</style>