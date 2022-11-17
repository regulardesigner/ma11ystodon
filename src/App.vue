<template>
  <ul>
    <li v-for="toot in toots" :key="toot.id">{{ toot.content }} fucked</li>
  </ul>
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
      "https://mastodon.social/api/v1/timelines/public"
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
