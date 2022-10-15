import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./plugins/i18n";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).use(i18n).mount("#app");
