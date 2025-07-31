import { playlistApiService } from '@/modules/playlist/services/playlist.api-service.ts';
import type { PlaylistsRO } from '@/api/api.module.ts';

export function usePlaylists(userId: string) {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });

  const playlists = shallowRef<PlaylistsRO['items']>([]);
  const total = ref<number>(0);

  async function fetchPlaylists() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await playlistApiService.getByUserId(userId);

      playlists.value = items;
      total.value = totalFromResp;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createPlaylist() {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      await playlistApiService.create({
        ownerId: userId,
      });
      await fetchPlaylists();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  return {
    loadingStates,
    playlists,
    total,
    fetchPlaylists,
    createPlaylist,
  };
}
