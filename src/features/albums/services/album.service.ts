import { apiService } from '@/shared/services/api.service.ts';
import type {
  AlbumRO,
  CreateAlbumDTO,
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';

export class AlbumService {
  async create(payload: CreateAlbumDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.create(payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateAlbumDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.update(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateArtistsById(id: string, payload: UpdateAlbumArtistsDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.updateArtists(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdateAlbumCoverDTO): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.updateCover(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.deleteCover(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.albums.delete(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.albums.findOne(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const albumService = new AlbumService();
