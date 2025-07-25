<template>
  <div class="album-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else-if="album">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">
          {{ album.type.label }}
        </UIText>

        <UIHeading leading-none>{{ album.name }}</UIHeading>

        <ArtistLinks :list="album.artists" />
      </ViewHeader>

      <ViewBody>
        <AlbumSettings />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/modules/album/stores/album.store.ts';

const route = useRoute();
const { fetchAlbum, album, loadingStates } = useAlbumStore();

const albumId = computed<string>(() => route.params.id as string);

onMounted(() => fetchAlbum(albumId.value));

watch(albumId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  fetchAlbum(value);
});
</script>

<style scoped lang="scss"></style>
