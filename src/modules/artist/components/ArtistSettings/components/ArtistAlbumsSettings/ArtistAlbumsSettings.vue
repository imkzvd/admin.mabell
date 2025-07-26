<template>
  <div class="artist-albums-settings">
    <template v-if="artist">
      <UIContentSection max-width="100%">
        <ArtistAlbums :artist-id="artist.id" @item-click="onArtistAlbumsItemClick" />
      </UIContentSection>
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import type { AlbumRO } from '@/api/api.module.ts';

const router = useRouter();
const { artist } = useArtistStore();

function onArtistAlbumsItemClick({ id }: AlbumRO) {
  router.push({ name: 'album', params: { id } });
}
</script>

<style scoped lang="scss"></style>
