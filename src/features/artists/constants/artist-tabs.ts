import type { UITabsItem } from '@/shared/components/presenters/UI/UITabs/types.ts';
import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';

export enum ArtistTabsEnum {
  PROFILE = 'Profile',
  APPEARANCE = 'Appearance',
  ALBUMS = 'Albums',
  SETTINGS = 'Settings',
}

export const artistTabs: UITabsItem[] = [
  { value: ArtistTabsEnum.PROFILE, label: ArtistTabsEnum.PROFILE, icon: 'mdi-account' },
  { value: ArtistTabsEnum.APPEARANCE, label: ArtistTabsEnum.APPEARANCE, icon: 'mdi-brush' },
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
  [ArtistTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () =>
      import('../components/containers/ArtistProfileSettings/ArtistProfileSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [ArtistTabsEnum.APPEARANCE]: defineAsyncComponent({
    loader: () =>
      import('../components/containers/ArtistAppearanceSettings/ArtistAppearanceSettings.vue'),
    loadingComponent: UISpinner,
  }),
};
