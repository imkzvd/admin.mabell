import type { UpdateUserEmailDTO, UserRO } from '@/api/api.module';

export type UserEmailFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UpdateUserEmailFormState = UpdateUserEmailDTO;

export type UserEmailFormEmits = {
  (e: 'submit', formState: UpdateUserEmailFormState): void;
};
