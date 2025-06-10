<template>
  <SearchResultItem
    :img-src="item.cover"
    :name="item.name"
    :metadata="item.artists.concat(item.featuredArtists).map(({ name }) => name)"
    type="Track"
    :to="`/album/${item.album.id}?trackId=${item.id}`"
  />
</template>

<script setup lang="ts">
import type { TrackSearchResultItemProps } from '@/features/search/components/presenters/TrackSearchResultItem/types.ts';

defineProps<TrackSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
