<template>
  <div class="album-appearance-settings">
    <UIContentSection v-if="albumStore.album" heading="Cover" max-width="100%">
      <template #default>
        <AlbumCoverForm
          ref="albumCoverFormInstance"
          :album="albumStore.album"
          class="mb-4"
          :is-loading="albumStore.isAlbumCoverUpdating"
          @submit="onSubmitAlbumCoverForm"
        />

        <DeleteButton
          v-if="albumStore.album.cover"
          :is-loading="albumStore.isAlbumCoverDeleting"
          @click="onClickDeleteCoverButton"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import type {
  AlbumCoverFormInstance,
  AlbumCoverFormState,
} from '@/modules/album/components/presenters/AlbumCoverForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const albumStore = useAlbumStore();

const albumCoverFormInstance = ref<AlbumCoverFormInstance | null>(null);

async function onSubmitAlbumCoverForm(formState: AlbumCoverFormState) {
  try {
    await albumStore.updateCover(formState);

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
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
