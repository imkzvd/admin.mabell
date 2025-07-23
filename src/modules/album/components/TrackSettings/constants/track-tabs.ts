import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/presenters/UI/UITabs/types.ts';

export enum TrackTabsEnum {
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

export const trackTabs: UITabsItem[] = [
  { value: TrackTabsEnum.PROFILE, label: TrackTabsEnum.PROFILE, icon: 'mdi-account' },
  {
    value: TrackTabsEnum.SETTINGS,
    label: TrackTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const trackTabComponents = {
  [TrackTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () => import('../components/TrackProfileSettings/TrackProfileSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [TrackTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () => import('../components/TrackCommonSettings/TrackCommonSettings.vue'),
    loadingComponent: UISpinner,
  }),
};
