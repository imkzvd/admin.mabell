<template>
  <div class="artist-appearance-settings">
    <template v-if="artistStore.artist">
      <UIContentSection heading="Avatar" class="mb-10">
        <ArtistAvatarForm
          ref="artistAvatarForm"
          :artist="artistStore.artist"
          :is-loading="artistStore.loadingState.isAvatarUpdating"
          class="mb-4"
          @submit="onArtistAvatarFormSubmit"
        />

        <DeleteButton
          v-if="artistStore.artist.avatar"
          :is-loading="artistStore.loadingState.isAvatarDeleting"
          @click="onDeleteAvatarButtonClick"
        />
      </UIContentSection>

      <UIContentSection heading="Cover" max-width="100%" class="mb-10">
        <ArtistCoverForm
          ref="artistCoverForm"
          :artist="artistStore.artist"
          class="mb-4"
          :is-loading="artistStore.loadingState.isCoverUpdating"
          @submit="onArtistCoverFormSubmit"
        />

        <DeleteButton
          v-if="artistStore.artist.cover"
          :is-loading="artistStore.loadingState.isCoverDeleting"
          @click="onDeleteCoverButtonClick"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ArtistAvatarFormInstance } from '@/modules/artist/components/ArtistAvatarForm/types.ts';
import type { ArtistCoverFormInstance } from '@/modules/artist/components/ArtistCoverForm/types.ts';
import type {
  UpdateArtistAvatarPayload,
  UpdateArtistCoverPayload,
} from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const artistStore = useArtistStore();

const artistAvatarFormInstance = useTemplateRef<ArtistAvatarFormInstance>('artistAvatarForm');
const artistCoverFormInstance = useTemplateRef<ArtistCoverFormInstance>('artistCoverForm');

async function onArtistAvatarFormSubmit(payload: UpdateArtistAvatarPayload) {
  try {
    await artistStore.updateAvatar(payload);
    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar and color has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteAvatarButtonClick() {
  try {
    await artistStore.deleteAvatar();
    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onArtistCoverFormSubmit(payload: UpdateArtistCoverPayload) {
  try {
    await artistStore.updateCover(payload);
    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteCoverButtonClick() {
  try {
    await artistStore.deleteCover();
    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
