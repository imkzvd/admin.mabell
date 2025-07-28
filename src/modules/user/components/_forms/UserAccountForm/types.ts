import type { LabelValueRO, UserRO } from '@/api/api.module';
import type { UpdateUserAccountPayload } from '@/modules/user/types.ts';

export type UserAccountFormProps = {
  user: UserRO;
  regions: LabelValueRO[];
  isLoading?: boolean;
};

export type UserAccountFormEmits = {
  (e: 'submit', state: UpdateUserAccountPayload): void;
};
