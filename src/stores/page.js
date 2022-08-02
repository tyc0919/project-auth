import { defineStore } from 'pinia'

export const usePageStore = defineStore('counter', {
  state: () => ({ page: 'None' }),
  getters: {
    current: (state) => { return state.page },
  },
  actions: {
    mainPage() {
      this.page = 'main'
    },
    signinPage(){
      this.page = 'signin'
    },
    signupPage(){
      this.page = 'signup'
    },
  },
})