import { artistService } from '@/modules/artist/services/artist.service.ts';
import type { AlbumsRO } from '@/api/api.module.ts';
import { ApiError } from '@/shared/errors/api-error.ts';

export function useArtistAlbums(
  artistId: string,
  options?: Partial<{
    page: number;
    limit: number;
  }>,
) {
  const loadingStates = reactive({
    isFetching: false,
    isCreating: false,
  });

  const page = ref<number>(options?.page || 1);
  const limit = ref<number>(options?.limit || 20);
  const offset = computed<number>(() => limit.value * (page.value - 1));
  const albums = shallowRef<AlbumsRO['items']>([]);
  const total = ref<number>(0);
  const error = ref<ApiError | Error | null>(null);

  async function fetchAlbums(
    pagination = {
      page: 1,
      limit: 15,
    },
  ) {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;
      limit.value = pagination.limit;
      page.value = pagination.page;

      const { items, total: totalFromResp } = await artistService.getAlbumsByArtistId(artistId, {
        limit: limit.value,
        offset: offset.value,
      });

      albums.value = items;
      total.value = totalFromResp;
    } catch (e) {
      error.value = e as ApiError | Error;
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function refreshAlbums() {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;
      const { items, total: totalFromResp } = await artistService.getAlbumsByArtistId(artistId, {
        limit: limit.value,
        offset: offset.value,
      });
      albums.value = items;
      total.value = totalFromResp;
    } catch (e) {
      error.value = e as ApiError | Error;
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createAlbum() {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;
      await artistService.createAlbumByArtistId(artistId);
    } catch (e) {
      error.value = e as ApiError | Error;
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  return {
    loadingStates,
    albums,
    total,
    error,
    fetchAlbums,
    refreshAlbums,
    createAlbum,
  };
}
