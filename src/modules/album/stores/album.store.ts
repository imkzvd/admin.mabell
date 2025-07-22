import type {
  AlbumRO,
  CreateAlbumDTO,
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';
import { albumService } from '@/modules/album/services/album.service.ts';

export const useAlbumStore = defineStore('album', () => {
  const [isAlbumCreating, toggleAlbumCreating] = useToggle();
  const [isAlbumFetching, toggleAlbumFetching] = useToggle();
  const [isAlbumUpdating, toggleAlbumUpdating] = useToggle();
  const [isAlbumArtistsUpdating, toggleAlbumArtistsUpdating] = useToggle();
  const [isAlbumCoverUpdating, toggleAlbumCoverUpdating] = useToggle();
  const [isAlbumCoverDeleting, toggleAlbumCoverDeleting] = useToggle();
  const [isAlbumDeleting, toggleAlbumDeleting] = useToggle();
  const album = ref<AlbumRO | null>(null);

  async function createAlbum(payload: CreateAlbumDTO): Promise<AlbumRO> {
    try {
      toggleAlbumCreating();

      album.value = await albumService.create(payload);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumCreating();
    }
  }

  async function fetchAlbum(id: string): Promise<AlbumRO> {
    if (id === album.value?.id) {
      return album.value;
    }

    try {
      toggleAlbumFetching();

      album.value = await albumService.getById(id);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumFetching();
    }
  }

  async function updateAlbum(payload: UpdateAlbumDTO): Promise<AlbumRO> {
    if (!album.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleAlbumUpdating();

      album.value = await albumService.updateById(album.value.id, payload);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumUpdating();
    }
  }

  async function updateAlbumArtists(payload: UpdateAlbumArtistsDTO): Promise<AlbumRO> {
    if (!album.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleAlbumArtistsUpdating();

      album.value = await albumService.updateArtistsById(album.value.id, payload);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumArtistsUpdating();
    }
  }

  async function updateCover(payload: UpdateAlbumCoverDTO): Promise<AlbumRO> {
    if (!album.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleAlbumCoverUpdating();

      album.value = await albumService.updateCoverById(album.value.id, payload);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumCoverUpdating();
    }
  }

  async function deleteCover(): Promise<AlbumRO> {
    if (!album.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleAlbumCoverDeleting();

      album.value = await albumService.deleteCoverById(album.value.id);

      return album.value;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumCoverDeleting();
    }
  }

  async function deleteAlbum(): Promise<void> {
    if (!album.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleAlbumDeleting();

      await albumService.deleteById(album.value.id);
      album.value = null;
    } catch (error) {
      throw error;
    } finally {
      toggleAlbumDeleting();
    }
  }

  return {
    isAlbumCreating,
    isAlbumFetching,
    isAlbumUpdating,
    isAlbumArtistsUpdating,
    isAlbumCoverUpdating,
    isAlbumCoverDeleting,
    isAlbumDeleting,
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
