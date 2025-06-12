<template>
  <SearchResultItem
    :img-src="item.cover"
    :name="item.name"
    :metadata="item.artists.map(({ name }) => name)"
    type="Album"
    :link-href="`/album/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { AlbumSearchResultItemProps } from '@/features/search/components/presenters/AlbumSearchResultItem/types.ts';

defineProps<AlbumSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
