<template>
  <div class="user-appearance-settings">
    <UIContentSection v-if="userStore.user" heading="Avatar" max-width="100%">
      <UserAvatarForm
        ref="userAvatarFormInstance"
        :user="userStore.user"
        :is-loading="userStore.isUserAvatarUpdating"
        class="mb-8"
        @submit="onSubmitUserAvatarForm"
      >
        <template #actionButtons>
          <DeleteButton
            v-if="userStore.user.avatar"
            :is-loading="userStore.isUserAvatarDeleting"
            @click="onClickDeleteAvatarButton"
          />
        </template>
      </UserAvatarForm>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useUserStore } from '@/features/users/stores/user.store.ts';
import type {
  UserAvatarFormInstance,
  UserAvatarFormState,
} from '@/features/users/components/presenters/UserAvatarForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const userStore = useUserStore();

const userAvatarFormInstance = ref<UserAvatarFormInstance | null>(null);

async function onSubmitUserAvatarForm(formState: UserAvatarFormState) {
  try {
    await userStore.updateUserAvatar(formState);

    userAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onClickDeleteAvatarButton() {
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
