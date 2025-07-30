<template>
  <div class="artist-albums-settings">
    <template v-if="artist">
      <UIContentSection max-width="100%">
        <AlbumManager :artist-id="artist.id" />
      </UIContentSection>
    </template>
    <UIText v-else>Artist is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';

const { artist } = useArtistStore();
</script>

<style scoped lang="scss"></style>
