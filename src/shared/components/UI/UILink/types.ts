import type { RouteLocationRaw } from 'vue-router';

export type UILinkProps = {
  to: RouteLocationRaw;
  isUnderlined?: boolean;
};
