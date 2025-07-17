import { apiService } from '@/shared/services/api.service.ts';
import type {
  IndexedAlbumRO,
  IndexedArtistRO,
  IndexedPlaylistRO,
  IndexedTrackRO,
  IndexedUserRO,
  SearchResultRO,
} from '@/api/api.module.ts';

export class SearchService {
  async searchByQuery(q: string): Promise<SearchResultRO> {
    const { data, ok, error } = await apiService.search.search({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async userSearchByQuery(q: string): Promise<IndexedUserRO[]> {
    const { data, ok, error } = await apiService.search.userSearch({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async artistSearchByQuery(q: string): Promise<IndexedArtistRO[]> {
    const { data, ok, error } = await apiService.search.artistSearch({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async albumSearchByQuery(q: string): Promise<IndexedAlbumRO[]> {
    const { data, ok, error } = await apiService.search.albumSearch({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async trackSearchByQuery(q: string): Promise<IndexedTrackRO[]> {
    const { data, ok, error } = await apiService.search.trackSearch({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async playlistSearchByQuery(q: string): Promise<IndexedPlaylistRO[]> {
    const { data, ok, error } = await apiService.search.playlistSearch({ q });

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const searchService = new SearchService();
