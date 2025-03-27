import { defineStore } from "pinia";

export default defineStore('locale',{
  state:() => ({
    locale: "en",
    name: "English",
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
    changeLocale(locale, name){
      this.locale = locale
      this.name = name
    }
  },
})
