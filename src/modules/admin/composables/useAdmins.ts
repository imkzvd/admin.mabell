import { adminApiService } from '@/modules/admin/services/admin.api-service.ts';
import type { AdminRO } from '@/api/api.module.ts';

export const useAdmins = () => {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });

  const admins = ref<AdminRO[]>([]);
  const total = ref<number>(0);

  async function fetchAllAdmins() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await adminApiService.getAllAdmins();

      admins.value = items;
      total.value = totalFromResp;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createAdmin() {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      await adminApiService.createAdmin();
      await fetchAllAdmins();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  return {
    loadingStates,
    admins,
    total,
    fetchAllAdmins,
    createAdmin,
  };
};
