import type { TrackRO, UpdateTrackDTO } from '@/api/api.module';

export type TrackProfileFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackProfileFormState = Required<Pick<UpdateTrackDTO, 'name' | 'isExplicit'>>;

export type TrackProfileFormEmits = {
  (e: 'submit', formState: TrackProfileFormState): void;
};
