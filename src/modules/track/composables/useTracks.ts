import { trackApiService } from '@/modules/track/services/track.api-service.ts';
import type { TracksRO } from '@/api/api.module.ts';

export function useTracks(albumId: string) {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });
  const tracks = shallowRef<TracksRO['items']>([]);
  const total = ref<number>(0);

  async function fetchTracks() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await trackApiService.getAllByAlbumId(albumId);

      tracks.value = items;
      total.value = totalFromResp;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createTrack(): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      await trackApiService.create({ albumId });
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  return {
    loadingStates,
    tracks,
    total,
    fetchTracks,
    createTrack,
  };
}
