import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/album/:id',
    name: 'album',
    component: defineAsyncComponent({
      loader: () => import('@/modules/album/views/AlbumView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
