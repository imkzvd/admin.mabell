<template>
  <div class="artist-appearance-settings">
    <template v-if="artist">
      <UIContentSection heading="Avatar" class="mb-10">
        <ArtistAvatarForm
          ref="artistAvatarForm"
          :artist="artist"
          :is-loading="loadingStates.isAvatarUpdating"
          class="mb-4"
          @submit="onArtistAvatarFormSubmit"
        />

        <DeleteButton
          v-if="artist.avatar"
          :is-loading="loadingStates.isAvatarDeleting"
          @click="onDeleteAvatarButtonClick"
        />
      </UIContentSection>

      <UIContentSection heading="Cover" max-width="100%" class="mb-10">
        <ArtistCoverForm
          ref="artistCoverForm"
          :artist="artist"
          class="mb-4"
          :is-loading="loadingStates.isCoverUpdating"
          @submit="onArtistCoverFormSubmit"
        />

        <DeleteButton
          v-if="artist.cover"
          :is-loading="loadingStates.isCoverDeleting"
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
import type { ArtistAvatarFormInstance } from '@/modules/artist/components/_forms/ArtistAvatarForm/types.ts';
import type { ArtistCoverFormInstance } from '@/modules/artist/components/_forms/ArtistCoverForm/types.ts';
import type {
  UpdateArtistAvatarPayload,
  UpdateArtistCoverPayload,
} from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const { updateAvatar, updateCover, deleteCover, deleteAvatar, artist, loadingStates } =
  useArtistStore();

const artistAvatarFormInstance = useTemplateRef<ArtistAvatarFormInstance>('artistAvatarForm');
const artistCoverFormInstance = useTemplateRef<ArtistCoverFormInstance>('artistCoverForm');

async function onArtistAvatarFormSubmit(payload: UpdateArtistAvatarPayload) {
  try {
    await updateAvatar(payload);
    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar and color has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteAvatarButtonClick() {
  try {
    await deleteAvatar();
    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onArtistCoverFormSubmit(payload: UpdateArtistCoverPayload) {
  try {
    await updateCover(payload);
    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteCoverButtonClick() {
  try {
    await deleteCover();
    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
