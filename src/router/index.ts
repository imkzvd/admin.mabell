import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/features/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { routes as adminsRoutes } from '@/features/admins/routes';

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
        ...adminsRoutes,
      ],
    },
  ],
});

export default router;
