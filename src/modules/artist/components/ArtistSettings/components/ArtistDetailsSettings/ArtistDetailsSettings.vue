<template>
  <div class="artist-details-settings">
    <template v-if="artist">
      <UIContentSection heading="Details">
        <ArtistDetailsForm
          :artist="artist"
          :genres="genres"
          :is-loading="loadingStates.isUpdating"
          @submit="onArtistDetailsFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import type { UpdateArtistDetailsPayload } from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { genres } = useMetadataStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const { updateArtist, artist, loadingStates } = useArtistStore();

async function onArtistDetailsFormSubmit(payload: UpdateArtistDetailsPayload) {
  try {
    await updateArtist(payload);

    showSuccessMessage('Details has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
