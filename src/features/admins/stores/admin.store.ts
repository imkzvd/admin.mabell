import { adminService } from '../services/admin.service.ts';
import type { AdminRO, UpdateAdminDTO, UpdateAdminUsernameDTO } from '@/api/api.module.ts';

export const useAdminStore = defineStore('admin', () => {
  const [isAdminsCreating, toggleAdminsCreating] = useToggle();
  const [isAdminFetching, toggleAdminFetching] = useToggle();
  const [isAdminUpdating, toggleAdminUpdating] = useToggle();
  const [isAdminUsernameUpdating, toggleAdminUsernameUpdating] = useToggle();
  const [isAdminPasswordRefreshing, toggleAdminPasswordRefreshing] = useToggle();
  const [isAdminDeleting, toggleAdminDeleting] = useToggle();

  const admin = ref<AdminRO | null>(null);

  async function createAdmin(): Promise<AdminRO> {
    try {
      toggleAdminsCreating();

      admin.value = await adminService.create();

      return admin.value;
    } catch (e) {
      throw e;
    } finally {
      toggleAdminsCreating();
    }
  }

  async function fetchAdmin(id: string): Promise<AdminRO> {
    try {
      toggleAdminFetching();

      admin.value = await adminService.getById(id);

      return admin.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAdminFetching();
    }
  }

  async function updateAdmin(payload: UpdateAdminDTO): Promise<AdminRO> {
    if (!admin.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleAdminUpdating();

      admin.value = await adminService.updateById(admin.value.id, payload);

      return admin.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAdminUpdating();
    }
  }

  async function updateAdminUsername(payload: UpdateAdminUsernameDTO): Promise<AdminRO> {
    if (!admin.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleAdminUsernameUpdating();

      admin.value = await adminService.updateUsernameById(admin.value.id, payload);

      return admin.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAdminUsernameUpdating();
    }
  }

  async function refreshAdminPassword(): Promise<string> {
    if (!admin.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleAdminPasswordRefreshing();

      const { password } = await adminService.refreshPasswordById(admin.value.id);

      return password;
    } catch (error) {
      throw error;
    } finally {
      toggleAdminPasswordRefreshing();
    }
  }

  async function deleteAdmin(): Promise<void> {
    if (!admin.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleAdminDeleting();

      await adminService.deleteAdminById(admin.value.id);
      admin.value = null;
    } catch (error) {
      throw error;
    } finally {
      toggleAdminDeleting();
    }
  }

  return {
    isAdminsCreating,
    isAdminFetching,
    isAdminUpdating,
    isAdminUsernameUpdating,
    isAdminPasswordRefreshing,
    isAdminDeleting,
    admin,
    createAdmin,
    fetchAdmin,
    updateAdmin,
    updateAdminUsername,
    refreshAdminPassword,
    deleteAdmin,
  };
});
