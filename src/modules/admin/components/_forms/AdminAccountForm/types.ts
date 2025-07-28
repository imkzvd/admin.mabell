import type { AdminRO, LabelValueRO } from '@/api/api.module';
import type { UpdateAdminAccountPayload } from '@/modules/admin/types.ts';

export type AdminAccountFormProps = {
  admin: AdminRO;
  roles: LabelValueRO[];
  isLoading?: boolean;
};

export type AdminAccountFormEmits = {
  (e: 'submit', state: UpdateAdminAccountPayload): void;
};
