<template>
  <header class="mallystodon">  
    <nav>
      <ul class="navigation">
        <li><h1><router-link  class="heading" name="back to home page" :to="{ name: 'home' }">Ally <sup class="small">for Mastodon</sup></router-link></h1></li>
        <li><router-link class="medium button" :to="{ name: 'about' }">About</router-link></li>
      </ul>
    </nav>
    

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

.navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation h1 {
  margin: 0;
}

.navigation > li {
  display: inline-block;
  padding-right: 1rem;
  margin-right: 1rem;
}

.navigation .button {
  padding: .4rem .6rem;
  border-radius: .5rem;
  color: var(--background-color);
  background-color: var(--text-color);
}
</style>