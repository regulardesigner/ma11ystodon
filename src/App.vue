<template>
  <router-view/>
</template>

<script>
export default {
  async mounted () {
    this.getAppToken();
  },

  methods: {
    getAppToken() {
      this.$axios.post('https://mastodon.social/oauth/token', {
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        grant_type: process.env.VUE_APP_GRANT_TYPE,
        redirect_uri: "urn:ietf:wg:oauth:2.0:oob"
      }).then(resp => this.addTokenToLocalStorage(resp.data))
    },

    addTokenToLocalStorage(token) {
        localStorage.access_token = token.access_token
        localStorage.scope = token.scope
        localStorage.token_type = token.token_type
    }
  },
}
</script>