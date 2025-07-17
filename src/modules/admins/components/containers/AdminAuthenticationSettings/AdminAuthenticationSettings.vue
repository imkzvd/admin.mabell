<template>
  <div class="admin-authentication-settings">
    <UIContentSection heading="Refresh password" class="mb-10">
      <UIButton
        color="warning"
        :is-loading="adminStore.isAdminPasswordRefreshing"
        @click="onClickRefreshPasswordButton"
      >
        Refresh
      </UIButton>
    </UIContentSection>

    <UIContentSection heading="Sessions">
      <UIText color="secondary">List ...</UIText>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/features/admins/stores/admin.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';

const adminStore = useAdminStore();
const { showSuccessMessage, showErrorMessage } = useNotification();

async function onClickRefreshPasswordButton() {
  try {
    const newPassword = await adminStore.refreshAdminPassword();
    showSuccessMessage(`Password has been updated - ${newPassword}`, {
      closeOnClick: false,
    });
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
