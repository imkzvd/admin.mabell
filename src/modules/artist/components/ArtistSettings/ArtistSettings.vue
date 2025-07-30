<template>
  <div class="artist-settings">
    <UITabs :items="artistTabs" class="mb-6" v-model="activeTab" />

    <component :is="artistTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  artistTabComponents,
  artistTabs,
  ArtistTabsEnum,
} from '@/modules/artist/components/ArtistSettings/constants/artist-tabs.ts';

const activeTab = ref<ArtistTabsEnum>(ArtistTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
