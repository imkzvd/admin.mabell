<template>
  <div class="creation-menu">
    <UIMenu v-model="isMenuVisible">
      <template #activator="{ activator }">
        <UIButton icon="mdi-plus" :is-loading="isItemCreating" v-bind="activator" />
      </template>

      <template #menu>
        <ul class="creation-menu__list">
          <li class="creation-menu__list-item" @click="onAdminItemClick">
            <span>Admin</span>

            <UIIcon icon="mdi-account-tie" size="20px" />
          </li>

          <li class="creation-menu__list-item" @click="onUserItemClick">
            <span>User</span>

            <UIIcon icon="mdi-account" size="20px" />
          </li>

          <li class="creation-menu__list-item" @click="onArtistItemClick">
            <span>Artist</span>

            <UIIcon icon="mdi-account-music-outline" size="20px" />
          </li>
        </ul>
      </template>
    </UIMenu>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isMenuVisible, toggleMenuVisible] = useToggle();
const [isItemCreating, toggleItemCreating] = useToggle();

async function onAdminItemClick() {
  try {
    const { createAdmin, admin } = useAdminStore();

    toggleItemCreating();
    toggleMenuVisible();

    await createAdmin();

    if (!admin.value) return;

    await router.push({ name: 'admin', params: { id: admin.value.id } });
    showSuccessMessage('Admin has been created.');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    toggleItemCreating();
  }
}

async function onUserItemClick() {
  const { createUser, user } = useUserStore();

  try {
    toggleItemCreating();
    toggleMenuVisible();

    await createUser();

    if (!user.value) return;

    await router.push({ name: 'user', params: { id: user.value.id } });
    showSuccessMessage('User has been created.');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    toggleItemCreating();
  }
}

async function onArtistItemClick() {
  try {
    const { createArtist, artist } = useArtistStore();

    toggleItemCreating();
    toggleMenuVisible();

    await createArtist();

    if (!artist.value) return;

    await router.push({ name: 'artist', params: { id: artist.value.id } });
    showSuccessMessage('Artist has been created.');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    toggleItemCreating();
  }
}
</script>

<style scoped lang="scss">
.creation-menu {
  &__list {
    font-size: 18px;
    font-family: CircularSpBold, sans-serif;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 4px;
    padding: 8px 16px;
    border-radius: var(--border-radius, 4px);
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
