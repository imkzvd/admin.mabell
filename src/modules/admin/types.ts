import type { UpdateAdminDTO, UpdateAdminUsernameDTO } from '@/api/api.module.ts';

export type UpdateAdminProfilePayload = Required<Pick<UpdateAdminDTO, 'name'>>;

export type UpdateAdminAccountPayload = Required<Pick<UpdateAdminDTO, 'role' | 'isBlocked'>>;

export type UpdateAdminUsernamePayload = UpdateAdminUsernameDTO;
