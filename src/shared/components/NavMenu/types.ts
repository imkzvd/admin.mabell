import type { RouteLocationRaw } from 'vue-router';

export type NavMenuItem = {
  to: RouteLocationRaw;
  title: string;
  icon?: string;
  isPublic?: boolean;
};

export type NavMenuProps = {
  role: string;
};

export type NavMenuEmits = {
  (e: 'click:search'): void;
};
