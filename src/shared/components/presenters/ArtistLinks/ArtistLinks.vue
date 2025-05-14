<template>
  <div class="artist-links">
    <UILink
      v-for="(item, index) of list"
      :key="item.id"
      :to="{ name: 'artist', params: { id: item.id } }"
      is-underlined
      class="artist-links__link"
    >
      <span>{{ item.name }}</span>

      <template v-if="index !== list.length - 1">
        <span class="mr-2">,</span>
      </template>
    </UILink>
  </div>
</template>

<script setup lang="ts">
import type { ArtistLinksProps } from './types';

defineProps<ArtistLinksProps>();
</script>

<style scoped lang="scss"></style>
