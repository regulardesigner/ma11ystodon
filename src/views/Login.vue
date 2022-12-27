<template>

  <Header search='Login' />

  <section class="container">
    <h1 class="heading">Login to your Mastodon account:</h1>
    <p class="medium text--color-light">Please enter your instance url</p>
    <form @submit.prevent="handleUserLogin">
      <input v-model="instanceUrl" type="text" />
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

  mounted () {
  },

  methods: {
    handleUserLogin() {
      console.log('User Login', this.instanceUrl)

      const uri = `https://${this.instanceUrl}/oauth/authorize?client_id=${process.env.VUE_APP_CLIENT_ID}&response_type=code&scope=read+read:accounts+write+follow+push&redirect_uri=${process.env.VUE_APP_URI}`
      
      console.log('test user auth', uri)
      window.location.assign(uri)
    },
  },
}
</script>