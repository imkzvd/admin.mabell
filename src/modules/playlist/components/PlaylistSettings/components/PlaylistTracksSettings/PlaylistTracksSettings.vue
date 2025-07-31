<template>
  <div class="playlist-tracks-settings">
    <template v-if="playlist">
      <PlaylistTrackManager :playlist-id="playlist.id" />
    </template>
    <UIText v-else>Playlist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/modules/playlist/stores/playlist.store.ts';

const { playlist } = usePlaylistStore();
</script>

<style scoped lang="scss"></style>
