import type { AdminRO } from '@/api/api.module.ts';

export type AdminTableEmits = {
  (e: 'click:row', row: AdminRO): void;
};
