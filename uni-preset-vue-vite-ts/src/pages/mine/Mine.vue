<script setup>

</script>

<template>
  <view class="header">
    <view class="head">
      <uni-icons type="bars" color="#fff" size="30"></uni-icons>
      <text>登录</text>
      <uni-icons type="contact" size="30"></uni-icons>
    </view>
   
  </view>
  <view>
    <uni-icons type="contact" size="30"></uni-icons>
  </view>
</template>

<style lang="scss" scoped>
.header{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  .head{
    height: 100rpx;
    background-color: #c20c0c;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    justify-content: space-between;
    padding: 0 40rpx;
  }
}
</style>