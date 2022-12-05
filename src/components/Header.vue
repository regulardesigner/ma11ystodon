<template>
  <header class="mallystodon">  
    <h1 class="heading">
      <router-link :to="{ name: 'home' }">{{ `M${search}Stodon` }}</router-link>
      <span>
        | <router-link class="medium" :to="{ name: 'about' }">About</router-link>
      </span>
    </h1>

    <div class="switch">
      <input type="checkbox" :checked="checked" name="switch" id="switch">
      <label for="switch">Color theme inverter</label>
    </div>
  </header>
</template>

<script>
export default {
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