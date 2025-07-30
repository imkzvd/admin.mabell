<template>
  <div class="album-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else>
      <ViewHeader class="album-view__header">
        <div class="album-view__header-columns">
          <ImageWithFallback
            :url="album?.cover && `${album.cover}?${Date.now()}`"
            :alt="album?.name"
            size="80px"
          />

          <div class="album-view__album-description">
            <UIText color="secondary" size="12px" class="mb-1">
              {{ album?.type.label || 'Album' }}
            </UIText>

            <UIHeading leading-none>{{ album?.name || albumId }}</UIHeading>

            <ArtistLinks v-if="album" :list="album.artists" />
          </div>
        </div>
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

<style scoped lang="scss">
.album-view {
  &__header-columns {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
}
</style>
