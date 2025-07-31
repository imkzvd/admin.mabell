import type { UITabsItem } from '@/shared/components/UI/UITabs/types.ts';
import UISpinner from '@/shared/components/UI/UISpinner/UISpinner.vue';

export enum ArtistTabsEnum {
  DETAILS = 'Details',
  APPEARANCE = 'Appearance',
  ALBUMS = 'Albums',
  SETTINGS = 'Settings',
}

export const artistTabs: UITabsItem[] = [
  { value: ArtistTabsEnum.DETAILS, label: ArtistTabsEnum.DETAILS, icon: 'mdi-pencil' },
  { value: ArtistTabsEnum.APPEARANCE, label: ArtistTabsEnum.APPEARANCE, icon: 'mdi-auto-fix' },
  {
    value: ArtistTabsEnum.ALBUMS,
    label: ArtistTabsEnum.ALBUMS,
    icon: 'mdi-album',
  },
  {
    value: ArtistTabsEnum.SETTINGS,
    label: ArtistTabsEnum.SETTINGS,
    icon: 'mdi-cog',
  },
];

export const artistTabComponents = {
  [ArtistTabsEnum.DETAILS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/artist/components/ArtistSettings/components/ArtistDetailsSettings/ArtistDetailsSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [ArtistTabsEnum.APPEARANCE]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/artist/components/ArtistSettings/components/ArtistAppearanceSettings/ArtistAppearanceSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [ArtistTabsEnum.ALBUMS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/artist/components/ArtistSettings/components/ArtistAlbumsSettings/ArtistAlbumsSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
  [ArtistTabsEnum.SETTINGS]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/artist/components/ArtistSettings/components/ArtistCommonSettings/ArtistCommonSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
