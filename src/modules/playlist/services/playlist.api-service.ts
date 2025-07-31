import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  CreatePlaylistDTO,
  PlaylistRO,
  PlaylistsRO,
  PlaylistTracksRO,
  UpdatePlaylistCoverDTO,
  UpdatePlaylistDTO,
} from '@/api/api.module.ts';

export class PlaylistApiService {
  async create(payload: CreatePlaylistDTO): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.createPlaylist(payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateById(id: string, payload: UpdatePlaylistDTO): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.updatePlaylist(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdatePlaylistCoverDTO): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.updatePlaylistCover(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.deletePlaylistCover(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.playlist.deletePlaylist(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async addTrackInPlaylist(id: string, trackId: string): Promise<void> {
    const { ok, error } = await apiService.playlist.addTrackInPlaylist(id, {
      trackId,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }
  }

  async deleteTrackFromPlaylist(id: string, trackId: string): Promise<void> {
    const { data, ok, error } = await apiService.playlist.deleteTrackFromPlaylist(id, trackId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getById(id: string): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.getPlaylist(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getByUserId(userId: string): Promise<PlaylistsRO> {
    const { data, ok, error } = await apiService.playlist.getOwnerPlaylists({
      ownerId: userId,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getPlaylistTracks(playlistId: string): Promise<PlaylistTracksRO> {
    const { data, ok, error } = await apiService.playlist.getPlaylistTracks(playlistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const playlistApiService = new PlaylistApiService();
