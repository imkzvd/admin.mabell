import type { AdminRO, LabelValueRO, UpdateAdminDTO } from '@/api/api.module';

export type AdminAccountFormProps = {
  admin: AdminRO;
  roles: LabelValueRO[];
  isLoading?: boolean;
};

export type AdminAccountFormEmits = {
  (e: 'submit', formState: UpdateAdminDTO): void;
};
