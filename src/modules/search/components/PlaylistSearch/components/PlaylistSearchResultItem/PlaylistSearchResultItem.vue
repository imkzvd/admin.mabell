<template>
  <SearchResultItem
    type="Playlist"
    :img-src="item.cover"
    :name="item.name"
    :metadata="item.owner.name"
    :link-href="`/playlist/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { PlaylistSearchResultItemProps } from '@/modules/search/components/PlaylistSearch/components/PlaylistSearchResultItem/types.ts';

defineProps<PlaylistSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
