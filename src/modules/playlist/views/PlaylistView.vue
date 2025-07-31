<template>
  <div class="playlist-view">
    <UISpinner v-if="loadingStates.isFetching" is-centered />
    <template v-else>
      <ViewHeader class="playlist-view">
        <div class="playlist-view__header-columns">
          <ImageWithFallback
            :url="playlist?.cover && `${playlist.cover}?${Date.now()}`"
            :alt="playlist?.name"
            size="80px"
          />

          <div class="playlist-view__playlist-description">
            <div class="playlist-view__playlist-description-top-line mb-1">
              <UIText color="secondary" size="14px">Playlist </UIText>

              <UIIcon v-if="playlist?.isPublic" size="16px" icon="mdi-web" />
            </div>

            <UIHeading leading-none>{{ playlist?.name || playlistId }}</UIHeading>

            <UILink
              v-if="playlist"
              :to="{ name: 'user', params: { id: playlist.owner.id } }"
              is-underlined
            >
              {{ playlist.owner.name }}
            </UILink>
          </div>
        </div>
      </ViewHeader>

      <ViewBody>
        <PlaylistSettings />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/modules/playlist/stores/playlist.store.ts';

const route = useRoute();
const { fetchPlaylist, playlist, loadingStates } = usePlaylistStore();

const playlistId = computed<string>(() => route.params.id as string);

onMounted(() => fetchPlaylist(playlistId.value));

watch(playlistId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  fetchPlaylist(value);
});
</script>

<style scoped lang="scss">
.playlist-view {
  &__header-columns {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__playlist-description-top-line {
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--secondary-color);
    line-height: 1;
  }
}
</style>
