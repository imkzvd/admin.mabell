<template>
  <div class="album-profile-settings">
    <UIContentSection v-if="albumStore.album" heading="Artists" class="mb-8">
      <template #default>
        <AlbumArtistsForm
          :album="albumStore.album"
          :is-loading="albumStore.isAlbumArtistsUpdating"
          @submit="onSubmitAlbumArtistsForm"
        />
      </template>
    </UIContentSection>

    <UIContentSection v-if="albumStore.album" heading="Public info">
      <template #default>
        <AlbumProfileForm
          :album="albumStore.album"
          :genres="metadataStore.genres"
          :album-types="metadataStore.albumTypes"
          :is-loading="albumStore.isAlbumUpdating"
          @submit="onSubmitAlbumProfileForm"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/features/albums/stores/album.store.ts';
import type { AlbumProfileFormState } from '@/features/albums/components/presenters/AlbumProfileForm/types.ts';
import type { AlbumArtistsFormState } from '@/features/albums/components/presenters/AlbumArtistsForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const metadataStore = useMetadataStore();
const albumStore = useAlbumStore();

async function onSubmitAlbumProfileForm(formState: AlbumProfileFormState) {
  try {
    await albumStore.updateAlbum(formState);
    showSuccessMessage('Profile has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onSubmitAlbumArtistsForm(formState: AlbumArtistsFormState) {
  try {
    await albumStore.updateAlbumArtists(formState);

    showSuccessMessage('Artists has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
