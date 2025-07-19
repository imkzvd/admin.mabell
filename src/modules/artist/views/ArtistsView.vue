<template>
  <div class="artists-view">
    <ViewHeader class="artists-view__header">
      <div class="artists-view__header-content">
        <UIHeading>Artists</UIHeading>

        <CreateButton :is-loading="artistStore.isArtistCreating" @click="onCreateButtonClick" />
      </div>
    </ViewHeader>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';

const router = useRouter();
const { showSuccessMessage, showErrorMessage } = useNotification();
const artistStore = useArtistStore();

async function onCreateButtonClick() {
  try {
    const createdArtist = await artistStore.createArtist();
    await router.push({ name: 'artist', params: { id: createdArtist.id } });
    showSuccessMessage('Artist created successfully');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss">
.artists-view {
  &__header-content {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
}
</style>
