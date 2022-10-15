<template>
  <div>
    <top-navbar/>
  </div>
  <router-view/>
</template>

<script>
import Home from "./views/Home.vue";
import Weather from "./views/Weather.vue";
import topNavbar from "./components/TopNavbar.vue";

export default {
  components: {
    Home,
    Weather,
    topNavbar,
  },
};
</script>
