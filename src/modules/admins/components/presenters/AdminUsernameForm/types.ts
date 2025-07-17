import type { AdminRO, UpdateAdminUsernameDTO } from '@/api/api.module';

export type AdminUsernameFormProps = {
  admin: AdminRO;
  isLoading?: boolean;
};

export type AdminUsernameFormEmits = {
  (e: 'submit', formState: UpdateAdminUsernameDTO): void;
};
