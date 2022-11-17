<template>
  <h1>Ma11ystodon</h1>
  <article class="toot" v-for="toot in toots" :key="toot.id">
    <header><img class="avatar" width="32" height="32" :src="toot.account.avatar_static" :alt="toot.account.username"><strong>{{toot.account.display_name || toot.account.username}}</strong> - @{{toot.account.username}}</header>
    <p class="large" v-html="toot.content"></p>
  </article>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      toots: [],
    };
  },

  async mounted() {
    const resp = await this.$axios.get(
      "/api/v1/timelines/tag/a11y"
    );

    this.toots = resp.data;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.625;
  color: #2c3e50;
}

.toot {
  border: 1px solid #2c3e50;
  border-radius: .5rem;
  padding: 1rem;
  margin-block: 1rem;
}

.avatar {
  border-radius: 0.2rem;
  margin-right: 0.6rem;
}

.large {
  font-size: 1.4rem;
}
</style>
