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
    component: () => import("../views/example/v-if.vue"),
  },
  {
    path: "/v-for",
    name: "v-for",
    component: () => import("../views/example/v-for.vue"),
  },
  {
    path: "/v-text",
    name: "v-text",
    component: () => import("../views/example/v-text.vue"),
  },
  {
    path: "/v-model",
    name: "v-model",
    component: () => import("../views/example/v-model.vue"),
  },
  {
    path: "/v-on",
    name: "v-on",
    component: () => import("../views/example/v-on.vue"),
  },
  {
    path: "/v-bind",
    name: "v-bind",
    component: () => import("../views/example/v-bind.vue"),
  },
  {
    path: "/v-pre",
    name: "v-pre",
    component: () => import("../views/example/v-pre.vue"),
  },
  {
<<<<<<< HEAD
    path: "/extend",
    name: "extend",
    component: () => import("../views/ex3/vue.extend.vue"),
  },
  {
    path: "/set",
    name: "set",
    component: () => import("../views/ex3/vue.set.vue"),
=======
    path: "/directive",
    name: "directive",
    component: () => import("../views/example2/vue.directive.vue"),
>>>>>>> 43defd3df17ae7d3a9bf054e995a2dd18abc37d6
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
