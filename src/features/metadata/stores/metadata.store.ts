import { metadataService } from '@/features/metadata/services/metadata.service.ts';
import type { LabelValueRO } from '@/api/api.module.ts';

export const useMetadataStore = defineStore('metadata', () => {
  const [isMetadataFetching, toggleMetadataFetching] = useToggle();
  const regions = shallowRef<LabelValueRO[]>([]);
  const genres = shallowRef<LabelValueRO[]>([]);
  const adminRoles = shallowRef<LabelValueRO[]>([]);
  const albumTypes = shallowRef<LabelValueRO[]>([]);

  async function fetchMetadata(): Promise<void> {
    try {
      toggleMetadataFetching();

      const metadata = await metadataService.getAll();

      regions.value = metadata.regions;
      genres.value = metadata.genres;
      adminRoles.value = metadata.adminRoles;
      albumTypes.value = metadata.albumTypes;
    } catch (e) {
      throw e;
    } finally {
      toggleMetadataFetching();
    }
  }

  return {
    isMetadataFetching,
    fetchMetadata,
    regions,
    genres,
    adminRoles,
    albumTypes,
  };
});
