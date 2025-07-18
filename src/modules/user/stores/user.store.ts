import { userService } from '@/modules/user/services/user.service.ts';
import type {
  UpdateUserAvatarDTO,
  UpdateUserDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
  UserRO,
} from '@/api/api.module.ts';

export const useUserStore = defineStore('user', () => {
  const loadingState = reactive({
    isFetching: false,
    isCreating: false,
    isUpdating: false,
    isUsernameUpdating: false,
    isEmailUpdating: false,
    isPasswordRefreshing: false,
    isAvatarUpdating: false,
    isAvatarDeleting: false,
    isDeleting: false,
  });

  const user = ref<UserRO | null>(null);

  async function fetchUser(id: string): Promise<void> {
    try {
      if (loadingState.isFetching) return;

      loadingState.isFetching = true;

      user.value = await userService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isFetching = false;
    }
  }

  async function createUser(): Promise<void> {
    try {
      if (loadingState.isCreating) return;

      user.value = await userService.create();
    } catch (e) {
      throw e;
    } finally {
      loadingState.isCreating = false;
    }
  }

  async function updateUser(payload: UpdateUserDTO): Promise<void> {
    if (loadingState.isUpdating) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isUpdating = true;

      user.value = await userService.updateById(user.value.id, payload);
    } catch (error) {
      throw error;
    } finally {
      loadingState.isUpdating = false;
    }
  }

  async function updateUserUsername(payload: UpdateUserUsernameDTO): Promise<void> {
    if (loadingState.isUsernameUpdating) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isUsernameUpdating = true;

      user.value = await userService.updateUsernameById(user.value.id, payload);
    } catch (error) {
      throw error;
    } finally {
      loadingState.isUsernameUpdating = false;
    }
  }

  async function updateUserEmail(payload: UpdateUserEmailDTO): Promise<void> {
    if (loadingState.isEmailUpdating) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isEmailUpdating = true;

      user.value = await userService.updateEmailById(user.value.id, payload);
    } catch (error) {
      throw error;
    } finally {
      loadingState.isEmailUpdating = false;
    }
  }

  async function updateUserAvatar(payload: UpdateUserAvatarDTO): Promise<void> {
    if (loadingState.isAvatarUpdating) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isAvatarUpdating = true;

      user.value = await userService.updateAvatarById(user.value.id, payload);
    } catch (error) {
      throw error;
    } finally {
      loadingState.isAvatarUpdating = false;
    }
  }

  async function deleteUserAvatar(): Promise<void> {
    if (loadingState.isAvatarDeleting) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isAvatarDeleting = true;

      user.value = await userService.deleteAvatarById(user.value.id);
    } catch (error) {
      throw error;
    } finally {
      loadingState.isAvatarDeleting = false;
    }
  }

  async function deleteUser(): Promise<void> {
    if (loadingState.isDeleting) return;

    if (!user.value) {
      throw new Error('User is not uploaded');
    }

    try {
      loadingState.isDeleting = true;

      await userService.deleteById(user.value.id);
      user.value = null;
    } catch (error) {
      throw error;
    } finally {
      loadingState.isDeleting = false;
    }
  }

  return {
    loadingState,
    user,
    createUser,
    fetchUser,
    updateUser,
    updateUserUsername,
    updateUserEmail,
    updateUserAvatar,
    deleteUserAvatar,
    deleteUser,
  };
});
