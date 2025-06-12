import type { RouteLocationRaw } from 'vue-router';

export type NavMenuItem = {
  to: RouteLocationRaw;
  title: string;
  icon?: string;
};

export type NavMenuEmits = {
  (e: 'click:search'): void;
};
