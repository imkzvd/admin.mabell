<template>
  <div class="artist-common-settings">
    <template v-if="artist">
      <UIContentSection heading="Settings" class="mb-10">
        <ArtistSettingsForm
          :artist="artist"
          :is-loading="loadingStates.isUpdating"
          @submit="onArtistSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete" class="mb-10">
        <DeleteButton @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        :text="artist.name"
        :is-loading="loadingStates.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateArtistSettingsPayload } from '@/modules/artist/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const { updateArtist, deleteArtist, artist, loadingStates } = useArtistStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

function onDeleteButtonClick() {
  toggleDeleteConfirmDialogVisible();
}

async function onArtistSettingsFormSubmit(payload: UpdateArtistSettingsPayload) {
  try {
    await updateArtist(payload);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await deleteArtist();
    await router.push({ name: 'home' });
    showSuccessMessage('Artist has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
