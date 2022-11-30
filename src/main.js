import { createApp } from "vue";
import axios from "axios";
import router from "./router";

import Default from "./App.vue";

const app = createApp(Default);

const axiosInstance = axios.create({
  baseURL: 'https://mastodon.social',
  withCredentials: false
});

app.config.globalProperties.$axios = { ...axiosInstance };

app.use(router)

app.mount("#app");
