import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/artist/:id',
    name: 'artist',
    component: defineAsyncComponent({
      loader: () => import('@/modules/artist/views/ArtistView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
