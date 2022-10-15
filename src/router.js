import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./views/Home.vue");
const Weather = () => import("./views/Weather.vue");
const Calendar = () => import("./views/Calendar.vue");
const Clock = () => import("./views/Clock.vue");
const HelloWord = () => import("./views/HelloWorld.vue");
const NewsFeed = () => import("./views/NewsFeed.vue");

export default createRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather,
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar,
    },
    {
      path: "/clock",
      name: "Clock",
      component: Clock,
    },
    {
      path: "/helloworld",
      name: "HelloWord",
      component: HelloWord,
    },
    {
      path: "/newsfeed",
      name: "NewsFeed",
      component: NewsFeed,
    },
  ],
  history: createWebHistory(),
});
