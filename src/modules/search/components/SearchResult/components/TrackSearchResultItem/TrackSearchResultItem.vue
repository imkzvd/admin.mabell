<template>
  <SearchResultItem
    :img-src="item.album.cover"
    :name="item.name"
    :metadata="item.album.artists.concat(item.featArtists).map(({ name }) => name)"
    type="Track"
    :link-href="`/album/${item.album.id}?trackId=${item.id}`"
  />
</template>

<script setup lang="ts">
import type { TrackSearchResultItemProps } from '@/modules/search/components/SearchResult/components/TrackSearchResultItem/types.ts';

defineProps<TrackSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
