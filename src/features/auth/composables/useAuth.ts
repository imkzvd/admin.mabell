import { useAuthStore } from '@/features/auth/stores/auth.store.ts';
import type { LoginAdminDTO } from '@/api/api.module.ts';
import { useLocalStorage } from '@vueuse/core';
import { IS_AUTHENTICATED_LS_VARIABLE } from '@/features/auth/constants.ts';

export function useAuth() {
  const store = useAuthStore();
  const isAuthenticated = useLocalStorage(IS_AUTHENTICATED_LS_VARIABLE, false);
  const { isLoading, profile } = storeToRefs(store);

  async function login(payload: LoginAdminDTO) {
    try {
      await store.login(payload);
      isAuthenticated.value = true;
    } catch (e) {
      isAuthenticated.value = false;
      throw e;
    }
  }

  async function logout() {
    try {
      await store.logout();
    } catch (e) {
      throw e;
    } finally {
      isAuthenticated.value = false;
    }
  }

  async function authorization() {
    try {
      if (!isAuthenticated) {
        throw new Error('You must be logged in');
      }

      await store.authorization();
    } catch (e) {
      isAuthenticated.value = false;
      throw e;
    }
  }

  return {
    profile,
    isLoading,
    isAuthenticated,
    login,
    logout,
    authorization,
  };
}
