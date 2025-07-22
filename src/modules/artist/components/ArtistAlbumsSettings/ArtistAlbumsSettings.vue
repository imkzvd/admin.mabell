<template>
  <div class="artist-albums-settings">
    <UIContentSection max-width="100%">
      <ArtistAlbums
        v-if="artistStore.artist"
        :artist-id="artistStore.artist.id"
        @item-click="onArtistAlbumsItemClick"
      />
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import type { AlbumRO } from '@/api/api.module.ts';

const router = useRouter();
const artistStore = useArtistStore();

function onArtistAlbumsItemClick({ id }: AlbumRO) {
  router.push({ name: 'album', params: { id } });
}
</script>

<style scoped lang="scss"></style>
