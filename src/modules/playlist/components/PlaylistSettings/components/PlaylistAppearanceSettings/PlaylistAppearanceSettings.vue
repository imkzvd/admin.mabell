<template>
  <div class="playlist-appearance-settings">
    <template v-if="playlist">
      <UIContentSection heading="Cover">
        <PlaylistCoverForm
          ref="playlist-cover-form"
          :playlist="playlist"
          :is-loading="loadingStates.isCoverUpdating"
          class="mb-4"
          @submit="onPlaylistCoverFormSubmit"
        />

        <DeleteButton
          v-if="playlist.cover"
          :is-loading="loadingStates.isCoverDeleting"
          @click="onDeleteCoverButtonClick"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Playlist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/modules/playlist/stores/playlist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { PlaylistCoverFormInstance } from '@/modules/playlist/components/_forms/PlaylistCoverForm/types.ts';
import type { UpdatePlaylistCoverPayload } from '@/modules/playlist/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const { updatePlaylistCover, deletePlaylistCover, playlist, loadingStates } = usePlaylistStore();

const playlistCoverFormInstance = useTemplateRef<PlaylistCoverFormInstance>('playlist-cover-form');

async function onPlaylistCoverFormSubmit(payload: UpdatePlaylistCoverPayload) {
  try {
    await updatePlaylistCover(payload);

    playlistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onDeleteCoverButtonClick() {
  try {
    await deletePlaylistCover();

    playlistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
