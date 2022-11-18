<template>
  <h1>Ma11ystodon</h1>
  
  <span class="is-loading" v-if="isLoading">loading #a11y toots…</span>

  <article class="toot" v-for="toot in toots" :key="toot.id">
    <header class="user-header">
      <img class="avatar" width="32" height="32" :src="toot.account.avatar_static" :alt="toot.account.username"><strong>{{toot.account.display_name || toot.account.username}}</strong> - @{{toot.account.username}}
    </header>
    <p class="large" v-html="toot.content"></p>
  </article>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      toots: [],
      isLoading: true,
    };
  },

  async mounted() {
    await this.$axios.get(
      "/api/v1/timelines/tag/a11y"
    ).then(resp => {
      this.toots = resp.data
      this.isLoading = false
    });

  },
};
</script>

<style>
body {
  font-size: 0.625;
  background-color: #2b584f;
  color: #f1f6a5
}

a {
  color: #f1f6a5;
  font-weight: 500;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.toot {
  border: 2px solid #f1f6a5;
  border-radius: .5rem;
  padding: 1rem;
  margin-block: 1rem;
  line-height: 2rem;
}

.avatar {
  border-radius: 2rem;
  margin-right: 0.6rem;
  outline-color: #f1f6a5;
  outline-style: solid;
  outline-width: 0.1rem;
  outline-offset: 0.3rem;
}

.large {
  font-size: 1.4rem;
}

.is-loading {
  position: absolute;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  width: 100vw;
  top: 45vh;
}

.user-header {
  display: flex;
}
</style>
