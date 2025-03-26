import { defineStore } from "pinia";

export default defineStore('darkmode',{
  state:() => ({
    isDark: true,
  }),
  getters: {
    isEnabledTransition(state) {
      return state.isDark ? "translate-x-9" : "translate-x-0"
    },
    isEnabledStyling(state) {
      return state.isDark ? "bg-gray-500 dark:bg-gray-100" : "bg-gray-800 dark:bg-gray-400"
    },
  },
  actions: {
    getSavedTheme() {
      const savedTheme = localStorage.getItem('theme')
      if(savedTheme === null){
        localStorage.setItem('theme', 'dark')
        return true
      }
      if (savedTheme === "dark") {
        return true
      }
      return false
    },
    initializeTheme(){
      this.isDark = this.getSavedTheme();
      this.applyTheme()
    },
    updateTheme() {
      if (this.isDark) {
        localStorage.removeItem('theme')
      } else {
        localStorage.setItem('theme', this.theme)
      }
      this.applyTheme()
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
    toggleDarkmode(){
      this.isDark = !this.isDark
      this.applyTheme()
    }
  }
})
