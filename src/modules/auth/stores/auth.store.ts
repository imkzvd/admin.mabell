import { useLocalStorage } from '@vueuse/core';
import { authApiService } from '@/modules/auth/services/auth.api-service.ts';
import { IS_AUTHENTICATED_LS_VARIABLE } from '@/modules/auth/constants.ts';
import type { LoggedAdminProfileRO, LoginAdminDTO } from '@/api/api.module';

const loadingStates = reactive({
  isLoading: false,
});
const profile = ref<LoggedAdminProfileRO | null>(null);
const isAuthenticated = useLocalStorage(IS_AUTHENTICATED_LS_VARIABLE, false);

export const useAuthStore = () => {
  async function login(formState: LoginAdminDTO) {
    try {
      if (loadingStates.isLoading) return;

      loadingStates.isLoading = true;

      await authApiService.login(formState);

      isAuthenticated.value = true;
    } catch (e) {
      isAuthenticated.value = false;
      throw e;
    } finally {
      loadingStates.isLoading = false;
    }
  }

  async function logout() {
    try {
      if (loadingStates.isLoading) return;

      loadingStates.isLoading = true;
      await authApiService.logout();
      profile.value = null;
    } finally {
      isAuthenticated.value = false;
      loadingStates.isLoading = false;
    }
  }

  async function authorization() {
    try {
      if (loadingStates.isLoading) return;

      loadingStates.isLoading = true;

      profile.value = await authApiService.authorization();
    } catch (e) {
      isAuthenticated.value = false;
      throw e;
    } finally {
      loadingStates.isLoading = false;
    }
  }

  return {
    loadingStates,
    profile,
    isAuthenticated,
    login,
    authorization,
    logout,
  };
};
