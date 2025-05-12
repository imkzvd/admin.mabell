<template>
  <div class="artist-appearance-settings">
    <UIContentSection heading="Avatar" class="mb-10">
      <template #default>
        <ArtistAvatarForm
          ref="artistAvatarFormInstance"
          :artist="artistStore.artist"
          :is-loading="artistStore.isArtistAvatarUpdating"
          class="mb-4"
          @submit="onSubmitArtistAvatarForm"
        />

        <DeleteButton
          v-if="artistStore.artist.avatar"
          :is-loading="artistStore.isArtistAvatarDeleting"
          @click="onClickDeleteAvatarButton"
        />
      </template>
    </UIContentSection>

    <UIContentSection heading="Cover" max-width="100%" class="mb-10">
      <template #default>
        <ArtistCoverForm
          ref="artistCoverFormInstance"
          :artist="artistStore.artist"
          class="mb-4"
          :is-loading="artistStore.isArtistCoverUpdating"
          @submit="onSubmitArtistCoverForm"
        />

        <DeleteButton
          v-if="artistStore.artist.cover"
          :is-loading="isArtistCoverDeleting"
          @click="onClickDeleteCoverButton"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/features/artists/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  ArtistCoverFormInstance,
  ArtistCoverFormState,
} from '@/features/artists/components/presenters/ArtistCoverForm/types.ts';
import type {
  ArtistAvatarFormInstance,
  ArtistAvatarFormState,
} from '@/features/artists/components/presenters/ArtistAvatarForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const artistStore = useArtistStore();

const artistAvatarFormInstance = ref<ArtistAvatarFormInstance | null>(null);
const artistCoverFormInstance = ref<ArtistCoverFormInstance | null>(null);

async function onSubmitArtistAvatarForm(formState: ArtistAvatarFormState) {
  try {
    await artistStore.updateAvatar(formState);

    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onClickDeleteAvatarButton() {
  try {
    await artistStore.deleteAvatar();

    artistAvatarFormInstance.value?.resetState();
    showSuccessMessage('Avatar has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onSubmitArtistCoverForm(formState: ArtistCoverFormState) {
  try {
    await artistStore.updateCover(formState);

    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onClickDeleteCoverButton() {
  try {
    await artistStore.deleteCover();

    artistCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
