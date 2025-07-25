import { artistApiService } from '../services/artist.api-service.ts';
import type { ArtistRO, UpdateArtistDTO, UpdateArtistImageDTO } from '@/api/api.module.ts';

export const useArtistStore = defineStore('artist', () => {
  const loadingState = reactive({
    isFetching: false,
    isCreating: false,
    isUpdating: false,
    isAvatarUpdating: false,
    isAvatarDeleting: false,
    isCoverUpdating: false,
    isCoverDeleting: false,
    isDeleting: false,
  });

  const artist = ref<ArtistRO | null>(null);

  async function fetchArtist(id: string): Promise<void> {
    try {
      if (loadingState.isFetching) return;

      loadingState.isFetching = true;

      artist.value = await artistApiService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isFetching = false;
    }
  }

  async function createArtist(): Promise<void> {
    try {
      if (loadingState.isCreating) return;

      loadingState.isCreating = true;

      artist.value = await artistApiService.create();
    } catch (e) {
      throw e;
    } finally {
      loadingState.isCreating = false;
    }
  }

  async function updateArtist(payload: UpdateArtistDTO): Promise<void> {
    if (loadingState.isUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isUpdating = true;

      artist.value = await artistApiService.updateById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isUpdating = false;
    }
  }

  async function updateAvatar(payload: UpdateArtistImageDTO): Promise<void> {
    if (loadingState.isAvatarUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isAvatarUpdating = true;

      artist.value = await artistApiService.updateAvatarById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isAvatarUpdating = false;
    }
  }

  async function deleteAvatar(): Promise<void> {
    if (loadingState.isAvatarDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isAvatarDeleting = true;

      artist.value = await artistApiService.deleteAvatarById(artist.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isAvatarDeleting = false;
    }
  }

  async function updateCover(payload: UpdateArtistImageDTO): Promise<void> {
    if (loadingState.isCoverUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isCoverUpdating = true;

      artist.value = await artistApiService.updateCoverById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isCoverUpdating = false;
    }
  }

  async function deleteCover(): Promise<void> {
    if (loadingState.isCoverDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isCoverDeleting = true;

      artist.value = await artistApiService.deleteCoverById(artist.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingState.isCoverDeleting = false;
    }
  }

  async function deleteArtist(): Promise<void> {
    if (loadingState.isDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingState.isDeleting = true;

      await artistApiService.deleteById(artist.value.id);
      artist.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingState.isDeleting = false;
    }
  }

  return {
    loadingState,
    artist,
    createArtist,
    fetchArtist,
    updateArtist,
    updateAvatar,
    deleteAvatar,
    updateCover,
    deleteCover,
    deleteArtist,
  };
});
