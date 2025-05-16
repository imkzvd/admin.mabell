<template>
  <div class="album-tracks-settings">
    <template v-if="albumStore.album">
      <AlbumTracks :album-id="albumStore.album.id" />
    </template>
    <template v-else>The album has not been uploaded</template>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/features/albums/stores/album.store.ts';

const albumStore = useAlbumStore();
</script>

<style scoped lang="scss"></style>
