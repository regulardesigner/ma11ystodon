import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import router from "./router";

import Default from "./App.vue";

const app = createApp(Default);
const pinia = createPinia()

const axiosInstance = axios.create({
  baseURL: 'https://disabled.social',
  withCredentials: false
});

console.log('ENV', process.env.VUE_AXIOS_BASE_URL)

if (localStorage.auth_code) {
  axiosInstance.defaults.headers.common = {'Authorization': `Bearer ${localStorage.auth_code}`}
}

app.config.globalProperties.$axios = { ...axiosInstance };

app.use(pinia)
app.use(router)
app.mount("#app");
