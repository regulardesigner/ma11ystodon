<template>
  <router-view/>
</template>

<script>
export default {
  mounted () {
    this.getAppToken()
  },

  methods: {
    getAppToken() {
      this.$axios.post('/oauth/token', {
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        grant_type: process.env.VUE_APP_GRANT_TYPE,
        redirect_uri: process.env.VUE_APP_URI,
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