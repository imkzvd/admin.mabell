<template>
  <div class="profile-menu">
    <UISpinner v-if="!profile" size="16" width="2" />
    <template v-else>
      <UIMenu>
        <template #activator="{ activator }">
          <UIChip size="large" icon="mdi-account" v-bind="activator">
            {{ profile.name }}
          </UIChip>
        </template>

        <template #menu>
          <ul class="profile-menu__list">
            <li class="profile-menu__list-item profile-menu__list-item_is-disabled">
              <span>Profile</span>

              <UIIcon icon="mdi-account" size="20px" />
            </li>

            <li class="profile-menu__list-item profile-menu__list-item_is-disabled">
              <span>Sessions</span>

              <UIIcon icon="mdi-fingerprint" size="20px" />
            </li>

            <li class="profile-menu__list-item profile-menu__list-item_is-disabled">
              <span>Change Password</span>

              <UIIcon icon="mdi-lock" size="20px" />
            </li>

            <li class="profile-menu__list-item" @click="onLogoutButtonClick">
              <span>Log Out</span>

              <UIIcon icon="mdi-logout" size="20px" />
            </li>
          </ul>
        </template>
      </UIMenu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { showErrorMessage } = useNotification();
const { logout, profile } = useAuthStore();

async function onLogoutButtonClick() {
  try {
    await router.push({ name: 'login' });
    await logout();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss">
.profile-menu {
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

    &_is-disabled {
      cursor: not-allowed;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
