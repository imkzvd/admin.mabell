import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/admins',
    name: 'admins',
    component: defineAsyncComponent({
      loader: () => import('@/modules/admin/views/AdminsView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
  {
    path: '/admin/:id',
    name: 'admin',
    component: defineAsyncComponent({
      loader: () => import('@/modules/admin/views/AdminView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
