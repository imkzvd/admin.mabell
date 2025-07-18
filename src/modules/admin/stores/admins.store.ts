import { adminService } from '@/modules/admin/services/admin.service.ts';
import type { AdminsRO } from '@/api/api.module.ts';

export const useAdminsStore = defineStore('admins', () => {
  const [isFetching, toggleFetching] = useToggle();
  const admins = ref<AdminsRO | null>(null);

  async function fetchAdmins(limit: number = 25, page: number = 1) {
    try {
      toggleFetching();

      admins.value = await adminService.getAll(limit, limit * (page - 1));
    } catch (e) {
      throw e;
    } finally {
      toggleFetching();
    }
  }

  return {
    isFetching,
    admins,
    fetchAdmins,
  };
});
