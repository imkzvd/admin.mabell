<template>
  <div class="playlist-profile-settings">
    <template v-if="playlist">
      <UIContentSection heading="Profile">
        <PlaylistProfileForm
          :playlist="playlist"
          :genres="genres"
          :is-loading="loadingStates.isUpdating"
          @submit="onPlaylistProfileFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Playlist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import { usePlaylistStore } from '@/modules/playlist/stores/playlist.store.ts';
import type { UpdatePlaylistProfilePayload } from '@/modules/playlist/types.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { genres } = useMetadataStore();
const { updatePlaylist, playlist, loadingStates } = usePlaylistStore();
const { showErrorMessage } = useNotification();

async function onPlaylistProfileFormSubmit(payload: UpdatePlaylistProfilePayload) {
  try {
    await updatePlaylist(payload);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped></style>
