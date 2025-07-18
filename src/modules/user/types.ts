import type {
  UpdateUserAvatarDTO,
  UpdateUserDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
} from '@/api/api.module.ts';

export type UpdateUserProfilePayload = Required<
  Pick<UpdateUserDTO, 'name' | 'birthDate' | 'genres'>
>;

export type UpdateUserAvatarPayload = Required<UpdateUserAvatarDTO>;

export type UpdateUserAccountPayload = Required<
  Pick<UpdateUserDTO, 'region' | 'isPremium' | 'isBlocked'>
>;

export type UpdateUserUsernamePayload = Required<UpdateUserUsernameDTO>;

export type UpdateUserEmailPayload = Required<UpdateUserEmailDTO>;
