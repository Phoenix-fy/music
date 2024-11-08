<script lang="ts" setup>
import { onBeforeMount, ref } from "vue"
import { useRouter } from 'vue-router'
import { getQrKeyApi, getQrDataApi, getQrStatusApi } from "@/services"
import { useUserStore } from "@/store/user"

const router = useRouter()
const use = useUserStore()

use.getUserDetail()
// 二维码图片
const qrimg = ref('')
// 二维码key
const unikey = ref('')
// 二维码状态
const qrStatus = ref('')
// 二维码状态
const qrCode = ref<number>()
// 二维码返回值
let timer: any = null

// 轮询二维码
const check = () => {
  timer = setInterval(async () => {
    const res = await getQrStatusApi(unikey.value)
    // console.log(res.data.code)
    qrCode.value = res.data.code
    // 二维码过期
    if( qrCode.value === 800){
      qrStatus.value = '已过期，点击重新获取'
      clearInterval(timer)
      // 等待扫码
    } else if (qrCode.value === 801) {
      // 等待确认
    } else if (qrCode.value === 802) {
      qrStatus.value = '等待确认'
      // 扫码成功
    } else if (qrCode.value === 803) {
      qrStatus.value = '扫码成功'
      // 成功将cookie存本地
      uni.setStorageSync('curCookie', res.data.cookie)
      // 获取用户信息
      use.getAccount()
      uni.showToast({
        title: '登录成功',
        icon: 'success'
      })
      clearInterval(timer)
      setTimeout(() => {
        uni.switchTab({
          url: '/pages/index/index'
        })
      }, 1000)
    }  
  }, 2000)
}

const getQR = async () => {
  // 获取二维码key
  const resKey = await getQrKeyApi()
  // console.log(resKey.data.data.unikey)
  unikey.value = resKey.data.data.unikey
  // 创建二维码
  const createQr = await getQrDataApi(unikey.value)
  // console.log(createQr.data.data.qrimg)
  qrimg.value = createQr.data.data.qrimg
  // 轮询二维码
  check()
}
getQR()

// 如果二维码过期
const qred = () => {
  if (qrCode.value === 800) {
    qrCode.value = null
    getQR()
  }
}

// 销毁定时器
onBeforeMount(() => {
  clearInterval(timer)
})
</script>

<template>
  <view class="header">
    <view class="head">
      <uni-icons type="left" color="#fff" size="30" @click="router.back()"></uni-icons>
      <text>登录</text>
      <uni-icons type="search" size="30" color="#fff"></uni-icons>
    </view>
  
    <view class="login">
      <view class="qr-box">
        <image :src="qrimg" mode="widthFix"></image>
        <text>扫码登录</text>
        <view class="qr-code" v-if="qrCode !== null && qrCode !== 801" @click="qred">{{ qrStatus }}</view>
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
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom right,  #1E1F20, #c20c0c);
  .qr-box{
    width: 500rpx;
    height: 600rpx;
    position: relative;
    margin-top: 200rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    image{
      width: 500rpx;
      height: 500rpx;
      background-color: #c20c0c;
      // margin-top: 100rpx;
    }
    text{
      color: #fff; 
      margin-top: 40rpx; 
      font-size: 18px;
    }
    .qr-code{
      position: absolute;
      top: 0;
      left: 0;
      width: 500rpx;
      height: 500rpx;
      background: rgba($color: #ffffff, $alpha: .8);
      text-align: center;
      line-height: 500rpx;
      font-size: 20px;
    }
  }
}
</style>