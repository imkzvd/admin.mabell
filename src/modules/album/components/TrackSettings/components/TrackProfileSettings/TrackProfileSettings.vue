<template>
  <div class="track-profile-settings">
    <UISpinner v-if="!trackStore.track || trackStore.isTrackFetching" />
    <template v-else>
      <UIContentSection heading="File" max-width="100%" class="mb-10">
        <template #default>
          <TrackFileForm
            ref="trackFileFormInstance"
            :track="trackStore.track"
            :is-loading="trackStore.isTrackFileUpdating"
            class="mb-4"
            @submit="onSubmitUpdateTrackFileForm"
          />

          <DeleteButton
            v-if="trackStore.track.file"
            :is-loading="trackStore.isTrackFileDeleting"
            @click="onClickDeleteFileButton"
          />
        </template>
      </UIContentSection>

      <UIContentSection heading="Profile" max-width="100%" class="mb-10">
        <template #default>
          <TrackProfileForm
            :track="trackStore.track"
            :is-loading="trackStore.isTrackUpdating"
            @submit="onSubmitTrackProfileForm"
          />
        </template>
      </UIContentSection>
    </template>

    <UIContentSection heading="Feat. Artists" max-width="100%">
      <template #default>
        <TrackFeatArtistsForm
          :is-loading="trackStore.isTrackFeatArtistsUpdating"
          :track="trackStore.track"
          @submit="onSubmitTrackFeatArtistsForm"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/modules/tracks/stores/track.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  TrackFileFormInstance,
  TrackFileFormState,
} from '@/modules/tracks/components/presenters/TrackFileForm/types.ts';
import type { TrackProfileFormState } from '@/modules/tracks/components/presenters/TrackProfileForm/types.ts';
import type { TrackFeatArtistsFormState } from '@/modules/tracks/components/presenters/TrackFeatArtistsForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();

const trackFileFormInstance = ref<TrackFileFormInstance | null>(null);

const trackStore = useTrackStore();

async function onSubmitUpdateTrackFileForm(formState: TrackFileFormState) {
  try {
    await trackStore.updateTrackFile(formState);

    trackFileFormInstance.value?.resetState();
    showSuccessMessage('Track file has been uploaded');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onSubmitTrackFeatArtistsForm(formState: TrackFeatArtistsFormState) {
  try {
    await trackStore.updateTrackFeatArtists(formState);

    showSuccessMessage('Track feat. artist have been uploaded');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onClickDeleteFileButton() {
  try {
    await trackStore.deleteTrackFile();

    trackFileFormInstance.value?.resetState();
    showSuccessMessage('Track file has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onSubmitTrackProfileForm(formState: TrackProfileFormState) {
  try {
    await trackStore.updateTrack(formState);

    showSuccessMessage('Track profile has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
