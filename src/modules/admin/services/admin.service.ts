import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  AdminRefreshedPasswordRO,
  AdminRO,
  AdminsRO,
  UpdateAdminDTO,
  UpdateAdminUsernameDTO,
} from '@/api/api.module.ts';

export class AdminService {
  async create(): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.createAdmin();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAdminDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.updateAdmin(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateUsernameById(id: string, payload: UpdateAdminUsernameDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.updateAdminUsername(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async refreshPasswordById(id: string): Promise<AdminRefreshedPasswordRO> {
    const { data, ok, error } = await apiService.admin.refreshAdminPassword(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteAdminById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.admin.deleteAdmin(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getAll(limit: number = 25, offset: number = 0): Promise<AdminsRO> {
    const { data, ok, error } = await apiService.admin.getAdmins({ limit, offset });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getById(id: string): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admin.getAdmin(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const adminService = new AdminService();
