import { trackApiService } from '@/modules/album/services/track.api-service.ts';
import type {
  CreateTrackDTO,
  TrackRO,
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
} from '@/api/api.module.ts';

const loadingStates = reactive({
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  isFeatArtistsUpdating: false,
  isFileUpdating: false,
  isFileDeleting: false,
  isDeleting: false,
});

const track = ref<TrackRO | null>(null);

export const useTrackStore = () => {
  async function fetchTrack(id: string): Promise<void> {
    try {
      if (loadingStates.isFetching) return;

      loadingStates.isFetching = true;

      track.value = await trackApiService.getById(id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFetching = false;
    }
  }

  async function createTrack(payload: CreateTrackDTO): Promise<void> {
    try {
      if (loadingStates.isCreating) return;

      loadingStates.isCreating = true;

      track.value = await trackApiService.create(payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isCreating = false;
    }
  }

  async function updateTrack(payload: UpdateTrackDTO): Promise<void> {
    if (!track.value) {
      throw new Error('Track is not uploaded');
    }

    try {
      if (loadingStates.isUpdating) return;

      loadingStates.isUpdating = true;

      track.value = await trackApiService.updateById(track.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isUpdating = false;
    }
  }

  async function updateTrackFeatArtists(payload: UpdateTrackFeatArtistsDTO): Promise<void> {
    if (!track.value) {
      throw new Error('Track is not uploaded');
    }

    try {
      if (loadingStates.isFeatArtistsUpdating) return;

      loadingStates.isFeatArtistsUpdating = true;

      track.value = await trackApiService.updateFeatArtistsById(track.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFeatArtistsUpdating = false;
    }
  }

  async function updateTrackFile(payload: UpdateTrackFileDTO): Promise<void> {
    if (!track.value) {
      throw new Error('Track is not uploaded');
    }

    try {
      if (loadingStates.isFileUpdating) return;

      loadingStates.isFileUpdating = true;

      track.value = await trackApiService.updateFileById(track.value.id, payload);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFileUpdating = false;
    }
  }

  async function deleteTrackFile(): Promise<void> {
    if (!track.value) {
      throw new Error('Track is not uploaded');
    }

    try {
      if (loadingStates.isFileDeleting) return;

      loadingStates.isFileDeleting = true;

      track.value = await trackApiService.deleteFileById(track.value.id);
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isFileDeleting = false;
    }
  }

  async function deleteTrack(): Promise<void> {
    if (!track.value) {
      throw new Error('Track is not uploaded');
    }
    try {
      if (loadingStates.isDeleting) return;

      loadingStates.isDeleting = true;

      await trackApiService.deleteById(track.value.id);
      track.value = null;
    } catch (e) {
      throw e;
    } finally {
      loadingStates.isDeleting = false;
    }
  }

  return {
    loadingStates,
    track,
    createTrack,
    fetchTrack,
    updateTrack,
    updateTrackFeatArtists,
    updateTrackFile,
    deleteTrackFile,
    deleteTrack,
  };
};
