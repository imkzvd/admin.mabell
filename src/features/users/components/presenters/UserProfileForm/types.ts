import type { LabelValueRO, UpdateUserDTO, UserRO } from '@/api/api.module';

export type UserProfileFormProps = {
  user: UserRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type UserProfileFormState = Required<Pick<UpdateUserDTO, 'name' | 'birthDate' | 'genres'>>;

export type UserProfileFormEmits = {
  (e: 'submit', formState: UserProfileFormState): void;
};
