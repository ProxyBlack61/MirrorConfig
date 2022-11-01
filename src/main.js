import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./plugins/i18n";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueGoogleMaps from "vue-google-maps-community-fork";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App)
  .use(router)
  .use(i18n)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBGBbrFcx0b-Nx59ieQIcOLGaU_PCLTBBo",
      libraries: "places",
    },
  })
  .use(vuetify)
  .mount("#app");
