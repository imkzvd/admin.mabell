import type { AlbumsRO } from '@/api/api.module.ts';
import { albumService } from '@/features/albums/services/album.service.ts';
import { getOffsetPaginationValue } from '@/shared/utils/getOffsetPaginationValue.ts';

export const useArtistAlbumsStore = defineStore('artist-albums', () => {
  const [isAlbumsFetching, toggleAlbumsFetching] = useToggle();
  const artistId = ref<string | null>(null);
  const albums = ref<AlbumsRO | null>(null);
  const limit = ref<number>(15);
  const offset = ref<number>(0);

  async function fetchAlbums(
    id: string,
    pagination = {
      limit: 15,
      page: 1,
    },
  ): Promise<AlbumsRO> {
    if (
      id === artistId.value &&
      pagination.limit === limit.value &&
      getOffsetPaginationValue(pagination.limit, pagination.page) === offset.value &&
      albums.value
    ) {
      return albums.value;
    }

    try {
      toggleAlbumsFetching();

      artistId.value = id;
      limit.value = pagination.limit;
      offset.value = getOffsetPaginationValue(pagination.limit, pagination.page);
      albums.value = await albumService.getByArtistId(artistId.value, {
        limit: limit.value,
        offset: offset.value,
      });

      return albums.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumsFetching();
    }
  }

  async function refreshAlbums(): Promise<AlbumsRO> {
    if (artistId.value === null) {
      throw new Error('Artist id is required');
    }
    try {
      toggleAlbumsFetching();

      albums.value = await albumService.getByArtistId(artistId.value, {
        limit: limit.value,
        offset: offset.value,
      });

      return albums.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumsFetching();
    }
  }

  return {
    isAlbumsFetching,
    albums,
    fetchAlbums,
    refreshAlbums,
  };
});
