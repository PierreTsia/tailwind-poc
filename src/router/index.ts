import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RoutesParams } from "@/composables/navigation";

const routes: Array<RouteRecordRaw> = RoutesParams.map(([name, path]) => ({
  name,
  path,
  component: () => import(`../views/${name}.vue`)
}));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
