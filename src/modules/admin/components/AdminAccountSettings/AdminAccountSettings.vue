<template>
  <div class="admin-account-settings">
    <template v-if="adminStore.admin">
      <UIContentSection heading="Username" class="mb-10">
        <AdminUsernameForm
          :admin="adminStore.admin"
          :is-loading="adminStore.loadingStates.isUsernameUpdating"
          @submit="onAdminUsernameFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Account" class="mb-10">
        <AdminAccountForm
          :admin="adminStore.admin"
          :roles="adminRoles"
          :is-loading="adminStore.loadingStates.isUpdating"
          @submit="onAdminAccountFormSubmit"
        />
      </UIContentSection>

      <UIContentSection>
        <template #header>
          <UIHeading level="2" leading-none class="text-danger">Delete account</UIHeading>
        </template>

        <template #default>
          <DeleteButton @click="onDeleteButtonClick" />
        </template>
      </UIContentSection>

      <DeleteConfirmDialog
        ref="deleteConfirmDialog"
        :is-loading="adminStore.loadingStates.isDeleting"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Admin is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  UpdateAdminAccountPayload,
  UpdateAdminUsernamePayload,
} from '@/modules/admin/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const adminStore = useAdminStore();
const { adminRoles } = useMetadata();
const { showSuccessMessage, showErrorMessage } = useNotification();
const deleteConfirmDialogInstance = useTemplateRef('deleteConfirmDialog');

async function onAdminUsernameFormSubmit(state: UpdateAdminUsernamePayload) {
  try {
    await adminStore.updateAdminUsername(state);
    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onAdminAccountFormSubmit(state: UpdateAdminAccountPayload) {
  try {
    await adminStore.updateAdmin(state);
    showSuccessMessage('Account settings has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

function onDeleteButtonClick() {
  if (!adminStore.admin) return;

  deleteConfirmDialogInstance.value?.open(adminStore.admin.name);
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await adminStore.deleteAdmin();
    showSuccessMessage('Admin has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    deleteConfirmDialogInstance.value?.close();
  }
}
</script>

<style scoped lang="scss"></style>
