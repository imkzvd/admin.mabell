import type { LoggedAdminProfileRO, LoginAdminDTO } from '@/api/api.module';
import { authService } from '@/features/auth/services/auth.service.ts';

export const useAuthStore = defineStore('auth', () => {
  const [isLoading, toggleLoading] = useToggle();
  const isAuthenticated = useLocalStorage('isAuthenticated', false);
  const adminProfile = ref<LoggedAdminProfileRO | null>(null);
  const redirectPath = ref<string>('/');

  async function login(formState: LoginAdminDTO) {
    try {
      toggleLoading();

      await authService.login(formState);
      isAuthenticated.value = true;
    } finally {
      toggleLoading();
    }
  }

  async function logout() {
    try {
      toggleLoading();
      await authService.logout();
      isAuthenticated.value = false;
      adminProfile.value = null;
    } finally {
      toggleLoading();
    }
  }

  async function authorization() {
    try {
      toggleLoading();

      adminProfile.value = await authService.authorization();
    } catch (e) {
      isAuthenticated.value = false;

      throw e;
    } finally {
      toggleLoading();
    }
  }

  return {
    isLoading,
    isAuthenticated,
    adminProfile,
    redirectPath,
    login,
    authorization,
    logout,
  };
});
