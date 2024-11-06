<script setup>

</script>

<template>
  <view class="header">
    <view class="head">
      <uni-icons type="bars" color="#fff" size="30"></uni-icons>
      <text>登录</text>
      <uni-icons type="search" size="30" color="#fff"></uni-icons>
    </view>
  
    <view>
      <uni-icons type="person" size="50" color="#000"></uni-icons>
      <view class="form">
        <view class="row"><input type="text" placeholder="请输入手机号"></view>
        <view class="row captcha">
          <input type="text" placeholder="请输入验证码" v-model="captcha">
          <button type="primary">1233</button>
        </view>
        <view class="row"><button type="primary">登录</button></view>
      </view>
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