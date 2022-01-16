import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import HomePage from "../views/HomePage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
