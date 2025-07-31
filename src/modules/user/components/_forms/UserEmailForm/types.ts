import type { UserRO } from '@/api/api.module';
import type { UpdateUserEmailPayload } from '@/modules/user/types.ts';

export type UserEmailFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserEmailFormEmits = {
  (e: 'submit', payload: UpdateUserEmailPayload): void;
};
