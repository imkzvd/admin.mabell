<template>
  <div class="album-view">
    <UISpinner v-if="albumStore.isAlbumFetching" />
    <template v-else-if="albumStore.album">
      <ViewHeader class="album-view__header">
        <UIText color="secondary" size="12px" class="mb-1">Album</UIText>

        <UIHeading leading-none>{{ albumStore.album.name }}</UIHeading>

        <ArtistLinks :list="albumStore.album.artists" />
      </ViewHeader>

      <ViewBody class="album-view__body">
        <UITabs :items="albumTabs" class="mb-10" v-model="activeTab" />

        <component :is="albumTabComponents[activeTab]" />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/features/albums/stores/album.store.ts';
import {
  albumTabs,
  albumTabComponents,
  AlbumTabsEnum,
} from '@/features/albums/constants/album-tabs.ts';

const route = useRoute();
const albumStore = useAlbumStore();

const activeTab = ref<AlbumTabsEnum>(AlbumTabsEnum.PROFILE);

const albumId = computed<string>(() => route.params.id as string);

onMounted(() => {
  if (!albumStore.album) {
    albumStore.fetchAlbum(albumId.value);
  }
});

watch(albumId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  albumStore.fetchAlbum(value);
});
</script>

<style scoped lang="scss"></style>
