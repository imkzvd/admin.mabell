import { playlistApiService } from '@/modules/playlist/services/playlist.api-service.ts';
import type {
  CreatePlaylistDTO,
  PlaylistRO,
  UpdatePlaylistCoverDTO,
  UpdatePlaylistDTO,
} from '@/api/api.module.ts';

const loadingStates = reactive({
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  isCoverUpdating: false,
  isCoverDeleting: false,
  isDeleting: false,
});
const playlist = ref<PlaylistRO | null>(null);

export const usePlaylistStore = () => {
  async function fetchPlaylist(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      playlist.value = await playlistApiService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createPlaylist(payload: CreatePlaylistDTO): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      playlist.value = await playlistApiService.create(payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updatePlaylist(payload: UpdatePlaylistDTO): Promise<void> {
    if (!playlist.value) {
      throw new Error('Playlist is not uploaded');
    }

    try {
      if (loadingStates.isUpdating) return;

      loadingStates.isUpdating = true;

      playlist.value = await playlistApiService.updateById(playlist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updatePlaylistCover(payload: UpdatePlaylistCoverDTO): Promise<void> {
    if (!playlist.value) {
      throw new Error('Playlist is not uploaded');
    }

    try {
      if (loadingStates.isCoverUpdating) return;

      loadingStates.isCoverUpdating = true;

      playlist.value = await playlistApiService.updateCoverById(playlist.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverUpdating = false;
    }
  }

  async function deletePlaylistCover(): Promise<void> {
    if (!playlist.value) {
      throw new Error('Playlist is not uploaded');
    }

    try {
      if (loadingStates.isCoverDeleting) return;

      loadingStates.isCoverDeleting = true;

      playlist.value = await playlistApiService.deleteCoverById(playlist.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCoverDeleting = false;
    }
  }

  async function deleteAlbum(): Promise<void> {
    if (!playlist.value) {
      throw new Error('Playlist is not uploaded');
    }

    try {
      if (loadingStates.isDeleting) return;

      loadingStates.isDeleting = true;

      await playlistApiService.deleteById(playlist.value.id);
      playlist.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isDeleting = false;
    }
  }

  return {
    loadingStates,
    playlist,
    createPlaylist,
    fetchPlaylist,
    updatePlaylist,
    updatePlaylistCover,
    deletePlaylistCover,
    deleteAlbum,
  };
};
