import type { TrackRO } from '@/api/api.module';
import type { UpdateTrackProfilePayload } from '@/modules/track/types.ts';

export type TrackProfileFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackProfileFormEmits = {
  (e: 'submit', payload: UpdateTrackProfilePayload): void;
};
