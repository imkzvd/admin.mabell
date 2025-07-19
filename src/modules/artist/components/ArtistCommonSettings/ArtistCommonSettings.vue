<template>
  <div class="artist-common-settings">
    <UIContentSection v-if="artistStore.artist" heading="Settings" class="mb-8">
      <template #default>
        <ArtistSettingsForm
          :artist="artistStore.artist"
          :is-loading="artistStore.isArtistUpdating"
          @submit="onSubmitArtistSettingsForm"
        />
      </template>
    </UIContentSection>

    <UIContentSection class="mb-8">
      <template #header>
        <span class="text-red">Delete artist</span>
      </template>

      <template #default>
        <DeleteButton @click="onClickDeleteButton" />
      </template>
    </UIContentSection>

    <DeleteConfirmationDialog
      v-if="artistStore.artist"
      :text="artistStore.artist.name"
      :is-loading="artistStore.isArtistDeleting"
      v-model="isDeleteDialogVisible"
      @confirm="onConfirmDeletion"
    />
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ArtistSettingsFormState } from '@/modules/artist/components/presenters/ArtistSettingsForm/types.ts';

const router = useRouter();
const artistStore = useArtistStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteDialogVisible, toggleDeleteDialogVisible] = useToggle();

function onClickDeleteButton() {
  toggleDeleteDialogVisible();
}

async function onSubmitArtistSettingsForm(formState: ArtistSettingsFormState) {
  try {
    await artistStore.updateArtist(formState);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onConfirmDeletion() {
  try {
    await artistStore.deleteArtist();
    await router.push({ name: 'artists' });
    showSuccessMessage('Artist has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
