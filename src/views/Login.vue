<template>

  <Header search='Login' />

  <section class="container">
    <h1 class="heading">Login to your Mastodon account:</h1>
    <p class="medium text--color-light">Please enter your instance url</p>
    <form @submit.prevent="handleUserLogin">
      <input v-model="instanceUrl" type="url" name="url" placeholder="https://mastodon.example" pattern="https://.*" required />
      <button type="submit">submit</button>
    </form> 
  </section>
</template>

<script>
import Header from '../components/Header'

export default {
  data() {
    return {
      instanceUrl: '',
    }
  },

  components: {
    Header,
  },

  methods: {
    handleUserLogin() {
      
      const requestUrl = new URL('/oauth/authorize', this.instanceUrl)
      
      const params = {
        client_id: process.env.VUE_APP_CLIENT_ID,
        response_type: 'code',
        scope: 'read+write+follow+push',
        redirect_uri: process.env.VUE_APP_URI,
      }

      const queryParams = new URLSearchParams(params)

      window.location.assign(requestUrl + '?' + queryParams)
    },
  },
}
</script>