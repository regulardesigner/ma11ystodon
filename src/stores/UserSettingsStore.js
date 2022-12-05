import { defineStore } from "pinia";

export const useUserSettingsStore = defineStore("UserSettingStore", {
  state: () => ({
    switchTheme: false,
  }),

  getters: {
    getThemeSetting: (state) => {
      return state.switchTheme;
    }
  },

  actions: {
    themeSwitcher() {
      this.switchTheme = !this.switchTheme
    }
  }
})