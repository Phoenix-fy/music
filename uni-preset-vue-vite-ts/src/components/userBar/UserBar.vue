<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['show'])
const emits = defineEmits(['update:show'])
const userDrawer = ref(null)

watchEffect(() => {
  if (props.show) {
    userDrawer.value?.open()
  } else {
    userDrawer.value?.close()
  }
})

const change = (e: boolean) => {
  if (!e) {
    emits('update:show', false)
  }
}

const gologin = () => {
  uni.navigateTo({
    url: '/pages/login/login'
  })
}
</script>

<template>
  <view class="barList">
		<uni-drawer ref="userDrawer" mode="left" :mask-click="true" @change="change" :width="300">
			<scroll-view style="height: 100%;" scroll-y="true">
				<view class="cardlogin">
          <uni-icons type="person" size="20" class="useCard" color="#e5dfdf"></uni-icons>
          <view class="imd" @click="gologin">立即登录</view><uni-icons type="forward" size="20" color="#e5dfdf"></uni-icons>
        </view>
        <view class="music-card">
          <view class="card">
            <view class="card-number">网易云音乐会员卡</view>
            <view class="expiry-date">黑胶VIP</view>
            <view class="member-benefits">尊享会员特权</view>
          </view>
          <button>优惠购买</button>
        </view>
        <uni-section class="group">
          <uni-group mode="card">
            <view class="msg">我的消息</view>
            <view class="msg">云贝中心</view>
            <view class="msg">装扮中心</view>
            <view class="msg">创作者中心</view>
          </uni-group>
          <uni-group mode="card">
            <view class="msg">我的客服</view>
            <view class="msg">我的订单</view>
            <view class="msg">优惠券</view>
            <view class="msg">分享网易云音乐</view>
            <view class="msg">个人信息与隐私</view>
            <view class="msg">关于</view>
            <view class="msg">设置</view>
            <view class="msg">登录</view>
          </uni-group>
        </uni-section>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<style lang="scss" scoped>
.barList{
  box-sizing: border-box;
}
.scroll-view{
  width: 100%;
  // position: relative;
}
.cardlogin{
  height: 100rpx;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20rpx;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #242424;
  .useCard{
    border-radius: 50%;
    padding: 8rpx;
    background-color: #c20c0c;
  }
  .imd{
    margin-left: 20rpx;
    font-weight: 600;
    color: #e5dfdf;
  }
}
.music-card {
  box-sizing: border-box;
  width: 560rpx;
  background-image: linear-gradient(to bottom right,  #251f1f, #605050);
  border-radius: 20rpx;
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
  margin: 120rpx auto 0;
  padding: 40rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: #ecc3ba;
  button{
    height: 60rpx;
    font-size: 12px;
    margin-left: 40rpx;
    border-radius: 40rpx;
    background-image: linear-gradient(to right,  #f4bdac, #fad4c3);
    color: #5e4f4d;
    line-height: 60rpx;
    font-weight: 600;
  }
}
.card{
  font-size: 14px;
  .card-number{
    font-size: 18px;
    font-weight: 700;
  }
  .expiry-date{
    margin-top: 20rpx;
  }
}
.group{
  .msg{
    line-height: 80rpx;
    border-bottom: 2rpx solid #f4f2f2;
  }
}
.uni-section, .uni-section-header{
  padding: 0;
}
.uni-section .uni-section-header{

}

</style>