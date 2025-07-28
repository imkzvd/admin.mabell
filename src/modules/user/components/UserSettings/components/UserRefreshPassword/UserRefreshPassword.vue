<template>
  <div class="user-refresh-password">
    <UIText size="12px" color="secondary" class="mb-4">
      The password will be reset and the user will receive an email with a new password
    </UIText>

    <UIButton :is-loading="isPasswordRefreshing" @click="onRefreshPasswordButtonClick">
      Refresh
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import { userApiService } from '@/modules/user/services/user.api-service.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { UserRefreshPasswordProps } from '@/modules/user/components/UserSettings/components/UserRefreshPassword/types.ts';

const props = defineProps<UserRefreshPasswordProps>();

const { showSuccessMessage, showErrorMessage } = useNotification();
const [isPasswordRefreshing, togglePasswordRefreshing] = useToggle();

async function onRefreshPasswordButtonClick() {
  try {
    togglePasswordRefreshing();
    await userApiService.refreshUserPassword(props.user.id);

    showSuccessMessage('Password refresh successfully.');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    togglePasswordRefreshing();
  }
}
</script>

<style scoped lang="scss"></style>
