import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/artist',
    name: 'artists',
    component: defineAsyncComponent({
      loader: () => import('../views/ArtistsView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: defineAsyncComponent({
      loader: () => import('../views/ArtistView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
