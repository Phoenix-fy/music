import { defineStore } from 'pinia'
import { loginAccountApi,userDetailApi, userPlaylistApi } from '@/services'
import { ref } from 'vue'

export const useUserStore = defineStore('user',() => {
  const profile = ref([])
  const account = ref([])
  const playlist = ref([])
  const cookie = uni.getStorageSync('curCookie')


  const getUserDetail = async () => {
    try{
      const res = await userDetailApi(account.value.id)
      // console.log(res.data.profile)
      profile.value = {
        ...res.data.profile,
        level: res.data.level,
        listenSongs: res.data.listenSongs,
        createDays: res.data.createDays,
      }
      // console.log(profile.value)
    } catch (e) {
      console.log(e)
    }
    
  }

  // 用户歌单
  const getUserplayList = async () => {
    try{
      const res = await userPlaylistApi(account.value.id)
      // console.log(res.data.playlist)
      playlist.value = res.data.playlist
    } catch (e) {
      console.log(e)
    }   
  }

  
  // 登录状态
  const getAccount = async () => {
    try{
      const res = await loginAccountApi(cookie)
      // console.log(res.data)
      account.value = res.data.account
      if( res.data.account ) {
        getUserDetail()
        getUserplayList()
      }
    } catch (e) {
      console.log(e)
    }
    
  }
  
  return {
    account,
    getAccount,
    profile,
    getUserDetail,
    playlist,
    getUserplayList
  }
})