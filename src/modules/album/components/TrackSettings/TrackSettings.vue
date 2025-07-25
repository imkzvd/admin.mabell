<template>
  <div class="track-settings">
    <UITabs :items="trackSettingsTabs" class="mb-10" v-model="activeTab" />

    <component :is="trackSettingsTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  TrackSettingsTabsEnum,
  trackSettingsTabComponents,
  trackSettingsTabs,
} from '@/modules/album/components/TrackSettings/constants/track-settings-tabs.ts';

const activeTab = ref<TrackSettingsTabsEnum>(TrackSettingsTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
