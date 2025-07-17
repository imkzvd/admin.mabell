import type { LoggedAdminProfileRO, LoginAdminDTO } from '@/api/api.module';
import { authService } from '@/features/auth/services/auth.service.ts';

export const useAuthStore = defineStore('auth', () => {
  const [isLoading, toggleLoading] = useToggle();
  const profile = ref<LoggedAdminProfileRO | null>(null);

  async function login(formState: LoginAdminDTO) {
    try {
      if (isLoading.value) return;

      toggleLoading();

      await authService.login(formState);
    } catch (e) {
      throw e;
    } finally {
      toggleLoading();
    }
  }

  async function logout() {
    try {
      if (isLoading.value) return;

      toggleLoading();
      await authService.logout();
      profile.value = null;
    } finally {
      toggleLoading();
    }
  }

  async function authorization() {
    try {
      if (isLoading.value) return;

      toggleLoading();

      profile.value = await authService.authorization();
    } catch (e) {
      throw e;
    } finally {
      toggleLoading();
    }
  }

  return {
    isLoading,
    profile,
    login,
    authorization,
    logout,
  };
});
