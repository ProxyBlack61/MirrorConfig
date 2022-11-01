<template>
  <div>
    <top-navbar />
  </div>
  <router-view />
</template>

<script>
import topNavbar from "./components/TopNavbar.vue";

export default {
  components: {
    topNavbar,
  },
};
</script>
