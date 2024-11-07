import { defineStore } from 'pinia'
import { loginStatusApi } from '@/services'

export const useUserStore = defineStore('user',() => {
  const account = ref(null)
  
  const getAccount = async () => {
    const res = await loginStatusApi()
  }
  
  return {
    account,
    getAccount
  }
})