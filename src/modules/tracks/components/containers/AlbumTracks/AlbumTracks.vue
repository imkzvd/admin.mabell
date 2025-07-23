<template>
  <div class="album-tracks">
    <UISpinner v-if="!albumTracksStore.tracks" />
    <template v-else>
      <UITable
        :columns="albumTracksTableColumns"
        :rows="albumTracksStore.tracks.items"
        :total="albumTracksStore.tracks.total"
        :is-loading="albumTracksStore.isTracksFetching"
        height="600px"
        class="album-tracks__table"
        v-model:page="currentPage"
        v-model:page-size="currentPageSize"
        @update:page="fetchTracksWithPayload"
        @update:page-size="fetchTracksWithPayload"
        @click:row="onTableRowClick"
      >
        <template #footer>
          <div>
            <UIButton @click="onCreateButtonClick">Create</UIButton>
          </div>
        </template>
      </UITable>

      <TrackSettingsDrawer
        v-model="isUpdateTrackDrawerVisible"
        @closed="onTrackSettingsDrawerClosed"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { albumTracksTableColumns } from './constants/album-tracks-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from './constants/settings.ts';
import { useAlbumTracksStore } from '@/modules/tracks/stores/album-tracks.store.ts';
import { useTrackStore } from '@/modules/tracks/stores/track.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type { AlbumTracksProps } from '@/modules/tracks/components/containers/AlbumTracks/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const props = defineProps<AlbumTracksProps>();

const { showSuccessMessage, showErrorMessage } = useNotification();
const albumTracksStore = useAlbumTracksStore();
const trackStore = useTrackStore();
const [isUpdateTrackDrawerVisible, toggleUpdateTrackDrawerVisible] = useToggle();

const currentPage = ref<number>(1);
const currentPageSize = ref<number>(PAGINATION_PAGE_SIZE);

async function fetchTracksWithPayload() {
  try {
    await albumTracksStore.fetchTracks(props.albumId, {
      limit: currentPageSize.value,
      page: currentPage.value,
    });
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

onMounted(fetchTracksWithPayload);

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

async function onTableRowClick(track: TrackRO) {
  try {
    toggleUpdateTrackDrawerVisible();
    await trackStore.fetchTrack(track.id);
  } catch (error) {
    const { message } = error as ApiError | Error;

    showErrorMessage(message);
    toggleUpdateTrackDrawerVisible();
  }
}

async function onCreateButtonClick() {
  try {
    await trackStore.createTrack({ albumId: props.albumId });
    await albumTracksStore.refreshTracks();
    showSuccessMessage('Tracks created successfully');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onTrackSettingsDrawerClosed() {
  try {
    await albumTracksStore.refreshTracks();
  } catch (error) {
    const { message } = error as ApiError | Error;

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
