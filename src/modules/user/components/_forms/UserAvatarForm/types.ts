import type { UserRO } from '@/api/api.module';
import type { UpdateUserAvatarPayload } from '@/modules/user/types.ts';
import type UserAvatarForm from '@/modules/user/components/_forms/UserAvatarForm/UserAvatarForm.vue';

export type UserAvatarFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserAvatarFormEmits = {
  (e: 'submit', payload: UpdateUserAvatarPayload): void;
};

export type UserAvatarFormInstance = InstanceType<typeof UserAvatarForm>;
