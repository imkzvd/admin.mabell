import { albumApiService } from '@/modules/album/services/album.api-service.ts';
import type {
  AlbumRO,
  CreateAlbumDTO,
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';

const loadingStates = reactive({
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  isArtistsUpdating: false,
  isCoverUpdating: false,
  isCoverDeleting: false,
  isDeleting: false,
});
const album = ref<AlbumRO | null>(null);

export const useAlbumStore = () => {
  async function fetchAlbum(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      album.value = await albumApiService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createAlbum(payload: CreateAlbumDTO): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      album.value = await albumApiService.create(payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updateAlbum(payload: UpdateAlbumDTO): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isUpdating) return;

      loadingStates.isUpdating = true;

      album.value = await albumApiService.updateById(album.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updateAlbumArtists(payload: UpdateAlbumArtistsDTO): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isArtistsUpdating) return;

      loadingStates.isArtistsUpdating = true;

      album.value = await albumApiService.updateArtistsById(album.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isArtistsUpdating = false;
    }
  }

  async function updateAlbumCover(payload: UpdateAlbumCoverDTO): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isCoverUpdating) return;

      loadingStates.isCoverUpdating = true;

      album.value = await albumApiService.updateCoverById(album.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverUpdating = false;
    }
  }

  async function deleteAlbumCover(): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isCoverDeleting) return;

      loadingStates.isCoverDeleting = true;

      album.value = await albumApiService.deleteCoverById(album.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverDeleting = false;
    }
  }

  async function deleteAlbum(): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isDeleting) return;

      loadingStates.isDeleting = true;

      await albumApiService.deleteById(album.value.id);
      album.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isDeleting = false;
    }
  }

  return {
    loadingStates,
    album,
    createAlbum,
    fetchAlbum,
    updateAlbum,
    updateAlbumArtists,
    updateAlbumCover,
    deleteAlbumCover,
    deleteAlbum,
  };
};
