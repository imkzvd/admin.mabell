import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/albums',
    name: 'albums',
    component: defineAsyncComponent({
      loader: () => import('../views/AlbumsView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
  {
    path: '/album/:id',
    name: 'album',
    component: defineAsyncComponent({
      loader: () => import('../views/AlbumView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
