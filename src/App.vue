<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/weather">Weather</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Weather from "./views/Weather.vue";
export default {
  components: {
    Home,
    Weather,
  },
};
</script>
