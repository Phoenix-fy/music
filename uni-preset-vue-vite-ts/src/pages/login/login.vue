<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <view class="header">
    <view class="head">
      <uni-icons type="left" color="#fff" size="30" @click="router.back()"></uni-icons>
      <text>登录</text>
      <uni-icons type="search" size="30" color="#fff"></uni-icons>
    </view>
  
    <view class="login">
      <uni-icons type="person" size="150" color="#000" class="person"></uni-icons>
      <view class="form">
        <view class="row"><input type="text" placeholder="请输入手机号"></view>
        <view class="row captcha">
          <input type="text" placeholder="请输入验证码">
          <button type="primary" class="getCaptcha">获取验证码</button>
        </view>
        <view class="row"><button type="primary" class="loginBtn">登录</button></view>
      </view>
    </view>
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
.login{
  display: flex;
  flex-direction: column;
  padding: 40rpx 60rpx;
  margin-top: 50rpx;
  .row{
    height: 80rpx;
    margin-top: 30rpx;
  }
  input{
    border: 1px solid #dfdcdc;
    height: 80rpx;
    border-radius: 60rpx;
    padding-left: 20rpx;
  }
  .captcha{
    display: flex;
    input{
      flex: 1;
    }
    .getCaptcha{
      width: 200rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      line-height: 80rpx;
      border-radius: 40rpx;
      background-color: #c20c0c;
      &:disabled {
        opacity: 0.7;
      }
    }
  }
  .loginBtn{
    border-radius: 60rpx;
    background-color: #c20c0c;
  }
}
</style>