import { defineStore } from "pinia"
import { useUserStore } from './useUserStore'

export const useStore = defineStore('counter', {
  state: () => {
    return {
      user: useUserStore() // 用户模块
    }
  },
  getters: {},
  actions: {}
})