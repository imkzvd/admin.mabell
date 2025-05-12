import { apiService } from '@/shared/services/api.service.ts';
import type {
  ArtistRO,
  CreateArtistDTO,
  UpdateArtistDTO,
  UpdateArtistImageDTO,
} from '@/api/api.module.ts';

export class ArtistService {
  async create(payload?: CreateArtistDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.create(payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateArtistDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.update(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateAvatarById(id: string, payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.updateAvatar(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteAvatarById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.deleteAvatar(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.updateCover(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.deleteCover(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.artists.delete(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.findOne(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const artistService = new ArtistService();
