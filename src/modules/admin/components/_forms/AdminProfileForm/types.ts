import type { AdminRO } from '@/api/api.module';
import type { UpdateAdminProfilePayload } from '@/modules/admin/types.ts';

export type AdminProfileFormProps = {
  admin: AdminRO;
  isLoading?: boolean;
};

export type AdminProfileFormEmits = {
  (e: 'submit', state: UpdateAdminProfilePayload): void;
};
