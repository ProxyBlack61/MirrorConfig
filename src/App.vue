<template>
  <v-app>
    <v-main>
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
