import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./views/Home.vue");
const Weather = () => import("./views/Weather.vue");


export default createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/weather",
      component: Weather,
    },
  ],
  history: createWebHistory(),
});
