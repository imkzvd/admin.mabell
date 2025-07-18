import { adminService } from '../services/admin.service.ts';
import type { AdminRO, UpdateAdminDTO, UpdateAdminUsernameDTO } from '@/api/api.module.ts';

export const useAdminStore = defineStore('admin', () => {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
    isUpdating: false,
    isUsernameUpdating: false,
    isPasswordRefreshing: false,
    isDeleting: false,
  });

  const admin = ref<AdminRO | null>(null);

  async function fetchAdmin(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      admin.value = await adminService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createAdmin(): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      admin.value = await adminService.create();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updateAdmin(payload: UpdateAdminDTO): Promise<void> {
    if (loadingStates.isUpdating) return;

    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      loadingStates.isUpdating = true;

      admin.value = await adminService.updateById(admin.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updateAdminUsername(payload: UpdateAdminUsernameDTO): Promise<void> {
    if (loadingStates.isUsernameUpdating) return;

    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      loadingStates.isUsernameUpdating = true;

      admin.value = await adminService.updateUsernameById(admin.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUsernameUpdating = false;
    }
  }

  async function deleteAdmin(): Promise<void> {
    if (loadingStates.isDeleting) return;

    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      loadingStates.isDeleting = true;

      await adminService.deleteAdminById(admin.value.id);
      admin.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isDeleting = false;
    }
  }

  return {
    loadingStates,
    admin,
    fetchAdmin,
    createAdmin,
    updateAdmin,
    updateAdminUsername,
    deleteAdmin,
  };
});
