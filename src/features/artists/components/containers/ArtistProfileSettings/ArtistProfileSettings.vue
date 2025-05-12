<template>
  <div class="artis-profile-settings">
    <UIContentSection v-if="artistStore.artist" heading="Public info">
      <template #default>
        <ArtistProfileForm
          :artist="artistStore.artist"
          :genres="metadataStore.genres"
          :is-loading="artistStore.isArtistUpdating"
          @submit="onSubmitArtistProfileForm"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';
import { useArtistStore } from '@/features/artists/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ArtistProfileFormState } from '@/features/artists/components/presenters/ArtistProfileForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const metadataStore = useMetadataStore();
const artistStore = useArtistStore();

async function onSubmitArtistProfileForm(formState: ArtistProfileFormState) {
  try {
    await artistStore.updateArtist(formState);

    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
