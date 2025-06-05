import type { ArtistRO, UpdateArtistDTO, UpdateArtistImageDTO } from '@/api/api.module.ts';
import { artistService } from '../services/artist.service.ts';

export const useArtistStore = defineStore('artist', () => {
  const [isArtistCreating, toggleArtistCreating] = useToggle();
  const [isArtistFetching, toggleArtistFetching] = useToggle();
  const [isArtistUpdating, toggleArtistUpdating] = useToggle();
  const [isArtistAvatarUpdating, toggleArtistAvatarUpdating] = useToggle();
  const [isArtistAvatarDeleting, toggleArtistAvatarDeleting] = useToggle();
  const [isArtistCoverUpdating, toggleArtistCoverUpdating] = useToggle();
  const [isArtistCoverDeleting, toggleArtistCoverDeleting] = useToggle();
  const [isArtistDeleting, toggleArtistDeleting] = useToggle();
  const artist = ref<ArtistRO | null>(null);

  async function createArtist(): Promise<ArtistRO> {
    try {
      toggleArtistCreating();

      artist.value = await artistService.create();

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistCreating();
    }
  }

  async function fetchArtist(id: string): Promise<ArtistRO> {
    if (id === artist.value?.id) {
      return artist.value;
    }

    try {
      toggleArtistFetching();

      artist.value = await artistService.getById(id);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistFetching();
    }
  }

  async function updateArtist(payload: UpdateArtistDTO): Promise<ArtistRO> {
    if (!artist.value) {
      throw new Error('Artist does not fetch');
    }

    try {
      toggleArtistUpdating();

      artist.value = await artistService.updateById(artist.value.id, payload);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistUpdating();
    }
  }

  async function updateAvatar(payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    if (!artist.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleArtistAvatarUpdating();

      artist.value = await artistService.updateAvatarById(artist.value.id, payload);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistAvatarUpdating();
    }
  }

  async function deleteAvatar(): Promise<ArtistRO> {
    if (!artist.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleArtistAvatarDeleting();

      artist.value = await artistService.deleteAvatarById(artist.value.id);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistAvatarDeleting();
    }
  }

  async function updateCover(payload: UpdateArtistImageDTO): Promise<ArtistRO> {
    if (!artist.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleArtistCoverUpdating();

      artist.value = await artistService.updateCoverById(artist.value.id, payload);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistCoverUpdating();
    }
  }

  async function deleteCover(): Promise<ArtistRO> {
    if (!artist.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleArtistCoverDeleting();

      artist.value = await artistService.deleteCoverById(artist.value.id);

      return artist.value;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistCoverDeleting();
    }
  }

  async function deleteArtist(): Promise<void> {
    if (!artist.value) {
      throw new Error('Admin does not fetch');
    }

    try {
      toggleArtistDeleting();

      await artistService.deleteById(artist.value.id);
      artist.value = null;
    } catch (error) {
      throw error;
    } finally {
      toggleArtistDeleting();
    }
  }

  return {
    isArtistCreating,
    isArtistFetching,
    isArtistUpdating,
    isArtistAvatarUpdating,
    isArtistAvatarDeleting,
    isArtistCoverUpdating,
    isArtistCoverDeleting,
    isArtistDeleting,
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
