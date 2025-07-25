import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/presenters/UI/UITabs/types.ts';

export enum TrackSettingsTabsEnum {
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

export const trackSettingsTabs: UITabsItem[] = [
  {
    value: TrackSettingsTabsEnum.PROFILE,
    label: TrackSettingsTabsEnum.PROFILE,
    icon: 'mdi-account',
  },
  {
    value: TrackSettingsTabsEnum.SETTINGS,
    label: TrackSettingsTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const trackSettingsTabComponents = {
  [TrackSettingsTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/TrackSettings/components/TrackProfileSettings/TrackProfileSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [TrackSettingsTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/TrackSettings/components/TrackCommonSettings/TrackCommonSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
