<template>
  <div class="user-authentication-settings">
    <UIContentSection heading="Password" class="mb-10">
      <UIText size="12px" color="secondary" class="mb-4">
        The password will be reset and the user will receive an email with a new password
      </UIText>

      <UIButton
        :is-loading="userStore.isUserPasswordRefreshing"
        @click="onClickResetPasswordButton"
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
import { useUserStore } from '@/features/users/stores/user.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';

const userStore = useUserStore();
const { showSuccessMessage, showErrorMessage } = useNotification();

async function onClickResetPasswordButton() {
  try {
    await userStore.refreshUserPassword();
    showSuccessMessage('User password has been refreshed');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
