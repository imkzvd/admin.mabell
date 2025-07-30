import { apiService } from '@/shared/services/api.service.ts';
import type {
  IndexedAlbumRO,
  IndexedArtistRO,
  IndexedPlaylistRO,
  IndexedTrackRO,
  IndexedUserRO,
  SearchResultRO,
} from '@/api/api.module.ts';
import { ApiError } from '@/shared/errors/api-error.ts';

export class SearchApiService {
  async search(q: string): Promise<SearchResultRO> {
    const { data, ok, error } = await apiService.search.search({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async userSearch(q: string): Promise<IndexedUserRO[]> {
    const { data, ok, error } = await apiService.search.userSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async artistSearch(q: string): Promise<IndexedArtistRO[]> {
    const { data, ok, error } = await apiService.search.artistSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async albumSearch(q: string): Promise<IndexedAlbumRO[]> {
    const { data, ok, error } = await apiService.search.albumSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async trackSearch(q: string): Promise<IndexedTrackRO[]> {
    const { data, ok, error } = await apiService.search.trackSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async playlistSearch(q: string): Promise<IndexedPlaylistRO[]> {
    const { data, ok, error } = await apiService.search.playlistSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const searchApiService = new SearchApiService();
