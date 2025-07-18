import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/presenters/UI/UITabs/types.ts';

export enum UserTabsEnum {
  PROFILE = 'Profile',
  APPEARANCE = 'Appearance',
  ACCOUNT = 'Account',
  AUTHENTICATION = 'Authentication',
}

export const userTabs: UITabsItem[] = [
  { value: UserTabsEnum.PROFILE, label: UserTabsEnum.PROFILE, icon: 'mdi-account' },
  { value: UserTabsEnum.APPEARANCE, label: UserTabsEnum.APPEARANCE, icon: 'mdi-brush' },
  { value: UserTabsEnum.ACCOUNT, label: UserTabsEnum.ACCOUNT, icon: 'mdi-cog' },
  {
    value: UserTabsEnum.AUTHENTICATION,
    label: UserTabsEnum.AUTHENTICATION,
    icon: 'mdi-fingerprint',
  },
];

export const userTabComponents = {
  [UserTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () => import('@/modules/user/components/UserProfileSettings/UserProfileSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [UserTabsEnum.APPEARANCE]: defineAsyncComponent({
    loader: () =>
      import('@/modules/user/components/UserAppearanceSettings/UserAppearanceSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [UserTabsEnum.ACCOUNT]: defineAsyncComponent({
    loader: () => import('@/modules/user/components/UserAccountSettings/UserAccountSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [UserTabsEnum.AUTHENTICATION]: defineAsyncComponent({
    loader: () =>
      import('@/modules/user/components/UserAuthenticationSettings/UserAuthenticationSettings.vue'),
    loadingComponent: UISpinner,
  }),
};
