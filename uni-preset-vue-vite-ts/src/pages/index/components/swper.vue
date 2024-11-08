<script setup>


</script>

<template>
<view class="hand">
    <view class="btn"> <router-link to="/pages/search/search"><input type="text" placeholder="明天过后 张杰" disabled ></router-link> </view><view></view>
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
    padding: 40rpx;
    width: 100vw;
    height: 80rpx;
    border-bottom: 1rpx solid #EAEDF1;
    .btn{
        width: 40vw;
       input{
        width: 100%;
        height: 100%;
        border-radius: 50rpx;
        padding-left: 20rpx;
        background-color: #EAEDF1;    
        pointer-events: none;
       }
        
    }
}

</style>