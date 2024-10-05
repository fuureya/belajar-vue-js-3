import Dashboard from "@/views/Dashboard.vue";
import Products from "@/views/Products.vue";
import User from "@/views/User.vue";
import UserDetail from "@/views/UserDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/user/:params",
    component: UserDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
