import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutPage from "../views/AboutPage.vue";
import HomePage from "../views/HomePage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
