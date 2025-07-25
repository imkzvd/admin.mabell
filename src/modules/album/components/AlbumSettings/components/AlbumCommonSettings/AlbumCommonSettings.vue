<template>
  <div class="album-common-settings">
    <template v-if="album">
      <UIContentSection heading="Settings" class="mb-8">
        <AlbumSettingsForm
          :album="album"
          :is-loading="loadingStates.isUpdating"
          @submit="onAlbumSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete">
        <DeleteButton @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        :text="album.name"
        :is-loading="loadingStates.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Album is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { updateAlbum, deleteAlbum, album, loadingStates } = useAlbumStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

function onDeleteButtonClick() {
  toggleDeleteConfirmDialogVisible();
}

async function onAlbumSettingsFormSubmit(payload: UpdateAlbumSettingsPayload) {
  try {
    await updateAlbum(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  if (!album.value) return;

  try {
    const [mainArtistId] = album.value.artistIds;

    await deleteAlbum();
    await router.push({ name: 'artist', params: { id: mainArtistId } });
    showSuccessMessage('Album has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
