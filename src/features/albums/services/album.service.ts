import { apiService } from '@/shared/services/api.service.ts';
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
    const { data, ok, error } = await apiService.albums.createAlbum(payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAlbumDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.updateAlbum(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateArtistsById(id: string, payload: UpdateAlbumArtistsDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.updateAlbumArtists(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdateAlbumCoverDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.updateAlbumCover(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.deleteAlbumCover(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.albums.deleteAlbum(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.getAlbum(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getByArtistId(
    id: string,
    pagination?: Partial<{ limit: number; offset: number }>,
  ): Promise<AlbumsRO> {
    const { data, ok, error } = await apiService.artists.getArtistAlbums(id, pagination);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const albumService = new AlbumService();
