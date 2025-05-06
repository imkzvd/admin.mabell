import type { RouteLocationRaw } from 'vue-router';

export type NavMenuItem = {
  to: RouteLocationRaw;
  title: string;
  icon?: string;
};
