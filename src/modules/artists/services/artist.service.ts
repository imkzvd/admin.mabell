import { apiService } from '@/shared/services/api.service.ts';
import type { ArtistRO, UpdateArtistDTO, UpdateArtistImageDTO } from '@/api/api.module.ts';

export class ArtistService {
  async create(): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.createArtist();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateArtistDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.updateArtist(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateAvatarById(id: string, payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.updateArtistAvatar(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteAvatarById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.deleteArtistAvatar(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateCoverById(id: string, payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.updateArtistCover(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteCoverById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.deleteArtistCover(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.artist.deleteArtist(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artist.getArtist(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const artistService = new ArtistService();
