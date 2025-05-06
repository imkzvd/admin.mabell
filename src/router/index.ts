import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/features/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/admins',
          name: 'admins',
          component: () => import('@/features/admins/AdminsView.vue'),
        },
      ],
    },
  ],
});

export default router;
