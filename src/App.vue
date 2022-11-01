<template>
  <v-app>
    <v-main>
      <!-- TODO: Replace Boostrap 5 completely with Vuetify 3 when it gets out of BETA -->

      <div>
        <top-navbar />
      </div>
      <div style="padding-top: 56px">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import topNavbar from "./components/TopNavbar.vue";

export default {
  name: "App",

  components: {
    topNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
