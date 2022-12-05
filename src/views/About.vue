<template>

  <Header search='About' />

  <h1 class="heading">About this mastodon client</h1>

  <p class="medium text--color-light">Here some of my update toots about this project.</p>

  <span class="is-loading" v-if="isLoading"><div class="loading"></div>Loading toots…</span>

  <section v-if="!isLoading" class="toots">
    <article class="toot" v-for="toot in toots" :key="toot.id">
    <header class="user-header">
      <img class="avatar" width="32" height="32" :src="toot.account.avatar" :alt="toot.account.username"><strong>{{toot.account.display_name || toot.account.username}}</strong> - @{{toot.account.username}}
    </header>

    <div class="large" v-html="toot.content"></div>

    <figure v-if="toot.media_attachments.length != 0 && toot.media_attachments[0].type === 'image'">
      <img class="attachment-image" :src="toot.media_attachments[0].preview_url" :alt="toot.media_attachments[0].description">
      <figcaption class="medium">{{ toot.media_attachments[0].description }}</figcaption>
    </figure>
  </article>
  </section>
</template>

<script>
import Header from '../components/Header'

export default {
  data() {
    return {
      toots: undefined,
      isLoading: true,
    }
  },

  components: {
    Header,
  },

  mounted () {
    this.getMyMastodonStatus()
  },

  methods: {
    //https://mastodon.example/api/v1/accounts/:id/statuses
    async getMyMastodonStatus() {
      const myUserId = '109389638020491291'

      await this.$axios.get(
        `https://mastodon.social/api/v1/accounts/${myUserId}/statuses?tagged=MyMastodonCLI`
      ).then(resp => {
        this.toots = resp.data
        this.isLoading = false
      });
    },
  },
}
</script>