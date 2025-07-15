import AuthorizationView from '@/features/auth/views/AuthorizationView.vue';
import LoginView from '@/features/auth/views/LoginView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: AuthorizationView,
  },
];
