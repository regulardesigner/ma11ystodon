<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>
      <label for="fedivers">Your Masto Server:</label>
      <input type="text" name="fedivers" :v-model="server" id="" />
      <label for="token">Your Masto token:</label>
      <input type="text" name="token" :v-model="token" id="" />
      <button @click.prevent="getConnected">connect</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      server: undefined,
      token: undefined,
    };
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
