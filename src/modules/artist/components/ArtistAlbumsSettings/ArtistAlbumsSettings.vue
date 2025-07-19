<template>
  <div class="artist-albums-settings">
    <UIContentSection max-width="100%">
      <template #header>
        <div class="artist-albums-settings__content-section-header">
          <UIHeading level="2" leading-none>Albums</UIHeading>

          <CreateButton :is-loading="albumStore.isAlbumCreating" @click="onClickCreateButton" />
        </div>
      </template>

      <template #default>
        <ArtistAlbums
          v-if="artistStore.artist"
          :artist-id="artistStore.artist.id"
          @item-click="onItemClickArtistAlbums"
          @item-created="onItemCreatedArtistAlbums"
        />
      </template>
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import { useAlbumStore } from '@/modules/albums/stores/album.store.ts';
import type { AlbumRO } from '@/api/api.module.ts';

const router = useRouter();
const { showSuccessMessage, showErrorMessage } = useNotification();
const artistStore = useArtistStore();
const albumStore = useAlbumStore();

function onItemClickArtistAlbums({ id }: AlbumRO) {
  router.push({ name: 'album', params: { id } });
}

async function onClickCreateButton() {
  if (!artistStore.artist?.id) return;

  try {
    const { id } = await albumStore.createAlbum({
      artistId: artistStore.artist.id,
    });

    await router.push({ name: 'album', params: { id } });
    showSuccessMessage('Album created successfully');
  } catch (error) {
    const { message } = error as Error;

    showErrorMessage(message);
  }
}

function onItemCreatedArtistAlbums({ id }: AlbumRO) {
  router.push({ name: 'album', params: { id } });
}
</script>

<style scoped lang="scss">
.artist-albums-settings {
  &__content-section-header {
    display: flex;
    align-items: baseline;
    column-gap: 8px;
  }
}
</style>
