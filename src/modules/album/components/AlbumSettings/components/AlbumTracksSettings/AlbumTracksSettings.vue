<template>
  <div class="album-tracks-settings">
    <template v-if="album">
      <AlbumTracks ref="albumTracks" :album-id="album.id" @item-click="onAlbumTracksItemClick">
        <template #custom-action-buttons>
          <UIButton
            size="x-small"
            color="white"
            :is-loading="loadingStates.isCreating"
            @click="onAddTrackButtonClick"
          >
            Add Track
          </UIButton>

          <UIButton size="x-small" color="white"> Activate</UIButton>

          <UIButton size="x-small" color="white"> Publish</UIButton>

          <UIButton size="x-small" color="error">Delete</UIButton>
        </template>
      </AlbumTracks>

      <TrackSettingsDrawer
        v-model="isTrackSettingsDrawerVisible"
        @closed="onTrackSettingsDrawerClosed"
      />
    </template>
    <template v-else>Album is not uploaded</template>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import { useTrackStore } from '@/modules/album/stores/track.store.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type { AlbumTracksInstance } from '@/modules/album/components/AlbumTracks/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { album } = useAlbumStore();
const { createTrack, fetchTrack, loadingStates } = useTrackStore();
const { showErrorMessage } = useNotification();
const [isTrackSettingsDrawerVisible, toggleTrackSettingsDrawerVisible] = useToggle();
const albumTracksInstance = useTemplateRef<AlbumTracksInstance>('albumTracks');

async function onAlbumTracksItemClick({ id }: TrackRO) {
  try {
    toggleTrackSettingsDrawerVisible();
    await fetchTrack(id);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onAddTrackButtonClick() {
  if (!album.value) return;

  try {
    await createTrack({ albumId: album.value.id });
    await albumTracksInstance.value?.refresh();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

function onTrackSettingsDrawerClosed() {
  albumTracksInstance.value?.refresh();
}
</script>

<style scoped lang="scss"></style>
