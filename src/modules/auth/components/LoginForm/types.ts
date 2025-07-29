import type { LoginAdminPayload } from '@/modules/auth/types.ts';

export type LoginFormProps = {
  isLoading: boolean;
};

export type LoginFormEmits = {
  (e: 'submit', payload: LoginAdminPayload): void;
};
