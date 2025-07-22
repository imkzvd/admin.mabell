<template>
  <div class="artist-common-settings">
    <template v-if="artistStore.artist">
      <UIContentSection heading="Settings" class="mb-8">
        <ArtistSettingsForm
          :artist="artistStore.artist"
          :is-loading="artistStore.loadingState.isUpdating"
          @submit="onArtistSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection class="mb-8">
        <template #header>
          <span class="text-red">Delete artist</span>
        </template>

        <template #default>
          <DeleteButton @click="onDeleteButtonClick" />
        </template>
      </UIContentSection>

      <DeleteConfirmDialog
        ref="deleteConfirmDialog"
        :is-loading="artistStore.loadingState.isDeleting"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { DeleteConfirmDialogInstance } from '@/features/delete-confirm-dialog/components/DeleteConfirmDialog/types.ts';
import type { UpdateArtistSettingsPayload } from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const artistStore = useArtistStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const deleteConfirmDialogInstance =
  useTemplateRef<DeleteConfirmDialogInstance>('deleteConfirmDialog');

function onDeleteButtonClick() {
  if (!artistStore.artist) return;

  deleteConfirmDialogInstance.value?.open(artistStore.artist.name);
}

async function onArtistSettingsFormSubmit(payload: UpdateArtistSettingsPayload) {
  try {
    await artistStore.updateArtist(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await artistStore.deleteArtist();
    showSuccessMessage('Artist has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
