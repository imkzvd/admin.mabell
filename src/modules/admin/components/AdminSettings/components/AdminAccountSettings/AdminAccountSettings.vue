<template>
  <div class="admin-account-settings">
    <template v-if="admin">
      <UIContentSection heading="Username" class="mb-10">
        <AdminUsernameForm
          :admin="admin"
          :is-loading="loadingStates.isUsernameUpdating"
          @submit="onAdminUsernameFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Account" class="mb-10">
        <AdminAccountForm
          :admin="admin"
          :roles="adminRoles"
          :is-loading="loadingStates.isUpdating"
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
        :text="admin.name"
        :is-loading="loadingStates.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Admin is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  UpdateAdminAccountPayload,
  UpdateAdminUsernamePayload,
} from '@/modules/admin/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { updateAdminUsername, updateAdmin, deleteAdmin, admin, loadingStates } = useAdminStore();
const { adminRoles } = useMetadataStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

async function onAdminUsernameFormSubmit(state: UpdateAdminUsernamePayload) {
  try {
    await updateAdminUsername(state);

    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onAdminAccountFormSubmit(state: UpdateAdminAccountPayload) {
  try {
    await updateAdmin(state);

    showSuccessMessage('Account settings has been updated');
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
    await deleteAdmin();
    await router.push({ name: 'admins' });
    showSuccessMessage('Admin has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
