import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import BoardGame from "@/components/BoardGame";
//import FormValidate from "../components/FormValidat.vue";
import exampleSocket from "../components/socketeexample.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "boardgame",
    component: BoardGame
  },
  {
    path: "/example",
    name: "exampleSocket",
    component: exampleSocket
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
