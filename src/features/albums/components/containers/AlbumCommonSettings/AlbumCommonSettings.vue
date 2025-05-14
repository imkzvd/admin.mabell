<template>
  <div class="album-common-settings">
    <UIContentSection v-if="albumStore.album" heading="Settings" class="mb-8">
      <template #default>
        <AlbumSettingsForm
          :album="albumStore.album"
          :is-loading="albumStore.isAlbumUpdating"
          @submit="onSubmitAlbumSettingsForm"
        />
      </template>
    </UIContentSection>

    <UIContentSection>
      <template #header>
        <span class="text-red">Delete album</span>
      </template>

      <template #default>
        <DeleteButton @click="onClickDeleteButton" />
      </template>
    </UIContentSection>

    <DeleteConfirmationDialog
      v-if="albumStore.album"
      :text="albumStore.album.name"
      :is-loading="albumStore.isAlbumDeleting"
      v-model="isDeleteDialogVisible"
      @confirm="onConfirmDeletion"
    />
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useAlbumStore } from '@/features/albums/stores/album.store.ts';
import type { AlbumSettingsFormState } from '@/features/albums/components/presenters/AlbumSettingsForm/types.ts';

const router = useRouter();
const albumStore = useAlbumStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteDialogVisible, toggleDeleteDialogVisible] = useToggle();

function onClickDeleteButton() {
  toggleDeleteDialogVisible();
}

async function onSubmitAlbumSettingsForm(formState: AlbumSettingsFormState) {
  try {
    await albumStore.updateAlbum(formState);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onConfirmDeletion() {
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
