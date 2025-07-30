import type { TrackRO } from '@/api/api.module';
import type { UpdateTrackSettingsPayload } from '@/modules/track/types.ts';

export type TrackSettingsFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackSettingsFormEmits = {
  (e: 'submit', payload: UpdateTrackSettingsPayload): void;
};
