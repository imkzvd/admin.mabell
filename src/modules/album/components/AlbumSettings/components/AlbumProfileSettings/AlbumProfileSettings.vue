<template>
  <div class="album-profile-settings">
    <template v-if="album">
      <UIContentSection heading="Artists" class="mb-8">
        <AlbumArtistsForm
          :album="album"
          :is-loading="loadingStates.isArtistsUpdating"
          @submit="onAlbumArtistsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Profile">
        <AlbumProfileForm
          :album="album"
          :genres="genres"
          :album-types="albumTypes"
          :is-loading="loadingStates.isUpdating"
          @submit="onAlbumProfileFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Album is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import type {
  UpdateAlbumArtistsPayload,
  UpdateAlbumProfilePayload,
} from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { genres, albumTypes } = useMetadataStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const { updateAlbum, updateAlbumArtists, album, loadingStates } = useAlbumStore();

async function onAlbumProfileFormSubmit(payload: UpdateAlbumProfilePayload) {
  try {
    await updateAlbum(payload);

    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onAlbumArtistsFormSubmit(payload: UpdateAlbumArtistsPayload) {
  try {
    await updateAlbumArtists(payload);

    showSuccessMessage('Artists has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
