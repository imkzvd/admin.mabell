import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  UpdateUserDTO,
  UserRO,
  UpdateUserAvatarDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
} from '@/api/api.module.ts';

export class UserService {
  async create(): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.createUser();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateUserDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUser(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateUsernameById(id: string, payload: UpdateUserUsernameDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserUsername(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateEmailById(id: string, payload: UpdateUserEmailDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserEmail(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async refreshPasswordById(id: string): Promise<void> {
    const { ok, error } = await apiService.user.refreshUserPassword(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }
  }

  async updateAvatarById(id: string, payload: UpdateUserAvatarDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserAvatar(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteAvatarById(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.deleteUserAvatar(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.user.deleteUser(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getById(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.getUser(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const userService = new UserService();
