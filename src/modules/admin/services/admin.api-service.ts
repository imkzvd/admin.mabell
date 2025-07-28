import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  AdminRefreshedPasswordRO,
  AdminRO,
  AdminsRO,
  UpdateAdminDTO,
  UpdateAdminUsernameDTO,
} from '@/api/api.module.ts';

export class AdminApiService {
  async createAdmin(): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.createAdmin();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateAdmin(id: string, payload: UpdateAdminDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.updateAdmin(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateAdminUsername(id: string, payload: UpdateAdminUsernameDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.updateAdminUsername(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async refreshAdminPassword(id: string): Promise<AdminRefreshedPasswordRO> {
    const { data, ok, error } = await apiService.admin.refreshAdminPassword(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteAdmin(id: string): Promise<void> {
    const { ok, error } = await apiService.admin.deleteAdmin(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }
  }

  async getAllAdmins(
    options?: Partial<{
      pagination: { limit: number; offset: number };
    }>,
  ): Promise<AdminsRO> {
    const { data, ok, error } = await apiService.admin.getAdmins(options?.pagination);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getAdmin(id: string): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.getAdmin(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const adminApiService = new AdminApiService();
