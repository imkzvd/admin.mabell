<template>
  <div class="admins-view">
    <ViewHeader class="admins-view__header">
      <div class="admins-view__header-content">
        <UIHeading>Admins</UIHeading>
      </div>
    </ViewHeader>

    <ViewBody>
      <UISpinner v-if="!adminsStore.admins" />
      <UITable
        v-else
        :columns="adminsTableColumns"
        :rows="adminsStore.admins.items"
        :total="adminsStore.admins.total"
        :is-loading="adminsStore.isAdminsFetching"
        height="70vh"
        v-model:page="currentPage"
        v-model:page-size="currentPageSize"
        @click:row="onClickTableRow"
      />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { adminsTableColumns } from '@/features/admins/constants/admins-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from '@/features/admins/constants/settings.ts';
import { useAdminsStore } from '@/features/admins/stores/admins.store.ts';
import type { AdminRO } from '@/api/api.module.ts';

const router = useRouter();
const adminsStore = useAdminsStore();
const { currentPage, currentPageSize } = useOffsetPagination({
  page: 1,
  pageSize: PAGINATION_PAGE_SIZE,
  onPageChange: () => {
    adminsStore.fetchAdmins(currentPageSize.value, currentPage.value);
  },
  onPageSizeChange: () => {
    adminsStore.fetchAdmins(currentPageSize.value, currentPage.value);
  },
});

onBeforeMount(() => adminsStore.fetchAdmins());

function onClickTableRow(row: AdminRO) {
  router.push({ name: 'admin', params: { id: row.id } });
}
</script>

<style scoped lang="scss">
.admins-view {
  &__header-content {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
}
</style>
