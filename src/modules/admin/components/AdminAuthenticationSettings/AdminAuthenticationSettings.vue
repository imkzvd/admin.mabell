<template>
  <div class="admin-authentication-settings">
    <template v-if="adminStore.admin">
      <UIContentSection heading="Password" class="mb-10">
        <AdminRefreshPassword :admin="adminStore.admin" />
      </UIContentSection>

      <UIContentSection heading="Sessions">
        <UIText color="secondary">List ...</UIText>
      </UIContentSection>
    </template>
    <UIText v-else>Admin is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/modules/admin/stores/admin.store.ts';

const adminStore = useAdminStore();
</script>

<style scoped lang="scss"></style>
