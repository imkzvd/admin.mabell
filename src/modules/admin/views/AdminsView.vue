<template>
  <div class="admins-view">
    <ViewHeader>
      <UIHeading>Admins</UIHeading>
    </ViewHeader>

    <ViewBody>
      <AdminList @item-click="onAdminListItemClick" />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import type { AdminRO } from '@/api/api.module.ts';

const router = useRouter();

function onAdminListItemClick({ id }: AdminRO) {
  router.push({ name: 'admin', params: { id } });
}
</script>

<style scoped lang="scss"></style>
