import { adminService } from '@/features/admins/services/admin.service.ts';
import type { AdminsRO } from '@/api/api.module.ts';

export const useAdminsStore = defineStore('admins', () => {
  const [isAdminsFetching, toggleAdminsFetching] = useToggle();
  const [isAdminsCreating, toggleAdminsCreating] = useToggle();
  const admins = ref<AdminsRO | null>(null);

  async function fetchAdmins(limit: number = 25, page: number = 1) {
    try {
      toggleAdminsFetching();

      admins.value = await adminService.getAll(limit, limit * (page - 1));
    } catch (error) {
      throw error;
    } finally {
      toggleAdminsFetching();
    }
  }

  async function createAdmin(): Promise<string> {
    try {
      toggleAdminsCreating();

      const { id } = await adminService.create();

      return id;
    } catch (e) {
      throw e;
    } finally {
      toggleAdminsCreating();
    }
  }

  return {
    isAdminsFetching,
    isAdminsCreating,
    admins,
    fetchAdmins,
    createAdmin,
  };
});
