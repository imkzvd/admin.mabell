<template>
  <div class="user-appearance-settings">
    <template v-if="userStore.user">
      <UIContentSection heading="Avatar" max-width="100%">
        <UserAvatarForm
          ref="userAvatarForm"
          :user="userStore.user"
          :is-loading="userStore.loadingState.isAvatarUpdating"
          class="mb-8"
          @submit="onUserAvatarFormSubmit"
        >
          <template #actionButtons>
            <DeleteButton
              v-if="userStore.user.avatar"
              :is-loading="userStore.loadingState.isAvatarDeleting"
              @click="onDeleteAvatarButtonClick"
            />
          </template>
        </UserAvatarForm>
      </UIContentSection>
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import type { UpdateUserAvatarPayload } from '@/modules/user/types.ts';
import type { UserAvatarFormInstance } from '@/modules/user/components/UserAvatarForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const userStore = useUserStore();

const userAvatarFormInstance = useTemplateRef<UserAvatarFormInstance>('userAvatarForm');

async function onUserAvatarFormSubmit(payload: UpdateUserAvatarPayload) {
  try {
    await userStore.updateUserAvatar(payload);

    userAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onDeleteAvatarButtonClick() {
  try {
    await userStore.deleteUserAvatar();

    userAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
