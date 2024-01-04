import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from "axios";

// axios.defaults.baseURL = "http://192.168.43.176:8080/api";
axios.defaults.baseURL = "http://localhost:8080/api";
// axios.defaults.baseURL =
// 	"https://backend-penilaian-production.up.railway.app/api";
const app = createApp(App);

app.use(router); // Use the router
app.use(store);

app.config.globalProperties.axios = axios; // axios

app.mount("#app");
