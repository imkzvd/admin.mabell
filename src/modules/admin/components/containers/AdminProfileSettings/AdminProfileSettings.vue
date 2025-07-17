<template>
  <div class="admin-profile-settings">
    <UIContentSection v-if="adminStore.admin" heading="Personal information">
      <AdminProfileForm
        :admin="adminStore.admin"
        :is-loading="adminStore.isAdminUpdating"
        @submit="onSubmitAdminProfileForm"
      />
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admins/stores/admin.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateAdminDTO } from '@/api/api.module.ts';

const adminStore = useAdminStore();
const { showSuccessMessage, showErrorMessage } = useNotification();

async function onSubmitAdminProfileForm(formState: UpdateAdminDTO) {
  try {
    await adminStore.updateAdmin(formState);
    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
