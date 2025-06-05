import { apiService } from '@/shared/services/api.service.ts';
import type { MetadataRO } from '@/api/api.module.ts';

export class MetadataService {
  async getAll(): Promise<MetadataRO> {
    const { data, ok, error } = await apiService.metadata.getMetadata();

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const metadataService = new MetadataService();
