import { apiService } from '@/shared/services/api.service.ts';
import type {
  TrackRO,
  CreateTrackDTO,
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
  TracksRO,
} from '@/api/api.module.ts';

export class TrackService {
  async create(payload: CreateTrackDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.create(payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateTrackDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.update(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateFileById(id: string, payload: UpdateTrackFileDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.updateFile(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteFileById(id: string): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.deleteFile(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateFeatArtistsById(id: string, payload: UpdateTrackFeatArtistsDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.updateFeatArtists(id, payload);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.tracks.deleteById(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getById(id: string): Promise<TrackRO> {
    const { data, ok, error } = await apiService.tracks.getById(id);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getTracksByAlbumId(
    id: string,
    pagination?: Partial<{ limit: number; offset: number }>,
  ): Promise<TracksRO> {
    const { data, ok, error } = await apiService.albums.getTracks(id, pagination);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const trackService = new TrackService();
