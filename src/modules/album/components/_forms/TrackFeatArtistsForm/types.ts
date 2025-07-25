import type { TrackRO } from '@/api/api.module';
import type { UpdateTrackFeatArtistsPayload } from '@/modules/album/types.ts';

export type TrackFeatArtistsFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackFeatArtistsFormEmits = {
  (e: 'submit', payload: UpdateTrackFeatArtistsPayload): void;
};
