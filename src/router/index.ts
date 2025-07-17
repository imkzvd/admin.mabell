import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/features/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import { routes as adminsRoutes } from '@/features/admins/routes';
import { routes as artistsRoutes } from '@/features/artists/routes';
import { routes as albumsRoutes } from '@/features/albums/routes';
import { routes as usersRoutes } from '@/features/users/routes';
import { routes as authRoutes } from '@/features/auth/routes';
import { useAuth } from '@/features/auth/composables/useAuth.ts';

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
    {
      path: '/',
      component: EmptyLayout,
      children: [...authRoutes],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated, profile } = useAuth();

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

    return next(); // Разрешаем переход, если есть аутентификация или админ профиль
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
