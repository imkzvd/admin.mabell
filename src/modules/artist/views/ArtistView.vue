<template>
  <div class="artist-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else-if="artist">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">Artist</UIText>

        <UIHeading leading-none>{{ artist.name }}</UIHeading>
      </ViewHeader>

      <ViewBody>
        <ArtistSettings />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';

const route = useRoute();
const { fetchArtist, artist, loadingStates } = useArtistStore();

const artistId = computed<string>(() => route.params.id as string);

onMounted(() => fetchArtist(artistId.value));

watch(artistId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  fetchArtist(value);
});
</script>

<style scoped lang="scss"></style>
