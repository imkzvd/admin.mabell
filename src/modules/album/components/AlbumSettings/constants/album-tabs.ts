import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/UI/UITabs/types.ts';

export enum AlbumTabsEnum {
  DETAILS = 'Details',
  APPEARANCE = 'Appearance',
  TRACKS = 'Tracks',
  SETTINGS = 'Settings',
}

export const albumTabs: UITabsItem[] = [
  { value: AlbumTabsEnum.DETAILS, label: AlbumTabsEnum.DETAILS, icon: 'mdi-pencil' },
  { value: AlbumTabsEnum.APPEARANCE, label: AlbumTabsEnum.APPEARANCE, icon: 'mdi-auto-fix' },
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
  [AlbumTabsEnum.DETAILS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/album/components/AlbumSettings/components/AlbumDetailsSettings/AlbumDetailsSettings.vue'
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
