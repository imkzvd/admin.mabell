<template>
  <div class="admin-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else>
      <ViewHeader>
        <div class="admin-view__details">
          <div class="admin-view__details-top-line mb-1">
            <UIText color="secondary" size="14px">Admin</UIText>

            <UIIcon v-if="admin?.isBlocked" icon="mdi-cancel" size="16px" />
          </div>

          <UIHeading leading-none>{{ admin?.name || adminId }}</UIHeading>

          <UIText v-if="admin" color="secondary" size="14px"> @{{ admin.username }}</UIText>
        </div>
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

const adminId = computed<string>(() => route.params.id as string);

onMounted(() => fetchAdmin(adminId.value));

watch(adminId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  fetchAdmin(value);
});
</script>

<style scoped lang="scss">
.admin-view {
  &__details-top-line {
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--secondary-color);
    line-height: 1;
  }
}
</style>
