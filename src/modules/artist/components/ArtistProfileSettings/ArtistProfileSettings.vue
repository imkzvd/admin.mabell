<template>
  <div class="artis-profile-settings">
    <template v-if="artistStore.artist">
      <UIContentSection v-if="artistStore.artist" heading="Profile">
        <template #default>
          <ArtistProfileForm
            :artist="artistStore.artist"
            :genres="genres"
            :is-loading="artistStore.loadingState.isUpdating"
            @submit="onArtistProfileFormSubmit"
          />
        </template>
      </UIContentSection>
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import type { UpdateArtistProfilePayload } from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { genres } = useMetadata();
const { showSuccessMessage, showErrorMessage } = useNotification();
const artistStore = useArtistStore();

async function onArtistProfileFormSubmit(payload: UpdateArtistProfilePayload) {
  try {
    await artistStore.updateArtist(payload);

    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
