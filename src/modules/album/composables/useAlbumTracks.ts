import { ApiError } from '@/shared/errors/api-error.ts';
import { albumApiService } from '@/modules/album/services/album.api-service.ts';
import type { TracksRO } from '@/api/api.module.ts';

export function useAlbumTracks(albumId: string) {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });

  const tracks = shallowRef<TracksRO['items']>([]);
  const total = ref<number>(0);
  const error = ref<ApiError | Error | null>(null);

  async function fetchTracks() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await albumApiService.getTracksByAlbumId(albumId);

      tracks.value = items;
      total.value = totalFromResp;
    } catch (e) {
      error.value = e as ApiError | Error;
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function refreshTracks() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await albumApiService.getTracksByAlbumId(albumId);

      tracks.value = items;
      total.value = totalFromResp;
    } catch (e) {
      error.value = e as ApiError | Error;
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  return {
    loadingStates,
    tracks,
    total,
    error,
    fetchTracks,
    refreshTracks,
  };
}
