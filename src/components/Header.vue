<template>
  <header class="mallystodon">  
    <h1 class="heading">
      <router-link :to="{ name: 'home' }">Ally <sup class="small">for Mastodon</sup></router-link>
      <span>
        | <router-link class="medium" :to="{ name: 'about' }">About</router-link>
      </span>
    </h1>

    <div class="switch">
      <input type="checkbox" :checked="userSettings.getThemeSetting" @change="userSettings.themeSwitcher()" name="switch" id="switch">
      <label for="switch">Color theme inverter</label>
    </div>
  </header>
</template>

<script>
import { useUserSettingsStore } from '@/stores/UserSettingsStore';

export default {
  setup() {

    const userSettings = useUserSettingsStore()

    return {
      userSettings,
    }
  },

  props: {
    search: {
      type: String,
      default: ''
    },

    checked: {
      type: Boolean,
      default: false
    }
  },
}
</script>


<style>
header.mallystodon {
  display: flex;
  margin-bottom: 2.4rem;
  justify-content: space-between;
}

.switch {
  padding: 0.6rem;
  display: inline-flex;
  border-radius: 0.3rem;
  flex-direction: row;
  align-items: center;
  background-color: var(--text-color);
  color: var(--background-color);
}

.switch input#switch {
  margin: 0 0.4rem 0 0;
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
}

.switch label {
  font-size: 1.4rem;
}
</style>