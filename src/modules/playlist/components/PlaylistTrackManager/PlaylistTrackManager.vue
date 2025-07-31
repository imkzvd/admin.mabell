<template>
  <div class="playlist-track-manager">
    <div class="playlist-track-manager__action-buttons px-4 py-4">
      <UIButton
        size="x-small"
        color="white"
        :is-loading="loadingStates.isTrackAdding"
        @click="onAddTrackButtonClick"
      >
        Add Track
      </UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton
        size="x-small"
        color="white"
        class="ml-auto"
        @click="onRefreshPlaylistTrackListButtonClick"
      >
        Refresh
      </UIButton>
    </div>

    <UITable
      height="600px"
      :columns="playlistTrackTableColumns"
      :rows="tracks"
      :total="total"
      :is-loading="loadingStates.isFetching"
      hide-footer
      class="playlist-track-manager__table"
    >
      <template #name="{ item }">
        <div class="playlist-track-manager__table-name-cell">
          <ImageWithFallback :url="item.track?.album.cover" :alt="item.name" size="28px" />
          <UIText>{{ item.track?.name || 'Unknown track' }}</UIText>
        </div>
      </template>

      <template #album="{ item }">
        <UILink :to="`/album/${item.track?.album.id}`">{{ item.track?.album.name }}</UILink>
      </template>

      <template #delete="{ item }">
        <DeleteButton
          size="x-small"
          without-text
          :is-loading="deletingTrackId === item.trackId && loadingStates.isTrackDeleting"
          :is-disabled="loadingStates.isTrackDeleting"
          @click="onPlaylistTrackDeleteButtonClick(item)"
        />
      </template>
    </UITable>

    <TrackSearchDialog
      :link-mode="false"
      :show-type="false"
      v-model="isTrackSearchDialogVisible"
      @click:item="onTrackSearchDialogItemClick"
    />
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { usePlaylistTracks } from '@/modules/playlist/composables/usePlaylistTracks.ts';
import { playlistTrackTableColumns } from '@/modules/playlist/components/PlaylistTrackManager/constants/playlist-track-table-columns.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { IndexedTrackRO, PlaylistTrackRO } from '@/api/api.module.ts';
import type { PlaylistTrackManagerProps } from '@/modules/playlist/components/PlaylistTrackManager/types.ts';

const props = defineProps<PlaylistTrackManagerProps>();

const { showErrorMessage } = useNotification();
const {
  fetchPlaylistTracks,
  addTrackInPlaylist,
  deleteTrackFromPlaylist,
  tracks,
  total,
  deletingTrackId,
  loadingStates,
} = usePlaylistTracks(props.playlistId);
const [isTrackSearchDialogVisible, toggleTrackSearchDialogVisible] = useToggle();

onMounted(async () => {
  try {
    await fetchPlaylistTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onAddTrackButtonClick() {
  toggleTrackSearchDialogVisible();
}

async function onRefreshPlaylistTrackListButtonClick() {
  try {
    await fetchPlaylistTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onPlaylistTrackDeleteButtonClick({ trackId }: PlaylistTrackRO) {
  try {
    await deleteTrackFromPlaylist(trackId);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTrackSearchDialogItemClick({ id }: IndexedTrackRO) {
  try {
    toggleTrackSearchDialogVisible();
    await addTrackInPlaylist(id);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss">
.playlist-track-manager {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }

  &__table-name-cell {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
}
</style>
