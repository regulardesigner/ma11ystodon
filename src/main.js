import { createApp } from "vue";
import axios from "axios";

import Default from "./App.vue";

const app = createApp(Default);

const axiosInstance = axios.create({
  baseURL: 'https://mastodon.social',
  withCredentials: false
});

app.config.globalProperties.$axios = { ...axiosInstance };

app.mount("#app");
