import { artistApiService } from '@/modules/artist/services/artist.api-service.ts';
import type { AlbumsRO } from '@/api/api.module.ts';

export function useArtistAlbums(artistId: string) {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });

  const albums = shallowRef<AlbumsRO['items']>([]);
  const total = ref<number>(0);

  async function fetchAlbums() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      const { items, total: totalFromResp } = await artistApiService.getAlbumsByArtistId(artistId);

      albums.value = items;
      total.value = totalFromResp;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createAlbum() {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      await artistApiService.createAlbumByArtistId(artistId);
      await fetchAlbums();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  return {
    loadingStates,
    albums,
    total,
    fetchAlbums,
    createAlbum,
  };
}
