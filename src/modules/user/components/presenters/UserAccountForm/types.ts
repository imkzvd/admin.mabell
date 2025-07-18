import type { LabelValueRO, UpdateUserDTO, UserRO } from '@/api/api.module';

export type UserAccountFormProps = {
  user: UserRO;
  regions: LabelValueRO[];
  isLoading?: boolean;
};

export type UpdateUserAccountFormState = Required<
  Pick<UpdateUserDTO, 'region' | 'isPremium' | 'isBlocked'>
>;

export type UserAccountFormEmits = {
  (e: 'submit', formState: UpdateUserAccountFormState): void;
};
