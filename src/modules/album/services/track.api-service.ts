import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  TrackRO,
  CreateTrackDTO,
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
} from '@/api/api.module.ts';

export class TrackApiService {
  async create(payload: CreateTrackDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.createTrack(payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateById(id: string, payload: UpdateTrackDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.updateTrack(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateFileById(id: string, payload: UpdateTrackFileDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.updateTrackFile(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteFileById(id: string): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.deleteTrackFile(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async updateFeatArtistsById(id: string, payload: UpdateTrackFeatArtistsDTO): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.updateTrackFeatArtists(id, payload);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async deleteById(id: string): Promise<void> {
    const { data, ok, error } = await apiService.track.deleteTrack(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getById(id: string): Promise<TrackRO> {
    const { data, ok, error } = await apiService.track.getTrack(id);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const trackApiService = new TrackApiService();
