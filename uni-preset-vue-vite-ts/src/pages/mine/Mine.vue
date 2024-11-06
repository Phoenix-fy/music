<script setup>

</script>

<template>
    <view>
      <navigator url="/pages/login/login">
        <button>去登录</button>
      </navigator>
    </view>
    <!-- <template>
      <view class="header">
        <image class="avatar" ></image>
        <view class="nickname">
        </view>
        <view class="desc">
          <view class="desc-tag">
            <text class="bold"></text>关注
          </view>
          <view class="desc-tag">
            <text class="bold"></text>粉丝
          </view>
          <view class="desc-tag">
            <text class="bold"></text>等级
          </view>
          <view class="desc-tag">
            <text class="bold">首</text>听歌
          </view>
        </view>
      </view>
      <uni-list>
        <uni-list-item
        ></uni-list-item>
      </uni-list>
    </template> -->
</template>

<style lang="scss" scoped>
.header {
    height: 450rpx;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .avatar {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    border: 1px solid #ffffff;
    margin: 100rpx auto 20rpx;
    display: block;
  }
  .nickname {
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }
  .desc {
    display: flex;
    justify-content: center;
    color: #cfc4c4;
    font-size: 14px;
    padding: 20rpx 0;
  }
  .desc-tag {
    margin: 0 20rpx;
  }
  .bold {
    font-weight: bold;
    margin-right: 10rpx;
    color: #ffffff;
  }
</style>