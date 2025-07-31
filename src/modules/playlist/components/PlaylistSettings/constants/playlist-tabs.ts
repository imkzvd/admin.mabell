import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/UI/UITabs/types.ts';

export enum PlaylistTabsEnum {
  DETAILS = 'Details',
  APPEARANCE = 'Appearance',
  TRACKS = 'Tracks',
  SETTINGS = 'Settings',
}

export const playlistTabs: UITabsItem[] = [
  { value: PlaylistTabsEnum.DETAILS, label: PlaylistTabsEnum.DETAILS, icon: 'mdi-pencil' },
  { value: PlaylistTabsEnum.APPEARANCE, label: PlaylistTabsEnum.APPEARANCE, icon: 'mdi-auto-fix' },
  {
    value: PlaylistTabsEnum.TRACKS,
    label: PlaylistTabsEnum.TRACKS,
    icon: 'mdi-music',
  },
  {
    value: PlaylistTabsEnum.SETTINGS,
    label: PlaylistTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const playlistTabComponents = {
  [PlaylistTabsEnum.DETAILS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/playlist/components/PlaylistSettings/components/PlaylistProfileSettings/PlaylistProfileSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [PlaylistTabsEnum.APPEARANCE]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/playlist/components/PlaylistSettings/components/PlaylistAppearanceSettings/PlaylistAppearanceSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [PlaylistTabsEnum.TRACKS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/playlist/components/PlaylistSettings/components/PlaylistTracksSettings/PlaylistTracksSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [PlaylistTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/playlist/components/PlaylistSettings/components/PlaylistCommonSettings/PlaylistCommonSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
