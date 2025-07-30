import { artistApiService } from '../services/artist.api-service.ts';
import type { ArtistRO, UpdateArtistDTO, UpdateArtistImageDTO } from '@/api/api.module.ts';

const loadingStates = reactive({
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

export const useArtistStore = () => {
  async function fetchArtist(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      artist.value = await artistApiService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createArtist(): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      artist.value = await artistApiService.create();
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updateArtist(payload: UpdateArtistDTO): Promise<void> {
    if (loadingStates.isUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isUpdating = true;

      artist.value = await artistApiService.updateById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updateAvatar(payload: UpdateArtistImageDTO): Promise<void> {
    if (loadingStates.isAvatarUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isAvatarUpdating = true;

      artist.value = await artistApiService.updateAvatarById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isAvatarUpdating = false;
    }
  }

  async function deleteAvatar(): Promise<void> {
    if (loadingStates.isAvatarDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isAvatarDeleting = true;

      artist.value = await artistApiService.deleteAvatarById(artist.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isAvatarDeleting = false;
    }
  }

  async function updateCover(payload: UpdateArtistImageDTO): Promise<void> {
    if (loadingStates.isCoverUpdating) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isCoverUpdating = true;

      artist.value = await artistApiService.updateCoverById(artist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverUpdating = false;
    }
  }

  async function deleteCover(): Promise<void> {
    if (loadingStates.isCoverDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isCoverDeleting = true;

      artist.value = await artistApiService.deleteCoverById(artist.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverDeleting = false;
    }
  }

  async function deleteArtist(): Promise<void> {
    if (loadingStates.isDeleting) return;

    if (!artist.value) {
      throw new Error('Artist is not uploaded');
    }

    try {
      loadingStates.isDeleting = true;

      await artistApiService.deleteById(artist.value.id);
      artist.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isDeleting = false;
    }
  }

  return {
    loadingStates,
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
};
