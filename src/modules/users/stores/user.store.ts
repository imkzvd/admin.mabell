import type {
  UpdateUserAvatarDTO,
  UpdateUserDTO,
  UpdateUserEmailDTO,
  UpdateUserUsernameDTO,
  UserRO,
} from '@/api/api.module.ts';
import { userService } from '@/features/users/services/user.service.ts';

export const useUserStore = defineStore('user', () => {
  const [isUserCreating, toggleUserCreating] = useToggle();
  const [isUserFetching, toggleUserFetching] = useToggle();
  const [isUserUpdating, toggleUserUpdating] = useToggle();
  const [isUserUsernameUpdating, toggleUserUsernameUpdating] = useToggle();
  const [isUserEmailUpdating, toggleUserEmailUpdating] = useToggle();
  const [isUserPasswordRefreshing, toggleUserPasswordRefreshing] = useToggle();
  const [isUserAvatarUpdating, toggleUserAvatarUpdating] = useToggle();
  const [isUserAvatarDeleting, toggleUserAvatarDeleting] = useToggle();
  const [isUserDeleting, toggleUserDeleting] = useToggle();

  const user = ref<UserRO | null>(null);

  async function createUser(): Promise<UserRO> {
    try {
      toggleUserCreating();

      user.value = await userService.create();

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserCreating();
    }
  }

  async function fetchUser(id: string): Promise<UserRO> {
    if (id === user.value?.id) {
      return user.value;
    }

    try {
      toggleUserFetching();

      user.value = await userService.getById(id);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserFetching();
    }
  }

  async function updateUser(payload: UpdateUserDTO): Promise<UserRO> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserUpdating();

      user.value = await userService.updateById(user.value.id, payload);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserUpdating();
    }
  }

  async function updateUserUsername(payload: UpdateUserUsernameDTO): Promise<UserRO> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserUsernameUpdating();

      user.value = await userService.updateUsernameById(user.value.id, payload);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserUsernameUpdating();
    }
  }

  async function updateUserEmail(payload: UpdateUserEmailDTO): Promise<UserRO> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserEmailUpdating();

      user.value = await userService.updateEmailById(user.value.id, payload);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserEmailUpdating();
    }
  }

  async function refreshUserPassword(): Promise<void> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserPasswordRefreshing();

      await userService.refreshPasswordById(user.value.id);
    } catch (error) {
      throw error;
    } finally {
      toggleUserPasswordRefreshing();
    }
  }

  async function updateUserAvatar(payload: UpdateUserAvatarDTO): Promise<UserRO> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserAvatarUpdating();

      user.value = await userService.updateAvatarById(user.value.id, payload);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserAvatarUpdating();
    }
  }

  async function deleteUserAvatar(): Promise<UserRO> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserAvatarDeleting();

      user.value = await userService.deleteAvatarById(user.value.id);

      return user.value;
    } catch (error) {
      throw error;
    } finally {
      toggleUserAvatarDeleting();
    }
  }

  async function deleteUser(): Promise<void> {
    if (!user.value) {
      throw new Error('User does not fetch');
    }

    try {
      toggleUserDeleting();

      await userService.deleteById(user.value.id);
      user.value = null;
    } catch (error) {
      throw error;
    } finally {
      toggleUserDeleting();
    }
  }

  return {
    isUserCreating,
    isUserFetching,
    isUserUpdating,
    isUserUsernameUpdating,
    isUserEmailUpdating,
    isUserPasswordRefreshing,
    isUserAvatarUpdating,
    isUserAvatarDeleting,
    isUserDeleting,
    user,
    createUser,
    fetchUser,
    updateUser,
    updateUserUsername,
    updateUserEmail,
    refreshUserPassword,
    updateUserAvatar,
    deleteUserAvatar,
    deleteUser,
  };
});
