import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  UpdateUserDTO,
  UserRO,
  UpdateUserAvatarDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
} from '@/api/api.module.ts';

export class UserApiService {
  async createUser(): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.createUser();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateUser(id: string, payload: UpdateUserDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUser(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateUserUsername(id: string, payload: UpdateUserUsernameDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserUsername(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateUserEmail(id: string, payload: UpdateUserEmailDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserEmail(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async refreshUserPassword(id: string): Promise<void> {
    const { ok, error } = await apiService.user.refreshUserPassword(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }
  }

  async updateUserAvatar(id: string, payload: UpdateUserAvatarDTO): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.updateUserAvatar(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteUserAvatar(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.deleteUserAvatar(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteUser(id: string): Promise<void> {
    const { data, ok, error } = await apiService.user.deleteUser(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getUser(id: string): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.getUser(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getMabellUser(): Promise<UserRO> {
    const { data, ok, error } = await apiService.user.getMabellUser();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const userApiService = new UserApiService();
