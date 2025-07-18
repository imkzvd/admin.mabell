import type { UserRO } from '@/api/api.module';
import type UserAvatarForm from '@/modules/user/components/UserAvatarForm/UserAvatarForm.vue';
import type { UpdateUserAvatarPayload } from '@/modules/user/types.ts';

export type UserAvatarFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserAvatarFormEmits = {
  (e: 'submit', state: UpdateUserAvatarPayload): void;
};

export type UserAvatarFormInstance = InstanceType<typeof UserAvatarForm>;
