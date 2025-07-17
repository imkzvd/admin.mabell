import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';

export function useMetadata() {
  const store = useMetadataStore();
  const { adminRoles, albumTypes, genres, regions, isLoading } = storeToRefs(store);

  async function fetch() {
    try {
      await store.fetchMetadata();
    } catch (e) {
      throw e;
    }
  }

  return {
    adminRoles,
    albumTypes,
    genres,
    regions,
    isLoading,
    fetch,
  };
}
