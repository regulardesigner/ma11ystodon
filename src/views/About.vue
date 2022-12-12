<template>

  <Header search='About' />

  <section class="container">
    <h1 class="heading">About Ally for Mastodon</h1>
    <p class="medium text--color-light">
      The "Ally for Mastodon" project is a client for the Mastodon social
      network focused on accessibility. It is under development and
      currently only displays the public feed. It aims to offer a more
      user-friendly interface and make reading toots simpler than the
      official Mastodon client, while retaining the core features of this
      social network.
    </p>
    
    <p class="medium text--color-light">
      The project is open to suggestions and will be gradually updated.
    </p>

    <p class="medium text--color-light">Here some toots about this project.</p>
  </section>
  
  <span class="is-loading" v-if="isLoading"><div class="loading"></div>Loading toots…</span>

  <section v-if="!isLoading" class="container">
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
        `https://mastodon.social/api/v1/accounts/${myUserId}/statuses?tagged=DamsMastCli`
      ).then(resp => {
        this.toots = resp.data
        this.isLoading = false
      });
    },
  },
}
</script>