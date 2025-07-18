<template>
  <div class="admin-view">
    <UISpinner v-if="adminStore.loadingStates.isFetching" is-centered />
    <template v-else-if="adminStore.admin">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">Admin</UIText>

        <UIHeading leading-none>{{ adminStore.admin.name }}</UIHeading>

        <UIText color="secondary" size="14px"> @{{ adminStore.admin.username }}</UIText>
      </ViewHeader>

      <ViewBody>
        <UITabs :items="adminTabs" class="mb-8" v-model="activeTab" />

        <component :is="adminTabComponents[activeTab]" />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';
import {
  adminTabComponents,
  adminTabs,
  AdminTabsEnum,
} from '@/modules/admin/constants/admin-tabs.ts';

const router = useRouter();
const route = useRoute();
const adminStore = useAdminStore();

const adminIdRouteParam = route.params.id as string;

const activeTab = ref<AdminTabsEnum>(AdminTabsEnum.PROFILE);

watch(
  () => adminStore.admin,
  (value) => {
    if (value === null) {
      router.push({ name: 'admins' });
    }
  },
);

onMounted(async () => {
  try {
    await adminStore.fetchAdmin(adminIdRouteParam);
  } catch (e) {
    throw e;
  }
});
</script>

<style scoped lang="scss"></style>
