import { apiService } from '@/shared/services/api.service.ts';
import type {
  AdminRefreshedPasswordRO,
  AdminRO,
  AdminsRO,
  UpdateAdminDTO,
  UpdateAdminUsernameDTO,
} from '@/api/api.module.ts';

export class AdminService {
  async create(): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.createAdmin();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAdminDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.updateAdmin(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateUsernameById(id: string, payload: UpdateAdminUsernameDTO): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.updateAdminUsername(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async refreshPasswordById(id: string): Promise<AdminRefreshedPasswordRO> {
    const { data, ok, error } = await apiService.admins.refreshAdminPassword(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteAdminById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.admins.deleteAdmin(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getAll(limit: number = 25, offset: number = 0): Promise<AdminsRO> {
    const { data, ok, error } = await apiService.admins.getAdmins({ limit, offset });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<AdminRO> {
    const { data, ok, error } = await apiService.admins.getAdmin(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const adminService = new AdminService();
