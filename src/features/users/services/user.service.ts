import { apiService } from '@/shared/services/api.service.ts';
import type {
  UpdateUserDTO,
  UserRO,
  UpdateUserAvatarDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
} from '@/api/api.module.ts';

export class UserService {
  async create(): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.createUser();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateUserDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.updateUser(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateUsernameById(id: string, payload: UpdateUserUsernameDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.updateUserUsername(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateEmailById(id: string, payload: UpdateUserEmailDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.updateUserEmail(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async refreshPasswordById(id: string): Promise<void> {
    const { ok, error } = await apiService.users.refreshUserPassword(id);

    if (!ok) {
      throw new Error(error.message);
    }
  }

  async updateAvatarById(id: string, payload: UpdateUserAvatarDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.updateUserAvatar(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteAvatarById(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.deleteUserAvatar(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.users.deleteUser(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.users.getUser(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const userService = new UserService();
