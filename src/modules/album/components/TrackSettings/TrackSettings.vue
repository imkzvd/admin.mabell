<template>
  <div class="track-settings">
    <UITabs :items="trackTabs" class="mb-10" v-model="activeTab" />

    <component :is="trackTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import { TrackTabsEnum, trackTabComponents, trackTabs } from './constants/track-tabs.ts';

const activeTab = ref<TrackTabsEnum>(TrackTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
