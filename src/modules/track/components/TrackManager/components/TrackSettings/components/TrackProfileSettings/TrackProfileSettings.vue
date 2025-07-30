<template>
  <div class="track-profile-settings">
    <template v-if="track">
      <UIContentSection heading="File" max-width="100%" class="mb-10">
        <TrackFileForm
          ref="trackFileForm"
          :track="track"
          :is-loading="loadingStates.isFileUpdating"
          class="mb-4"
          @submit="onTrackFileFormSubmit"
        />

        <DeleteButton
          v-if="track.file"
          :is-loading="loadingStates.isFileDeleting"
          @click="onDeleteTrackFileButtonClick"
        />
      </UIContentSection>

      <UIContentSection heading="Profile" max-width="100%" class="mb-10">
        <TrackProfileForm
          :track="track"
          :is-loading="loadingStates.isUpdating"
          @submit="onTrackProfileFormSubmit"
        />
      </UIContentSection>

      <UIContentSection heading="Feat. Artists" max-width="100%">
        <TrackFeatArtistsForm
          :is-loading="loadingStates.isFeatArtistsUpdating"
          :track="track"
          @submit="onTrackFeatArtistsFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>Track is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useTrackStore } from '@/modules/track/stores/track.store.ts';
import type { TrackFileFormInstance } from '@/modules/track/components/_forms/TrackFileForm/types.ts';
import type {
  UpdateTrackFeatArtistsPayload,
  UpdateTrackFilePayload,
  UpdateTrackProfilePayload,
} from '@/modules/track/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const trackFileFormInstance = useTemplateRef<TrackFileFormInstance>('trackFileForm');
const {
  updateTrackFile,
  updateTrack,
  updateTrackFeatArtists,
  deleteTrackFile,
  track,
  loadingStates,
} = useTrackStore();
const { showSuccessMessage, showErrorMessage } = useNotification();

async function onTrackFileFormSubmit(payload: UpdateTrackFilePayload) {
  try {
    await updateTrackFile(payload);

    trackFileFormInstance.value?.resetState();
    showSuccessMessage('Track file has been uploaded');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTrackProfileFormSubmit(payload: UpdateTrackProfilePayload) {
  try {
    await updateTrack(payload);

    showSuccessMessage('Track profile has been updated');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTrackFeatArtistsFormSubmit(payload: UpdateTrackFeatArtistsPayload) {
  try {
    await updateTrackFeatArtists(payload);

    showSuccessMessage('Track feat. artist have been uploaded');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onDeleteTrackFileButtonClick() {
  try {
    await deleteTrackFile();

    trackFileFormInstance.value?.resetState();
    showSuccessMessage('Track file has been deleted');
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
