<template>
  <div class="admin-account-settings">
    <UIContentSection v-if="adminStore.admin" heading="Update username" class="mb-10">
      <AdminUsernameForm
        :admin="adminStore.admin"
        :is-loading="adminStore.isAdminUsernameUpdating"
        @submit="onSubmitAdminUsernameForm"
      />
    </UIContentSection>

    <UIContentSection v-if="adminStore.admin" heading="Account settings" class="mb-10">
      <AdminAccountForm
        :admin="adminStore.admin"
        :roles="metadataStore.adminRoles"
        :is-loading="adminStore.isAdminUpdating"
        @submit="onSubmitAdminAccountForm"
      />
    </UIContentSection>

    <UIContentSection v-if="adminStore.admin">
      <template #header>
        <UIHeading level="2" leading-none class="text-danger">Delete account</UIHeading>
      </template>

      <template #default>
        <DeleteButton @click="onClickDeleteButton" />
      </template>
    </UIContentSection>

    <DeleteConfirmationDialog
      v-if="adminStore.admin"
      :text="adminStore.admin.name"
      :is-loading="adminStore.isAdminDeleting"
      v-model="isDeleteDialogVisible"
      @confirm="onConfirmDeletion"
    />

    <!--    <Teleport v-if="adminStore.admin" to="body">-->
    <!--      <UIDialog-->
    <!--        :heading="`Delete - &quot;${adminStore.admin.name}&quot;`"-->
    <!--        max-width="600px"-->
    <!--        v-model="isDeleteDialogVisible"-->
    <!--      >-->
    <!--        <template #default>-->
    <!--          <DeleteConfirmation-->
    <!--            :text="adminStore.admin.name"-->
    <!--            :is-loading="adminStore.isAdminDeleting"-->
    <!--            @confirm="onConfirmDeletion"-->
    <!--          />-->
    <!--        </template>-->
    <!--      </UIDialog>-->
    <!--    </Teleport>-->
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateUserUsernameDTO } from '@/api/api.module';
import type { UpdateAdminDTO } from '@/api/api.module.ts';

const router = useRouter();
const [isDeleteDialogVisible, toggleDeleteDialogVisible] = useToggle();
const { showSuccessMessage, showErrorMessage } = useNotification();
const adminStore = useAdminStore();
const metadataStore = useMetadataStore();

async function onSubmitAdminUsernameForm(formState: UpdateUserUsernameDTO) {
  try {
    await adminStore.updateAdminUsername(formState);
    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onSubmitAdminAccountForm(formState: UpdateAdminDTO) {
  try {
    await adminStore.updateAdmin(formState);
    showSuccessMessage('Account settings has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

function onClickDeleteButton() {
  toggleDeleteDialogVisible();
}

async function onConfirmDeletion() {
  try {
    await adminStore.deleteAdmin();
    await router.push('/admin');
    showSuccessMessage('Admin has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  } finally {
    toggleDeleteDialogVisible();
  }
}
</script>

<style scoped lang="scss"></style>
