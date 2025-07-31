import { playlistApiService } from '@/modules/playlist/services/playlist.api-service.ts';
import type { PlaylistTracksRO } from '@/api/api.module.ts';

export function usePlaylistTracks(playlistId: string) {
  const loadingStates = reactive({
    isFetching: false,
    isTrackAdding: false,
    isTrackDeleting: false,
  });

  const tracks = shallowRef<PlaylistTracksRO['items']>([]);
  const total = ref<number>(0);
  const deletingTrackId = ref<string | null>(null);

  async function fetchPlaylistTracks() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } =
        await playlistApiService.getPlaylistTracks(playlistId);

      tracks.value = items;
      total.value = totalFromResp;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function addTrackInPlaylist(trackId: string) {
    try {
      if (loadingStates.isTrackAdding) return;

      loadingStates.isTrackAdding = true;

      await playlistApiService.addTrackInPlaylist(playlistId, trackId);
      await fetchPlaylistTracks();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isTrackAdding = false;
    }
  }

  async function deleteTrackFromPlaylist(trackId: string) {
    try {
      if (loadingStates.isTrackDeleting) return;

      deletingTrackId.value = trackId;
      loadingStates.isTrackDeleting = true;

      await playlistApiService.deleteTrackFromPlaylist(playlistId, trackId);
      await fetchPlaylistTracks();
    } catch (e) {
      throw e;
    } finally {
      deletingTrackId.value = null;
      loadingStates.isTrackDeleting = false;
    }
  }

  return {
    loadingStates,
    tracks,
    total,
    deletingTrackId,
    fetchPlaylistTracks,
    addTrackInPlaylist,
    deleteTrackFromPlaylist,
  };
}
