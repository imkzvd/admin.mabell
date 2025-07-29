import { adminApiService } from '@/modules/admin/services/admin.api-service.ts';
import type { AdminRO, UpdateAdminDTO, UpdateAdminUsernameDTO } from '@/api/api.module.ts';

const loadingStates = reactive({
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  isUsernameUpdating: false,
  isPasswordRefreshing: false,
  isDeleting: false,
});

const admin = ref<AdminRO | null>(null);

export const useAdminStore = () => {
  async function fetchAdmin(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      admin.value = await adminApiService.getAdmin(id);
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

      admin.value = await adminApiService.createAdmin();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updateAdmin(payload: UpdateAdminDTO): Promise<void> {
    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      if (loadingStates.isUpdating) return;

      loadingStates.isUpdating = true;

      admin.value = await adminApiService.updateAdmin(admin.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updateAdminUsername(payload: UpdateAdminUsernameDTO): Promise<void> {
    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      if (loadingStates.isUsernameUpdating) return;

      loadingStates.isUsernameUpdating = true;

      admin.value = await adminApiService.updateAdminUsername(admin.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUsernameUpdating = false;
    }
  }

  async function deleteAdmin(): Promise<void> {
    if (!admin.value) {
      throw new Error('Admin is not uploaded');
    }

    try {
      if (loadingStates.isDeleting) return;

      loadingStates.isDeleting = true;

      await adminApiService.deleteAdmin(admin.value.id);
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
};
