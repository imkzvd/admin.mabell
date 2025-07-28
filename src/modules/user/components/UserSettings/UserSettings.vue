<template>
  <div class="user-settings">
    <UITabs :items="userTabs" class="mb-8" v-model="activeTab" />

    <component :is="userTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  userTabComponents,
  userTabs,
  UserTabsEnum,
} from '@/modules/user/components/UserSettings/constants/user-tabs.ts';

const activeTab = ref<UserTabsEnum>(UserTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
