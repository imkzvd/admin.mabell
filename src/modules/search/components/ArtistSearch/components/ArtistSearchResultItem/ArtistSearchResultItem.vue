<template>
  <SearchResultItem
    type="Artist"
    is-img-rounded
    :name="item.name"
    :img-src="item.avatar"
    :link-href="`/artist/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { ArtistSearchResultItemProps } from '@/modules/search/components/ArtistSearch/components/ArtistSearchResultItem/types.ts';

defineProps<ArtistSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
