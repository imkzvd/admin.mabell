<template>
  <div class="admins-view">
    <ViewHeader>
      <UIHeading>Admins</UIHeading>
    </ViewHeader>

    <ViewBody>
      <AdminTable @click:row="onAdminTableRowClick" />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import type { AdminRO } from '@/api/api.module.ts';

const router = useRouter();

function onAdminTableRowClick({ id }: AdminRO) {
  router.push({ name: 'admin', params: { id } });
}
</script>

<style scoped lang="scss"></style>
