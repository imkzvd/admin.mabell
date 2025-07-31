import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/UI/UITabs/types.ts';

export enum TrackSettingsTabsEnum {
  DETAILS = 'Details',
  SETTINGS = 'Settings',
}

export const trackSettingsTabs: UITabsItem[] = [
  {
    value: TrackSettingsTabsEnum.DETAILS,
    label: TrackSettingsTabsEnum.DETAILS,
    icon: 'mdi-pencil',
  },
  {
    value: TrackSettingsTabsEnum.SETTINGS,
    label: TrackSettingsTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const trackSettingsTabComponents = {
  [TrackSettingsTabsEnum.DETAILS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/track/components/TrackManager/components/TrackSettings/components/TrackDetailsSettings/TrackDetailsSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [TrackSettingsTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/track/components/TrackManager/components/TrackSettings/components/TrackCommonSettings/TrackCommonSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
