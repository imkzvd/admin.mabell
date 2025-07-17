<template>
  <SearchResultItem
    :name="item.name"
    type="Artist"
    :img-src="item.avatar"
    is-img-rounded
    :link-href="`/artist/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { ArtistSearchResultItemProps } from '@/features/search/components/presenters/ArtistSearchResultItem/types.ts';

defineProps<ArtistSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
