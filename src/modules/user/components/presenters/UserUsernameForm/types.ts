import type { UpdateUserUsernameDTO, UserRO } from '@/api/api.module';

export type UserUsernameFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserUsernameFormState = UpdateUserUsernameDTO;

export type UserUsernameFormEmits = {
  (e: 'submit', formState: UserUsernameFormState): void;
};
