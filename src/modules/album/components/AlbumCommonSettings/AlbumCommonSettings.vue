<template>
  <div class="album-common-settings">
    <template v-if="albumStore.album">
      <UIContentSection heading="Settings" class="mb-8">
        <AlbumSettingsForm
          :album="albumStore.album"
          :is-loading="albumStore.isAlbumUpdating"
          @submit="onAlbumSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection>
        <template #header>
          <span class="text-red">Delete album</span>
        </template>

        <template #default>
          <DeleteButton @click="onDeleteButtonClick" />
        </template>
      </UIContentSection>

      <DeleteConfirmDialog
        ref="deleteConfirmDialog"
        :is-loading="albumStore.loadingStates.isDeleting"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Album is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';
import type { DeleteConfirmDialogInstance } from '@/features/delete-confirm-dialog/components/DeleteConfirmDialog/types.ts';
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const albumStore = useAlbumStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const deleteConfirmDialogInstance =
  useTemplateRef<DeleteConfirmDialogInstance>('deleteConfirmDialog');

function onDeleteButtonClick() {
  if (!albumStore.album) return;

  deleteConfirmDialogInstance.value?.open(albumStore.album.name);
}

async function onAlbumSettingsFormSubmit(payload: UpdateAlbumSettingsPayload) {
  try {
    await albumStore.updateAlbum(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  try {
    const mainAlbumArtistId = albumStore.album?.artists[0].id;

    await albumStore.deleteAlbum();
    await router.push({ name: 'artist', params: { id: mainAlbumArtistId } });
    showSuccessMessage('Album has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
