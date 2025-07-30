import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type { MetadataRO } from '@/api/api.module.ts';

export class MetadataApiService {
  async getAllMetadata(): Promise<MetadataRO> {
    const { data, ok, error } = await apiService.metadata.getMetadata();

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const metadataApiService = new MetadataApiService();
