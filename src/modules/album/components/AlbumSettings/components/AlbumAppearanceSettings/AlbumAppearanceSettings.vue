<template>
  <div class="album-appearance-settings">
    <template v-if="album">
      <UIContentSection heading="Cover" max-width="100%">
        <AlbumCoverForm
          ref="albumCoverForm"
          :album="album"
          class="mb-4"
          :is-loading="loadingStates.isCoverUpdating"
          @submit="onAlbumCoverFormSubmit"
        />

        <DeleteButton
          v-if="album.cover"
          :is-loading="loadingStates.isCoverDeleting"
          @click="onDeleteCoverButtonClick"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Album is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateAlbumCoverPayload } from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { AlbumCoverFormInstance } from '@/modules/album/components/_forms/AlbumCoverForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const { updateAlbumCover, deleteAlbumCover, album, loadingStates } = useAlbumStore();

const albumCoverFormInstance = useTemplateRef<AlbumCoverFormInstance>('albumCoverForm');

async function onAlbumCoverFormSubmit(payload: UpdateAlbumCoverPayload) {
  try {
    await updateAlbumCover(payload);

    albumCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onDeleteCoverButtonClick() {
  try {
    await deleteAlbumCover();

    albumCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
