<template>
  <div class="album-tracks">
    <UISpinner v-if="!albumTracksStore.tracks" />
    <template v-else>
      <div class="album-tracks__body">
        <UITable
          :columns="albumTracksTableColumns"
          :rows="albumTracksStore.tracks.items"
          :total="albumTracksStore.tracks.total"
          :is-loading="albumTracksStore.isTracksFetching"
          height="600px"
          class="album-tracks__table"
          v-model:page="currentPage"
          v-model:page-size="currentPageSize"
          @click:row="onClickTableRow"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { albumTracksTableColumns } from './constants/album-tracks-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from './constants/settings.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type {
  AlbumTracksEmits,
  AlbumTracksProps,
} from '@/features/tracks/components/containers/AlbumTracks/types.ts';
import { useAlbumTracksStore } from '@/features/tracks/stores/album-tracks.store.ts';

const props = defineProps<AlbumTracksProps>();
const emit = defineEmits<AlbumTracksEmits>();

const { currentPage, currentPageSize } = useOffsetPagination({
  page: 1,
  pageSize: PAGINATION_PAGE_SIZE,
  onPageChange: ({ currentPage: page, currentPageSize: limit }) => {
    albumTracksStore.fetchTracks(props.albumId, { limit, page });
  },
  onPageSizeChange: ({ currentPage: page, currentPageSize: limit }) => {
    albumTracksStore.fetchTracks(props.albumId, { limit, page });
  },
});
const albumTracksStore = useAlbumTracksStore();

onMounted(() => {
  albumTracksStore.fetchTracks(props.albumId);
});

async function onClickTableRow(track: TrackRO, index: number) {
  emit('item-click', track, index);
}
</script>

<style scoped lang="scss">
.album-tracks {
  &__header {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
}
</style>
