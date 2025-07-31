import type { UserRO } from '@/api/api.module';
import type { UpdateUserUsernamePayload } from '@/modules/user/types.ts';

export type UserUsernameFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserUsernameFormEmits = {
  (e: 'submit', payload: UpdateUserUsernamePayload): void;
};
