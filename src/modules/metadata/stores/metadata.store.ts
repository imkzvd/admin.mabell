import { metadataApiService } from '@/modules/metadata/services/metadata.api-service.ts';
import type { LabelValueRO } from '@/api/api.module.ts';

const loadingStates = reactive({
  isLoading: false,
});
const regions = shallowRef<LabelValueRO[]>([]);
const genres = shallowRef<LabelValueRO[]>([]);
const adminRoles = shallowRef<LabelValueRO[]>([]);
const albumTypes = shallowRef<LabelValueRO[]>([]);

export const useMetadataStore = () => {
  async function fetchAllMetadata(): Promise<void> {
    try {
      if (loadingStates.isLoading) return;

      loadingStates.isLoading = true;

      const metadata = await metadataApiService.getAllMetadata();

      regions.value = metadata.regions;
      genres.value = metadata.genres;
      adminRoles.value = metadata.adminRoles;
      albumTypes.value = metadata.albumTypes;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isLoading = false;
    }
  }

  return {
    loadingStates,
    regions,
    genres,
    adminRoles,
    albumTypes,
    fetchAllMetadata,
  };
};
