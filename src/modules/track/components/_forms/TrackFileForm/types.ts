import type { TrackRO } from '@/api/api.module.ts';
import type { UpdateTrackFilePayload } from '@/modules/track/types.ts';
import type TrackFileForm from '@/modules/album/components/_forms/TrackFileForm/TrackFileForm.vue';

export type TrackFileFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackFileFormEmits = {
  (e: 'submit', payload: UpdateTrackFilePayload): void;
};

export type TrackFileFormInstance = InstanceType<typeof TrackFileForm>;
