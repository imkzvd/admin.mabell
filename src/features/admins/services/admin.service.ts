import { apiService } from '@/shared/services/api.service.ts';
import type {
  AdminRefreshedPasswordRO,
  AdminRO,
  AdminsRO,
  CreatedAdminWithPasswordRO,
  UpdateAdminDTO,
  UpdateAdminUsernameDTO,
} from '@/api/api.module.ts';

export class AdminService {
  async create(): Promise<CreatedAdminWithPasswordRO> {
    const { data, ok, error } = await apiService.admins.create();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAdminDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.update(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateUsernameById(id: string, payload: UpdateAdminUsernameDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.updateUsername(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async refreshPasswordById(id: string): Promise<AdminRefreshedPasswordRO> {
    const { data, ok, error } = await apiService.admins.refreshPassword(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteAdminById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.admins.delete(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getAll(limit: number = 25, offset: number = 0): Promise<AdminsRO> {
    const { data, ok, error } = await apiService.admins.find({ limit, offset });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.findOne(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const adminService = new AdminService();
