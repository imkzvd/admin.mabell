<template>
  <div class="album-tracks">
    <UISpinner v-if="!albumTracksStore.tracks" />
    <template v-else>
      <div class="album-tracks__header mb-4">
        <UIHeading level="2">Album Tracks</UIHeading>

        <CreateButton :is-loading="trackStore.isTrackCreating" @click="onClickCreateButton" />
      </div>

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

      <TrackSettingsDrawer
        v-model="isUpdateTrackDrawerVisible"
        @closed="onClosedTrackSettingsDrawer"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { albumTracksTableColumns } from './constants/album-tracks-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from './constants/settings.ts';
import { useAlbumTracksStore } from '@/features/tracks/stores/album-tracks.store.ts';
import { useTrackStore } from '@/features/tracks/stores/track.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type { AlbumTracksProps } from '@/features/tracks/components/containers/AlbumTracks/types.ts';

const props = defineProps<AlbumTracksProps>();

const { showSuccessMessage, showErrorMessage } = useNotification();
const albumTracksStore = useAlbumTracksStore();
const trackStore = useTrackStore();
const [isUpdateTrackDrawerVisible, toggleUpdateTrackDrawerVisible] = useToggle();
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

onMounted(() => {
  albumTracksStore.fetchTracks(props.albumId);
});

watch(
  () => trackStore.track,
  async (value) => {
    if (value === null) {
      try {
        await albumTracksStore.refreshTracks();
      } catch (error) {
        const { message } = error as Error;

        showErrorMessage(message);
      } finally {
        toggleUpdateTrackDrawerVisible();
      }
    }
  },
);

async function onClickTableRow(track: TrackRO) {
  try {
    toggleUpdateTrackDrawerVisible();
    await trackStore.fetchTrack(track.id);
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
    toggleUpdateTrackDrawerVisible();
  }
}

async function onClickCreateButton() {
  try {
    await trackStore.createTrack({ albumId: props.albumId });
    toggleUpdateTrackDrawerVisible();
    showSuccessMessage('Tracks created successfully');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onClosedTrackSettingsDrawer() {
  try {
    await albumTracksStore.refreshTracks();
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
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
