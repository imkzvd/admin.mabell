<template>
  <div class="artist-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else>
      <ViewHeader class="artist-view__header">
        <div class="artist-view__header-columns">
          <ImageWithFallback
            :url="artist?.avatar && `${artist.avatar}?${Date.now()}`"
            :alt="artist?.name"
            size="80px"
            is-rounded
          />

          <div class="artist-view__details">
            <div class="artist-view__details-top-line mb-1">
              <UIText color="secondary" size="14px">Artist</UIText>

              <UIIcon v-if="artist?.isPublic" size="16px" icon="mdi-web" />
            </div>

            <UIHeading leading-none>{{ artist?.name || artistId }}</UIHeading>
          </div>
        </div>
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

<style scoped lang="scss">
.artist-view {
  &__header-columns {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--secondary-color);
    line-height: 1;
  }
}
</style>
