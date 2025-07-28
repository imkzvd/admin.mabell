<template>
  <div class="admin-refresh-password">
    <UIButton :is-loading="isPasswordRefreshing" @click="onRefreshPasswordButtonClick">
      Refresh
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import { adminApiService } from '@/modules/admin/services/admin.api-service.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { AdminRefreshPasswordProps } from '@/modules/admin/components/AdminSettings/components/AdminRefreshPassword/types.ts';

const props = defineProps<AdminRefreshPasswordProps>();

const { showSuccessMessage, showErrorMessage } = useNotification();
const [isPasswordRefreshing, togglePasswordRefreshing] = useToggle();

async function onRefreshPasswordButtonClick() {
  try {
    togglePasswordRefreshing();

    const { password } = await adminApiService.refreshAdminPassword(props.admin.id);

    showSuccessMessage(`New password - ${password}`, {
      closeOnClick: false,
    });
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  } finally {
    togglePasswordRefreshing();
  }
}
</script>

<style scoped lang="scss"></style>
