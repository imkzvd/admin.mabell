import type { LoginAdminDTO } from '@/api/api.module';

export type LoginFormProps = {
  isLoading: boolean;
};

export type LoginFormState = LoginAdminDTO;

export type LoginFormEmits = {
  (e: 'submit', formState: LoginFormState): void;
};
