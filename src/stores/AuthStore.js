import { defineStore } from "pinia"

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: 'anónimo'
  }),
  getters: {
    userName() {
      return this.user
    }
  },
  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = undefined
    }
  }
})