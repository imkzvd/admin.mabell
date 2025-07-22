<template>
  <div class="artist-view">
    <UISpinner v-if="artistStore.loadingState.isFetching" is-centered />
    <template v-else-if="artistStore.artist">
      <ViewHeader class="artist-view__header">
        <UIText color="secondary" size="12px" class="mb-1">Artist</UIText>

        <UIHeading leading-none>{{ artistStore.artist.name }}</UIHeading>
      </ViewHeader>

      <ViewBody>
        <UITabs :items="artistTabs" class="mb-10" v-model="activeTab" />

        <component :is="artistTabComponents[activeTab]" />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/modules/artist/stores/artist.store.ts';
import {
  artistTabComponents,
  artistTabs,
  ArtistTabsEnum,
} from '@/modules/artist/constants/artist-tabs.ts';

const router = useRouter();
const route = useRoute();
const artistStore = useArtistStore();

const activeTab = ref<ArtistTabsEnum>(ArtistTabsEnum.PROFILE);

const artistId = computed<string>(() => route.params.id as string);

onMounted(async () => {
  try {
    await artistStore.fetchArtist(artistId.value);
  } catch (e) {
    throw e;
  }
});

watch(artistId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  artistStore.fetchArtist(value);
});

watch(
  () => artistStore.artist,
  (value) => {
    if (value === null) {
      router.push({ name: 'home' });
    }
  },
);
</script>

<style scoped lang="scss"></style>
