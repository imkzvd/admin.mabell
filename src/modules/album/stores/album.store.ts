import { albumService } from '@/modules/album/services/album.service.ts';
import type {
  AlbumRO,
  CreateAlbumDTO,
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';

export const useAlbumStore = defineStore('album', () => {
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

  async function fetchAlbum(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      album.value = await albumService.getById(id);
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

      album.value = await albumService.create(payload);
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

      album.value = await albumService.updateById(album.value.id, payload);
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

      album.value = await albumService.updateArtistsById(album.value.id, payload);

      loadingStates.isArtistsUpdating = true;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isArtistsUpdating = false;
    }
  }

  async function updateCover(payload: UpdateAlbumCoverDTO): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isCoverUpdating) return;

      loadingStates.isCoverUpdating = true;

      album.value = await albumService.updateCoverById(album.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverUpdating = false;
    }
  }

  async function deleteCover(): Promise<void> {
    if (!album.value) {
      throw new Error('Album is not uploaded');
    }

    try {
      if (loadingStates.isCoverDeleting) return;

      loadingStates.isCoverDeleting = true;

      album.value = await albumService.deleteCoverById(album.value.id);
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

      await albumService.deleteById(album.value.id);
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
    updateCover,
    deleteCover,
    deleteAlbum,
  };
});
