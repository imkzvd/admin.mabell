import { getOffsetPaginationValue } from '@/shared/utils/getOffsetPaginationValue.ts';
import { trackService } from '@/modules/tracks/services/track.service.ts';
import type { TracksRO } from '@/api/api.module.ts';
import { albumService } from '@/modules/album/services/album.service.ts';

export const useAlbumTracksStore = defineStore('album-tracks', () => {
  const [isTracksFetching, toggleTracksFetching] = useToggle();
  const albumId = ref<string | null>(null);
  const tracks = ref<TracksRO | null>(null);
  const limit = ref<number>(15);
  const offset = ref<number>(0);

  async function fetchTracks(
    id: string,
    pagination = {
      limit: 15,
      page: 1,
    },
  ): Promise<TracksRO> {
    if (
      id === albumId.value &&
      pagination.limit === limit.value &&
      getOffsetPaginationValue(pagination.limit, pagination.page) === offset.value &&
      tracks.value
    ) {
      return tracks.value;
    }

    try {
      toggleTracksFetching();

      albumId.value = id;
      limit.value = pagination.limit;
      offset.value = getOffsetPaginationValue(pagination.limit, pagination.page);

      tracks.value = await albumService.getTracksByAlbumId(albumId.value, {
        limit: limit.value,
        offset: offset.value,
      });

      return tracks.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTracksFetching();
    }
  }

  async function refreshTracks(): Promise<TracksRO> {
    if (albumId.value === null) {
      throw new Error('Album id is required');
    }
    try {
      toggleTracksFetching();

      tracks.value = await albumService.getTracksByAlbumId(albumId.value, {
        limit: limit.value,
        offset: offset.value,
      });

      return tracks.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTracksFetching();
    }
  }

  return {
    isTracksFetching,
    tracks,
    fetchTracks,
    refreshTracks,
  };
});
