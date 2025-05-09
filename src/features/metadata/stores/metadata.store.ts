import type { LabelValueRO } from '@/api/api.module.ts';
import { metadataService } from '@/features/metadata/services/metadata.service.ts';

export const useMetadataStore = defineStore('metadata', () => {
  const [isMetadataFetching, toggleMetadataFetching] = useToggle();
  const regions = ref<LabelValueRO[]>([]);
  const genres = ref<LabelValueRO[]>([]);
  const adminRoles = ref<LabelValueRO[]>([]);
  const albumTypes = ref<LabelValueRO[]>([]);

  async function fetchMetadata(): Promise<void> {
    try {
      toggleMetadataFetching();

      const metadata = await metadataService.getAll();

      regions.value = metadata.regions;
      genres.value = metadata.genres;
      adminRoles.value = metadata.adminRoles;
      albumTypes.value = metadata.albumTypes;
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
