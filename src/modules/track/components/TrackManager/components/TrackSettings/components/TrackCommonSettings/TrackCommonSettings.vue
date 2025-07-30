<template>
  <div class="track-common-settings">
    <template v-if="track">
      <UIContentSection heading="Settings" class="mb-10">
        <TrackSettingsForm
          :track="track"
          :is-loading="loadingStates.isUpdating"
          @submit="onTrackSettingsFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Delete">
        <DeleteButton @click="onDeleteButtonClick" />
      </UIContentSection>

      <DeleteConfirmDialog
        :text="track.name"
        :is-loading="loadingStates.isDeleting"
        v-model="isDeleteConfirmDialogVisible"
        @confirm="onDeleteConfirmDialogConfirm"
      />
    </template>
    <UIText v-else>Track is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/modules/track/stores/track.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { UpdateTrackSettingsPayload } from '@/modules/track/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const { updateTrack, deleteTrack, track, loadingStates } = useTrackStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteConfirmDialogVisible, toggleDeleteConfirmDialogVisible] = useToggle();

async function onTrackSettingsFormSubmit(payload: UpdateTrackSettingsPayload) {
  try {
    await updateTrack(payload);

    showSuccessMessage('Track settings has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteConfirmDialogConfirm() {
  try {
    await deleteTrack();

    showSuccessMessage('Track has been deleted');
    toggleDeleteConfirmDialogVisible();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

function onDeleteButtonClick() {
  toggleDeleteConfirmDialogVisible();
}
</script>

<style scoped lang="scss"></style>
