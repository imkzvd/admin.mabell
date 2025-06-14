import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/user/:id',
    name: 'user',
    component: defineAsyncComponent({
      loader: () => import('../views/UserView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
