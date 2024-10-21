import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "@/components/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // 异步组件
  // {
  //   path: "/Home",
  //   name: "Home",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/components/Home/Home.vue")
  // }
];

// 读取vite.config.ts的base
const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes
});

export default router;
