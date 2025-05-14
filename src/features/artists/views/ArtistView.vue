<template>
  <div class="artist-view">
    <UISpinner v-if="artistStore.isArtistFetching" is-centered />
    <template v-else-if="artistStore.artist">
      <ViewHeader class="artist-view__header">
        <UIText color="secondary" size="12px" class="mb-1">Artist</UIText>

        <UIHeading leading-none>{{ artistStore.artist.name }}</UIHeading>
      </ViewHeader>

      <ViewHeader class="artist-view__body">
        <UITabs :items="artistTabs" class="mb-10" v-model="activeTab" />

        <component :is="artistTabComponents[activeTab]" />
      </ViewHeader>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/features/artists/stores/artist.store.ts';
import {
  artistTabComponents,
  artistTabs,
  ArtistTabsEnum,
} from '@/features/artists/constants/artist-tabs.ts';

const route = useRoute();
const artistStore = useArtistStore();

const activeTab = ref<ArtistTabsEnum>(ArtistTabsEnum.PROFILE);

const artistId = computed<string>(() => route.params.id as string);

onBeforeMount(() => artistStore.fetchArtist(artistId.value));

watch(artistId, (value: string) => artistStore.fetchArtist(value));
</script>

<style scoped lang="scss"></style>
