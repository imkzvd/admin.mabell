import { ApiModule } from '@/api/api.module';

let isRefreshing = false;

export const apiService = new ApiModule({
  baseUrl: import.meta.env.VITE_ADMIN_API_URL,
  baseApiParams: {
    credentials: 'include',
  },
  customFetch: async (path, options) => {
    try {
      const response = await fetch(path, options);
      const { pathname } = new URL(path as string);

      if (
        response.status !== 401 ||
        pathname === '/auth/login' ||
        pathname === '/auth/refresh' ||
        isRefreshing
      ) {
        return response;
      }

      try {
        isRefreshing = true;

        const { ok, error } = await apiService.auth.refreshAccessToken();

        if (!ok) {
          throw error;
        }

        return fetch(path, options);
      } catch (e) {
        throw e;
      } finally {
        isRefreshing = false;
      }

      return response;
    } catch (e) {
      throw e;
    }
  },
});
