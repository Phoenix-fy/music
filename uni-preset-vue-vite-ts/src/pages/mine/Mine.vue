<script lang="ts" setup>
import { useUserStore } from "@/store/user"
import { userPlaylistApi } from '@/services/index'
import { ref, watchEffect } from "vue"
import UserBar from "../../components/userBar/UserBar.vue";

const store = useUserStore()
const palylist = ref([])
const showLeft = ref(false)
store.getAccount()
// store.getUserDetail()

watchEffect(async () => {
  if (store.account?.id) {
    const res = await userPlaylistApi(store.account.id)
    console.log(res.data)
    // playlist.value = res.playlist
  }
})

</script>

<template>
  <UserBar v-model:show="showLeft"></UserBar>
  <view class="gologin">
    <view class="head">
      <uni-icons type="bars" color="#fff" size="30" @click="showLeft = true"></uni-icons>
      <text>登录</text>
      <uni-icons type="search" size="30" color="#fff"></uni-icons>
    </view>
    <view class="btn" >
      <navigator url="/pages/login/login">
        <button>去登录</button>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.gologin{
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
// .header {
//     height: 450rpx;
//     overflow: hidden;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//   }
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