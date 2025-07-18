<template>
  <div class="user-account-settings">
    <template v-if="userStore.user">
      <UIContentSection v-if="userStore.user" heading="Username" class="mb-10">
        <UserUsernameForm
          :user="userStore.user"
          :is-loading="userStore.loadingState.isUsernameUpdating"
          @submit="onUserUsernameFormSubmit"
        />
      </UIContentSection>

      <UIContentSection v-if="userStore.user" heading="E-Mail" class="mb-10">
        <UserEmailForm
          :user="userStore.user"
          :is-loading="userStore.loadingState.isEmailUpdating"
          @submit="onUserEmailFormSubmit"
        />
      </UIContentSection>

      <UIContentSection v-if="userStore.user" heading="Settings" class="mb-10">
        <UserAccountForm
          :user="userStore.user"
          :regions="regions"
          :is-loading="userStore.loadingState.isUpdating"
          @submit="onUserAccountFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete Account">
        <DeleteButton @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        ref="deleteConfirmDialog"
        :is-loading="userStore.loadingState.isDeleting"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  UpdateUserAccountPayload,
  UpdateUserEmailPayload,
  UpdateUserUsernamePayload,
} from '@/modules/user/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { DeleteConfirmDialogInstance } from '@/features/delete-confirm-dialog/components/DeleteConfirmDialog/types.ts';

const { regions } = useMetadata();
const userStore = useUserStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const deleteConfirmDialogInstance =
  useTemplateRef<DeleteConfirmDialogInstance>('deleteConfirmDialog');

async function onUserAccountFormSubmit(payload: UpdateUserAccountPayload) {
  try {
    await userStore.updateUser(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onUserUsernameFormSubmit(payload: UpdateUserUsernamePayload) {
  try {
    await userStore.updateUserUsername(payload);

    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onUserEmailFormSubmit(payload: UpdateUserEmailPayload) {
  try {
    await userStore.updateUserEmail(payload);

    showSuccessMessage('E-mail has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

function onDeleteButtonClick() {
  if (!userStore.user) return;

  deleteConfirmDialogInstance.value?.open(userStore.user.name);
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await userStore.deleteUser();
    showSuccessMessage('User has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
