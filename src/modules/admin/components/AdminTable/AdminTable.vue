<template>
  <div class="admin-table">
    <div class="admin-table__action-buttons px-4 py-4">
      <UIButton size="x-small" color="white" @click="onCreateButtonClick"> Create </UIButton>

      <UIButton size="x-small" color="white">Activate</UIButton>

      <UIButton size="x-small" color="white">Publish</UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton size="x-small" color="white" class="ml-auto" @click="onRefreshAdminsButtonClick">
        Refresh
      </UIButton>
    </div>

    <UITable
      :columns="adminTableColumns"
      :rows="admins"
      :is-loading="loadingStates.isFetching"
      hide-footer
      height="70vh"
      @click:row="emit('click:row', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { adminTableColumns } from '@/modules/admin/components/AdminTable/constants/admin-table-columns.ts';
import { useAdmins } from '@/modules/admin/composables/useAdmins.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { AdminTableEmits } from '@/modules/admin/components/AdminTable/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const emit = defineEmits<AdminTableEmits>();

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
.admin-table {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
