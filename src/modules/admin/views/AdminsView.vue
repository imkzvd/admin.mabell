<template>
  <div class="admins-view">
    <UISpinner v-if="adminsStore.isFetching" is-centered />
    <template v-else-if="adminsStore.admins">
      <ViewHeader>
        <UIHeading>Admins</UIHeading>
      </ViewHeader>

      <ViewBody>
        <UITable
          :columns="adminsTableColumns"
          :rows="adminsStore.admins.items"
          :total="adminsStore.admins.total"
          :is-loading="adminsStore.isFetching"
          height="70vh"
          v-model:page="currentPage"
          v-model:page-size="currentPageSize"
          @click:row="onTableRowClick"
        />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { adminsTableColumns } from '@/modules/admin/constants/admins-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from '@/modules/admin/constants/settings.ts';
import { useAdminsStore } from '@/modules/admin/stores/admins.store.ts';
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

onMounted(async () => {
  try {
    await adminsStore.fetchAdmins();
  } catch (e) {
    throw e;
  }
});

function onTableRowClick(row: AdminRO) {
  router.push({ name: 'admin', params: { id: row.id } });
}
</script>

<style scoped lang="scss"></style>
