<template>
  <div class="user-account-settings">
    <template v-if="user">
      <UIContentSection v-if="user" heading="Username" class="mb-10">
        <UserUsernameForm
          :user="user"
          :is-loading="loadingState.isUsernameUpdating"
          @submit="onUserUsernameFormSubmit"
        />
      </UIContentSection>

      <UIContentSection v-if="user" heading="E-Mail" class="mb-10">
        <UserEmailForm
          :user="user"
          :is-loading="loadingState.isEmailUpdating"
          @submit="onUserEmailFormSubmit"
        />
      </UIContentSection>

      <UIContentSection v-if="user" heading="Settings" class="mb-10">
        <UserAccountForm
          :user="user"
          :regions="regions"
          :is-loading="loadingState.isUpdating"
          @submit="onUserAccountFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete Account">
        <DeleteButton @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        :text="user.name"
        :is-loading="loadingState.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  UpdateUserAccountPayload,
  UpdateUserEmailPayload,
  UpdateUserUsernamePayload,
} from '@/modules/user/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { regions } = useMetadataStore();
const { updateUser, updateUserUsername, updateUserEmail, deleteUser, user, loadingState } =
  useUserStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

async function onUserAccountFormSubmit(payload: UpdateUserAccountPayload) {
  try {
    await updateUser(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onUserUsernameFormSubmit(payload: UpdateUserUsernamePayload) {
  try {
    await updateUserUsername(payload);

    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onUserEmailFormSubmit(payload: UpdateUserEmailPayload) {
  try {
    await updateUserEmail(payload);

    showSuccessMessage('E-mail has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

function onDeleteButtonClick() {
  toggleDeleteConfirmDialogVisible();
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await deleteUser();
    await router.push({ name: 'home' });

    showSuccessMessage('User has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
