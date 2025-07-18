<template>
  <div class="admin-profile-settings">
    <template v-if="adminStore.admin">
      <UIContentSection heading="Profile">
        <AdminProfileForm
          :admin="adminStore.admin"
          :is-loading="adminStore.loadingStates.isUpdating"
          @submit="onAdminProfileFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Admin is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateAdminProfilePayload } from '@/modules/admin/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const adminStore = useAdminStore();
const { showSuccessMessage, showErrorMessage } = useNotification();

async function onAdminProfileFormSubmit(state: UpdateAdminProfilePayload) {
  try {
    await adminStore.updateAdmin(state);
    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
