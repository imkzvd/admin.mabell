<template>
  <div class="admin-settings">
    <UITabs :items="adminTabs" class="mb-8" v-model="activeTab" />

    <component :is="adminTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  adminTabComponents,
  adminTabs,
  AdminTabsEnum,
} from '@/modules/admin/components/AdminSettings/constants/admin-tabs.ts';

const activeTab = ref<AdminTabsEnum>(AdminTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
