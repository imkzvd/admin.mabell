import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/modules/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import { routes as adminsRoutes } from '@/modules/admin/routes';
import { routes as artistsRoutes } from '@/modules/artist/routes';
import { routes as albumsRoutes } from '@/modules/album/routes';
import { routes as usersRoutes } from '@/modules/user/routes';
import { routes as authRoutes } from '@/modules/auth/routes';
import { routes as playlistRoutes } from '@/modules/playlist/routes';
import NotFoundView from '@/shared/views/NotFoundView.vue';
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts';

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
        ...playlistRoutes,
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: NotFoundView,
        },
      ],
    },
    {
      path: '/',
      component: EmptyLayout,
      children: [...authRoutes],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated, profile } = useAuthStore();

  // Если на страницу login
  if (to.name === 'login') {
    if (!isAuthenticated.value && !profile.value) {
      return next(); // Разрешаем доступ
    }

    if (isAuthenticated.value && !profile.value) {
      return next({ name: 'authorization' }); // Переход к авторизации, если есть только обычная аутентификация
    }

    return next(); // Если уже аутентифицирован и с профилем администратора, на главную
  }

  // Если на страницу authorization
  if (to.name === 'authorization') {
    if (!isAuthenticated.value && !profile.value) {
      return next({ name: 'login' }); // Направляем на login, если не аутентифицирован
    }

    return next();
  }

  // Для всех остальных маршрутов
  if (!isAuthenticated.value && !profile.value) {
    return next({ name: 'login', query: { redirect: to.fullPath } }); // Перенаправление на login с сохранением пути
  }

  if (isAuthenticated.value && !profile.value) {
    return next({ name: 'authorization', query: { redirect: to.fullPath } }); // Перенаправление на authorization
  }

  if (isAuthenticated.value && profile.value) {
    return next(); // Разрешаем доступ, если есть профиль администратора
  }

  return next(); // Если не подошло ни одно условие, разрешаем доступ
});

export default router;
