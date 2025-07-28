import type { AdminRO } from '@/api/api.module.ts';

export type AdminListEmits = {
  (e: 'item-click', item: AdminRO): void;
};
