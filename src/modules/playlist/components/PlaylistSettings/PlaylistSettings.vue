<template>
  <div class="playlist-settings">
    <UITabs :items="playlistTabs" class="mb-6" v-model="activeTab" />

    <component :is="playlistTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  playlistTabs,
  PlaylistTabsEnum,
  playlistTabComponents,
} from '@/modules/playlist/components/PlaylistSettings/constants/playlist-tabs.ts';

const activeTab = ref<PlaylistTabsEnum>(PlaylistTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
