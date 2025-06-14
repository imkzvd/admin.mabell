import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/features/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { routes as adminsRoutes } from '@/features/admins/routes';
import { routes as artistsRoutes } from '@/features/artists/routes';
import { routes as albumsRoutes } from '@/features/albums/routes';
import { routes as usersRoutes } from '@/features/users/routes';

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
        ...artistsRoutes,
        ...albumsRoutes,
        ...usersRoutes,
      ],
    },
  ],
});

export default router;
