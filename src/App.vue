<template>
  <header>
    <h1 class="heading">Ma11ystodon</h1>

    <div class="switch">
      <input type="checkbox" name="switch" id="switch">
      <label for="switch">Color theme inverter</label>
    </div>
  </header>
  
  <span class="is-loading" v-if="isLoading">loading #a11y toots…</span>

  <article tabindex="0" class="toot" v-for="toot in toots" :key="toot.id">
    <header class="user-header">
      <img class="avatar" width="32" height="32" :src="toot.account.avatar_static" :alt="toot.account.username"><strong>{{toot.account.display_name || toot.account.username}}</strong> - @{{toot.account.username}}
    </header>
    <div class="large" v-html="toot.content"></div>

    <figure v-if="toot.media_attachments.length != 0 && toot.media_attachments[0].type === 'image'">
      <img class="attachment-image" :src="toot.media_attachments[0].preview_url" :alt="toot.media_attachments[0].description">
      <figcaption class="medium">{{ toot.media_attachments[0].description }}</figcaption>
    </figure>
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
      "/api/v1/timelines/tag/a11y?limit=40"
    ).then(resp => {
      this.toots = resp.data
      this.isLoading = false
    });

  },
};
</script>

<style>
html {
  font-size: 62.5%;
}

body {
  --background-color: #0e302a;
  --text-color: #f8ff99;
  font-size: 1rem;
  background-color: var(--background-color);
}

body:has(input[type="checkbox"]:checked) {
   --background-color: #f1f6a5;
   --text-color: #2b584f;
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


.heading {
  font-size: 2.4rem;
  color: var(--text-color);
  margin: 0;
}

a {
  color: var(--text-color);
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
  border: 2px solid var(--text-color);
  border-radius: .5rem;
  padding: 1rem;
  margin-block: 1rem;
  line-height: 2rem;
}

.avatar {
  border-radius: 2rem;
  margin-right: 0.6rem;
  outline-color: var(--text-color);
  outline-style: solid;
  outline-width: 0.1rem;
  outline-offset: 0.3rem;
}

figure {
  line-height: 1rem;
  border-radius: 0.5rem;
  background-color: var(--text-color);
  overflow: hidden;
  margin: 0;
}

figcaption {
  padding: 0 0.6rem;
  color: var(--background-color);
}

.attachment-image {
  width: 100%;
  height: auto;
}

.medium {
  font-size: 1.6rem;
  line-height: 2.6rem;
}

.large {
  color: var(--text-color);
  font-size: 2.2rem;
  line-height: 3.2rem;
}

.is-loading {
  color: var(--text-color);
  margin: 0 auto;
  display: block;
  position: absolute;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  top: 45vh;
}

.user-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--text-color);
  font-size: 1.6rem;
}
</style>
