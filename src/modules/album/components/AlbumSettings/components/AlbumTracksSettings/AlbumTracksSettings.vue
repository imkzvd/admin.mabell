<template>
  <div class="album-tracks-settings">
    <template v-if="album">
      <TrackManager :album-id="album.id" />
    </template>
    <template v-else>Album is not uploaded</template>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';

const { album } = useAlbumStore();
</script>

<style scoped lang="scss"></style>
