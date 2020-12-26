import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/Home.vue";
import About from "../components/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
