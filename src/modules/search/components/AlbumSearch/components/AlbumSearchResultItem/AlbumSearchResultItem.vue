<template>
  <SearchResultItem
    type="Album"
    :img-src="item.cover"
    :name="item.name"
    :metadata="item.artists.map(({ name }) => name)"
    :link-href="`/album/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { AlbumSearchResultItemProps } from '@/modules/search/components/AlbumSearch/components/AlbumSearchResultItem/types.ts';

defineProps<AlbumSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
