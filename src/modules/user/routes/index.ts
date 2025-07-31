import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/user/:id',
    name: 'user',
    component: defineAsyncComponent({
      loader: () => import('@/modules/user/views/UserView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
  {
    path: '/user/mabell',
    name: 'mabell',
    component: defineAsyncComponent({
      loader: () => import('@/modules/user/views/MabellUserView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
