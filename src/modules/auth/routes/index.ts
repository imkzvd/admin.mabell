import AuthorizationView from '@/modules/auth/views/AuthorizationView.vue';
import LoginView from '@/modules/auth/views/LoginView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/auth',
    name: 'authorization',
    component: AuthorizationView,
  },
];
