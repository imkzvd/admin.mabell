import { apiService } from '@/shared/services/api.service.ts';
import type { LoggedAdminProfileRO, LoginAdminDTO } from '@/api/api.module.ts';

export class AuthService {
  async login(payload: LoginAdminDTO): Promise<void> {
    const { ok, error } = await apiService.auth.login(payload);

    if (!ok) {
      throw new Error(error.message);
    }
  }

  async authorization(): Promise<LoggedAdminProfileRO> {
    const { ok, data, error } = await apiService.me.getProfile();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async logout(): Promise<void> {
    const { ok, error } = await apiService.auth.logout();

    if (!ok) {
      throw new Error(error.message);
    }
  }

  async refresh(): Promise<void> {
    const { ok, error } = await apiService.auth.refreshAccessToken();

    if (!ok) {
      throw new Error(error.message);
    }
  }
}

export const authService = new AuthService();
