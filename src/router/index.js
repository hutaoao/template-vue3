import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '@/views/layout/index.vue';
import {menus} from "./menus.js";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: Layout,
      children: [...menus]
    },
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title;
})

export default router
