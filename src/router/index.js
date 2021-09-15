import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/v-if",
    name: "v-if",
    component: () =>
      import("../views/example/v-if.vue"),
  },
  {
    path: "/v-for",
    name: "v-for",
    component: () =>
      import("../views/example/v-for.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
