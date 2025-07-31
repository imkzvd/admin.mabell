<template>
  <div class="playlist-common-settings">
    <template v-if="playlist">
      <UIContentSection heading="Settings" class="mb-10">
        <PlaylistSettingsForm
          :playlist="playlist"
          :is-loading="loadingStates.isUpdating"
          @submit="onPlaylistSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete">
        <DeleteButton with-text @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        :text="playlist.name"
        :is-loading="loadingStates.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Playlist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/modules/playlist/stores/playlist.store.ts';
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';

const router = useRouter();
const { showSuccessMessage, showErrorMessage } = useNotification();
const { updatePlaylist, deleteAlbum, playlist, loadingStates } = usePlaylistStore();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

function onDeleteButtonClick() {
  toggleDeleteConfirmDialogVisible();
}

async function onPlaylistSettingsFormSubmit(payload: UpdateAlbumSettingsPayload) {
  try {
    await updatePlaylist(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  if (!playlist.value) return;

  try {
    const { ownerId } = playlist.value;

    await deleteAlbum();
    await router.push({ name: 'user', params: { id: ownerId } });

    showSuccessMessage('Playlist has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
