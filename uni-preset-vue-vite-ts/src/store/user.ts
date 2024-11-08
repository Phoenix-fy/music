import { defineStore } from 'pinia'
import { loginStatusApi,userDetailApi } from '@/services'
import { ref } from 'vue'

export const useUserStore = defineStore('user',() => {
  const detail = ref([])
  const account = ref([])

  const getUserDetail = async () => {
    const res = await userDetailApi(account.value.id)
    console.log(res)
    detail.value = {
      ...res.profile,
      level: res.level,
      listenSongs: res.listenSongs,
      createDays: res.createDays,
    }
    console.log(detail.value)
  }
  
  const getAccount = async () => {
    const res = await loginStatusApi()
    // console.log(res.data)
    account.value = res.data.data.account
    if( res.data.data.account ) {
      getUserDetail()
    }
    console.log(account.value)
  }
  
  return {
    account,
    getAccount,
    detail,
    getUserDetail
  }
})