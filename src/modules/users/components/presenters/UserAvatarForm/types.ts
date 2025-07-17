import type { UpdateUserAvatarDTO, UserRO } from '@/api/api.module';
import type UserAvatarForm from '@/features/users/components/presenters/UserAvatarForm/UserAvatarForm.vue';

export type UserAvatarFormProps = {
  user: UserRO;
  isLoading?: boolean;
};

export type UserAvatarFormState = UpdateUserAvatarDTO;

export type UserAvatarFormEmits = {
  (e: 'submit', formState: UserAvatarFormState): void;
};

export type UserAvatarFormInstance = InstanceType<typeof UserAvatarForm>;
