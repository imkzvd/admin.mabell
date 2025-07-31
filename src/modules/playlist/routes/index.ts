import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: defineAsyncComponent({
      loader: () => import('@/modules/playlist/views/PlaylistView.vue'),
      loadingComponent: () => h(UISpinner, { isCentered: true }),
    }),
  },
];
