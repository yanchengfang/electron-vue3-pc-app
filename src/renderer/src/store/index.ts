import { defineStore } from "pinia"

export const useStore = defineStore('counter', {
  state: () => {
    return {
      count: 20
    }
  },
  getters: {

  },
  actions: {
    changeCount(val) {
      if (val === 'add') {
        this.count ++
      } else {
        this.count --
      }
    }
  }
})