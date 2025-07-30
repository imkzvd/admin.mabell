<template>
  <div class="album-settings">
    <UITabs :items="albumTabs" class="mb-6" v-model="activeTab" />

    <component :is="albumTabComponents[activeTab]" />
  </div>
</template>

<script setup lang="ts">
import {
  albumTabComponents,
  AlbumTabsEnum,
  albumTabs,
} from '@/modules/album/components/AlbumSettings/constants/album-tabs.ts';

const activeTab = ref<AlbumTabsEnum>(AlbumTabsEnum.PROFILE);
</script>

<style scoped lang="scss"></style>
