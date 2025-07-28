<template>
  <div class="admin-list">
    <div class="admin-list__action-buttons px-4 py-4">
      <UIButton size="x-small" color="white" @click="onCreateButtonClick"> Create </UIButton>

      <UIButton size="x-small" color="white">Activate</UIButton>

      <UIButton size="x-small" color="white">Publish</UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton size="x-small" color="white" class="ml-auto" @click="onRefreshAdminsButtonClick">
        Refresh
      </UIButton>
    </div>

    <UITable
      :columns="adminsTableColumns"
      :rows="admins"
      :is-loading="loadingStates.isFetching"
      hide-footer
      height="70vh"
      @click:row="emit('item-click', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { adminsTableColumns } from '@/modules/admin/components/AdminList/constants/admins-table-columns.ts';
import { useAdmins } from '@/modules/admin/composables/useAdmins.ts';
import type { AdminListEmits } from '@/modules/admin/components/AdminList/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';

const emit = defineEmits<AdminListEmits>();

const { fetchAllAdmins, createAdmin, admins, loadingStates } = useAdmins();
const { showErrorMessage } = useNotification();

onMounted(async () => {
  try {
    await fetchAllAdmins();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onRefreshAdminsButtonClick() {
  try {
    await fetchAllAdmins();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onCreateButtonClick() {
  try {
    await createAdmin();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss">
.admin-list {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
