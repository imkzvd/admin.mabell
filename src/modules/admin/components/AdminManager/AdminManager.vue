<template>
  <div class="admin-manager">
    <div class="admin-manager__action-buttons px-4 py-4">
      <UIButton size="x-small" color="white" @click="onCreateButtonClick"> Create </UIButton>

      <UIButton size="x-small" color="white">Activate</UIButton>

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
      @click:row="onUITableRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { adminTableColumns } from '@/modules/admin/components/AdminManager/constants/admin-table-columns.ts';
import { useAdmins } from '@/modules/admin/composables/useAdmins.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { AdminRO } from '@/api/api.module.ts';

const router = useRouter();
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

function onUITableRowClick({ id }: AdminRO) {
  router.push({ name: 'admin', params: { id } });
}
</script>

<style scoped lang="scss">
.admin-manager {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
