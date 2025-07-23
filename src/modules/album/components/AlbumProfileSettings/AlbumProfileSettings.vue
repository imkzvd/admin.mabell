<template>
  <div class="album-profile-settings">
    <template v-if="albumStore.album">
      <UIContentSection heading="Artists" class="mb-8">
        <AlbumArtistsForm
          :album="albumStore.album"
          :is-loading="albumStore.loadingStates.isArtistsUpdating"
          @submit="onAlbumArtistsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Profile">
        <AlbumProfileForm
          :album="albumStore.album"
          :genres="genres"
          :album-types="albumTypes"
          :is-loading="albumStore.loadingStates.isUpdating"
          @submit="onAlbumProfileFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Album is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import type {
  UpdateAlbumArtistsPayload,
  UpdateAlbumProfilePayload,
} from '@/modules/album/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const { genres, albumTypes } = useMetadata();
const albumStore = useAlbumStore();

async function onAlbumProfileFormSubmit(payload: UpdateAlbumProfilePayload) {
  try {
    await albumStore.updateAlbum(payload);
    showSuccessMessage('Profile has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onAlbumArtistsFormSubmit(payload: UpdateAlbumArtistsPayload) {
  try {
    await albumStore.updateAlbumArtists(payload);

    showSuccessMessage('Artists has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
