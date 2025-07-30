import type { AdminRO } from '@/api/api.module';
import type { UpdateAdminUsernamePayload } from '@/modules/admin/types.ts';

export type AdminUsernameFormProps = {
  admin: AdminRO;
  isLoading?: boolean;
};

export type AdminUsernameFormEmits = {
  (e: 'submit', state: UpdateAdminUsernamePayload): void;
};
