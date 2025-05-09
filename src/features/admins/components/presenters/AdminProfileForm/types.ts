import type { AdminRO, UpdateAdminDTO } from '@/api/api.module';

export type AdminProfileFormProps = {
  admin: AdminRO;
  isLoading?: boolean;
};

export type AdminProfileFormEmits = {
  (e: 'submit', formState: UpdateAdminDTO): void;
};
