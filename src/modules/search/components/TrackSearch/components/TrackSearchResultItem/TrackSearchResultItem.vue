<template>
  <SearchResultItem
    type="Track"
    :img-src="item.cover"
    :name="item.name"
    :metadata="item.artists.concat(item.featArtists).map(({ name }) => name)"
    :link-href="`/album/${item.album.id}?trackId=${item.id}`"
    :link-mode="linkMode"
    :show-type="showType"
    @click="emit('click:item', item)"
  />
</template>

<script setup lang="ts">
import type {
  TrackSearchResultItemEmits,
  TrackSearchResultItemProps,
} from '@/modules/search/components/TrackSearch/components/TrackSearchResultItem/types.ts';

withDefaults(defineProps<TrackSearchResultItemProps>(), {
  linkMode: true,
  showType: true,
});
const emit = defineEmits<TrackSearchResultItemEmits>();
</script>

<style scoped lang="scss"></style>
