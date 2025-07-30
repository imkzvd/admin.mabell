<template>
  <div class="admin-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else-if="admin">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">Admin</UIText>

        <UIHeading leading-none>{{ admin.name }}</UIHeading>

        <UIText color="secondary" size="14px"> @{{ admin.username }}</UIText>
      </ViewHeader>

      <ViewBody>
        <AdminSettings />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';

const route = useRoute();
const { fetchAdmin, admin, loadingStates } = useAdminStore();

const adminIdRouteParam = route.params.id as string;

onMounted(async () => {
  try {
    await fetchAdmin(adminIdRouteParam);
  } catch (e) {
    throw e;
  }
});
</script>

<style scoped lang="scss"></style>
