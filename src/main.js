import { createApp } from "vue";
import axios from "axios";

import Default from "./App.vue";

const app = createApp(Default);

const axiosInstance = axios.create({
  withCredentials: true
});

app.config.globalProperties.$axios = { ...axiosInstance };

app.mount("#app");
