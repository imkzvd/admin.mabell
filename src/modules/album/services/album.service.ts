import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  AlbumRO,
  AlbumsRO,
  CreateAlbumDTO,
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';

export class AlbumService {
  async create(payload: CreateAlbumDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.createAlbum(payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAlbumDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.updateAlbum(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateArtistsById(id: string, payload: UpdateAlbumArtistsDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.updateAlbumArtists(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdateAlbumCoverDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.updateAlbumCover(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.deleteAlbumCover(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.album.deleteAlbum(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.getAlbum(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getByArtistId(
    id: string,
    pagination?: Partial<{ limit: number; offset: number }>,
  ): Promise<AlbumsRO> {
    const { data, ok, error } = await apiService.artist.getArtistAlbums(id, pagination);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const albumService = new AlbumService();
