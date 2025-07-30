import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/UI/UITabs/types.ts';

export enum AlbumTabsEnum {
  PROFILE = 'Profile',
  APPEARANCE = 'Appearance',
  TRACKS = 'Tracks',
  SETTINGS = 'Settings',
}

export const albumTabs: UITabsItem[] = [
  { value: AlbumTabsEnum.PROFILE, label: AlbumTabsEnum.PROFILE, icon: 'mdi-account' },
  { value: AlbumTabsEnum.APPEARANCE, label: AlbumTabsEnum.APPEARANCE, icon: 'mdi-brush' },
  {
    value: AlbumTabsEnum.TRACKS,
    label: AlbumTabsEnum.TRACKS,
    icon: 'mdi-music',
  },
  {
    value: AlbumTabsEnum.SETTINGS,
    label: AlbumTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const albumTabComponents = {
  [AlbumTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/AlbumSettings/components/AlbumProfileSettings/AlbumProfileSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [AlbumTabsEnum.APPEARANCE]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/AlbumSettings/components/AlbumAppearanceSettings/AlbumAppearanceSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [AlbumTabsEnum.TRACKS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/AlbumSettings/components/AlbumTracksSettings/AlbumTracksSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [AlbumTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/AlbumSettings/components/AlbumCommonSettings/AlbumCommonSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
