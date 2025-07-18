import UISpinner from '@/shared/components/presenters/UI/UISpinner/UISpinner.vue';
import type { UITabsItem } from '@/shared/components/presenters/UI/UITabs/types.ts';

export enum AdminTabsEnum {
  PROFILE = 'Profile',
  ACCOUNT = 'Account',
  AUTHENTICATION = 'Authentication',
}

export const adminTabs: UITabsItem[] = [
  { value: AdminTabsEnum.PROFILE, label: AdminTabsEnum.PROFILE, icon: 'mdi-account' },
  { value: AdminTabsEnum.ACCOUNT, label: AdminTabsEnum.ACCOUNT, icon: 'mdi-cog' },
  {
    value: AdminTabsEnum.AUTHENTICATION,
    label: AdminTabsEnum.AUTHENTICATION,
    icon: 'mdi-fingerprint',
  },
];

export const adminTabComponents = {
  [AdminTabsEnum.PROFILE]: defineAsyncComponent({
    loader: () =>
      import('@/modules/admin/components/AdminProfileSettings/AdminProfileSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [AdminTabsEnum.ACCOUNT]: defineAsyncComponent({
    loader: () =>
      import('@/modules/admin/components/AdminAccountSettings/AdminAccountSettings.vue'),
    loadingComponent: UISpinner,
  }),
  [AdminTabsEnum.AUTHENTICATION]: defineAsyncComponent({
    loader: () =>
      import(
        '@/modules/admin/components/AdminAuthenticationSettings/AdminAuthenticationSettings.vue'
      ),
    loadingComponent: UISpinner,
  }),
};
