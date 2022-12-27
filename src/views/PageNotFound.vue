<template>

  <Header />

  <section class="container">
    <h1 class="heading">Oh! The page you're looking for isn't found!</h1>
    <p class="large text--color-light">
      <router-link :to="{ name: 'home' }">Let's go back to the home page them.</router-link>
    </p>
  </section>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header,
  },
}
</script>
