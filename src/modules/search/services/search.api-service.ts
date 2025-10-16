import { apiService } from '@/shared/services/api.service.ts';
import type {
  IndexedAlbumsRO,
  IndexedArtistsRO,
  IndexedPlaylistsRO,
  IndexedTracksRO,
  IndexedUsersRO,
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

  async userSearch(q: string): Promise<IndexedUsersRO> {
    const { data, ok, error } = await apiService.search.userSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async artistSearch(q: string): Promise<IndexedArtistsRO> {
    const { data, ok, error } = await apiService.search.artistSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async albumSearch(q: string): Promise<IndexedAlbumsRO> {
    const { data, ok, error } = await apiService.search.albumSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async trackSearch(q: string): Promise<IndexedTracksRO> {
    const { data, ok, error } = await apiService.search.trackSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async playlistSearch(q: string): Promise<IndexedPlaylistsRO> {
    const { data, ok, error } = await apiService.search.playlistSearch({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const searchApiService = new SearchApiService();
