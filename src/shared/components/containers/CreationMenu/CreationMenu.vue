<template>
  <div class="creation-menu">
    <UIMenu v-model="isMenuVisible">
      <template #activator="{ activator }">
        <UIButton icon="mdi-plus" :is-loading="isItemCreating" v-bind="activator" />
      </template>

      <template #menu>
        <ul class="creation-menu__list">
          <li class="creation-menu__list-item" @click="onClickArtist">Artist</li>
          <li class="creation-menu__list-item" @click="onClickAdmin">Admin</li>
          <li class="creation-menu__list-item" @click="onClickUser">User</li>
        </ul>
      </template>
    </UIMenu>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { artistApiService } from '@/modules/artist/services/artist.api-service.ts';
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';

const router = useRouter();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isMenuVisible, toggleMenuVisible] = useToggle();
const [isItemCreating, toggleItemCreating] = useToggle();

async function onClickArtist() {
  try {
    toggleItemCreating();
    toggleMenuVisible();

    const { id } = await artistApiService.create();

    await router.push({ name: 'artist', params: { id } });
    showSuccessMessage('Artist has been created.');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  } finally {
    toggleItemCreating();
  }
}

async function onClickAdmin() {
  const adminStore = useAdminStore();

  try {
    toggleItemCreating();
    toggleMenuVisible();

    await adminStore.createAdmin();

    await router.push({ name: 'admin', params: { id: adminStore.admin.id } });
    showSuccessMessage('Admin has been created.');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  } finally {
    toggleItemCreating();
  }
}

async function onClickUser() {
  const userStore = useUserStore();

  try {
    toggleItemCreating();
    toggleMenuVisible();

    await userStore.createUser();

    await router.push({ name: 'user', params: { id: userStore.user.id } });
    showSuccessMessage('User has been created.');
  } catch (error) {
    const { message } = error as Error;

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
