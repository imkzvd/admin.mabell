import type { LabelValueRO, UserRO } from '@/api/api.module';
import type { UpdateUserProfilePayload } from '@/modules/user/types.ts';

export type UserProfileFormProps = {
  user: UserRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type UserProfileFormEmits = {
  (e: 'submit', payload: UpdateUserProfilePayload): void;
};
