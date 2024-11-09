<script lang="ts" setup>
import UserBar from '@/components/userBar/UserBar.vue';
import { ref } from 'vue'
const showLeft = ref(false)

</script>

<template>
<UserBar v-model:show="showLeft"></UserBar>
<view class="hand">
    <uni-icons type="bars" size="30"  @click="showLeft = true"></uni-icons>
    <view class="btn"> <router-link to="/pages/search/search"><input type="text" placeholder="明天过后 张杰" disabled ></router-link></view>
    <uni-icons type="mic" size="30"></uni-icons>
</view>
</template>

<style lang="scss" scoped>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.hand{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100rpx;
    border-bottom: 1rpx solid #EAEDF1;
    padding: 0 50rpx;
    background-color: #fff;
    .btn{
        width: 60vw;
       input{
        width: 460rpx;
        height: 60rpx;
        border-radius: 50rpx;
        padding-left: 20rpx;
        background-color: #EAEDF1;    
        pointer-events: none;
       }
        
    }
}

</style>