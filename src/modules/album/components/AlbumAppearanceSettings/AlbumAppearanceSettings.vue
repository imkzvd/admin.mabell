<template>
  <div class="album-appearance-settings">
    <template v-if="albumStore.album">
      <UIContentSection heading="Cover" max-width="100%">
        <AlbumCoverForm
          ref="albumCoverForm"
          :album="albumStore.album"
          class="mb-4"
          :is-loading="albumStore.isAlbumCoverUpdating"
          @submit="onAlbumCoverFormSubmit"
        />

        <DeleteButton
          v-if="albumStore.album.cover"
          :is-loading="albumStore.isAlbumCoverDeleting"
          @click="onClickDeleteCoverButton"
        />
      </UIContentSection>
    </template>
    <UISpinner v-else>Album is not uploaded</UISpinner>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import type { AlbumCoverFormInstance } from '@/modules/album/components/AlbumCoverForm/types.ts';
import type { UpdateAlbumCoverPayload } from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const albumStore = useAlbumStore();

const albumCoverFormInstance = useTemplateRef<AlbumCoverFormInstance>('albumCoverForm');

async function onAlbumCoverFormSubmit(payload: UpdateAlbumCoverPayload) {
  try {
    await albumStore.updateCover(payload);

    albumCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover and color has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onClickDeleteCoverButton() {
  try {
    await albumStore.deleteCover();

    albumCoverFormInstance.value?.resetState();
    showSuccessMessage('Cover has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
