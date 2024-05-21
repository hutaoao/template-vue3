import {defineStore} from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {collapsed: false}
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    toggle() {
      this.collapsed = !this.collapsed
    },
  },
})