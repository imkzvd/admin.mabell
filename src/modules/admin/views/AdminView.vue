<template>
  <div class="admin-view">
    <UISpinner v-if="adminStore.isAdminFetching" is-centered />
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
import { adminTabComponents, adminTabs, AdminTabsEnum } from '../constants/admin-tabs.ts';
import { useAdminStore } from '@/modules/admins/stores/admin.store.ts';

const route = useRoute();
const adminStore = useAdminStore();

const adminIdRouteParam = route.params.id as string;

onBeforeMount(() => adminStore.fetchAdmin(adminIdRouteParam));

const activeTab = ref<AdminTabsEnum>(AdminTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
