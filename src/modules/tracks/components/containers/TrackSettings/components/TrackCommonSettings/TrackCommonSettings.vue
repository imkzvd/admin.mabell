<template>
  <div class="track-settings">
    <UISpinner v-if="!trackStore.track || trackStore.isTrackFetching" />
    <template v-else>
      <UIContentSection heading="Settings" class="mb-10">
        <template #default>
          <TrackSettingsForm
            :track="trackStore.track"
            :is-loading="trackStore.isTrackUpdating"
            @submit="onSubmitAlbumTrackSettingsForm"
          />
        </template>
      </UIContentSection>

      <UIContentSection>
        <template #header>
          <span class="text-red">Delete track</span>
        </template>

        <template #default>
          <DeleteButton @click="onClickDeleteButton" />
        </template>
      </UIContentSection>

      <DeleteConfirmationDialog
        :text="trackStore.track.name"
        :is-loading="trackStore.isTrackDeleting"
        v-model="isDeleteDialogVisible"
        @confirm="onConfirmDeletion"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/modules/tracks/stores/track.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { TrackSettingsFormState } from '@/modules/tracks/components/presenters/TrackSettingsForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteDialogVisible, toggleDeleteDialogVisible] = useToggle();
const trackStore = useTrackStore();

function onClickDeleteButton() {
  toggleDeleteDialogVisible();
}

async function onSubmitAlbumTrackSettingsForm(formState: TrackSettingsFormState) {
  try {
    await trackStore.updateTrack(formState);

    showSuccessMessage('Track settings has been updated');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

async function onConfirmDeletion() {
  try {
    await trackStore.deleteTrack();

    showSuccessMessage('Track has been deleted');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  } finally {
    toggleDeleteDialogVisible();
  }
}
</script>

<style scoped lang="scss"></style>
