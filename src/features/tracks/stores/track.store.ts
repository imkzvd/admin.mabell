import { trackService } from '@/features/tracks/services/track.service.ts';
import type {
  CreateTrackDTO,
  TrackRO,
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
} from '@/api/api.module.ts';

export const useTrackStore = defineStore('track', () => {
  const [isTrackCreating, toggleTrackCreating] = useToggle();
  const [isTrackFetching, toggleTrackFetching] = useToggle();
  const [isTrackUpdating, toggleTrackUpdating] = useToggle();
  const [isTrackFeatArtistsUpdating, toggleTrackFeatArtistsUpdating] = useToggle();
  const [isTrackFileUpdating, toggleTrackFileUpdating] = useToggle();
  const [isTrackFileDeleting, toggleTrackFileDeleting] = useToggle();
  const [isTrackDeleting, toggleTrackDeleting] = useToggle();

  const track = ref<TrackRO | null>(null);

  async function createTrack(payload: CreateTrackDTO): Promise<TrackRO> {
    try {
      toggleTrackCreating();

      track.value = await trackService.create(payload);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackCreating();
    }
  }

  async function fetchTrack(id: string): Promise<TrackRO> {
    try {
      toggleTrackFetching();

      track.value = await trackService.getById(id);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackFetching();
    }
  }

  async function updateTrack(payload: UpdateTrackDTO): Promise<TrackRO> {
    if (!track.value) {
      throw new Error('Track does not fetch');
    }

    try {
      toggleTrackUpdating();

      track.value = await trackService.updateById(track.value.id, payload);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackUpdating();
    }
  }

  async function updateTrackFeatArtists(payload: UpdateTrackFeatArtistsDTO): Promise<TrackRO> {
    if (!track.value) {
      throw new Error('Track does not fetch');
    }

    try {
      toggleTrackFeatArtistsUpdating();

      track.value = await trackService.updateFeatArtistsById(track.value.id, payload);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackFeatArtistsUpdating();
    }
  }

  async function updateTrackFile(payload: UpdateTrackFileDTO): Promise<TrackRO> {
    if (!track.value) {
      throw new Error('Track does not fetch');
    }

    try {
      toggleTrackFileUpdating();

      track.value = await trackService.updateFileById(track.value.id, payload);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackFileUpdating();
    }
  }

  async function deleteTrackFile(): Promise<TrackRO> {
    if (!track.value) {
      throw new Error('Album does not fetch');
    }

    try {
      toggleTrackFileDeleting();

      track.value = await trackService.deleteFileById(track.value.id);

      return track.value;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackFileDeleting();
    }
  }

  async function deleteTrack(): Promise<void> {
    if (!track.value) {
      throw new Error('Track does not fetch');
    }

    try {
      toggleTrackDeleting();

      await trackService.deleteById(track.value.id);
      track.value = null;
    } catch (error) {
      throw error;
    } finally {
      toggleTrackDeleting();
    }
  }

  return {
    isTrackCreating,
    isTrackFetching,
    isTrackUpdating,
    isTrackFeatArtistsUpdating,
    isTrackFileUpdating,
    isTrackFileDeleting,
    isTrackDeleting,
    track,
    createTrack,
    fetchTrack,
    updateTrack,
    updateTrackFeatArtists,
    updateTrackFile,
    deleteTrackFile,
    deleteTrack,
  };
});
