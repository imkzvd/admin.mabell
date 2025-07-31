import type { TrackRO } from '@/api/api.module';
import type { UpdateTrackDetailsPayload } from '@/modules/track/types.ts';

export type TrackDetailsFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackDetailsFormEmits = {
  (e: 'submit', payload: UpdateTrackDetailsPayload): void;
};
